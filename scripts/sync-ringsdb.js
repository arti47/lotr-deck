'use strict';
// Regenerate data.js from the RingsDB public card API, merging the curated
// tags/summary from overlay.json (keyed by ringsdb_code) back in so refreshing
// stats/text never clobbers curation.
//
//   node scripts/extract-overlay.js       # first: capture current curation
//   node scripts/sync-ringsdb.js          # dry run -> writes data.generated.js
//   node scripts/sync-ringsdb.js --apply  # overwrite data.js in place
//
// Requires outbound network access to ringsdb.com. This is a dev-only script;
// the app itself never fetches anything.
//
// NOTE: not yet exercised against the live API in this environment (RingsDB was
// blocked by egress policy when it was written). The field mapping below follows
// the documented RingsDB public schema — verify the first real run's diff and
// then run `node scripts/validate-data.js`.

const fs = require('fs');
const path = require('path');
const { ROOT, loadCards } = require('./lib');

const API_URL = 'https://ringsdb.com/api/public/cards/';
const APPLY = process.argv.includes('--apply');
const KEEP_MISSING = !process.argv.includes('--drop-missing'); // keep local cards absent from the API by default

// Field order mirrors the existing data.js so a real sync produces a minimal diff.
const KNOWN_TYPES = ['Hero', 'Ally', 'Attachment', 'Event', 'Player Side Quest'];

function loadOverlay() {
  const p = path.join(ROOT, 'overlay.json');
  if (!fs.existsSync(p)) {
    console.warn('overlay.json not found — run `node scripts/extract-overlay.js` first. Proceeding without curation.');
    return {};
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function splitTraits(s) {
  if (!s) return [];
  return s.split('.').map(t => t.trim()).filter(Boolean);
}

// Map one RingsDB API record to our card schema. Returns null for types we skip.
function mapCard(r, overlay) {
  const type = r.type_name;
  if (!KNOWN_TYPES.includes(type)) return null;

  const isHero = type === 'Hero';
  const rawCT = isHero ? r.threat : r.cost;
  const cost_threat = rawCT === null || rawCT === undefined ? '' : String(rawCT);

  const card = {
    name: r.name,
    sphere: r.sphere_name || 'Neutral',
    type,
    cost_threat,
    traits: splitTraits(r.traits),
    text: r.text || '',
  };

  const curated = overlay[r.code] || {};
  card.summary = curated.summary || '';
  card.tags = curated.tags || [];

  ['willpower', 'attack', 'defense', 'health'].forEach(stat => {
    if (r[stat] !== null && r[stat] !== undefined) card[stat] = r[stat];
  });

  card.is_unique = !!r.is_unique;
  if (r.imagesrc) card.imagesrc = 'https://ringsdb.com' + r.imagesrc;
  card.ringsdb_code = r.code;
  return card;
}

async function main() {
  const overlay = loadOverlay();

  let records;
  try {
    const res = await fetch(API_URL, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    records = await res.json();
  } catch (e) {
    console.error(`\nFailed to fetch ${API_URL}\n  ${e.message}\n`);
    console.error('This script needs outbound access to ringsdb.com. If you are behind a');
    console.error('restrictive proxy (e.g. the Claude Code web sandbox), run it locally instead.');
    process.exit(2);
  }

  const mapped = [];
  let skipped = 0;
  for (const r of records) {
    const c = mapCard(r, overlay);
    if (c) mapped.push(c); else skipped++;
  }

  // Reconcile against the current file so we can report and optionally preserve.
  const current = loadCards();
  const apiCodes = new Set(mapped.map(c => c.ringsdb_code));
  const localByCode = new Map(current.map(c => [c.ringsdb_code, c]));

  const added = mapped.filter(c => !localByCode.has(c.ringsdb_code)).map(c => c.ringsdb_code);
  const missing = current.filter(c => !apiCodes.has(c.ringsdb_code));

  let final = mapped;
  if (KEEP_MISSING && missing.length) {
    // Preserve local-only cards (e.g. fan-made packs not in the public API) as-is.
    final = mapped.concat(missing);
  }

  // Dedup on code, keeping first (API wins over preserved local on collision).
  const seen = new Set();
  final = final.filter(c => {
    if (seen.has(c.ringsdb_code)) return false;
    seen.add(c.ringsdb_code);
    return true;
  });
  final.sort((a, b) => String(a.ringsdb_code).localeCompare(String(b.ringsdb_code)));

  const body = 'const cardData = ' + JSON.stringify(final, null, 2) + ';\n';
  const outFile = APPLY ? 'data.js' : 'data.generated.js';
  fs.writeFileSync(path.join(ROOT, outFile), body);

  console.log('─'.repeat(60));
  console.log(`RingsDB records: ${records.length}  ·  mapped: ${mapped.length}  ·  skipped types: ${skipped}`);
  console.log(`Local cards: ${current.length}  ·  new from API: ${added.length}  ·  local-only (${KEEP_MISSING ? 'kept' : 'dropped'}): ${missing.length}`);
  console.log(`Wrote ${final.length} cards to ${outFile}${APPLY ? ' (data.js overwritten)' : ' (dry run)'}`);
  console.log('─'.repeat(60));
  if (added.length)   console.log('New codes: ' + added.slice(0, 20).join(', ') + (added.length > 20 ? ` …(+${added.length - 20})` : ''));
  if (missing.length) console.log('Local-only codes: ' + missing.map(c => c.ringsdb_code).slice(0, 20).join(', ') + (missing.length > 20 ? ` …(+${missing.length - 20})` : ''));
  console.log(`\nNext: ${APPLY ? '' : 'review data.generated.js, then re-run with --apply. Then '}run \`node scripts/validate-data.js\`.`);
}

main();
