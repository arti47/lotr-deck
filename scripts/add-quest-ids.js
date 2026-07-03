'use strict';
// Stamp a permanent `quest_id` slug onto every quest in quests.js.
//
//   node scripts/add-quest-ids.js            # dry run: report what would change
//   node scripts/add-quest-ids.js --apply    # write quests.js in place
//
// Why: Phase D bakes new data files (quest-overlay.json, quest-decks.json) keyed
// per quest. Keying by `quest_name` repeats the name-based-identity bug Phase A
// fixed for cards — a rename would silently orphan the baked data. `quest_id` is
// an opaque, stable key instead.
//
// IDEMPOTENT: a quest that already has a `quest_id` keeps it untouched, so once
// an id is assigned it never moves even if the quest is later renamed. Only
// quests missing an id get a fresh slug. That is what makes the id permanent.
//
// Slug = quest_name, accents stripped, apostrophes removed, non-alphanumerics
// collapsed to single hyphens. quest_names are unique today (0 collisions), but
// the script still de-dupes with a -2/-3 suffix for safety.

const fs = require('fs');
const path = require('path');
const { ROOT, loadQuests } = require('./lib');

const APPLY = process.argv.includes('--apply');

function slugify(name) {
  return name
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip diacritics
    .replace(/['’]/g, '')                          // drop apostrophes (straight + curly)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const quests = loadQuests();
const used = new Set(quests.map(q => q.quest_id).filter(Boolean));
const assigned = [];

const out = quests.map(q => {
  if (q.quest_id) return q; // already stamped — leave as-is (permanence)
  let base = slugify(q.quest_name) || 'quest';
  let id = base, n = 2;
  while (used.has(id)) id = `${base}-${n++}`;
  used.add(id);
  assigned.push([q.quest_name, id]);
  // Insert quest_id as the first key so the object reads id-first; all other
  // keys keep their original order, so the diff is one added line per quest.
  return { quest_id: id, ...q };
});

console.log('─'.repeat(60));
console.log(`Quests: ${quests.length}  ·  already had id: ${quests.length - assigned.length}  ·  newly assigned: ${assigned.length}`);
console.log('─'.repeat(60));
assigned.slice(0, 12).forEach(([name, id]) => console.log(`  ${name}  ->  ${id}`));
if (assigned.length > 12) console.log(`  …(+${assigned.length - 12} more)`);

if (APPLY) {
  fs.writeFileSync(path.join(ROOT, 'quests.js'), 'const questData = ' + JSON.stringify(out, null, 2) + ';\n');
  console.log('\nquests.js written. Next: run `node scripts/validate-data.js`.');
} else {
  console.log('\nDry run. Re-run with --apply to write quests.js.');
}
