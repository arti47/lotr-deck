'use strict';
// Validate data.js / quests.js / the app's tag mapping for the classes of
// silent bug the 2026-07-03 review found. Run after any data or mapping edit:
//
//   node scripts/validate-data.js
//
// Exit code 1 on any ERROR (duplicate codes, missing fields). Warnings (tag
// drift, unmeasurable quest tags) report but don't fail — they're advisory,
// and the app already degrades gracefully on them.

const { loadCards, loadQuests, loadTagMapping, cardKey } = require('./lib');

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

// --- Report ---
const line = '─'.repeat(60);
console.log(line);
console.log(`Cards: ${cards.length}  ·  unique codes: ${byCode.size}  ·  duplicates: ${dupCount}`);
console.log(`Quests: ${quests.length}  ·  unique quest_ids: ${questById.size}  ·  distinct card tags: ${cardTags.size}  ·  mapped tags: ${mappedTags.size}`);
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
