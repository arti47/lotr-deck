let cardDatabase = [];
let allHeroes = [];
let allDeckCards = [];
let allCardTags = new Set();   // every distinct card-level tag present in the pool
let currentViewedCard = null;

// Stable identity for a card. RingsDB codes are unique per printing; names are not
// (dozens of names have multiple versions). Everything that stores or looks up a
// card — deckMap, saved state, imports — keys on this, never on the bare name.
function cardKey(card) {
  return card && (card.ringsdb_code || `${card.name}|${card.sphere}|${card.type}`);
}

// Escape data-derived strings before interpolating them into innerHTML.
function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Deck total across a Map<key,{card,qty}>.
function deckTotal(map) {
  let n = 0;
  map.forEach(i => { n += i.qty; });
  return n;
}

// Each player owns heroes[] and deck Map. selectedHeroes/deckMap always point to the active player.
let selectedHeroes = [];
let deckMap = new Map();
const players = [{ name: 'Player 1', heroes: selectedHeroes, deck: deckMap }];
let activePlayer = 0;
let activeQuest = null;

const QUEST_TAG_TO_CARD_TAGS = {
  'Card Draw':                   ['Card Draw (Active)', 'Card Draw (Passive)'],
  'Location Control':            ['Location Control (Progress)', 'Location Control (Travel/Bypass)'],
  'Action Advantage':            ['Action Advantage (Non-Exhausting)', 'Action Advantage (Readying)'],
  'Readying':                    ['Action Advantage (Readying)', 'Action Advantage (Non-Exhausting)'],
  'Resource Generation':         ['Resource Generation', 'Resource Smoothing'],
  'Enemy Control':               ['Enemy Control', 'Traps'],
  'Staging Area Control':        ['Staging Area Control', 'Staging Area Attack'],
  'Threat Reduction':            ['Threat Reduction'],
  'Healing':                     ['Healing'],
  'Shadow Cancellation':         ['Shadow Cancellation'],
  'Treachery Cancellation':      ['Treachery Cancellation'],
  'Condition Removal':           ['Condition Removal'],
  'Willpower Boost':             ['Willpower Boost'],
  'Defense Boost':               ['Defense Boost'],
  'Attack Boost':                ['Attack Boost'],
  'Scrying':                     ['Scrying'],
  'Direct Damage':               ['Direct Damage'],
  'Engagement Control':          ['Engagement Control'],
  'Sentinel':                    ['Sentinel'],
  'Ranged':                      ['Ranged'],
  'Damage Prevention':           ['Damage Prevention'],
  'Ally Mustering':              ['Ally Mustering'],
  'Encounter Deck Manipulation': ['Encounter Deck Manipulation'],
};

// ==========================================
// INITIALIZATION & GLOBAL LOGIC
// ==========================================

window.onload = () => {
  if (typeof cardData !== 'undefined') {
    const uniqueCards = [];
    const seenCards = new Set();
    cardData.forEach(card => {
      // Dedup on RingsDB code (unique per printing). The old name+sphere+type key
      // collapsed distinct printings that share a name (e.g. multiple Frodos).
      const uniqueKey = cardKey(card);
      if (!seenCards.has(uniqueKey)) {
        seenCards.add(uniqueKey);
        uniqueCards.push(card);
      }
    });

    cardDatabase = uniqueCards;
    allHeroes    = cardDatabase.filter(c => c.type === 'Hero');
    allDeckCards = cardDatabase.filter(c => c.type !== 'Hero');
    allCardTags  = new Set();
    cardDatabase.forEach(c => (c.tags || []).forEach(t => allCardTags.add(t)));

    updatePlayerTabs();
    populatePhase1Dropdowns();
    applyPhase1Filters();
    initQuestDropdown();

    if (autoLoad()) {
      updatePlayerTabs();
      restoreQuestDropdown();
      applyPhase1Filters();
      updatePhase1Dashboard();
      checkPhase1Completion();
    }
    renderSavedDecksList();
  } else {
    alert('Error: Could not find cardData. Please check your data.js file.');
  }
};

function initQuestDropdown() {
  const questSelect = document.getElementById('quest-select');
  const questPreview = document.getElementById('quest-details-preview');
  if (!questSelect || typeof questData === 'undefined') return;

  const sorted = [...questData].sort((a, b) => a.quest_name.localeCompare(b.quest_name));
  sorted.forEach(quest => {
    const o = document.createElement('option');
    o.value = quest.quest_name;
    o.textContent = `${quest.quest_name} (${quest.expansion})`;
    questSelect.appendChild(o);
  });

  questSelect.addEventListener('change', e => {
    activeQuest = questData.find(q => q.quest_name === e.target.value) || null;
    const heroRec = document.getElementById('quest-hero-recommendations');
    if (activeQuest) {
      const diff = activeQuest.community_difficulty ? ` · Difficulty: ${escapeHtml(activeQuest.community_difficulty)}/10` : '';
      questPreview.innerHTML = `<strong>Focus:</strong> ${escapeHtml(activeQuest.quest_focus)} &nbsp;·&nbsp; <strong>Pacing:</strong> ${escapeHtml(activeQuest.pacing)}${diff}`;
      const normStr = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
      const recommendedHeroes = (activeQuest.tech_cards_mentioned || [])
        .map(name => cardDatabase.find(c => c.name === name) || cardDatabase.find(c => normStr(c.name) === normStr(name)))
        .filter(c => c && c.type === 'Hero');
      if (recommendedHeroes.length) {
        const badges = recommendedHeroes.map(c => {
          const sc = TT_SPHERE_COLOR[c.sphere] || '#555';
          return `<span class="p1-hero-rec" data-imagesrc="${escapeHtml(c.imagesrc||'')}" data-cardname="${escapeHtml(c.name)}" data-ringsdbcode="${escapeHtml(c.ringsdb_code||'')}"
            style="display:inline-flex;align-items:center;gap:4px;margin:2px 4px 2px 0;cursor:pointer;">
            <span style="background:${sc};color:#fff;font-size:0.7em;padding:1px 5px;border-radius:3px;white-space:nowrap;">${escapeHtml(c.sphere)}</span>
            <span style="font-size:0.85em;text-decoration:underline dotted #aaa;" title="${escapeHtml(c.name)}">${escapeHtml(c.name)}</span>
          </span>`;
        }).join('');
        heroRec.innerHTML = `<span style="font-size:0.82em;color:#0056b3;font-weight:bold;">Recommended heroes:</span> ${badges}`;
        wireHeroRecPreviews();
      } else {
        heroRec.innerHTML = '';
      }
    } else {
      questPreview.innerHTML = '';
      heroRec.innerHTML = '';
    }
    updatePhase1Dashboard();
    renderPhase2QuestPanel();
    if (document.getElementById('phase3').classList.contains('active')) {
      renderQuestMatchup();
      if (typeof renderCardVerdicts === 'function') renderCardVerdicts(); // Phase D1
    }
    autoSave();
  });
}

function heroMatches(heroObj, code, name) {
  if (heroObj.ringsdb_code && code) return heroObj.ringsdb_code === code;
  return heroObj.name === name;
}

function syncHeroGridAndBadges() {
  document.querySelectorAll('#hero-container .hero-card').forEach(el => {
    el.classList.toggle('selected', selectedHeroes.some(h => heroMatches(h, el.dataset.ringsdbcode, el.dataset.heroname)));
  });
  document.querySelectorAll('#quest-hero-recommendations .p1-hero-rec').forEach(span => {
    const isSelected = selectedHeroes.some(h => heroMatches(h, span.dataset.ringsdbcode, span.dataset.cardname));
    span.style.opacity = isSelected ? '0.55' : '';
    span.title = isSelected ? 'Selected — click to remove' : 'Click to add hero';
  });
}

function wireHeroRecPreviews() {
  const heroRec    = document.getElementById('quest-hero-recommendations');
  const imgPreview = document.getElementById('card-image-preview');
  const imgEl      = document.getElementById('card-image-preview-img');
  if (!heroRec || !imgPreview || !imgEl) return;
  heroRec.querySelectorAll('.p1-hero-rec').forEach(span => {
    const isSelected = selectedHeroes.some(h => heroMatches(h, span.dataset.ringsdbcode, span.dataset.cardname));
    span.style.opacity = isSelected ? '0.55' : '';
    span.title = isSelected ? 'Selected — click to remove' : 'Click to add hero';

    span.addEventListener('mouseenter', () => {
      if (!span.dataset.imagesrc) return;
      imgEl.src = span.dataset.imagesrc;
      imgEl.onerror = () => { imgPreview.style.display = 'none'; };
      const rect = span.getBoundingClientRect();
      const imgW = 220, imgH = 330;
      const leftP = rect.right + 6 + imgW > window.innerWidth ? rect.left - imgW - 6 : rect.right + 6;
      const topP  = Math.max(8, Math.min(rect.top, window.innerHeight - imgH - 8));
      imgPreview.style.left  = `${leftP}px`;
      imgPreview.style.top   = `${topP}px`;
      imgPreview.style.display = 'block';
    });
    span.addEventListener('mouseleave', () => { imgPreview.style.display = 'none'; });

    span.addEventListener('click', () => {
      imgPreview.style.display = 'none';
      const code = span.dataset.ringsdbcode;
      const hero = (code && allHeroes.find(h => h.ringsdb_code === code)) || allHeroes.find(h => h.name === span.dataset.cardname);
      if (!hero) return;
      const idx = selectedHeroes.findIndex(h => heroMatches(h, hero.ringsdb_code, hero.name));
      if (idx > -1) {
        selectedHeroes.splice(idx, 1);
      } else {
        if (selectedHeroes.length >= 3) { alert('You can only select up to 3 heroes.'); return; }
        selectedHeroes.push(hero);
      }
      syncHeroGridAndBadges();
      updatePhase1Dashboard();
      checkPhase1Completion();
      autoSave();
    });
  });
}

// ==========================================
// PERSISTENCE (auto-save + named slots)
// ==========================================

function serializeState() {
  return {
    version: 2,
    // Persist the stable quest_id; keep activeQuestName for old readers and the
    // human-readable saved-deck line. Load resolves by id first (see below).
    activeQuestId: activeQuest ? (activeQuest.quest_id || null) : null,
    activeQuestName: activeQuest ? activeQuest.quest_name : null,
    activePlayer,
    players: players.map(p => ({
      name: p.name,
      // Persist RingsDB codes (with heroNames kept only for the saved-decks
      // preview line). Codes restore the exact printing; names could not.
      heroCodes: p.heroes.map(h => h.ringsdb_code || null),
      heroNames: p.heroes.map(h => h.name),
      deck: Array.from(p.deck.values()).map(item => [cardKey(item.card), item.qty])
    }))
  };
}

function deserializeState(data) {
  if (!data || (data.version !== 1 && data.version !== 2)) return false;
  const v1 = data.version === 1;
  // Resolve the quest by stable quest_id first; fall back to name for saves
  // written before the id migration (mirrors the v1→v2 card-code fallback).
  activeQuest =
    (data.activeQuestId && questData.find(q => q.quest_id === data.activeQuestId)) ||
    (data.activeQuestName && questData.find(q => q.quest_name === data.activeQuestName)) ||
    null;
  players.length = 0;
  (data.players || []).forEach(p => {
    // v1 stored hero/card names; v2 stores ringsdb codes. Resolve by code when
    // present, fall back to name for legacy saves.
    const heroes = v1
      ? (p.heroNames || []).map(n => allHeroes.find(h => h.name === n)).filter(Boolean)
      : (p.heroCodes || []).map(code => allHeroes.find(h => h.ringsdb_code === code)).filter(Boolean);
    const deck = new Map();
    (p.deck || []).forEach(([key, qty]) => {
      const card = v1
        ? allDeckCards.find(c => c.name === key)
        : (allDeckCards.find(c => cardKey(c) === key) || allDeckCards.find(c => c.name === key));
      if (card) deck.set(cardKey(card), { card, qty });
    });
    players.push({ name: p.name, heroes, deck });
  });
  if (!players.length) players.push({ name: 'Player 1', heroes: [], deck: new Map() });
  activePlayer   = Math.min(data.activePlayer || 0, players.length - 1);
  selectedHeroes = players[activePlayer].heroes;
  deckMap        = players[activePlayer].deck;
  return true;
}

function restoreQuestDropdown() {
  const sel = document.getElementById('quest-select');
  const qp  = document.getElementById('quest-details-preview');
  if (!sel) return;
  sel.value = activeQuest ? activeQuest.quest_name : '';
  if (qp) {
    qp.innerHTML = activeQuest
      ? `<strong>Focus:</strong> ${escapeHtml(activeQuest.quest_focus)} &nbsp;·&nbsp; <strong>Pacing:</strong> ${escapeHtml(activeQuest.pacing)}${activeQuest.community_difficulty ? ` · Difficulty: ${escapeHtml(activeQuest.community_difficulty)}/10` : ''}`
      : '';
  }
}

function autoSave() {
  try { localStorage.setItem('lotr_autosave', JSON.stringify(serializeState())); } catch(e) {}
}

function autoLoad() {
  try {
    const raw = localStorage.getItem('lotr_autosave');
    if (!raw) return false;
    return deserializeState(JSON.parse(raw));
  } catch(e) { return false; }
}

function getSavedDecks() {
  try { return JSON.parse(localStorage.getItem('lotr_saved_decks') || '[]'); } catch(e) { return []; }
}

function saveNamedDeck(name) {
  name = name.trim();
  if (!name) { alert('Please enter a deck name.'); return; }
  const decks = getSavedDecks();
  decks.push({ id: Date.now(), name, savedAt: new Date().toISOString(), state: serializeState() });
  localStorage.setItem('lotr_saved_decks', JSON.stringify(decks));
  document.getElementById('save-deck-name').value = '';
  renderSavedDecksList();
}

function loadNamedDeck(id) {
  const entry = getSavedDecks().find(d => d.id === id);
  if (!entry) return;
  deserializeState(entry.state);
  updatePlayerTabs();
  restoreQuestDropdown();
  applyPhase1Filters();
  updatePhase1Dashboard();
  checkPhase1Completion();
  if (document.getElementById('phase2').classList.contains('active')) initPhase2();
  if (document.getElementById('phase3').classList.contains('active')) { initPhase3(); renderQuestMatchup(); }
  renderSavedDecksList();
}

function deleteNamedDeck(id) {
  if (!confirm('Delete this saved deck?')) return;
  localStorage.setItem('lotr_saved_decks', JSON.stringify(getSavedDecks().filter(d => d.id !== id)));
  renderSavedDecksList();
}

function renderSavedDecksList() {
  const container = document.getElementById('saved-decks-list');
  if (!container) return;
  const decks = getSavedDecks();
  if (!decks.length) {
    container.innerHTML = '<div style="color:#888;font-size:0.85em;font-style:italic;">No saved decks yet.</div>';
    return;
  }
  container.innerHTML = decks.slice().reverse().map(d => {
    const date     = new Date(d.savedAt).toLocaleDateString();
    const heroLine = escapeHtml((d.state.players || []).map(p => (p.heroNames || []).join(', ') || '(no heroes)').join(' | '));
    const safeName = escapeHtml(d.name);
    return `<div style="display:flex;align-items:center;gap:6px;padding:5px 0;border-bottom:1px solid #eee;">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:bold;font-size:0.88em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${safeName}">${safeName}</div>
        <div style="font-size:0.75em;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${heroLine}">${date} · ${heroLine}</div>
      </div>
      <button onclick="loadNamedDeck(${d.id})" style="padding:2px 8px;font-size:0.8em;background:#007bff;color:#fff;border:none;border-radius:3px;cursor:pointer;white-space:nowrap;">Load</button>
      <button onclick="deleteNamedDeck(${d.id})" style="padding:2px 6px;font-size:0.8em;background:#dc3545;color:#fff;border:none;border-radius:3px;cursor:pointer;">✕</button>
    </div>`;
  }).join('');
}

function switchTab(phaseNumber) {
  document.querySelectorAll('.phase-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));
  document.getElementById(`phase${phaseNumber}`).classList.add('active');
  document.getElementById(`btn-phase${phaseNumber}`).classList.add('active');
  if (phaseNumber === 2) initPhase2();
  if (phaseNumber === 3) initPhase3();
}


// ==========================================
// PLAYER / FELLOWSHIP MANAGEMENT
// ==========================================

function updatePlayerTabs() {
  const container = document.getElementById('player-tabs');
  if (!container) return;
  container.innerHTML = players.map((p, i) => `
    <button class="player-tab ${i === activePlayer ? 'active' : ''}" onclick="switchPlayer(${i})">${p.name}</button>${players.length > 1 ? `<span class="player-tab-remove" onclick="removePlayer(${i})" title="Remove">×</span>` : ''}
  `).join('');
  const addBtn = document.getElementById('btn-add-player');
  if (addBtn) addBtn.style.display = players.length >= 4 ? 'none' : '';
}

function switchPlayer(index) {
  activePlayer = index;
  selectedHeroes = players[activePlayer].heroes;
  deckMap        = players[activePlayer].deck;
  currentViewedCard = null;

  updatePlayerTabs();
  updatePhase1Dashboard();
  checkPhase1Completion();
  applyPhase1Filters();
  if (document.getElementById('phase2').classList.contains('active')) initPhase2();
  if (document.getElementById('phase3').classList.contains('active')) { initPhase3(); renderQuestMatchup(); }
  autoSave();
}

function addPlayer() {
  if (players.length >= 4) return;
  const newHeroes = [];
  const newDeck   = new Map();
  players.push({ name: `Player ${players.length + 1}`, heroes: newHeroes, deck: newDeck });
  updatePlayerTabs();
  autoSave();
}

function removePlayer(index) {
  if (players.length <= 1) return;
  players.splice(index, 1);
  // Keep activePlayer pointing at the same player. Removing one before it shifts
  // every later index down by one; removing the active/last one clamps to the end.
  if (index < activePlayer) activePlayer--;
  if (activePlayer >= players.length) activePlayer = players.length - 1;
  selectedHeroes = players[activePlayer].heroes;
  deckMap        = players[activePlayer].deck;
  currentViewedCard = null;
  updatePlayerTabs();
  updatePhase1Dashboard();
  checkPhase1Completion();
  applyPhase1Filters();
  if (document.getElementById('phase2').classList.contains('active')) initPhase2();
  if (document.getElementById('phase3').classList.contains('active')) initPhase3();
  autoSave();
}


// ==========================================
// SHARED HELPERS
// ==========================================

function renderStatBadges(card) {
  if (card.willpower === null || card.willpower === undefined) return '';
  const badge = (label, value, bg, border, color) => `
    <div style="background:${bg};border:1px solid ${border};border-radius:4px;padding:4px 10px;text-align:center;min-width:48px;">
      <div style="font-size:0.7em;color:#888;text-transform:uppercase;letter-spacing:0.5px;">${label}</div>
      <div style="font-size:1.1em;font-weight:bold;color:${color};">${value ?? '-'}</div>
    </div>`;
  return `<div style="display:flex;gap:8px;margin:10px 0;flex-wrap:wrap;">
    ${badge('WP',  card.willpower, '#e8f4ff', '#b8d9ff', '#0056b3')}
    ${badge('ATK', card.attack,    '#fff0f0', '#ffcccc', '#c0392b')}
    ${badge('DEF', card.defense,   '#f0fff4', '#b8f0cc', '#1a7a3c')}
    ${badge('HP',  card.health,    '#fff8e8', '#ffd97a', '#a06000')}
  </div>`;
}

function renderCardImage(card) {
  if (!card.imagesrc) return '';
  return `<img src="${card.imagesrc}" alt="${card.name}" class="card-img" onerror="this.style.display='none'">`;
}

// --- Uniqueness (warn, don't block) ---
// The game allows only one copy of a given unique *name* in play at once, across
// the whole fellowship. Uniqueness is by title, so it's tracked by name (not by
// ringsdb_code) — a hero and an ally of the same character collide.
//
// The 100 "(MotK) X" hero entries are the same character as their base card
// (Messenger of the King turns an ally into a hero), so the marker is stripped
// before comparing — "(MotK) Erestor" and the Erestor ally must collide.
function uniqueTitle(card) {
  return card.name.replace(/^\(MotK\)\s*/, '').replace(/\s*\(MotK\)$/, '');
}

// Returns Map<uniqueTitle, Set<cardKey>>: the distinct unique printings of each
// title among a player's heroes + deck.
function uniqueNamesForPlayer(p) {
  const m = new Map();
  const add = card => {
    if (!card || !card.is_unique) return;
    const title = uniqueTitle(card);
    if (!m.has(title)) m.set(title, new Set());
    m.get(title).add(cardKey(card));
  };
  p.heroes.forEach(add);
  p.deck.forEach(item => add(item.card));
  return m;
}

// Same unique name from two different cards in one player's pool (e.g. hero
// Gandalf + Gandalf ally) — they can never both be in play.
function uniquenessWithinPlayer(p) {
  const out = [];
  uniqueNamesForPlayer(p).forEach((keys, name) => { if (keys.size > 1) out.push(name); });
  return out;
}

// Same unique name fielded by two or more players — only one can be in play.
function uniquenessAcrossFellowship() {
  if (players.length < 2) return [];
  const nameToPlayers = new Map(); // uniqueName -> Set(player index)
  players.forEach((p, i) => {
    uniqueNamesForPlayer(p).forEach((_keys, name) => {
      if (!nameToPlayers.has(name)) nameToPlayers.set(name, new Set());
      nameToPlayers.get(name).add(i);
    });
  });
  const out = [];
  nameToPlayers.forEach((idxSet, name) => {
    if (idxSet.size > 1) out.push({ name, players: [...idxSet].map(i => players[i].name) });
  });
  return out;
}


// ==========================================
// PHASE 1: HEROES
// ==========================================

function populatePhase1Dropdowns() {
  const sphereSelect = document.getElementById('hero-sphere-filter');
  const tagSelect    = document.getElementById('hero-tag-filter');
  const spheres = new Set();
  const tags    = new Set();
  allHeroes.forEach(hero => {
    if (hero.sphere) spheres.add(hero.sphere);
    if (hero.tags)   hero.tags.forEach(t => tags.add(t));
  });
  Array.from(spheres).sort().forEach(s => {
    const o = document.createElement('option'); o.value = s; o.textContent = s; sphereSelect.appendChild(o);
  });
  Array.from(tags).sort().forEach(t => {
    const o = document.createElement('option'); o.value = t; o.textContent = t; tagSelect.appendChild(o);
  });
}

function applyPhase1Filters() {
  const includeMotK   = document.getElementById('motk-toggle').checked;
  const selectedSphere = document.getElementById('hero-sphere-filter').value;
  const selectedTag    = document.getElementById('hero-tag-filter').value;
  const searchText     = document.getElementById('hero-search').value.toLowerCase().trim();

  const filtered = allHeroes.filter(hero => {
    if (!includeMotK && hero.name.includes('(MotK)')) return false;
    if (selectedSphere !== 'All' && hero.sphere !== selectedSphere) return false;
    if (selectedTag    !== 'All' && (!hero.tags || !hero.tags.includes(selectedTag))) return false;
    if (searchText !== '' && !hero.name.toLowerCase().includes(searchText)) return false;
    return true;
  });
  renderHeroes(filtered);
}

function clearHeroSearch() {
  document.getElementById('hero-search').value = '';
  applyPhase1Filters();
}

function renderHeroes(heroesToRender) {
  const container = document.getElementById('hero-container');
  container.innerHTML = '';
  heroesToRender.forEach(hero => {
    const div = document.createElement('div');
    div.className = 'hero-card';
    div.dataset.heroname    = hero.name;
    div.dataset.ringsdbcode = hero.ringsdb_code || '';
    if (selectedHeroes.some(h => heroMatches(h, hero.ringsdb_code, hero.name))) div.classList.add('selected');
    div.innerHTML = `<strong>${escapeHtml(hero.name)}</strong><br><span style="font-size:0.9em;color:#555;">${escapeHtml(hero.sphere)} | Threat: ${escapeHtml(hero.cost_threat)}</span>`;
    div.onclick = () => toggleHeroSelection(hero, div);
    container.appendChild(div);
  });
}

function toggleHeroSelection(hero, element) {
  const index = selectedHeroes.findIndex(h => heroMatches(h, hero.ringsdb_code, hero.name));
  if (index > -1) {
    selectedHeroes.splice(index, 1);
    element.classList.remove('selected');
  } else {
    if (selectedHeroes.length < 3) {
      selectedHeroes.push(hero);
      element.classList.add('selected');
    } else {
      alert('You can only select up to 3 heroes.');
    }
  }
  updatePhase1Dashboard();
  checkPhase1Completion();
  autoSave();
}

function updatePhase1Dashboard() {
  const totalThreat = selectedHeroes.reduce((sum, h) => sum + parseInt(h.cost_threat || 0), 0);
  const threatEl = document.getElementById('threat-counter');
  threatEl.innerText = totalThreat;
  threatEl.style.color       = totalThreat >= 35 ? '#dc3545' : totalThreat >= 33 ? '#e6a817' : '#222';
  threatEl.style.fontWeight  = totalThreat >= 33 ? 'bold' : '';
  threatEl.title             = totalThreat >= 35 ? 'High threat — bring threat reduction' : totalThreat >= 33 ? 'Elevated threat' : '';


  const container = document.getElementById('selected-details-container');
  container.innerHTML = '';

  if (selectedHeroes.length === 0) {
    container.innerHTML = '<p style="color:#666;font-style:italic;">No heroes selected. Click a hero to begin.</p>';
    return;
  }

  selectedHeroes.forEach(hero => {
    const div = document.createElement('div');
    div.className = 'detail-card';
    div.style.position = 'relative';
    const traits  = hero.traits ? escapeHtml(hero.traits.join(', ')) : 'None';
    const text    = hero.text   ? escapeHtml(hero.text).replace(/\n/g, '<br><br>') : 'No text available.';
    const summary = escapeHtml(hero.summary || '');
    div.innerHTML = `
      <button class="hero-remove-btn" data-heroname="${escapeHtml(hero.name)}" data-ringsdbcode="${escapeHtml(hero.ringsdb_code || '')}" title="Remove hero" style="position:absolute;top:8px;right:8px;background:none;border:1px solid #ddd;border-radius:50%;width:22px;height:22px;font-size:15px;line-height:1;cursor:pointer;color:#aaa;padding:0;display:flex;align-items:center;justify-content:center;">×</button>
      ${renderCardImage(hero)}
      <h3>${escapeHtml(hero.name)}</h3>
      <p class="stats">Sphere: ${escapeHtml(hero.sphere)} | Threat: ${escapeHtml(hero.cost_threat)}</p>
      ${renderStatBadges(hero)}
      <p><em><strong>Traits:</strong> ${traits}</em></p>
      <hr style="border:0;border-top:1px solid #eee;margin:10px 0;">
      <p>${text}</p>
      <hr style="border:0;border-top:1px solid #eee;margin:10px 0;">
      <p style="font-size:0.9em;color:#555;"><strong>Summary:</strong> ${summary}</p>
    `;
    container.appendChild(div);
  });

  container.querySelectorAll('.hero-remove-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = selectedHeroes.findIndex(h => heroMatches(h, btn.dataset.ringsdbcode, btn.dataset.heroname));
      if (idx > -1) selectedHeroes.splice(idx, 1);
      syncHeroGridAndBadges();
      updatePhase1Dashboard();
      checkPhase1Completion();
      autoSave();
    };
  });
}

function checkPhase1Completion() {
  const tab2 = document.getElementById('btn-phase2');
  const tab3 = document.getElementById('btn-phase3');
  const ok = selectedHeroes.length >= 1 && selectedHeroes.length <= 3;
  tab2.disabled = !ok;
  tab3.disabled = !ok;
}


// ==========================================
// PHASE 2: DECK CARDS & IMPORT
// ==========================================

function initPhase2() {
  populatePhase2Dropdowns();
  applyPhase2Filters();
  updatePhase2Dashboard();
  renderPhase2QuestPanel();
  renderOffSphereBanner();
}

function populatePhase2Dropdowns() {
  const tagSelect    = document.getElementById('deck-tag-filter');
  const sphereSelect = document.getElementById('deck-sphere-filter');
  tagSelect.innerHTML    = '<option value="All">All Tags</option>';
  sphereSelect.innerHTML = '<option value="All">All Spheres</option>';

  const allowedSpheres = selectedHeroes.map(h => h.sphere).concat(['Neutral', '']);
  const spheres = new Set();
  const tags    = new Set();

  allDeckCards.forEach(card => {
    if (!allowedSpheres.includes(card.sphere)) return;
    spheres.add(card.sphere || 'Neutral');
    if (card.tags) card.tags.forEach(t => tags.add(t));
  });

  Array.from(spheres).sort().forEach(s => {
    const o = document.createElement('option'); o.value = s; o.textContent = s; sphereSelect.appendChild(o);
  });
  Array.from(tags).sort().forEach(t => {
    const o = document.createElement('option'); o.value = t; o.textContent = t; tagSelect.appendChild(o);
  });
}

function applyPhase2Filters() {
  const selectedType   = document.getElementById('type-filter').value;
  const selectedTag    = document.getElementById('deck-tag-filter').value;
  const selectedSphere = document.getElementById('deck-sphere-filter').value;
  const searchText     = document.getElementById('name-search').value.toLowerCase().trim();
  const textSearch     = document.getElementById('text-search').value.toLowerCase().trim();
  const sortBy         = document.getElementById('sort-filter').value;
  const minStatType    = document.getElementById('min-stat-type').value;
  const minStatVal     = parseInt(document.getElementById('min-stat-val').value) || 0;

  const allowedSpheres = selectedHeroes.map(h => h.sphere).concat(['Neutral', '']);

  let filtered = allDeckCards.filter(card => {
    if (!allowedSpheres.includes(card.sphere)) return false;
    const cardSphere = card.sphere || 'Neutral';
    if (selectedSphere !== 'All' && cardSphere !== selectedSphere) return false;
    if (selectedType   !== 'All' && card.type !== selectedType) return false;
    if (selectedTag    !== 'All' && (!card.tags || !card.tags.includes(selectedTag))) return false;
    if (searchText !== '' && !card.name.toLowerCase().includes(searchText)) return false;
    if (textSearch  !== '' && !(card.text || '').toLowerCase().includes(textSearch)) return false;
    if (minStatType !== 'none' && minStatVal > 0) {
      const val = card[minStatType];
      if (val === null || val === undefined || val < minStatVal) return false;
    }
    return true;
  });

  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'cost-asc':  return (parseInt(a.cost_threat) || 0) - (parseInt(b.cost_threat) || 0);
      case 'cost-desc': return (parseInt(b.cost_threat) || 0) - (parseInt(a.cost_threat) || 0);
      case 'wp':  return (b.willpower || 0) - (a.willpower || 0);
      case 'atk': return (b.attack    || 0) - (a.attack    || 0);
      case 'def': return (b.defense   || 0) - (a.defense   || 0);
      case 'hp':  return (b.health    || 0) - (a.health    || 0);
      default:    return a.name.localeCompare(b.name);
    }
  });

  renderDeckCards(filtered);
}

function clearCardSearch() {
  document.getElementById('name-search').value = '';
  applyPhase2Filters();
}

function clearTextSearch() {
  document.getElementById('text-search').value = '';
  applyPhase2Filters();
}

function renderDeckCards(cardsToRender) {
  const container = document.getElementById('deck-card-container');
  container.innerHTML = '';
  cardsToRender.forEach(card => {
    const div = document.createElement('div');
    div.className = 'hero-card';

    const entry = deckMap.get(cardKey(card));
    const qty = entry ? entry.qty : 0;
    if (qty > 0) {
      div.classList.add('selected');
      const badge = document.createElement('div');
      badge.className = 'qty-badge';
      badge.textContent = qty;
      div.appendChild(badge);
    }

    const nameSpan = document.createElement('strong');
    nameSpan.textContent = card.name;
    const detailSpan = document.createElement('span');
    detailSpan.style.cssText = 'font-size:0.9em;color:#555;';
    detailSpan.innerHTML = `<br>${escapeHtml(card.type)} | Cost: ${escapeHtml(card.cost_threat)}`;
    div.appendChild(nameSpan);
    div.appendChild(detailSpan);

    div.onclick = () => { currentViewedCard = card; addCardToDeck(card); };
    div.oncontextmenu = e => { e.preventDefault(); currentViewedCard = card; removeCardFromDeck(card); };
    container.appendChild(div);
  });
}

function refreshDeckUI() {
  updatePhase2Dashboard();
  applyPhase2Filters();
  renderPhase2QuestPanel();
  renderOffSphereBanner();
  if (document.getElementById('phase3').classList.contains('active')) { initPhase3(); renderQuestMatchup(); }
  autoSave();
}

function addCardToDeck(card) {
  // No hard cap: the real rule is a *minimum* of 50 with no maximum. Deck health
  // flags <50 as incomplete and >50 as a consistency note; only the 3-copy limit
  // is a real deckbuilding rule, so it stays enforced.
  const key = cardKey(card);
  const cur = deckMap.has(key) ? deckMap.get(key).qty : 0;
  if (cur >= 3) return alert('You can only have up to 3 copies of a card.');
  deckMap.set(key, { card, qty: cur + 1 });
  refreshDeckUI();
}

function clearDeck() {
  if (!deckMap.size) return;
  if (!confirm('Remove all cards from your deck?')) return;
  deckMap.clear();
  refreshDeckUI();
}

function removeCardFromDeck(card) {
  const key = cardKey(card);
  if (!deckMap.has(key)) return;
  const cur = deckMap.get(key).qty;
  if (cur > 1) deckMap.set(key, { card, qty: cur - 1 });
  else deckMap.delete(key);
  refreshDeckUI();
}

// Deck cards whose sphere no longer matches any selected hero — stranded when a
// hero is removed. Neutral/blank spheres are always allowed. The Phase 2 grid
// filters these out, so they're otherwise awkward to remove.
function getOffSphereCards() {
  const allowed = selectedHeroes.map(h => h.sphere);
  const out = [];
  deckMap.forEach(item => {
    const sp = item.card.sphere;
    if (sp && sp !== 'Neutral' && !allowed.includes(sp)) out.push(item);
  });
  return out;
}

function removeOffSphereCards() {
  const offSphere = getOffSphereCards();
  if (!offSphere.length) return;
  const n = offSphere.reduce((s, i) => s + i.qty, 0);
  if (!confirm(`Remove ${n} off-sphere card${n !== 1 ? 's' : ''} from your deck?`)) return;
  offSphere.forEach(item => deckMap.delete(cardKey(item.card)));
  refreshDeckUI();
}

function renderOffSphereBanner() {
  const el = document.getElementById('off-sphere-banner');
  if (!el) return;
  const off = getOffSphereCards();
  if (!off.length) { el.style.display = 'none'; el.innerHTML = ''; return; }
  const n       = off.reduce((s, i) => s + i.qty, 0);
  const spheres = [...new Set(off.map(i => i.card.sphere))].sort().map(escapeHtml).join(', ');
  el.style.display = 'block';
  el.innerHTML = `<div style="padding:10px;background:#fff3cd;border:1px solid #ffc107;border-radius:6px;font-size:0.85em;">
    <strong style="color:#856404;">⚠ ${n} off-sphere card${n !== 1 ? 's' : ''}</strong>
    <div style="color:#856404;margin:4px 0 8px;">No selected hero provides: ${spheres}. These are hidden from the card grid.</div>
    <button onclick="removeOffSphereCards()" style="padding:4px 12px;font-size:0.85em;background:#dc3545;color:#fff;border:none;border-radius:4px;cursor:pointer;">Remove off-sphere cards</button>
  </div>`;
}

function renderDeckStatsBar() {
  const bar = document.getElementById('deck-stats-bar');
  if (!bar) return;
  let allies = 0, attachments = 0, events = 0, sideQuests = 0, totalCost = 0, costCount = 0;
  deckMap.forEach(({ card, qty }) => {
    if (card.type === 'Ally')       allies += qty;
    else if (card.type === 'Attachment') attachments += qty;
    else if (card.type === 'Event') events += qty;
    else if (card.type === 'Player Side Quest') sideQuests += qty;
    const c = parseInt(card.cost_threat);
    if (!isNaN(c)) { totalCost += c * qty; costCount += qty; }
  });
  const avg = costCount > 0 ? (totalCost / costCount).toFixed(1) : '—';
  bar.innerHTML = `<div style="display:flex;gap:5px;flex-wrap:wrap;font-size:0.8em;margin-top:8px;">
    <span style="background:#dbeafe;padding:2px 8px;border-radius:10px;">${allies} Allies</span>
    <span style="background:#fce7f3;padding:2px 8px;border-radius:10px;">${attachments} Attachments</span>
    <span style="background:#d1fae5;padding:2px 8px;border-radius:10px;">${events} Events</span>
    ${sideQuests ? `<span style="background:#ede9fe;padding:2px 8px;border-radius:10px;">${sideQuests} Side Quests</span>` : ''}
    <span style="background:#fef9c3;padding:2px 8px;border-radius:10px;">Avg cost: ${avg}</span>
  </div>`;
}

function updatePhase2Dashboard() {
  const total = Array.from(deckMap.values()).reduce((s, i) => s + i.qty, 0);
  document.getElementById('deck-counter').innerText = total;
  renderDeckStatsBar();

  const listContainer = document.getElementById('decklist-container');
  listContainer.innerHTML = '';
  const sortedItems = Array.from(deckMap.values()).sort((a, b) => a.card.name.localeCompare(b.card.name));
  if (sortedItems.length === 0) {
    listContainer.innerHTML = '<span style="color:#999;font-style:italic;">No cards added yet.</span>';
  } else {
    sortedItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'decklist-item';
      div.innerHTML = `<span><strong>${item.qty}x</strong> ${escapeHtml(item.card.name)}</span>`;
      div.onclick = () => { currentViewedCard = item.card; updatePhase2Dashboard(); };
      listContainer.appendChild(div);
    });
  }

  const detailsContainer = document.getElementById('deck-details-container');
  if (!currentViewedCard) {
    detailsContainer.innerHTML = '<p style="color:#666;font-style:italic;">Click a card in the grid to view details and add copies.</p>';
    return;
  }

  const card     = currentViewedCard;
  const traits   = card.traits ? escapeHtml(card.traits.join(', ')) : 'None';
  const text     = card.text   ? escapeHtml(card.text).replace(/\n/g, '<br><br>') : 'No text available.';
  const summary  = escapeHtml(card.summary || '');
  const cur      = deckMap.has(cardKey(card)) ? deckMap.get(cardKey(card)).qty : 0;

  detailsContainer.innerHTML = `
    <div class="detail-card" style="margin-bottom:0;">
      ${renderCardImage(card)}
      <h3>${escapeHtml(card.name)}</h3>
      <p class="stats">Sphere: ${escapeHtml(card.sphere || 'Neutral')} | Type: ${escapeHtml(card.type)} | Cost: ${escapeHtml(card.cost_threat)}</p>
      ${renderStatBadges(card)}
      <p><em><strong>Traits:</strong> ${traits}</em></p>
      <hr style="border:0;border-top:1px solid #eee;margin:10px 0;">
      <p>${text}</p>
      <hr style="border:0;border-top:1px solid #eee;margin:10px 0;">
      <p style="font-size:0.9em;color:#555;"><strong>Summary:</strong> ${summary}</p>
      <div style="margin-top:15px;padding:10px;background:#e9ecef;border-radius:5px;display:flex;align-items:center;justify-content:space-between;">
        <strong>Quantity in Deck:</strong>
        <div style="display:flex;align-items:center;gap:10px;">
          <button id="btn-minus" style="padding:5px 15px;font-weight:bold;cursor:pointer;">-</button>
          <span id="qty-display" style="font-size:1.2em;font-weight:bold;width:20px;text-align:center;">${cur}</span>
          <button id="btn-plus"  style="padding:5px 15px;font-weight:bold;cursor:pointer;">+</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-minus').onclick = () => removeCardFromDeck(currentViewedCard);
  document.getElementById('btn-plus').onclick  = () => addCardToDeck(currentViewedCard);
}

function importDecklist() {
  const text = document.getElementById('import-textarea').value;
  if (!text.trim()) return alert('Please paste a decklist first.');

  // Confirm before discarding the current player's heroes/deck.
  if ((selectedHeroes.length || deckMap.size) &&
      !confirm('Importing replaces this player\'s current heroes and deck. Continue?')) return;

  // Clear current player's deck in-place (preserves the reference in players[])
  selectedHeroes.splice(0);
  deckMap.clear();

  // Resolve a printed name to a card. Try the line as-is first so names that
  // legitimately end in a parenthetical (e.g. "Gandalf (MotK)") still match;
  // only if that fails do we strip a trailing "(set/sphere)" annotation.
  const resolve = name => {
    const lc = name.toLowerCase();
    let m = cardDatabase.find(c => c.name.toLowerCase() === lc);
    if (m) return m;
    const stripped = name.replace(/\s*\(.*?\)\s*$/, '').trim().toLowerCase();
    if (stripped && stripped !== lc) m = cardDatabase.find(c => c.name.toLowerCase() === stripped);
    return m || null;
  };

  const lines = text.split('\n');
  let cardsFound = 0;
  const notFound = [];
  const skippedHeroes = [];

  lines.forEach(line => {
    let cleanLine = line.trim();
    if (!cleanLine || cleanLine.startsWith('HEROES') || cleanLine.startsWith('DECK') || cleanLine.startsWith('LotR LCG') || cleanLine.startsWith('===')) return;

    let qty = 1;
    const qtyMatch = cleanLine.match(/^(\d+)x?\s+(.+)$/i);
    if (qtyMatch) { qty = parseInt(qtyMatch[1]); cleanLine = qtyMatch[2].trim(); }

    const matched = resolve(cleanLine);

    if (matched) {
      cardsFound++;
      if (matched.type === 'Hero') {
        if (selectedHeroes.some(h => heroMatches(h, matched.ringsdb_code, matched.name))) return;
        if (selectedHeroes.length < 3) selectedHeroes.push(matched);
        else skippedHeroes.push(matched.name);
      } else {
        const key = cardKey(matched);
        const cur = deckMap.has(key) ? deckMap.get(key).qty : 0;
        deckMap.set(key, { card: matched, qty: Math.min(cur + qty, 3) });
      }
    } else if (cleanLine && !cleanLine.includes('Threat:') && !['Allies','Events','Attachments','Side Quests'].some(w => cleanLine.includes(w))) {
      notFound.push(cleanLine);
    }
  });

  updatePhase1Dashboard();
  checkPhase1Completion();
  applyPhase1Filters();
  applyPhase2Filters();
  updatePhase2Dashboard();
  renderPhase2QuestPanel();
  autoSave();

  if (cardsFound > 0) {
    const total = deckTotal(deckMap);
    let msg = `Imported ${selectedHeroes.length} Heroes and ${total} Cards!`;
    if (total > 50) msg += `\n\nNote: ${total} deck cards exceeds the 50-card minimum — trim for consistency.`;
    if (skippedHeroes.length) msg += `\n\nSkipped (already 3 heroes):\n- ${skippedHeroes.join('\n- ')}`;
    if (notFound.length) msg += `\n\nCould not find:\n- ${notFound.join('\n- ')}`;
    alert(msg);
  } else {
    alert('Could not recognize any cards. Check the formatting!');
  }
}


// ==========================================
// PHASE 3: ANALYSIS & EXPORT
// ==========================================

function initPhase3() {
  renderFellowshipStats();
  renderDeckHealth();
  renderCostCurve();
  renderSynergies();
  renderQuestMatchup();
  if (typeof renderCardVerdicts === 'function') renderCardVerdicts(); // Phase D1
  generateExport();
}

function renderDeckHealth() {
  const contentEl = document.getElementById('deck-health-content');
  if (!contentEl) return;

  const deckItems = Array.from(deckMap.values());
  const deckSize  = deckItems.reduce((s, i) => s + i.qty, 0);
  const uniqConflicts = uniquenessWithinPlayer(players[activePlayer]);
  // Rules Reference: a deck may include max 1 copy of each player side quest,
  // by title (unlike the normal 3-copy limit). Warn, don't block.
  const sideQuestOver = deckItems.filter(i => i.card.type === 'Player Side Quest' && i.qty > 1);

  // Hero stats
  const startingThreat = selectedHeroes.reduce((s, h) => s + parseInt(h.cost_threat || 0), 0);
  const openingWP      = selectedHeroes.reduce((s, h) => s + (h.willpower || 0), 0);
  const openingATK     = selectedHeroes.reduce((s, h) => s + (h.attack    || 0), 0);
  const maxHeroHP      = selectedHeroes.length ? Math.max(...selectedHeroes.map(h => h.health || 0)) : 0;

  // Deck composition counts
  const allyCount       = deckItems.filter(i => i.card.type === 'Ally').reduce((s, i) => s + i.qty, 0);
  const attachmentCount = deckItems.filter(i => i.card.type === 'Attachment').reduce((s, i) => s + i.qty, 0);
  const eventCount      = deckItems.filter(i => i.card.type === 'Event').reduce((s, i) => s + i.qty, 0);
  const sideQuestCount  = deckItems.filter(i => i.card.type === 'Player Side Quest').reduce((s, i) => s + i.qty, 0);

  // Card draw (tagged). The data uses "Card Draw (Active)" and "Card Draw (Passive)".
  const cardDrawCount = deckItems
    .filter(i => i.card.tags && (i.card.tags.includes('Card Draw (Active)') || i.card.tags.includes('Card Draw (Passive)')))
    .reduce((s, i) => s + i.qty, 0);

  // Cost curve: % of deck cards costing 3+
  const highCostCount = deckItems
    .filter(i => { const n = parseInt(i.card.cost_threat); return !isNaN(n) && n >= 3; })
    .reduce((s, i) => s + i.qty, 0);
  const highCostPct = deckSize > 0 ? Math.round((highCostCount / deckSize) * 100) : 0;

  // Sphere ratio: compare deck proportion to hero proportion
  const heroSpheres = {};
  selectedHeroes.forEach(h => {
    if (h.sphere && h.sphere !== 'Neutral') heroSpheres[h.sphere] = (heroSpheres[h.sphere] || 0) + 1;
  });
  const totalHeroSp = Object.values(heroSpheres).reduce((s, n) => s + n, 0);

  const deckSpheres = {};
  deckItems.forEach(({ card, qty }) => {
    if (card.sphere && card.sphere !== 'Neutral') deckSpheres[card.sphere] = (deckSpheres[card.sphere] || 0) + qty;
  });
  const totalDeckSp = Object.values(deckSpheres).reduce((s, n) => s + n, 0);

  const orphanSpheres = Object.keys(deckSpheres).filter(sp => !heroSpheres[sp]);
  let maxMismatch = 0;
  if (totalHeroSp > 0 && totalDeckSp > 0) {
    for (const [sp, cnt] of Object.entries(heroSpheres)) {
      const diff = Math.abs((deckSpheres[sp] || 0) / totalDeckSp - cnt / totalHeroSp);
      if (diff > maxMismatch) maxMismatch = diff;
    }
  }

  // Render helpers
  const G = '#28a745', Y = '#e6a817', R = '#dc3545';
  const dot = c => `<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${c};margin-right:8px;flex-shrink:0;"></span>`;

  const metricRow = (color, label, value, note) => `
    <div style="display:flex;align-items:baseline;padding:4px 0;border-bottom:1px solid #f4f4f4;font-size:0.87em;">
      ${dot(color)}
      <span style="flex:1;color:#333;">${label}</span>
      <span style="font-weight:bold;color:#111;min-width:40px;text-align:right;margin-right:10px;">${value}</span>
      <span style="color:#777;font-size:0.88em;min-width:130px;text-align:right;">${note}</span>
    </div>`;

  const sectionHdr = title => `<div style="font-size:0.72em;text-transform:uppercase;letter-spacing:0.7px;font-weight:bold;color:#999;margin:13px 0 4px;padding-bottom:3px;border-bottom:2px solid #eee;">${title}</div>`;

  // Hero starting stats
  const threatColor = startingThreat >= 35 ? R : startingThreat >= 33 ? Y : G;
  const threatNote  = startingThreat >= 35 ? 'High — add threat reduction' : startingThreat >= 33 ? 'Elevated' : 'Ideal (26–32)';

  const wpColor = openingWP >= 5 ? G : openingWP >= 4 ? Y : R;
  const wpNote  = openingWP >= 5 ? 'Target: 5–7' : openingWP >= 4 ? 'Slightly low' : 'Too low';

  const atkColor = openingATK >= 6 ? G : openingATK >= 4 ? Y : R;
  const atkNote  = openingATK >= 6 ? 'Target: 6+' : openingATK >= 4 ? 'Slightly low' : 'Too low';

  const hpColor = maxHeroHP >= 5 ? G : R;
  const hpNote  = maxHeroHP >= 5 ? 'Tank hero present' : 'No hero with 5+ HP';

  // Deck composition. 50 is a minimum, not a maximum: exactly 50 is ideal,
  // over 50 is legal but dilutes consistency, under 50 is an incomplete deck.
  const sizeColor = deckSize === 50 ? G : deckSize > 50 || deckSize >= 45 ? Y : R;
  const sizeNote  = deckSize === 50 ? 'Complete (50)'
    : deckSize > 50 ? `+${deckSize - 50} over — trim for consistency`
    : `Incomplete — ${50 - deckSize} to reach 50`;

  const allyColor = allyCount >= 20 ? G : allyCount >= 12 ? Y : R;
  const attColor  = attachmentCount >= 10 && attachmentCount <= 16 ? G : attachmentCount >= 7 ? Y : R;
  const evtColor  = eventCount >= 10 && eventCount <= 16 ? G : eventCount >= 7 ? Y : R;

  // Coverage
  const drawColor = cardDrawCount >= 6 ? G : cardDrawCount >= 3 ? Y : R;
  const drawNote  = cardDrawCount >= 6 ? 'Good coverage' : cardDrawCount >= 3 ? 'May be inconsistent' : 'Critical — add draw effects';

  const costColor = highCostPct <= 20 ? G : highCostPct <= 30 ? Y : R;
  const costNote  = highCostPct <= 20 ? 'Good curve' : highCostPct <= 30 ? 'Slightly top-heavy' : 'Too many expensive cards';

  let sphereColor = G, sphereNote = 'Matches hero spheres';
  if (orphanSpheres.length) {
    sphereColor = R;
    sphereNote  = `No hero for: ${orphanSpheres.join(', ')}`;
  } else if (maxMismatch > 0.25) {
    sphereColor = Y;
    sphereNote  = 'Ratio differs from heroes';
  }

  const sphereBreakdown = totalDeckSp > 0
    ? Object.entries(deckSpheres).sort((a, b) => b[1] - a[1]).map(([sp, n]) => {
        const dp = Math.round(n / totalDeckSp * 100);
        const hp = totalHeroSp > 0 ? Math.round((heroSpheres[sp] || 0) / totalHeroSp * 100) : null;
        return hp !== null ? `${sp}: ${dp}% (h:${hp}%)` : `${sp}: ${dp}%`;
      }).join(' · ')
    : '';

  contentEl.innerHTML =
    sectionHdr('Hero Starting Stats') +
    metricRow(threatColor, 'Starting Threat',   startingThreat || '—', threatNote) +
    metricRow(wpColor,     'Opening Willpower',  openingWP      || '—', wpNote) +
    metricRow(atkColor,    'Opening Attack',      openingATK     || '—', atkNote) +
    metricRow(hpColor,     'HP Buffer',           maxHeroHP ? `${maxHeroHP} HP` : '—', hpNote) +

    sectionHdr(`Deck Composition — ${deckSize} / 50 min`) +
    metricRow(sizeColor,  'Total Cards',   `${deckSize}`,       sizeNote) +
    metricRow(allyColor,  'Allies',         allyCount,           'target ~25') +
    metricRow(attColor,   'Attachments',    attachmentCount,     'target 12–13') +
    metricRow(evtColor,   'Events',         eventCount,          'target 12–13') +
    (sideQuestCount ? metricRow(G, 'Side Quests', sideQuestCount, 'optional') : '') +

    sectionHdr('Coverage') +
    metricRow(drawColor,   'Card Draw',      `${cardDrawCount}`,  drawNote) +
    metricRow(costColor,   'Cards Cost 3+',  `${highCostPct}%`,   costNote) +
    metricRow(sphereColor, 'Sphere Ratio',   '',                  sphereNote) +
    (sphereBreakdown ? `<div style="font-size:0.78em;color:#888;padding:3px 0 5px 17px;">${sphereBreakdown}</div>` : '') +

    (uniqConflicts.length
      ? sectionHdr('Uniqueness') +
        uniqConflicts.map(name =>
          metricRow(R, escapeHtml(name), '⚠', 'Two unique versions — only one plays')).join('')
      : '') +

    (sideQuestOver.length
      ? sectionHdr('Side Quest Limit') +
        sideQuestOver.map(i =>
          metricRow(R, escapeHtml(i.card.name), `${i.qty}×`, 'Rules allow only 1 copy per side quest')).join('')
      : '');
}

function renderFellowshipStats() {
  const card    = document.getElementById('fellowship-stats-card');
  const content = document.getElementById('fellowship-stats-content');
  if (players.length <= 1) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  let totWP = 0, totATK = 0, totDEF = 0, totHP = 0;

  const rows = players.map((p, i) => {
    const threat = p.heroes.reduce((s, h) => s + parseInt(h.cost_threat || 0), 0);
    const pTotal = deckTotal(p.deck);

    [...p.heroes.map(h => ({ card: h, qty: 1 })), ...Array.from(p.deck.values())].forEach(({ card: c, qty }) => {
      totWP  += (c.willpower || 0) * qty;
      totATK += (c.attack    || 0) * qty;
      totDEF += (c.defense   || 0) * qty;
      totHP  += (c.health    || 0) * qty;
    });

    const isActive = i === activePlayer;
    return `<div style="padding:6px 12px;border-radius:4px;border:1px solid ${isActive ? '#007bff' : '#ddd'};background:${isActive ? '#e8f4ff' : '#f8f9fa'};">
      <strong>${escapeHtml(p.name)}</strong> &nbsp;·&nbsp; Threat: ${threat} &nbsp;·&nbsp; ${p.heroes.length} heroes &nbsp;·&nbsp; ${pTotal} cards
    </div>`;
  });

  const pill = (label, val, bg, col) =>
    `<div style="background:${bg};border-radius:4px;padding:5px 14px;"><span style="color:#666;font-size:0.8em;">${label}: </span><strong style="color:${col};">${val}</strong></div>`;

  const crossUnique = uniquenessAcrossFellowship();
  const uniqHtml = crossUnique.length
    ? `<div style="margin-top:12px;padding:8px 12px;background:#fdecea;border:1px solid #f5c6cb;border-radius:4px;font-size:0.85em;">
        <strong style="color:#8B0000;">⚠ Uniqueness conflicts across the fellowship</strong>
        <ul style="margin:5px 0 0;padding-left:18px;line-height:1.6;">
          ${crossUnique.map(c => `<li><strong>${escapeHtml(c.name)}</strong> — used by ${escapeHtml(c.players.join(', '))} (only one can be in play at a time)</li>`).join('')}
        </ul>
      </div>`
    : '';

  content.innerHTML = `
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">${rows.join('')}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${pill('Total WP',  totWP,  '#e8f4ff', '#0056b3')}
      ${pill('Total ATK', totATK, '#fff0f0', '#c0392b')}
      ${pill('Total DEF', totDEF, '#f0fff4', '#1a7a3c')}
      ${pill('Total HP',  totHP,  '#fff8e8', '#a06000')}
    </div>
    ${uniqHtml}
  `;
}

function renderCostCurve() {
  const costs     = { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5+': 0 };
  const costCards = { '0': [], '1': [], '2': [], '3': [], '4': [], '5+': [] };

  deckMap.forEach(item => {
    const raw = item.card.cost_threat;
    let key;
    if (raw === 'X' || raw === 'x') {
      key = '0';
    } else {
      const n = parseInt(raw);
      key = isNaN(n) ? '0' : n >= 5 ? '5+' : n.toString();
    }
    costs[key] += item.qty;
    costCards[key].push(item);
  });

  const container = document.getElementById('cost-curve-container');
  container.innerHTML = '';
  document.getElementById('cost-hover-list').innerHTML = '';
  document.getElementById('cost-card-detail').innerHTML = '';

  const maxCount = Math.max(...Object.values(costs), 1);
  let activeRect = null;

  for (const [cost, count] of Object.entries(costs)) {
    const heightPct = (count / maxCount) * 100;
    const barDiv = document.createElement('div');
    barDiv.style.cssText = 'flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;cursor:pointer;';

    const rect = document.createElement('div');
    rect.style.cssText = `width:70%;height:${heightPct}%;background:#007bff;border-radius:3px 3px 0 0;min-height:2px;transition:background 0.15s;`;

    // Build children as nodes. Using `innerHTML +=` after appendChild would
    // re-parse the bar and detach the live `rect` the hover handler mutates.
    const countLabel = document.createElement('span');
    countLabel.style.cssText = 'font-size:0.9em;color:#666;font-weight:bold;';
    countLabel.textContent = count;
    const costLabel = document.createElement('strong');
    costLabel.style.marginTop = '8px';
    costLabel.textContent = cost;
    barDiv.appendChild(countLabel);
    barDiv.appendChild(rect);
    barDiv.appendChild(costLabel);

    barDiv.addEventListener('mouseenter', () => {
      if (activeRect) activeRect.style.background = '#007bff';
      rect.style.background = '#0056b3';
      activeRect = rect;
      showCostCardList(cost, costCards[cost]);
    });

    container.appendChild(barDiv);
  }
}

function showCostCardList(costKey, items) {
  document.getElementById('cost-card-detail').innerHTML = '';
  const listDiv = document.getElementById('cost-hover-list');

  if (!items || items.length === 0) {
    listDiv.innerHTML = `<p style="color:#999;font-style:italic;">No cards at cost ${costKey}.</p>`;
    return;
  }

  const label = costKey === '0' ? 'Cost 0 / X' : `Cost ${costKey}`;
  let html = `<strong style="color:#0056b3;">${label}</strong><ul style="margin:6px 0 0 0;padding-left:18px;line-height:1.8;">`;
  items.forEach(({ card, qty }) => {
    html += `<li><a href="#" style="text-decoration:none;color:#333;" data-key="${escapeHtml(cardKey(card))}">${qty}× ${escapeHtml(card.name)}</a> <span style="color:#999;font-size:0.85em;">(${escapeHtml(card.type)})</span></li>`;
  });
  html += '</ul>';
  listDiv.innerHTML = html;

  listDiv.querySelectorAll('a[data-key]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const found = items.find(i => cardKey(i.card) === link.dataset.key);
      if (found) showCostCardDetail(found.card);
    });
  });
}

function showCostCardDetail(card) {
  const traits  = card.traits ? escapeHtml(card.traits.join(', ')) : 'None';
  const text    = card.text   ? escapeHtml(card.text).replace(/\n/g, '<br><br>') : 'No text available.';
  const summary = escapeHtml(card.summary || '');
  document.getElementById('cost-card-detail').innerHTML = `
    <div class="detail-card" style="margin-bottom:0;margin-top:0;border-color:#0056b3;">
      ${renderCardImage(card)}
      <h3 style="color:#0056b3;">${escapeHtml(card.name)}</h3>
      <p class="stats">Sphere: ${escapeHtml(card.sphere)} | Type: ${escapeHtml(card.type)} | Cost: ${escapeHtml(card.cost_threat)}</p>
      ${renderStatBadges(card)}
      <p><em><strong>Traits:</strong> ${traits}</em></p>
      <hr style="border:0;border-top:1px solid #eee;margin:10px 0;">
      <p style="font-size:0.9em;">${text}</p>
      <hr style="border:0;border-top:1px solid #eee;margin:10px 0;">
      <p style="font-size:0.85em;color:#555;"><strong>Summary:</strong> ${summary}</p>
    </div>
  `;
}

function renderSynergies() {
  const traitsCount  = {};
  const tagsCount    = {};
  const heroTraitSet = new Set();

  selectedHeroes.forEach(h => {
    if (h.traits) h.traits.forEach(t => heroTraitSet.add(t));
  });

  [...selectedHeroes.map(h => ({ card: h, qty: 1 })), ...Array.from(deckMap.values())].forEach(({ card, qty }) => {
    if (card.traits) card.traits.forEach(t => traitsCount[t] = (traitsCount[t] || 0) + qty);
    if (card.tags)   card.tags.forEach(t   => tagsCount[t]   = (tagsCount[t]   || 0) + qty);
  });

  const deckTraitSet = new Set();
  deckMap.forEach(({ card }) => { if (card.traits) card.traits.forEach(t => deckTraitSet.add(t)); });

  // --- Sphere Balance ---
  const sphereResources  = {};
  const sphereCardCounts = {};
  const sphereColors = { Leadership:'#8B0000', Tactics:'#c0521c', Spirit:'#0056b3', Lore:'#1a7a3c', Neutral:'#555' };

  selectedHeroes.forEach(h => {
    if (h.sphere) sphereResources[h.sphere] = (sphereResources[h.sphere] || 0) + 1;
  });
  deckMap.forEach(({ card, qty }) => {
    const s = card.sphere || 'Neutral';
    sphereCardCounts[s] = (sphereCardCounts[s] || 0) + qty;
  });

  const allSpheres = [...new Set([...Object.keys(sphereResources), ...Object.keys(sphereCardCounts)])].sort();
  const maxCards   = Math.max(...Object.values(sphereCardCounts), 1);

  const sphereHtml = allSpheres.map(sphere => {
    const res    = sphereResources[sphere]  || 0;
    const cards  = sphereCardCounts[sphere] || 0;
    const color  = sphereColors[sphere] || '#888';
    const warn   = sphere !== 'Neutral' && res === 0 && cards > 0
      ? ' <span style="color:#dc3545;" title="No hero generates this sphere">⚠</span>' : '';
    const barPct = Math.round((cards / maxCards) * 100);
    return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <div style="width:90px;font-weight:bold;color:${color};font-size:0.9em;">${sphere}${warn}</div>
      <div style="flex:1;background:#e9ecef;border-radius:4px;height:16px;overflow:hidden;">
        <div style="width:${barPct}%;height:100%;background:${color};opacity:0.75;border-radius:4px;"></div>
      </div>
      <div style="font-size:0.82em;color:#555;white-space:nowrap;min-width:100px;">${cards} card${cards!==1?'s':''} ${sphere!=='Neutral'?`· ${res} hero${res!==1?'s':''}`:''}
      </div>
    </div>`;
  }).join('');

  document.getElementById('sphere-balance-container').innerHTML = `
    <div style="margin-bottom:16px;">
      <strong style="display:block;margin-bottom:8px;color:#333;">Sphere Distribution</strong>
      ${sphereHtml || '<em style="color:#999;">No cards in deck.</em>'}
    </div>
    <hr style="border:0;border-top:1px solid #eee;margin-bottom:16px;">
  `;

  // --- Clickable Trait/Tag lists ---
  const topTraits = Object.entries(traitsCount).sort((a,b) => b[1]-a[1]).slice(0, 8);
  const topTags   = Object.entries(tagsCount).sort((a,b) => b[1]-a[1]).slice(0, 8);

  const makeItems = (entries, type) => entries.map(([t, c]) => {
    const heroMark = (type === 'trait' && heroTraitSet.has(t))
      ? '<span style="color:#28a745;font-size:0.75em;margin-left:4px;">● hero</span>' : '';
    const safe = escapeHtml(t);
    return `<li class="syn-item" data-type="${type}" data-value="${safe}"
      style="cursor:pointer;padding:3px 5px;border-radius:3px;list-style:disc;">
      ${safe} <span style="color:#888;">(${c})</span>${heroMark}
    </li>`;
  }).join('');

  document.getElementById('synergy-container').innerHTML = `
    <div style="flex:1;"><strong>Top Traits</strong><ul style="padding-left:22px;line-height:1.9;margin-top:5px;">${makeItems(topTraits,'trait')}</ul></div>
    <div style="flex:1;"><strong>Key Mechanics</strong><ul style="padding-left:22px;line-height:1.9;margin-top:5px;">${makeItems(topTags,'tag')}</ul></div>
  `;

  document.getElementById('synergy-container').querySelectorAll('.syn-item').forEach(li => {
    li.addEventListener('mouseenter', () => li.style.background = '#e9f5ff');
    li.addEventListener('mouseleave', () => li.style.background = 'transparent');
    li.addEventListener('click', () => showTraitDetail(li.dataset.type, li.dataset.value));
  });

  // --- Hero ↔ Deck Alignment ---
  const sharedTraits   = [...heroTraitSet].filter(t => deckTraitSet.has(t));
  const heroOnlyTraits = [...heroTraitSet].filter(t => !deckTraitSet.has(t));
  const deckOnlyTraits = [...deckTraitSet].filter(t => !heroTraitSet.has(t));

  const pill = (t, bg, border) =>
    `<span style="background:${bg};border:1px solid ${border};padding:1px 8px;border-radius:12px;margin:2px;display:inline-block;font-size:0.88em;">${escapeHtml(t)}</span>`;

  let alignHtml = '';
  if (sharedTraits.length)   alignHtml += `<div><span style="color:#28a745;font-weight:bold;">Synergistic:</span> ${sharedTraits.map(t=>pill(t,'#d4edda','#b1dfbb')).join('')}</div>`;
  if (heroOnlyTraits.length) alignHtml += `<div style="margin-top:6px;"><span style="color:#6c757d;font-weight:bold;">Hero only:</span> ${heroOnlyTraits.map(t=>pill(t,'#e9ecef','#ced4da')).join('')}</div>`;
  if (deckOnlyTraits.length) alignHtml += `<div style="margin-top:6px;"><span style="color:#fd7e14;font-weight:bold;">Deck only:</span> ${deckOnlyTraits.map(t=>pill(t,'#fff3cd','#ffc107')).join('')}</div>`;

  document.getElementById('hero-alignment-container').innerHTML = `
    <hr style="border:0;border-top:1px solid #eee;margin:16px 0 10px;">
    <strong style="display:block;margin-bottom:8px;color:#333;">Hero ↔ Deck Alignment</strong>
    <div style="font-size:0.9em;line-height:1.8;">${alignHtml || '<em style="color:#999;">Select heroes and add deck cards to see alignment.</em>'}</div>
  `;

  document.getElementById('synergy-detail-container').innerHTML =
    '<p style="color:#aaa;font-style:italic;font-size:0.85em;margin-top:16px;border-top:1px solid #eee;padding-top:12px;">Click a trait or mechanic above to see cards and suggestions.</p>';
}

function showTraitDetail(type, traitName) {
  const inDeck = [];
  deckMap.forEach(({ card, qty }) => {
    const list = type === 'trait' ? (card.traits || []) : (card.tags || []);
    if (list.includes(traitName)) inDeck.push({ card, qty });
  });

  const heroMatches = selectedHeroes.filter(h => {
    const list = type === 'trait' ? (h.traits || []) : (h.tags || []);
    return list.includes(traitName);
  });

  const allowedSpheres = selectedHeroes.map(h => h.sphere).concat(['Neutral', '']);
  const suggestions = allDeckCards.filter(card => {
    if (deckMap.has(cardKey(card))) return false;
    if (!allowedSpheres.includes(card.sphere)) return false;
    const list = type === 'trait' ? (card.traits || []) : (card.tags || []);
    return list.includes(traitName);
  }).slice(0, 8);

  let html = `<div style="border-top:2px solid #0056b3;padding-top:14px;margin-top:14px;">
    <strong style="color:#0056b3;font-size:1.05em;">${escapeHtml(traitName)}</strong>`;

  if (heroMatches.length) {
    html += `<div style="margin-top:8px;"><strong>Heroes:</strong> ${heroMatches.map(h =>
      `<span style="background:#e9f5ff;border:1px solid #b8d9ff;padding:2px 10px;border-radius:12px;margin:2px;display:inline-block;">${escapeHtml(h.name)}</span>`
    ).join('')}</div>`;
  }

  if (inDeck.length) {
    const inDeckTotal = inDeck.reduce((s, i) => s + i.qty, 0);
    html += `<div style="margin-top:10px;"><strong>In Deck (${inDeckTotal}):</strong>
      <ul style="margin:4px 0;padding-left:20px;line-height:1.7;font-size:0.9em;">`;
    inDeck.sort((a,b) => a.card.name.localeCompare(b.card.name)).forEach(({ card, qty }) => {
      html += `<li>${qty}× ${escapeHtml(card.name)} <span style="color:#999;">(${escapeHtml(card.type)})</span></li>`;
    });
    html += '</ul></div>';
  } else {
    html += `<div style="color:#999;margin-top:8px;font-style:italic;font-size:0.9em;">No deck cards with this ${type}.</div>`;
  }

  if (suggestions.length) {
    html += `<div style="margin-top:10px;background:#fffbf0;border:1px solid #ffeeba;border-radius:5px;padding:10px;">
      <strong>Suggestions (${suggestions.length} cards not in deck):</strong>
      <ul style="margin:4px 0;padding-left:20px;line-height:1.7;font-size:0.9em;">`;
    suggestions.forEach(card => {
      html += `<li>${escapeHtml(card.name)} <span style="color:#999;">(${escapeHtml(card.type)} · Cost ${escapeHtml(card.cost_threat)} · ${escapeHtml(card.sphere || 'Neutral')})</span></li>`;
    });
    html += '</ul></div>';
  } else {
    html += `<div style="color:#999;margin-top:8px;font-style:italic;font-size:0.9em;">No additional cards available in your sphere for this ${type}.</div>`;
  }

  html += '</div>';
  document.getElementById('synergy-detail-container').innerHTML = html;
}

function evaluateQuestMatchup() {
  if (!activeQuest) return null;

  const player   = players[activePlayer];
  const deckCards = Array.from(player.deck.values());
  const heroes    = player.heroes;

  const resolveCardTags = tag => QUEST_TAG_TO_CARD_TAGS[tag] || [tag];

  // A quest tag is measurable only if at least one of its mapped card tags
  // actually exists in the card pool. Otherwise scoring it would always read
  // "Critical Tech Missing" regardless of the deck (e.g. Contract, Solo Play).
  const isMeasurable = tag => resolveCardTags(tag).some(t => allCardTags.has(t));

  const getTagCount = tag => {
    const cardTags = resolveCardTags(tag);
    return deckCards.reduce((n, item) =>
      n + ((item.card.tags && item.card.tags.some(t => cardTags.includes(t))) ? item.qty : 0), 0);
  };

  const techAlerts     = [];
  const punishedAlerts = [];
  const unmeasuredTags = [];

  activeQuest.recommended_tags.forEach(tag => {
    if (!isMeasurable(tag)) { unmeasuredTags.push(tag); return; }
    const count = getTagCount(tag);
    if (count <= 2) {
      techAlerts.push({ status: 'red',    tag, count, label: count === 0 ? 'Critical Tech Missing' : 'Insufficient coverage' });
    } else if (count <= 5) {
      techAlerts.push({ status: 'yellow', tag, count, label: 'Present but may be inconsistent' });
    } else {
      techAlerts.push({ status: 'green',  tag, count, label: 'Strong coverage' });
    }
  });

  activeQuest.punished_tags.forEach(tag => {
    if (!isMeasurable(tag)) return;
    const count = getTagCount(tag);
    if (count > 0) punishedAlerts.push({ tag, count });
  });

  return { techAlerts, punishedAlerts, unmeasuredTags };
}

// ==========================================
// QUEST TAG TOOLTIP STATE & HELPERS
// ==========================================
let ttHideTimer   = null;
let ttPinned      = false;
let ttCurrentTag  = null;
let ttSuppressHide = false;

let ptHideTimer  = null;
let ptPinned     = false;
let ptCurrentTag = null;

const TT_SPHERE_COLOR = { Leadership:'#4a1a6e', Lore:'#1a4e2e', Spirit:'#1a3a6e', Tactics:'#6e1a1a', Neutral:'#555' };

function getTagSuggestions(questTag) {
  const cardTags       = QUEST_TAG_TO_CARD_TAGS[questTag] || [questTag];
  const allowedSpheres = selectedHeroes.map(h => h.sphere).concat(['Neutral', '']);
  const matching = allDeckCards.filter(c => (c.tags || []).some(t => cardTags.includes(t)));
  const inSphere  = matching.filter(c => allowedSpheres.includes(c.sphere));
  const results   = inSphere.length ? inSphere : matching;
  return results
    .sort((a, b) => (parseInt(a.cost_threat) || 0) - (parseInt(b.cost_threat) || 0))
    .slice(0, 6)
    .map(c => ({ ...c, _outOfSphere: !allowedSpheres.includes(c.sphere) }));
}

function getTagCards(tag) {
  const cardTags = QUEST_TAG_TO_CARD_TAGS[tag] || [tag];
  const result = [];
  players[activePlayer].deck.forEach(item => {
    if (item.card.tags && item.card.tags.some(t => cardTags.includes(t))) result.push(item);
  });
  return result;
}

function populateTagTooltip(tag) {
  const tooltip     = document.getElementById('tag-suggestion-tooltip');
  const suggestions = getTagSuggestions(tag);
  const hasOutOfSphere = suggestions.some(c => c._outOfSphere);

  if (!suggestions.length) {
    tooltip.innerHTML = `<div style="font-weight:bold;margin-bottom:4px;font-size:0.9em;color:#0056b3;">Add cards for: ${escapeHtml(tag)}</div><div style="font-size:0.85em;color:#888;">No cards found for this tag.</div>`;
  } else {
    let inner = `<div style="font-weight:bold;margin-bottom:6px;font-size:0.9em;color:#0056b3;">Add cards for: ${escapeHtml(tag)}</div>`;
    if (hasOutOfSphere) {
      inner += `<div style="font-size:0.78em;color:#a0522d;margin-bottom:6px;">No in-sphere cards — showing off-sphere options.</div>`;
    }
    suggestions.forEach(card => {
      const sc  = TT_SPHERE_COLOR[card.sphere] || '#555';
      const img = escapeHtml(card.imagesrc || '');
      const key = cardKey(card);
      const qty = deckMap.has(key) ? deckMap.get(key).qty : 0;
      const cost = parseInt(card.cost_threat);
      const addDisabled    = qty >= 3 ? 'disabled style="padding:1px 7px;font-size:0.78em;background:#ccc;color:#fff;border:none;border-radius:3px;cursor:not-allowed;"' : 'style="padding:1px 7px;font-size:0.78em;background:#0056b3;color:#fff;border:none;border-radius:3px;cursor:pointer;"';
      const removeDisabled = qty === 0 ? 'disabled style="padding:1px 7px;font-size:0.78em;background:#ccc;color:#fff;border:none;border-radius:3px;cursor:not-allowed;"' : 'style="padding:1px 7px;font-size:0.78em;background:#888;color:#fff;border:none;border-radius:3px;cursor:pointer;"';
      inner += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
        <span style="background:${sc};color:#fff;font-size:0.7em;padding:1px 5px;border-radius:3px;white-space:nowrap;">${escapeHtml(card.sphere||'?')}</span>
        <span class="tip-card-name" data-imagesrc="${img}" data-cardname="${escapeHtml(card.name)}" style="flex:1;font-size:0.85em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default;text-decoration:underline dotted #aaa;" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</span>
        <span style="font-size:0.78em;color:#888;margin-right:2px;">${!isNaN(cost) ? cost+'g' : ''}</span>
        <span style="font-size:0.75em;color:#555;min-width:14px;text-align:center;">${qty > 0 ? qty+'×' : ''}</span>
        <button data-key="${escapeHtml(key)}" data-action="add" ${addDisabled}>+</button>
        <button data-key="${escapeHtml(key)}" data-action="remove" ${removeDisabled}>−</button>
      </div>`;
    });
    tooltip.innerHTML = inner;
  }

  const imgPreview = document.getElementById('card-image-preview');
  const imgEl      = document.getElementById('card-image-preview-img');
  tooltip.querySelectorAll('.tip-card-name').forEach(span => {
    span.addEventListener('mouseenter', () => {
      if (!span.dataset.imagesrc) return;
      imgEl.src = span.dataset.imagesrc;
      imgEl.onerror = () => { imgPreview.style.display = 'none'; };
      const tipRect = tooltip.getBoundingClientRect();
      const imgW = 220, imgH = 330;
      const leftP = tipRect.right + 6 + imgW > window.innerWidth ? tipRect.left - imgW - 6 : tipRect.right + 6;
      const topP  = Math.max(8, Math.min(tipRect.top, window.innerHeight - imgH - 8));
      imgPreview.style.left    = `${leftP}px`;
      imgPreview.style.top     = `${topP}px`;
      imgPreview.style.display = 'block';
    });
    span.addEventListener('mouseleave', () => { imgPreview.style.display = 'none'; });
  });

  tooltip.querySelectorAll('button[data-key]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const card = allDeckCards.find(c => cardKey(c) === btn.dataset.key);
      if (!card) return;
      ttSuppressHide = true;
      if (btn.dataset.action === 'remove') removeCardFromDeck(card);
      else addCardToDeck(card);
      populateTagTooltip(ttCurrentTag || tag);
      setTimeout(() => { ttSuppressHide = false; }, 0);
    };
  });

  tooltip.onmouseenter = () => { if (!ttPinned) clearTimeout(ttHideTimer); };
  tooltip.onmouseleave = () => { if (!ttPinned) hideTagTooltip(true); };
  return true;
}

function showTagTooltip(li) {
  clearTimeout(ttHideTimer);
  const tag = li.dataset.tag;
  const ok  = populateTagTooltip(tag);
  if (!ok) return;
  const tooltip = document.getElementById('tag-suggestion-tooltip');
  tooltip.dataset.activeTag = tag;
  tooltip.style.display = 'block';
  const rect   = li.getBoundingClientRect();
  const ttW    = 280;
  let leftPos  = rect.left;
  if (leftPos + ttW > window.innerWidth) leftPos = window.innerWidth - ttW - 8;
  tooltip.style.left = `${leftPos}px`;
  tooltip.style.top  = `${rect.bottom + 2}px`;
}

function hideTagTooltip(immediate) {
  if (ttSuppressHide || ttPinned) return;
  clearTimeout(ttHideTimer);
  const tooltip = document.getElementById('tag-suggestion-tooltip');
  if (immediate) {
    tooltip.style.display = 'none';
    document.getElementById('card-image-preview').style.display = 'none';
  } else {
    ttHideTimer = setTimeout(() => {
      tooltip.style.display = 'none';
      document.getElementById('card-image-preview').style.display = 'none';
    }, 300);
  }
}

function wireTagTooltipLis(container) {
  container.querySelectorAll('.tech-alert-item').forEach(li => {
    // Restore highlight if this li is the pinned one
    if (ttPinned && li.dataset.tag === ttCurrentTag) li.style.background = 'rgba(0,86,179,0.08)';

    li.addEventListener('mouseenter', () => { if (!ttPinned) showTagTooltip(li); });
    li.addEventListener('mouseleave', () => { if (!ttPinned) hideTagTooltip(false); });
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      const tag = li.dataset.tag;
      if (ttPinned && ttCurrentTag === tag) {
        // click same row again → unpin
        ttPinned = false; ttCurrentTag = null;
        li.style.background = '';
        hideTagTooltip(true);
      } else {
        // unpin previous highlight
        container.querySelectorAll('.tech-alert-item').forEach(el => el.style.background = '');
        ttPinned = true; ttCurrentTag = tag;
        li.style.background = 'rgba(0,86,179,0.08)';
        showTagTooltip(li);
      }
    });
  });
}

function populatePunishedTooltip(tag) {
  const tooltip = document.getElementById('tag-suggestion-tooltip');
  const items   = getTagCards(tag);

  let inner = `<div style="font-weight:bold;margin-bottom:6px;font-size:0.9em;color:#8B0000;">⛔ In deck with: ${escapeHtml(tag)}</div>`;

  if (!items.length) {
    inner += `<div style="font-size:0.85em;color:#888;">No cards with this tag in your deck.</div>`;
  } else {
    items.forEach(({ card, qty }) => {
      const sc  = TT_SPHERE_COLOR[card.sphere] || '#555';
      const img = escapeHtml(card.imagesrc || '');
      const key = cardKey(card);
      const addDis = qty >= 3
        ? 'disabled style="padding:1px 7px;font-size:0.78em;background:#ccc;color:#fff;border:none;border-radius:3px;cursor:not-allowed;"'
        : 'style="padding:1px 7px;font-size:0.78em;background:#0056b3;color:#fff;border:none;border-radius:3px;cursor:pointer;"';
      const remDis = qty === 0
        ? 'disabled style="padding:1px 7px;font-size:0.78em;background:#ccc;color:#fff;border:none;border-radius:3px;cursor:not-allowed;"'
        : 'style="padding:1px 7px;font-size:0.78em;background:#dc3545;color:#fff;border:none;border-radius:3px;cursor:pointer;"';
      inner += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
        <span style="background:${sc};color:#fff;font-size:0.7em;padding:1px 5px;border-radius:3px;white-space:nowrap;">${escapeHtml(card.sphere||'?')}</span>
        <span class="punished-card-name" data-imagesrc="${img}" data-cardname="${escapeHtml(card.name)}" style="flex:1;font-size:0.85em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default;text-decoration:underline dotted #aaa;" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</span>
        <span style="font-size:0.75em;color:#555;min-width:18px;text-align:center;">${qty > 0 ? qty+'×' : ''}</span>
        <button class="punished-card-btn" data-key="${escapeHtml(key)}" data-action="add" ${addDis}>+</button>
        <button class="punished-card-btn" data-key="${escapeHtml(key)}" data-action="remove" ${remDis}>−</button>
      </div>`;
    });
  }

  tooltip.innerHTML = inner;

  const imgPreview = document.getElementById('card-image-preview');
  const imgEl      = document.getElementById('card-image-preview-img');
  tooltip.querySelectorAll('.punished-card-name').forEach(span => {
    span.addEventListener('mouseenter', () => {
      if (!span.dataset.imagesrc) return;
      imgEl.src = span.dataset.imagesrc;
      imgEl.onerror = () => { imgPreview.style.display = 'none'; };
      const tipRect = tooltip.getBoundingClientRect();
      const imgW = 220, imgH = 330;
      const leftP = tipRect.right + 6 + imgW > window.innerWidth ? tipRect.left - imgW - 6 : tipRect.right + 6;
      const topP  = Math.max(8, Math.min(tipRect.top, window.innerHeight - imgH - 8));
      imgPreview.style.left    = `${leftP}px`;
      imgPreview.style.top     = `${topP}px`;
      imgPreview.style.display = 'block';
    });
    span.addEventListener('mouseleave', () => { imgPreview.style.display = 'none'; });
  });

  tooltip.querySelectorAll('.punished-card-btn').forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      const card = allDeckCards.find(c => cardKey(c) === btn.dataset.key);
      if (!card) return;
      ttSuppressHide = true;
      if (btn.dataset.action === 'remove') removeCardFromDeck(card);
      else addCardToDeck(card);
      populatePunishedTooltip(ptCurrentTag || tag);
      setTimeout(() => { ttSuppressHide = false; }, 0);
    };
  });

  tooltip.onmouseenter = () => { clearTimeout(ptHideTimer); };
  tooltip.onmouseleave = () => { hidePunishedTooltip(true); };
  return true;
}

function showPunishedTooltip(span) {
  clearTimeout(ptHideTimer);
  clearTimeout(ttHideTimer);
  const tag = span.dataset.tag;
  ptCurrentTag = tag;
  populatePunishedTooltip(tag);
  const tooltip = document.getElementById('tag-suggestion-tooltip');
  tooltip.style.display = 'block';
  const rect = span.getBoundingClientRect();
  const ttW  = 280;
  let left = rect.left;
  if (left + ttW > window.innerWidth) left = window.innerWidth - ttW - 8;
  tooltip.style.left = `${left}px`;
  tooltip.style.top  = `${rect.bottom + 2}px`;
}

function hidePunishedTooltip(immediate) {
  if (ttSuppressHide || ptPinned) return;
  clearTimeout(ptHideTimer);
  const tooltip = document.getElementById('tag-suggestion-tooltip');
  if (immediate) {
    tooltip.style.display = 'none';
    document.getElementById('card-image-preview').style.display = 'none';
  } else {
    ptHideTimer = setTimeout(() => {
      tooltip.style.display = 'none';
      document.getElementById('card-image-preview').style.display = 'none';
    }, 300);
  }
}

function wirePunishedSpans(container) {
  container.querySelectorAll('.punished-count-span').forEach(span => {
    if (ptPinned && span.dataset.tag === ptCurrentTag) span.style.background = 'rgba(139,0,0,0.08)';
    span.addEventListener('mouseenter', () => { if (!ptPinned) showPunishedTooltip(span); });
    span.addEventListener('mouseleave', () => { if (!ptPinned) hidePunishedTooltip(false); });
    span.addEventListener('click', e => {
      e.stopPropagation();
      const tag = span.dataset.tag;
      if (ptPinned && ptCurrentTag === tag) {
        ptPinned = false; ptCurrentTag = null;
        span.style.background = '';
        hidePunishedTooltip(true);
      } else {
        container.querySelectorAll('.punished-count-span').forEach(el => el.style.background = '');
        ptPinned = true; ptCurrentTag = tag;
        span.style.background = 'rgba(139,0,0,0.08)';
        showPunishedTooltip(span);
      }
    });
  });
}

function renderQuestMatchup() {
  const container = document.getElementById('quest-matchup-container');
  if (!container) return;
  container.innerHTML = '';

  if (!activeQuest) return;

  const result = evaluateQuestMatchup();
  if (!result) return;

  const statusIcon  = { red: '🔴', yellow: '🟡', green: '🟢' };
  const statusColor = { red: '#c0392b', yellow: '#856404', green: '#1a7a3c' };

  let html = `<div style="margin-top:16px;padding:15px;border:2px solid #0056b3;background:#eef5fb;border-radius:6px;">
    <strong style="color:#0056b3;font-size:1.05em;">Quest Matchup: ${escapeHtml(activeQuest.quest_name)}</strong>
    <div style="font-size:0.82em;color:#666;margin-top:2px;">${escapeHtml(activeQuest.quest_focus)} · Pacing: ${escapeHtml(activeQuest.pacing)}</div>
    ${activeQuest.hazards_description ? `<p style="font-size:0.88em;color:#444;margin:8px 0 10px;">${escapeHtml(activeQuest.hazards_description)}</p>` : ''}
    <hr style="border:0;border-top:1px solid #c2d9f0;margin-bottom:10px;">`;

  if (result.punishedAlerts.length) {
    result.punishedAlerts.forEach(({ tag, count }) => {
      const countSpan = `<span class="punished-count-span" data-tag="${escapeHtml(tag)}" style="cursor:pointer;font-weight:bold;border-bottom:1px dotted #8B0000;">${count} card${count !== 1 ? 's' : ''}</span>`;
      html += `<div style="background:#fdecea;border-left:3px solid #8B0000;padding:7px 10px;border-radius:3px;margin-bottom:6px;font-size:0.88em;">⛔ <strong>Risky:</strong> This quest punishes <strong>${escapeHtml(tag)}</strong> — you have ${countSpan} with this tag.</div>`;
    });
  }

  if (result.techAlerts.length) {
    html += `<strong style="display:block;margin-bottom:6px;">Required Capabilities:</strong><ul id="tech-alerts-list" style="margin:0;padding-left:20px;font-size:0.9em;line-height:1.9;">`;
    result.techAlerts.forEach(({ status, tag, count, label }) => {
      const hoverable = `data-tag="${escapeHtml(tag)}" class="tech-alert-item" style="cursor:pointer;"`;
      html += `<li ${hoverable}>${statusIcon[status]} <span style="color:${statusColor[status]};font-weight:bold;">${label}:</span> ${escapeHtml(tag)} <span style="color:#888;">(${count} card${count!==1?'s':''})</span></li>`;
    });
    html += '</ul>';
  }

  if (result.unmeasuredTags && result.unmeasuredTags.length) {
    html += `<div style="margin-top:8px;font-size:0.8em;color:#888;">Not scored (no card data): ${result.unmeasuredTags.map(escapeHtml).join(', ')}</div>`;
  }

  if (activeQuest.tech_cards_mentioned && activeQuest.tech_cards_mentioned.length) {
    html += `<div style="margin-top:12px;"><strong style="font-size:0.9em;">Notable tech cards:</strong><div class="notable-tech-list" style="margin-top:6px;">`;
    const normStr = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    activeQuest.tech_cards_mentioned.forEach(name => {
      const card = cardDatabase.find(c => c.name === name) || cardDatabase.find(c => normStr(c.name) === normStr(name));
      if (!card) {
        html += `<div style="font-size:0.85em;color:#555;padding:2px 0;">${escapeHtml(name)}</div>`;
        return;
      }
      if (card.type === 'Hero') return;
      const sc  = TT_SPHERE_COLOR[card.sphere] || '#555';
      const img = escapeHtml(card.imagesrc || '');
      const key = cardKey(card);
      const qty = deckMap.has(key) ? deckMap.get(key).qty : 0;
      const addDisabled    = qty >= 3 ? 'disabled style="padding:1px 7px;font-size:0.78em;background:#ccc;color:#fff;border:none;border-radius:3px;cursor:not-allowed;"' : 'style="padding:1px 7px;font-size:0.78em;background:#0056b3;color:#fff;border:none;border-radius:3px;cursor:pointer;"';
      const removeDisabled = qty === 0 ? 'disabled style="padding:1px 7px;font-size:0.78em;background:#ccc;color:#fff;border:none;border-radius:3px;cursor:not-allowed;"' : 'style="padding:1px 7px;font-size:0.78em;background:#888;color:#fff;border:none;border-radius:3px;cursor:pointer;"';
      html += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        <button class="notable-card-btn" data-key="${escapeHtml(key)}" data-action="add" ${addDisabled}>+</button>
        <button class="notable-card-btn" data-key="${escapeHtml(key)}" data-action="remove" ${removeDisabled}>−</button>
        <span style="background:${sc};color:#fff;font-size:0.7em;padding:1px 5px;border-radius:3px;white-space:nowrap;">${escapeHtml(card.sphere||'?')}</span>
        <span style="font-size:0.75em;color:#555;min-width:14px;text-align:center;">${qty > 0 ? qty+'×' : ''}</span>
        <span class="notable-card-name" data-imagesrc="${img}" data-cardname="${escapeHtml(card.name)}" style="flex:1;font-size:0.85em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default;text-decoration:underline dotted #aaa;" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</span>
      </div>`;
    });
    html += `</div></div>`;
  }

  html += '</div>';
  container.innerHTML = html;

  wireTagTooltipLis(container);
  wirePunishedSpans(container);

  const imgPreview = document.getElementById('card-image-preview');
  const imgEl      = document.getElementById('card-image-preview-img');
  container.querySelectorAll('.notable-card-name').forEach(span => {
    span.addEventListener('mouseenter', () => {
      if (!span.dataset.imagesrc) return;
      imgEl.src = span.dataset.imagesrc;
      imgEl.onerror = () => { imgPreview.style.display = 'none'; };
      const rect = span.getBoundingClientRect();
      const imgW = 220, imgH = 330;
      const leftP = rect.right + 6 + imgW > window.innerWidth ? rect.left - imgW - 6 : rect.right + 6;
      const topP  = Math.max(8, Math.min(rect.top, window.innerHeight - imgH - 8));
      imgPreview.style.left  = `${leftP}px`;
      imgPreview.style.top   = `${topP}px`;
      imgPreview.style.display = 'block';
    });
    span.addEventListener('mouseleave', () => { imgPreview.style.display = 'none'; });
  });

  container.querySelectorAll('.notable-card-btn').forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      const card = allDeckCards.find(c => cardKey(c) === btn.dataset.key);
      if (!card) return;
      if (btn.dataset.action === 'remove') removeCardFromDeck(card);
      else addCardToDeck(card);
    };
  });
}

function renderPhase2QuestPanel() {
  const panel   = document.getElementById('phase2-quest-panel');
  const content = document.getElementById('phase2-quest-panel-content');
  if (!panel || !content) return;

  if (!activeQuest) { panel.style.display = 'none'; return; }

  const result = evaluateQuestMatchup();
  if (!result) { panel.style.display = 'none'; return; }

  const statusIcon  = { red: '🔴', yellow: '🟡', green: '🟢' };
  const statusColor = { red: '#c0392b', yellow: '#856404', green: '#1a7a3c' };

  let html = `<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px;">
    <strong style="color:#0056b3;font-size:0.95em;">${escapeHtml(activeQuest.quest_name)}</strong>
    <span style="font-size:0.75em;color:#888;">${escapeHtml(activeQuest.quest_focus)} · ${escapeHtml(activeQuest.pacing)}</span>
  </div>
  <ul style="margin:0;padding-left:18px;font-size:0.85em;line-height:1.85;">`;

  result.techAlerts.forEach(({ status, tag, count, label }) => {
    const hoverable = `data-tag="${escapeHtml(tag)}" class="tech-alert-item" style="cursor:pointer;"`;
    html += `<li ${hoverable}>${statusIcon[status]} <span style="color:${statusColor[status]};font-weight:bold;">${escapeHtml(tag)}</span> <span style="color:#888;">(${count} card${count !== 1 ? 's' : ''})</span></li>`;
  });

  html += '</ul>';
  content.innerHTML = html;
  panel.style.display = 'block';
  wireTagTooltipLis(panel);
}

function generateExport() {
  const exportPlayer = (p) => {
    const threat     = p.heroes.reduce((s, h) => s + parseInt(h.cost_threat || 0), 0);
    const totalCards = Array.from(p.deck.values()).reduce((s, i) => s + i.qty, 0);
    let text = `LotR LCG Decklist\nStarting Threat: ${threat}\n\nHEROES (${p.heroes.length})\n`;
    p.heroes.forEach(h => text += `${h.name} (${h.sphere})\n`);

    const allies = [], attachments = [], events = [], sideQuests = [];
    p.deck.forEach(item => {
      const line = `${item.qty}x ${item.card.name} (${item.card.sphere || 'Neutral'})\n`;
      if (item.card.type === 'Ally')       allies.push(line);
      else if (item.card.type === 'Attachment') attachments.push(line);
      else if (item.card.type === 'Event') events.push(line);
      else if (item.card.type === 'Player Side Quest') sideQuests.push(line);
    });

    const getQty = arr => arr.reduce((s, str) => s + parseInt(str[0]), 0);
    text += `\nDECK (${totalCards})\n`;
    if (allies.length)       text += `\nAllies (${getQty(allies)})\n`       + allies.sort().join('');
    if (attachments.length)  text += `\nAttachments (${getQty(attachments)})\n` + attachments.sort().join('');
    if (events.length)       text += `\nEvents (${getQty(events)})\n`       + events.sort().join('');
    if (sideQuests.length)   text += `\nSide Quests (${getQty(sideQuests)})\n` + sideQuests.sort().join('');
    return text;
  };

  const exportText = players.length > 1
    ? players.map((p, i) => `=== ${p.name} ===\n\n${exportPlayer(p)}`).join('\n\n' + '─'.repeat(40) + '\n\n')
    : exportPlayer(players[0]);

  document.getElementById('export-textarea').value = exportText;
}

document.getElementById('btn-copy').onclick = () => {
  const textarea = document.getElementById('export-textarea');
  textarea.select();
  navigator.clipboard.writeText(textarea.value).then(() => {
    const btn = document.getElementById('btn-copy');
    btn.innerText = 'Copied!';
    btn.style.background = '#20c997';
    setTimeout(() => { btn.innerText = 'Copy to Clipboard'; btn.style.background = '#28a745'; }, 2000);
  });
};

// Unpin tag tooltip when clicking outside it
document.addEventListener('click', (e) => {
  if (!ttPinned) return;
  const tooltip = document.getElementById('tag-suggestion-tooltip');
  if (tooltip.contains(e.target) || e.target.closest('.tech-alert-item')) return;
  ttPinned = false;
  ttCurrentTag = null;
  tooltip.style.display = 'none';
  document.getElementById('card-image-preview').style.display = 'none';
  document.querySelectorAll('.tech-alert-item').forEach(el => el.style.background = '');
});
