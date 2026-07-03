'use strict';
// Phase D3 — generate one baked, quest-tuned deck per quest into quest-decks.json.
//
//   node scripts/generate-quest-decks.js           # dry run -> quest-decks.generated.json
//   node scripts/generate-quest-decks.js --apply    # write quest-decks.json
//
// Pre-computes the "auto-build a deck for this quest" answer offline so the app
// stays zero-build (it loads the baked result and re-critiques live). Per quest:
//   1. pick the best-fit archetype (mined-for-this-quest → best good_at/punished
//      fit → inferred), from archetypes.json;
//   2. assemble a legal 50-card deck: the archetype's heroes, its core/flex cards
//      (sphere-gated to those heroes), topped up with pool cards for the quest's
//      recommended tags, filled to 50;
//   3. cut cards the D1 verdict engine rates Dead for this quest (reusing
//      verdicts.js, not a copy);
//   4. bake heroes + cards + per-card rationale + confidence + coverage note.
//
// Honesty: confidence is `mined` only when an archetype has a source deck linked
// to this quest_id; otherwise `inferred`. The app never claims "wins".

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { ROOT, loadCards, loadQuests, loadTagMapping, cardKey } = require('./lib');

const APPLY = process.argv.includes('--apply');
const DECK_TARGET = 50;         // minimum deck size (the real rule; we aim for exactly 50)
const MAX_COPIES = 3;

const cards = loadCards();
const byCode = new Map(cards.map(c => [c.ringsdb_code, c]));
const quests = loadQuests();
const TAG_MAP = loadTagMapping();

// Structured quest attributes (optional; drives verdicts + tuning where present).
const overlayPath = path.join(ROOT, 'quest-overlay.json');
const questOverlay = fs.existsSync(overlayPath) ? JSON.parse(fs.readFileSync(overlayPath, 'utf8')) : {};

const archPath = path.join(ROOT, 'archetypes.json');
if (!fs.existsSync(archPath)) { console.error('archetypes.json not found — run sync-ringsdb-decks.js first.'); process.exit(2); }
const archetypes = JSON.parse(fs.readFileSync(archPath, 'utf8'));

// Reuse the D1 verdict engine (verdicts.js is a browser IIFE; eval it in a vm
// with the one global it needs, so Dead-cutting matches what the app shows).
const verdictCtx = { QUEST_TAG_TO_CARD_TAGS: TAG_MAP, module: {}, window: {}, document: { getElementById: () => null } };
vm.createContext(verdictCtx);
// CardVerdicts is a top-level `const`, which doesn't attach to the vm context;
// append a `var` alias so we can read it out (same trick as scripts/lib.js).
vm.runInContext(fs.readFileSync(path.join(ROOT, 'verdicts.js'), 'utf8') + '\n;var __CardVerdicts = CardVerdicts;', verdictCtx);
const verdictFor = verdictCtx.__CardVerdicts.verdictFor;

const uniqueTitle = c => c.name.replace(/^\(MotK\)\s*/, '').replace(/\s*\(MotK\)$/, '');
const cardTagsFor = qt => TAG_MAP[qt] || [qt];
const cardHasQuestTag = (c, qt) => (c.tags || []).some(t => cardTagsFor(qt).includes(t));

// --- archetype selection -------------------------------------------------
function selectArchetype(q) {
  const rec = new Set(q.recommended_tags || []);
  const pun = new Set(q.punished_tags || []);
  let best = null;
  archetypes.forEach(a => {
    const minedForQuest = (a.sources || []).some(s => s.quest === q.quest_id);
    const fit = (a.good_at || []).filter(t => rec.has(t)).length
      - (a.good_at || []).filter(t => pun.has(t)).length;
    // Mined-for-this-quest is worth a lot; then tag fit; then popularity.
    const score = (minedForQuest ? 100 : 0) + fit * 10 + Math.min((a.sources || []).length, 9);
    if (!best || score > best.score) best = { a, score, minedForQuest };
  });
  return best;
}

// --- deck assembly -------------------------------------------------------
function buildDeck(q, sel) {
  const a = sel.a;
  const heroes = (a.heroes || []).map(c => byCode.get(c)).filter(Boolean).filter(h => h.type === 'Hero');
  const heroTitles = new Set(heroes.map(uniqueTitle));
  const allowed = new Set([...heroes.map(h => h.sphere), 'Neutral', '']);

  const attrs = questOverlay[q.quest_id] || null;
  const deck = new Map(); // cardKey -> { card, qty }
  const size = () => [...deck.values()].reduce((s, i) => s + i.qty, 0);
  // Add up to n copies, but never past the 50-card target — keeps decks at ~50
  // instead of ballooning when a quest asks for many tags. Also enforces sphere
  // gating, the hero unique-title clash rule, copy caps, and cuts Dead cards.
  const add = (card, n) => {
    if (!card || card.type === 'Hero') return;
    if (!allowed.has(card.sphere)) return;                 // sphere gating
    if (heroTitles.has(uniqueTitle(card))) return;         // no unique title clash with a hero
    if (attrs && verdictFor(card, q, attrs).verdict === 'Dead') return; // cut Dead cards
    const room = DECK_TARGET - size();
    if (room <= 0) return;                                 // deck already at 50
    const key = cardKey(card);
    const cap = card.type === 'Player Side Quest' ? 1 : MAX_COPIES;  // side-quest limit
    const cur = deck.has(key) ? deck.get(key).qty : 0;
    const want = Math.min(cur + n, cap, cur + room);
    if (want > cur) deck.set(key, { card, qty: want });
  };

  // 1) core (2 each) then flex (1 each) — the archetype's identity.
  (a.core || []).forEach(code => add(byCode.get(code), 2));
  (a.flex || []).forEach(code => add(byCode.get(code), 1));

  // 2) quest tech: for each recommended tag, add the cheapest in-sphere cards
  //    that provide it (up to a few), so the deck answers the quest's needs.
  (q.recommended_tags || []).forEach(tag => {
    const options = cards
      .filter(c => c.type !== 'Hero' && allowed.has(c.sphere) && cardHasQuestTag(c, tag))
      .sort((x, y) => (parseInt(x.cost_threat) || 0) - (parseInt(y.cost_threat) || 0));
    options.slice(0, 3).forEach(c => add(c, 2));
    if (size() >= DECK_TARGET) return;
  });

  // 3) fill to 50 with the archetype's remaining flex, then popular in-sphere
  //    allies/attachments, bumping copies toward 3.
  const fillers = [
    ...(a.core || []).map(byCode.get, byCode),
    ...(a.flex || []).map(byCode.get, byCode),
    ...cards.filter(c => ['Ally', 'Attachment', 'Event'].includes(c.type) && allowed.has(c.sphere)),
  ].filter(Boolean);
  for (const c of fillers) { if (size() >= DECK_TARGET) break; add(c, 1); }

  return { heroes, deck };
}

// --- rationale -----------------------------------------------------------
function rationale(q, sel, heroes, deck) {
  const attrs = questOverlay[q.quest_id] || null;
  const per_card = {};
  if (attrs) {
    [...heroes.map(h => ({ card: h })), ...deck.values()].forEach(({ card }) => {
      const v = verdictFor(card, q, attrs);
      per_card[card.ringsdb_code] = { verdict: v.verdict, reason: v.reason };
    });
  }
  const why_heroes = `${sel.a.name} lineup (${heroes.map(h => h.name).join(', ')}) — `
    + (sel.minedForQuest
      ? 'a published deck for this quest used this archetype.'
      : `strong general fit; the archetype is good at ${(sel.a.good_at || []).slice(0, 3).join(', ') || 'a balanced game'}.`);
  return { why_heroes, per_card };
}

// --- main ----------------------------------------------------------------
function main() {
  const out = {};
  let mined = 0, inferred = 0, noArch = 0;

  quests.forEach(q => {
    const sel = selectArchetype(q);
    if (!sel) { noArch++; return; }
    const { heroes, deck } = buildDeck(q, sel);
    if (!heroes.length || deck.size === 0) { noArch++; return; }

    const confidence = sel.minedForQuest ? 'mined' : 'inferred';
    confidence === 'mined' ? mined++ : inferred++;
    const total = [...deck.values()].reduce((s, i) => s + i.qty, 0);

    out[q.quest_id] = {
      archetype: sel.a.id,
      confidence,
      heroes: heroes.map(h => h.ringsdb_code),
      cards: [...deck.values()].map(i => [i.card.ringsdb_code, i.qty]),
      deck_size: total,
      rationale: rationale(q, sel, heroes, deck),
      coverage_note: sel.minedForQuest
        ? ''
        : `No published deck names this quest; built heuristically from the best-fit "${sel.a.name}" archetype${questOverlay[q.quest_id] ? '' : ' (no structured quest data yet, so cards were not verdict-filtered)'}.`,
    };
  });

  const outFile = APPLY ? 'quest-decks.json' : 'quest-decks.generated.json';
  fs.writeFileSync(path.join(ROOT, outFile), JSON.stringify(out, null, 2) + '\n');

  console.log('─'.repeat(60));
  console.log(`Quests: ${quests.length}  ·  decks generated: ${Object.keys(out).length}  ·  mined: ${mined}  ·  inferred: ${inferred}  ·  no archetype: ${noArch}`);
  const under = Object.values(out).filter(d => d.deck_size < DECK_TARGET).length;
  console.log(`Decks under ${DECK_TARGET} cards: ${under}`);
  console.log(`Wrote ${outFile}${APPLY ? ' (quest-decks.json)' : ' (dry run)'}`);
  console.log('─'.repeat(60));
  console.log(`Next: ${APPLY ? '' : 'review, re-run with --apply, then '}run \`node scripts/validate-data.js\`.`);
}

main();
