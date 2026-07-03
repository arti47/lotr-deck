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
const MIN_CORE = 6;      // guarantee a usable core even for big diverse clusters
const MAX_CORE = 15;     // cap so a tight cluster's core stays legible

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

// Flatten to lowercase ASCII words separated by single spaces, so matching is
// whole-word (padded with spaces) and punctuation/accents/apostrophes don't
// block a hit ("The Steward’s Fear" ~ "stewards fear").
const flat = s => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// Curated nicknames/abbreviations for quests people rarely spell out in full.
// Keyed by the stable quest_id. Kept distinctive (unique place names + standard
// community abbreviations) to hold false positives down; matched whole-word.
const QUEST_ALIASES = {
  'journey-along-the-anduin': ['jda', 'jata', 'journey down the anduin', 'anduin'],
  'escape-from-dol-guldur':   ['efdg', 'dol guldur'],
  'the-hunt-for-gollum':      ['hfg', 'hunt for gollum'],
  'conflict-at-the-carrock':  ['catc', 'carrock'],
  'the-hills-of-emyn-muil':   ['hoem', 'emyn muil'],
  'a-journey-to-rhosgobel':   ['rhosgobel'],
  'the-dead-marshes':         ['dead marshes'],
  'return-to-mirkwood':       ['rtm', 'return to mirkwood'],
  'the-seventh-level':        ['seventh level'],
  'flight-from-moria':        ['flight from moria'],
  'the-redhorn-gate':         ['redhorn'],
  'road-to-rivendell':        ['road to rivendell'],
  'the-watcher-in-the-water': ['watcher in the water'],
  'foundations-of-stone':     ['foundations of stone'],
  'shadow-and-flame':         ['shadow and flame'],
  'peril-in-pelargir':        ['pelargir'],
  'into-ithilien':            ['into ithilien'],
  'the-siege-of-cair-andros': ['cair andros'],
  'the-stewards-fear':        ['stewards fear'],
  'encounter-at-amon-din':    ['amon din'],
  'assault-on-osgiliath':     ['osgiliath'],
  'the-druadan-forest':       ['druadan'],
  'the-fords-of-isen':        ['fords of isen'],
  'the-blood-of-gondor':      ['blood of gondor'],
  'to-catch-an-orc':          ['to catch an orc'],
  'a-knife-in-the-dark':      ['knife in the dark'],
  'trouble-in-tharbad':       ['tharbad'],
  'into-fangorn':             ['into fangorn', 'fangorn'],
  'flight-to-the-ford':       ['flight to the ford'],
  'the-ring-goes-south':      ['ring goes south'],
  'celebrimbors-secret':      ['celebrimbor'],
  'the-dunland-trap':         ['dunland trap'],
  'race-across-harad':        ['race across harad'],
  'journey-in-the-dark':      ['journey in the dark'],
  'the-antlered-crown':       ['antlered crown'],
  'the-three-trials':         ['three trials'],
  'the-nin-in-eilph':         ['nin in eilph'],
  'intruders-in-chetwood':    ['chetwood'],
  'the-weather-hills':        ['weather hills'],
  'deadmens-dike':            ['deadmens dike'],
  'the-battle-of-carn-dum':   ['carn dum'],
  'the-fate-of-numenor':      ['fate of numenor'],
  'fog-on-the-barrow-downs':  ['barrow downs', 'barrow-downs'],
  'helms-deep':               ['helms deep'],
};

// Precompute the needle set per quest: full name, name minus a leading article,
// and any curated aliases — all flattened. Longer needles are more specific, so
// a match on a longer needle wins (full name beats a short nickname).
const stripArticle = s => s.replace(/^(the|a|an)\s+/, '');
const questNeedles = quests.map(q => {
  const base = flat(q.quest_name);
  const set = new Set([base, stripArticle(base)]);
  (QUEST_ALIASES[q.quest_id] || []).forEach(a => set.add(flat(a)));
  return { q, needles: [...set].filter(n => n.length >= 3) };
});

// Parse a quest_id from a deck's title/description. Whole-word match (space-
// padded), longest needle wins. Returns null when nothing matches (honest —
// most decks don't name their quest).
function parseQuest(deck) {
  const hay = ' ' + flat(`${deck.name || ''} ${deck.description_md || ''}`) + ' ';
  let best = null;
  for (const { q, needles } of questNeedles) {
    for (const n of needles) {
      if (hay.includes(' ' + n + ' ') && (!best || n.length > best._len)) {
        best = { quest_id: q.quest_id, quest_name: q.quest_name, _len: n.length };
      }
    }
  }
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

// Broad traits many unrelated heroes share — weak archetype identifiers. Prefer a
// faction/tribe trait (Dwarf, Noldor, Hobbit, Gondor…) when the heroes have one;
// fall back to these only when there's nothing more specific.
const GENERIC_TRAITS = new Set(['Noble', 'Warrior', 'Ranger', 'Scout', 'Healer']);
function dominantTrait(codes) {
  const freq = {};
  codes.forEach(code => (byCode.get(code)?.traits || []).forEach(t => freq[t] = (freq[t] || 0) + 1));
  const ranked = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const faction = ranked.find(([t]) => !GENERIC_TRAITS.has(t));
  return (faction || ranked[0] || [null])[0];
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

  // Filter by popularity, then cluster by identity. Key on the dominant faction
  // trait — the archetype identity in this game (Dwarves, Noldor, Hobbits…) —
  // rather than the exact sphere-set, which fragments variants of one archetype.
  // Spheres are accumulated as descriptive info (the union across the cluster).
  const clusters = new Map(); // norm(trait) -> { spheres:Set, decks:[…], traitCounts:{} }
  let considered = 0, skippedVotes = 0, skippedTiny = 0;
  decks.forEach(deck => {
    const votes = deck.nb_votes ?? deck.votes ?? 0;
    if (votes < MIN_VOTES) { skippedVotes++; return; }
    const split = splitDeck(deck);
    if (!split.heroCodes.length) { skippedTiny++; return; }
    considered++;
    const trait = dominantTrait(split.heroCodes) || dominantTrait(Object.keys(split.cardCounts)) || 'Generic';
    // Key on the accent-normalized trait so RingsDB spelling quirks (e.g.
    // "Dunedain" vs "Dúnedain" — the Andrath Guardsman quirk) don't split one
    // faction into two clusters that then collide on a duplicate slug id. The
    // display name is the most common raw spelling seen (keeps the accent).
    const key = norm(trait);
    if (!clusters.has(key)) clusters.set(key, { spheres: new Set(), decks: [], traitCounts: {} });
    const cl = clusters.get(key);
    cl.traitCounts[trait] = (cl.traitCounts[trait] || 0) + 1;
    split.heroCodes.forEach(c => { const s = byCode.get(c).sphere; if (s) cl.spheres.add(s); });
    cl.decks.push({ deck, split, quest: parseQuest(deck), votes });
  });

  const archetypes = [];
  for (const [key, cl] of clusters) {
    if (cl.decks.length < MIN_DECKS) continue;
    // Canonical display trait = the most common raw spelling in the cluster.
    cl.trait = Object.entries(cl.traitCounts).sort((a, b) => b[1] - a[1])[0][0];
    const n = cl.decks.length;
    const freq = {};
    cl.decks.forEach(({ split }) => Object.keys(split.cardCounts).forEach(code => freq[code] = (freq[code] || 0) + 1));
    const rank = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    // core = cards in ≥ CORE_FRAC of decks. Big, diverse clusters (e.g. 160+
    // Hobbit decks spanning several sub-archetypes) may have nothing that
    // common, leaving an archetype with no usable core for D3. Fall back to the
    // most common staples down to the flex floor so every archetype gets a core.
    let core = rank.filter(([, c]) => c / n >= CORE_FRAC).map(([code]) => code);
    if (core.length < MIN_CORE)
      core = rank.filter(([, c]) => c / n >= FLEX_FRAC).slice(0, MIN_CORE).map(([code]) => code);
    core = core.slice(0, MAX_CORE);
    const coreSet = new Set(core);
    const flex = rank.filter(([code, c]) => c / n >= FLEX_FRAC && !coreSet.has(code)).map(([code]) => code);

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

    // Representative hero lineup = the single most common exact hero set among
    // the cluster's decks. D3 generates from this; its spheres define the
    // archetype (the union of spheres across a big cluster is noise).
    const comboFreq = {};
    cl.decks.forEach(({ split }) => {
      const k = [...split.heroCodes].sort().join(',');
      if (k) comboFreq[k] = (comboFreq[k] || 0) + 1;
    });
    const topCombo = Object.entries(comboFreq).sort((a, b) => b[1] - a[1])[0];
    const heroes = topCombo ? topCombo[0].split(',') : [];
    const spheres = [...new Set(heroes.map(h => byCode.get(h)?.sphere).filter(Boolean))].sort();

    const name = cl.trait === 'Generic' ? `${spheres.join('/')} (generic)` : cl.trait;
    archetypes.push({
      id: slug(name),
      name,
      identity: { spheres, key_traits: cl.trait === 'Generic' ? [] : [cl.trait] },
      heroes,
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
