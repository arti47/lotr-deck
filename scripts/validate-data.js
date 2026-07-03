'use strict';
// Validate data.js / quests.js / the app's tag mapping for the classes of
// silent bug the 2026-07-03 review found. Run after any data or mapping edit:
//
//   node scripts/validate-data.js
//
// Exit code 1 on any ERROR (duplicate codes, missing fields). Warnings (tag
// drift, unmeasurable quest tags) report but don't fail — they're advisory,
// and the app already degrades gracefully on them.

const fs = require('fs');
const path = require('path');
const { ROOT, loadCards, loadQuests, loadTagMapping, cardKey } = require('./lib');

const REQUIRED_FIELDS = ['name', 'sphere', 'type', 'cost_threat', 'ringsdb_code'];
const KNOWN_TYPES = ['Hero', 'Ally', 'Attachment', 'Event', 'Player Side Quest'];

const errors = [];
const warnings = [];
const err = m => errors.push(m);
const warn = m => warnings.push(m);

const cards = loadCards();
const quests = loadQuests();
const MAP = loadTagMapping();

// --- Card pool: identity, dedup, required fields ---
const byCode = new Map();
const cardTags = new Set();
cards.forEach((c, i) => {
  REQUIRED_FIELDS.forEach(f => {
    if (c[f] === undefined || c[f] === null || c[f] === '') {
      err(`card #${i} (${c.name || '??'}) missing required field "${f}"`);
    }
  });
  if (c.type && !KNOWN_TYPES.includes(c.type)) {
    warn(`card "${c.name}" has unexpected type "${c.type}"`);
  }
  if (c.ringsdb_code) {
    byCode.set(c.ringsdb_code, (byCode.get(c.ringsdb_code) || []).concat([c]));
  }
  (c.tags || []).forEach(t => cardTags.add(t));
});

let dupCount = 0;
for (const [code, list] of byCode) {
  if (list.length > 1) {
    dupCount++;
    err(`duplicate ringsdb_code ${code}: ${list.map(c => `${c.name}/${c.type}`).join(' | ')}`);
  }
}

// --- Tag mapping drift: every mapped card-tag should exist in the pool ---
const mappedTags = new Set();
Object.entries(MAP).forEach(([questTag, cardTagList]) => {
  cardTagList.forEach(ct => {
    mappedTags.add(ct);
    if (!cardTags.has(ct)) {
      warn(`tag mapping "${questTag}" -> "${ct}" but no card in the pool has "${ct}"`);
    }
  });
});

// --- Quest tags: measurable = mapped card-tag exists, or tag is itself a card tag ---
const resolveCardTags = tag => MAP[tag] || [tag];
const isMeasurable = tag => resolveCardTags(tag).some(t => cardTags.has(t));

const unmeasurable = new Set();
const questById = new Map();
quests.forEach(q => {
  [...(q.recommended_tags || []), ...(q.punished_tags || [])].forEach(tag => {
    if (!isMeasurable(tag)) unmeasurable.add(tag);
  });
  if (!q.quest_name) err(`quest missing quest_name (expansion: ${q.expansion || '??'})`);
  // quest_id is the stable key all Phase D baked files reference. Enforce it is
  // present and unique so those files can rely on it (the identity discipline
  // that data.js already gets from ringsdb_code).
  if (!q.quest_id) {
    err(`quest "${q.quest_name || '??'}" missing quest_id (run: node scripts/add-quest-ids.js --apply)`);
  } else {
    questById.set(q.quest_id, (questById.get(q.quest_id) || []).concat([q.quest_name]));
  }
});
for (const [id, names] of questById) {
  if (names.length > 1) err(`duplicate quest_id ${id}: ${names.join(' | ')}`);
}
if (unmeasurable.size) {
  warn(`quest tags with no measurable card data (shown as "not scored" in-app): ${[...unmeasurable].sort().join(', ')}`);
}

// --- quest-overlay.json (Phase D structured quest attributes; in progress) ---
// Optional file. Guard every entry: key must be a real quest_id (staleness
// guard), enum fields must use allowed values, confidence must be valid.
let overlayCoverage = null;
const overlayPath = path.join(ROOT, 'quest-overlay.json');
if (fs.existsSync(overlayPath)) {
  const PRESSURE = ['low', 'medium', 'high'];
  const ENUMS = {
    'questing_pressure': PRESSURE, 'threat_pressure': PRESSURE, 'location_pressure': PRESSURE,
    'time_pressure': ['fast', 'medium', 'slow'],
    'confidence': ['curated', 'ai_draft', 'inferred'],
  };
  const DENSITY = ['none', 'low', 'medium', 'high'];
  let qo;
  try { qo = JSON.parse(fs.readFileSync(overlayPath, 'utf8')); }
  catch (e) { err(`quest-overlay.json is not valid JSON: ${e.message}`); qo = {}; }
  const ids = Object.keys(qo);
  overlayCoverage = `${ids.length} / ${quests.length}`;
  ids.forEach(id => {
    if (!questById.has(id)) err(`quest-overlay.json key "${id}" is not a known quest_id`);
    const o = qo[id];
    for (const [field, allowed] of Object.entries(ENUMS)) {
      if (o[field] !== undefined && !allowed.includes(o[field])) {
        err(`quest-overlay "${id}".${field} = "${o[field]}" (allowed: ${allowed.join('/')})`);
      }
    }
    if (o.enemy_profile && o.enemy_profile.density !== undefined && !DENSITY.includes(o.enemy_profile.density)) {
      err(`quest-overlay "${id}".enemy_profile.density = "${o.enemy_profile.density}" (allowed: ${DENSITY.join('/')})`);
    }
  });
}

// --- archetypes.json (Phase D2 mined deck cores; optional) ---
// Staleness guard: every core/flex code must still exist in data.js and every
// source quest must be a real quest_id. ids unique; confidence from the allowed
// set; good_at/weak_at should use the quest-tag vocabulary (warn only).
let archetypeCount = null;
const archPath = path.join(ROOT, 'archetypes.json');
if (fs.existsSync(archPath)) {
  const CONF = ['mined', 'hand_authored', 'inferred'];
  const questTagVocab = new Set(Object.keys(MAP));
  let arch;
  try { arch = JSON.parse(fs.readFileSync(archPath, 'utf8')); }
  catch (e) { err(`archetypes.json is not valid JSON: ${e.message}`); arch = []; }
  if (!Array.isArray(arch)) { err('archetypes.json must be a JSON array'); arch = []; }
  archetypeCount = arch.length;
  const seenIds = new Set();
  arch.forEach((a, i) => {
    const label = a.id || `#${i}`;
    if (!a.id) err(`archetype ${label} missing id`);
    else if (seenIds.has(a.id)) err(`duplicate archetype id "${a.id}"`);
    else seenIds.add(a.id);
    if (a.confidence && !CONF.includes(a.confidence)) err(`archetype "${label}".confidence = "${a.confidence}" (allowed: ${CONF.join('/')})`);
    [...(a.core || []), ...(a.flex || [])].forEach(code => {
      if (!byCode.has(code)) err(`archetype "${label}" references card code ${code} not in data.js (staleness)`);
    });
    // heroes (D3 generates from these): codes exist and are actually Hero type.
    // byCode maps code -> [cards] (built for dup detection), so check the list.
    (a.heroes || []).forEach(code => {
      const list = byCode.get(code);
      if (!list) err(`archetype "${label}" hero code ${code} not in data.js (staleness)`);
      else if (!list.some(c => c.type === 'Hero')) err(`archetype "${label}" hero code ${code} (${list[0].name}) is not a Hero`);
    });
    (a.sources || []).forEach(s => {
      if (s.quest && !questById.has(s.quest)) err(`archetype "${label}" source quest "${s.quest}" is not a known quest_id`);
    });
    [...(a.good_at || []), ...(a.weak_at || [])].forEach(t => {
      if (!questTagVocab.has(t)) warn(`archetype "${label}" good_at/weak_at "${t}" is not a quest-tag in the mapping`);
    });
  });
}

// --- quest-decks.json (Phase D3 baked decks; optional) ---
// Staleness + legality guard: keys are real quest_ids; heroes/cards codes exist;
// 1-3 heroes of Hero type; copy caps (3, or 1 for side quests); size >= 50.
let questDeckCount = null;
const qdPath = path.join(ROOT, 'quest-decks.json');
if (fs.existsSync(qdPath)) {
  const CONF = ['curated', 'mined', 'inferred'];
  let qd;
  try { qd = JSON.parse(fs.readFileSync(qdPath, 'utf8')); }
  catch (e) { err(`quest-decks.json is not valid JSON: ${e.message}`); qd = {}; }
  const isHero = code => (byCode.get(code) || []).some(c => c.type === 'Hero');
  questDeckCount = Object.keys(qd).length;
  Object.entries(qd).forEach(([qid, d]) => {
    if (!questById.has(qid)) err(`quest-decks.json key "${qid}" is not a known quest_id`);
    if (d.confidence && !CONF.includes(d.confidence)) err(`quest-decks "${qid}".confidence = "${d.confidence}" (allowed: ${CONF.join('/')})`);
    const heroes = d.heroes || [];
    if (heroes.length < 1 || heroes.length > 3) err(`quest-decks "${qid}" has ${heroes.length} heroes (must be 1–3)`);
    heroes.forEach(code => {
      if (!byCode.has(code)) err(`quest-decks "${qid}" hero code ${code} not in data.js (staleness)`);
      else if (!isHero(code)) err(`quest-decks "${qid}" hero code ${code} is not a Hero`);
    });
    let size = 0;
    (d.cards || []).forEach(([code, qty]) => {
      const list = byCode.get(code);
      if (!list) { err(`quest-decks "${qid}" card code ${code} not in data.js (staleness)`); return; }
      size += qty;
      const card = list[0];
      const cap = card.type === 'Player Side Quest' ? 1 : 3;
      if (qty > cap) err(`quest-decks "${qid}" has ${qty}× ${card.name} (max ${cap})`);
      if (card.type === 'Hero') err(`quest-decks "${qid}" card slot ${code} (${card.name}) is a Hero`);
    });
    if (size < 50) warn(`quest-decks "${qid}" deck is ${size} cards (< 50 minimum)`);
  });
}

// --- Report ---
const line = '─'.repeat(60);
console.log(line);
console.log(`Cards: ${cards.length}  ·  unique codes: ${byCode.size}  ·  duplicates: ${dupCount}`);
console.log(`Quests: ${quests.length}  ·  unique quest_ids: ${questById.size}  ·  distinct card tags: ${cardTags.size}  ·  mapped tags: ${mappedTags.size}`);
if (overlayCoverage) console.log(`quest-overlay.json: ${overlayCoverage} quests curated`);
if (archetypeCount !== null) console.log(`archetypes.json: ${archetypeCount} archetypes`);
if (questDeckCount !== null) console.log(`quest-decks.json: ${questDeckCount} baked decks`);
console.log(line);

if (warnings.length) {
  console.log(`\n⚠  ${warnings.length} warning(s):`);
  warnings.forEach(w => console.log('   - ' + w));
}
if (errors.length) {
  console.log(`\n✖  ${errors.length} error(s):`);
  errors.forEach(e => console.log('   - ' + e));
  console.log('\nFAILED');
  process.exit(1);
}
console.log(warnings.length ? '\nOK (with warnings)' : '\nOK');
