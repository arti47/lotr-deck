'use strict';
// One-time (and re-runnable) extraction of the *curated* fields — the hand-authored
// `tags` and `summary` that are the real value in data.js — into overlay.json,
// keyed by ringsdb_code. sync-ringsdb.js merges this back in after refreshing
// stats/text from the API, so re-syncing never clobbers curation.
//
//   node scripts/extract-overlay.js
//
// Writes overlay.json. Safe to re-run: it regenerates the overlay from whatever
// data.js currently holds.

const fs = require('fs');
const path = require('path');
const { ROOT, loadCards } = require('./lib');

const cards = loadCards();
const overlay = {};
let withTags = 0, withSummary = 0;

cards.forEach(c => {
  if (!c.ringsdb_code) return;
  const entry = {};
  if (Array.isArray(c.tags) && c.tags.length) { entry.tags = c.tags; withTags++; }
  if (c.summary) { entry.summary = c.summary; withSummary++; }
  if (Object.keys(entry).length) overlay[c.ringsdb_code] = entry;
});

const out = path.join(ROOT, 'overlay.json');
fs.writeFileSync(out, JSON.stringify(overlay, null, 2) + '\n');
console.log(`Wrote overlay.json: ${Object.keys(overlay).length} cards (${withTags} with tags, ${withSummary} with summary).`);
