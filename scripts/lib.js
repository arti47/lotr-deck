'use strict';
// Shared dev-script helpers (Node stdlib only — keeps the app zero-build).
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

// Evaluate a browser data file (`const cardData = [...]`) in a sandbox and
// return the named global it declares. `const` doesn't attach to the vm context,
// so we append a `var` alias that does.
function loadGlobal(file, name) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src + `\n;var __out = ${name};`, ctx, { filename: file });
  return ctx.__out;
}

const loadCards = () => loadGlobal('data.js', 'cardData');
const loadQuests = () => loadGlobal('quests.js', 'questData');

// Pull QUEST_TAG_TO_CARD_TAGS out of app.js so the mapping has a single source
// of truth (the app) rather than a drifting copy in the scripts.
function loadTagMapping() {
  const src = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
  const m = src.match(/const QUEST_TAG_TO_CARD_TAGS = (\{[\s\S]*?\n\});/);
  if (!m) throw new Error('Could not locate QUEST_TAG_TO_CARD_TAGS in app.js');
  return vm.runInNewContext('(' + m[1] + ')');
}

const cardKey = c => c && (c.ringsdb_code || `${c.name}|${c.sphere}|${c.type}`);

module.exports = { ROOT, loadGlobal, loadCards, loadQuests, loadTagMapping, cardKey };
