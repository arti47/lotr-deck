'use strict';
// Phase D2 — mine archetypes from published RingsDB decklists into archetypes.json.
//
//   node scripts/sync-ringsdb-decks.js --file decks.json          # dry run
//   node scripts/sync-ringsdb-decks.js --file decks.json --apply   # write archetypes.json
//
// RingsDB has no bulk "all decklists" endpoint and its API host is blocked by
// this environment's egress policy, so input is a saved dump: a JSON array of
// decklist objects in RingsDB's shape (from /api/public/decklist/{id}.json or a
// /api/public/decklists/by_date/{date}.json page). Fields used per deck:
//   id, name, description_md, slots{code:qty}, heroes{code:1} (optional — heroes
//   are otherwise detected by type from data.js), nb_votes|votes, nb_favorites.
//
// The pipeline (per docs/phase-d-design.md §3.3/§4): filter by popularity →
// cluster by identity (hero spheres + dominant trait) → recurring cards become
// `core`, sometimes-seen become `flex` → derive good_at/weak_at from core tags →
// parse a quest from name/description (low yield, honest about it). Everything is
// labeled `confidence: "mined"`. Emits a coverage report (quests with ≥1 mined
// archetype vs none). Thresholds are tunable constants below — expect to adjust
// them against a real dump.

const fs = require('fs');
const path = require('path');
const { ROOT, loadCards, loadQuests, loadTagMapping } = require('./lib');

const argv = process.argv.slice(2);
const has = f => argv.includes(f);
const val = (f, d) => { const i = argv.indexOf(f); return i > -1 ? argv[i + 1] : d; };
const APPLY = has('--apply');
const FILE = val('--file', null);
const MIN_VOTES = parseInt(val('--min-votes', '1')) || 0; // popularity quality bar
const MIN_DECKS = parseInt(val('--min-decks', '3')) || 3; // min decks to call something an archetype
const CORE_FRAC = 0.5;   // in ≥ half the cluster's decks ⇒ core
const FLEX_FRAC = 0.25;  // in ≥ a quarter (but < core) ⇒ flex

const cards = loadCards();
const byCode = new Map(cards.map(c => [c.ringsdb_code, c]));
const quests = loadQuests();
const TAG_MAP = loadTagMapping();

// Reverse the quest→card tag map so a card tag can name the quest capabilities it
// provides (good_at/weak_at use the quest-tag vocabulary, per §3.3's example).
const CARD_TAG_TO_QUEST = {};
Object.entries(TAG_MAP).forEach(([qt, cts]) => cts.forEach(ct => {
  (CARD_TAG_TO_QUEST[ct] = CARD_TAG_TO_QUEST[ct] || []).push(qt);
}));
// Capabilities a serious deck usually wants; absence in core ⇒ weak_at candidate.
const KEY_CAPS = ['Threat Reduction', 'Healing', 'Card Draw', 'Location Control',
  'Willpower Boost', 'Attack Boost', 'Enemy Control'];

const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const norm = s => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Parse a quest_id from a deck's title/description by scanning for quest names.
function parseQuest(deck) {
  const hay = norm(`${deck.name || ''} ${deck.description_md || ''}`);
  let best = null;
  quests.forEach(q => {
    const n = norm(q.quest_name);
    if (n.length >= 6 && hay.includes(n)) {
      if (!best || n.length > best._len) best = { quest_id: q.quest_id, quest_name: q.quest_name, _len: n.length };
    }
  });
  return best ? { quest_id: best.quest_id, quest_name: best.quest_name } : null;
}

// Split a decklist into hero cards and non-hero cards (by type from data.js), so
// it works whether the dump separates heroes or lumps them into slots.
function splitDeck(deck) {
  const heroCodes = [];
  const cardCounts = {};
  const consume = (obj) => Object.keys(obj || {}).forEach(code => {
    const c = byCode.get(code);
    if (!c) return; // unknown/encounter code — skip
    if (c.type === 'Hero') heroCodes.push(code);
    else cardCounts[code] = (cardCounts[code] || 0) + (obj[code] || 0);
  });
  consume(deck.heroes);
  consume(deck.slots);
  return { heroCodes: [...new Set(heroCodes)], cardCounts };
}

function dominantTrait(codes) {
  const freq = {};
  codes.forEach(code => (byCode.get(code)?.traits || []).forEach(t => freq[t] = (freq[t] || 0) + 1));
  const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
  return top ? top[0] : null;
}

function main() {
  if (!FILE) {
    console.error('No --file given. RingsDB is blocked here; save a decklist dump and pass it:');
    console.error('  node scripts/sync-ringsdb-decks.js --file decks.json');
    console.error('A dump is a JSON array of RingsDB decklist objects (by_date pages or per-id).');
    process.exit(2);
  }
  const decks = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  if (!Array.isArray(decks)) { console.error('Dump must be a JSON array of decklists.'); process.exit(2); }

  // Filter by popularity, then cluster by identity.
  const clusters = new Map(); // key -> { spheres, trait, decks:[{deck, split, quest, votes}] }
  let considered = 0, skippedVotes = 0, skippedTiny = 0;
  decks.forEach(deck => {
    const votes = deck.nb_votes ?? deck.votes ?? 0;
    if (votes < MIN_VOTES) { skippedVotes++; return; }
    const split = splitDeck(deck);
    if (!split.heroCodes.length) { skippedTiny++; return; }
    considered++;
    const spheres = [...new Set(split.heroCodes.map(c => byCode.get(c).sphere).filter(Boolean))].sort();
    const trait = dominantTrait(split.heroCodes) || dominantTrait(Object.keys(split.cardCounts)) || 'Generic';
    const key = `${spheres.join('/')}|${trait}`;
    if (!clusters.has(key)) clusters.set(key, { spheres, trait, decks: [] });
    clusters.get(key).decks.push({ deck, split, quest: parseQuest(deck), votes });
  });

  const archetypes = [];
  for (const [key, cl] of clusters) {
    if (cl.decks.length < MIN_DECKS) continue;
    const n = cl.decks.length;
    const freq = {};
    cl.decks.forEach(({ split }) => Object.keys(split.cardCounts).forEach(code => freq[code] = (freq[code] || 0) + 1));
    const rank = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    const core = rank.filter(([, c]) => c / n >= CORE_FRAC).map(([code]) => code);
    const flex = rank.filter(([, c]) => c / n >= FLEX_FRAC && c / n < CORE_FRAC).map(([code]) => code);

    // good_at / weak_at over the quest-tag vocabulary, from core card tags.
    const capCount = {};
    core.forEach(code => (byCode.get(code)?.tags || []).forEach(ct =>
      (CARD_TAG_TO_QUEST[ct] || []).forEach(qt => capCount[qt] = (capCount[qt] || 0) + 1)));
    const good_at = Object.entries(capCount).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([qt]) => qt);
    const weak_at = KEY_CAPS.filter(qt => !capCount[qt]).slice(0, 3);

    const sources = cl.decks
      .sort((a, b) => b.votes - a.votes)
      .map(({ deck, quest, votes }) => ({
        url: deck.id ? `https://ringsdb.com/decklist/view/${deck.id}` : (deck.url || ''),
        rating: votes,
        quest: quest ? quest.quest_id : null,
      }));

    const name = `${cl.spheres.join('/')} ${cl.trait}`.trim();
    archetypes.push({
      id: slug(name),
      name,
      identity: { spheres: cl.spheres, key_traits: cl.trait === 'Generic' ? [] : [cl.trait] },
      core, flex, good_at, weak_at,
      sources,
      confidence: 'mined',
    });
  }
  archetypes.sort((a, b) => b.sources.length - a.sources.length);

  // Coverage: quests with ≥1 mined archetype (via parsed sources) vs none.
  const covered = new Set();
  archetypes.forEach(a => a.sources.forEach(s => { if (s.quest) covered.add(s.quest); }));

  const outFile = APPLY ? 'archetypes.json' : 'archetypes.generated.json';
  fs.writeFileSync(path.join(ROOT, outFile), JSON.stringify(archetypes, null, 2) + '\n');

  const line = '─'.repeat(60);
  console.log(line);
  console.log(`Decks: ${decks.length}  ·  considered: ${considered}  ·  skipped (votes<${MIN_VOTES}): ${skippedVotes}  ·  skipped (no hero): ${skippedTiny}`);
  console.log(`Clusters: ${clusters.size}  ·  archetypes (≥${MIN_DECKS} decks): ${archetypes.length}`);
  console.log(`Quest coverage: ${covered.size} / ${quests.length} quests have ≥1 mined archetype`);
  console.log(`Wrote ${archetypes.length} archetypes to ${outFile}${APPLY ? '' : ' (dry run)'}`);
  console.log(line);
  archetypes.slice(0, 12).forEach(a =>
    console.log(`  ${a.id}  (${a.sources.length} decks, ${a.core.length} core)  good_at: ${a.good_at.join(', ') || '—'}`));
  console.log(`\nNext: ${APPLY ? '' : 'review, re-run with --apply, then '}run \`node scripts/validate-data.js\`.`);
}

main();
