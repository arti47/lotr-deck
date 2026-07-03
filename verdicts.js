// verdicts.js — Phase D1: per-card verdict engine (client-side, zero-build).
//
// Given the active quest's structured attributes (window.questOverlayData, built
// from quest-overlay.json), classify each hero and deck card as Key / Fine /
// Weak / Dead with a plain-language reason. This is the "flag problematic cards"
// deliverable; it needs no RingsDB data and ships before deck generation.
//
// Pure logic + one render function. Resolves app globals at call time
// (QUEST_TAG_TO_CARD_TAGS, escapeHtml, selectedHeroes, deckMap, activeQuest),
// so script load order doesn't matter as long as it's called after the app runs.

const CardVerdicts = (function () {
  const VERDICTS = ['Dead', 'Weak', 'Fine', 'Key'];
  const STYLE = {
    Key:  { bg: '#d4edda', border: '#28a745', fg: '#155724' },
    Fine: { bg: '#e9ecef', border: '#adb5bd', fg: '#495057' },
    Weak: { bg: '#fff3cd', border: '#ffc107', fg: '#856404' },
    Dead: { bg: '#f8d7da', border: '#dc3545', fg: '#721c24' },
  };

  // A card "provides" a quest tag if any of its card-tags map to it. Reuses the
  // app's QUEST_TAG_TO_CARD_TAGS so this matches the rest of the quest scoring.
  function cardTagsFor(questTag) {
    return (typeof QUEST_TAG_TO_CARD_TAGS !== 'undefined' && QUEST_TAG_TO_CARD_TAGS[questTag]) || [questTag];
  }
  function has(card, questTag) {
    const tags = card.tags || [];
    return cardTagsFor(questTag).some(t => tags.includes(t));
  }

  // Cards whose only value is combat (attack), so a quest with little/no combat
  // makes them dead weight. Anything with questing or utility is NOT attack-only.
  const UTILITY = ['Willpower Boost', 'Location Control', 'Threat Reduction', 'Healing',
    'Card Draw', 'Resource Generation', 'Scrying', 'Condition Removal', 'Shadow Cancellation',
    'Treachery Cancellation', 'Encounter Deck Manipulation', 'Damage Prevention'];
  function isAttackOnly(card) {
    const tags = card.tags || [];
    const attacky = tags.includes('Attack Boost') || tags.includes('Ranged')
      || (card.type === 'Ally' && (card.attack || 0) >= 2 && (card.willpower || 0) === 0);
    if (!attacky) return false;
    const hasUtility = (card.willpower || 0) >= 1 || UTILITY.some(u => has(card, u));
    return !hasUtility;
  }

  // Core rule engine. `attrs` is the quest-overlay entry for this quest.
  function verdictFor(card, quest, attrs) {
    const rec = (quest.recommended_tags || []).filter(t => has(card, t));
    const pun = (quest.punished_tags || []).filter(t => has(card, t));
    const ep = attrs.enemy_profile || {};
    const isAlly = card.type === 'Ally';
    const lowHp = isAlly && (card.health || 0) <= 1;

    const key = [];
    const weak = [];
    let dead = null;

    // Structural quest needs → Key. Each maps to one quest-overlay field.
    if (attrs.threat_pressure === 'high' && has(card, 'Threat Reduction'))
      key.push('cuts threat, which this quest pushes hard');
    if (attrs.location_pressure === 'high' && has(card, 'Location Control'))
      key.push('controls locations under this quest’s heavy location pressure');
    if (attrs.direct_damage_from_encounter && (has(card, 'Healing') || has(card, 'Damage Prevention')))
      key.push('heals or prevents the encounter deck’s direct damage');
    if (ep.needs_sentinel && has(card, 'Sentinel'))
      key.push('sentinel covers the defense this quest demands');
    if (attrs.questing_pressure === 'high' && has(card, 'Willpower Boost'))
      key.push('boosts willpower for a quest with heavy questing demands');
    if (ep.big_enemies && has(card, 'Direct Damage'))
      key.push('burst removal for this quest’s big enemies');
    if (ep.big_enemies && has(card, 'Defense Boost'))
      key.push('adds defense against this quest’s big enemies');

    // Anti-synergy → Weak / Dead.
    if (pun.length)
      weak.push(`this quest punishes ${pun.join(', ')}`);
    if (attrs.combat_required === false && isAttackOnly(card)) {
      if ((ep.density || 'low') === 'none') dead = 'no enemies to fight in this quest';
      else weak.push('little combat here, so its attack contributes little');
    }
    if ((attrs.direct_damage_from_encounter || ep.archery) && lowHp)
      weak.push(`a ${card.health || 0}-HP ally is fragile against this quest’s ${ep.archery ? 'archery' : 'direct damage'}`);
    if ((attrs.restrictions || []).includes('ally_limit') && (isAlly || has(card, 'Ally Mustering')))
      weak.push('the quest caps allies, so extra bodies underperform');
    if (card.type === 'Hero' && attrs.threat_pressure === 'high' && parseInt(card.cost_threat) >= 12)
      weak.push('high starting threat taxes a threat-punishing quest');

    // Synthesize. Dead > mismatch > match > neutral.
    if (dead) return { verdict: 'Dead', reason: dead };
    if (key.length && !weak.length) return { verdict: 'Key', reason: key[0] };
    if (weak.length && !key.length) return { verdict: 'Weak', reason: weak[0] };
    if (key.length && weak.length) return { verdict: 'Fine', reason: `pulls both ways — ${key[0]}, but ${weak[0]}` };
    if (rec.length) return { verdict: 'Fine', reason: `provides ${rec[0]}, which this quest asks for` };
    return { verdict: 'Fine', reason: 'general-purpose; nothing this quest specifically rewards or punishes' };
  }

  // Verdict every hero + deck card of the active player. Returns grouped results.
  function verdictsForActive(quest, attrs) {
    const items = [];
    (typeof selectedHeroes !== 'undefined' ? selectedHeroes : []).forEach(h =>
      items.push({ card: h, qty: 1, isHero: true, ...verdictFor(h, quest, attrs) }));
    if (typeof deckMap !== 'undefined')
      deckMap.forEach(({ card, qty }) => items.push({ card, qty, isHero: false, ...verdictFor(card, quest, attrs) }));
    const groups = { Key: [], Fine: [], Weak: [], Dead: [] };
    items.forEach(it => groups[it.verdict].push(it));
    return groups;
  }

  // ---- Render (Phase 3) ----
  function render(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const quest = (typeof activeQuest !== 'undefined') ? activeQuest : null;
    if (!quest) { el.innerHTML = ''; return; }

    const overlay = (typeof questOverlayData !== 'undefined') ? questOverlayData : {};
    const attrs = overlay[quest.quest_id];
    const total = Object.keys(overlay).length;

    if (!attrs) {
      el.innerHTML = `<div class="detail-card"><h3>Card Verdicts</h3>
        <p style="color:#777;font-size:0.9em;font-style:italic;">No structured data for
        <strong>${escapeHtml(quest.quest_name)}</strong> yet, so per-card verdicts aren’t
        available for it. Only ${total} of 118 quests are curated so far.</p></div>`;
      return;
    }

    const hasDeck = (typeof deckMap !== 'undefined' && deckMap.size) ||
      (typeof selectedHeroes !== 'undefined' && selectedHeroes.length);
    if (!hasDeck) {
      el.innerHTML = `<div class="detail-card"><h3>Card Verdicts</h3>
        <p style="color:#777;font-size:0.9em;font-style:italic;">Select heroes and add cards to see how each fares against this quest.</p></div>`;
      return;
    }

    const groups = verdictsForActive(quest, attrs);
    const badge = { curated: ['#28a745', 'curated'], ai_draft: ['#e6a817', 'AI draft'], inferred: ['#6c757d', 'inferred'] }[attrs.confidence] || ['#6c757d', attrs.confidence || 'inferred'];

    const chip = (v) => {
      const s = STYLE[v];
      return `<span style="background:${s.bg};border:1px solid ${s.border};color:${s.fg};font-size:0.72em;font-weight:bold;padding:1px 7px;border-radius:10px;white-space:nowrap;">${v}</span>`;
    };
    const row = (it) => `<div style="display:flex;align-items:baseline;gap:8px;padding:4px 0;border-bottom:1px solid #f4f4f4;font-size:0.86em;">
      ${chip(it.verdict)}
      <span style="font-weight:600;color:#222;white-space:nowrap;">${it.qty > 1 ? it.qty + '× ' : ''}${escapeHtml(it.card.name)}${it.isHero ? ' <span style="color:#999;font-weight:normal;">(hero)</span>' : ''}</span>
      <span style="color:#666;flex:1;">${escapeHtml(it.reason)}</span>
    </div>`;

    // Problems first (Dead, Weak), then Key, then Fine collapsed.
    const section = (v, open) => {
      const list = groups[v];
      if (!list.length) return '';
      list.sort((a, b) => a.card.name.localeCompare(b.card.name));
      const rows = list.map(row).join('');
      return `<details ${open ? 'open' : ''} style="margin-bottom:6px;">
        <summary style="cursor:pointer;font-size:0.8em;font-weight:bold;color:#555;">${chip(v)} <span style="margin-left:4px;">${list.length} card${list.length !== 1 ? 's' : ''}</span></summary>
        <div style="margin-top:4px;">${rows}</div></details>`;
    };

    el.innerHTML = `<div class="detail-card">
      <div style="display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:6px;">
        <h3 style="margin:0;border:0;">Card Verdicts <span style="font-size:0.6em;color:#999;font-weight:normal;">vs ${escapeHtml(quest.quest_name)}</span></h3>
        <span title="How trustworthy this quest’s data is" style="font-size:0.72em;color:#fff;background:${badge[0]};padding:1px 8px;border-radius:10px;">${badge[1]}</span>
      </div>
      <p style="font-size:0.78em;color:#888;margin:6px 0 10px;">Key = pulls its weight for this quest · Weak = underperforms · Dead = does nothing here. Heuristic, not playtested.</p>
      ${section('Dead', true)}${section('Weak', true)}${section('Key', true)}${section('Fine', false)}
    </div>`;
  }

  return { verdictFor, verdictsForActive, render, isAttackOnly };
})();

// Convenience wrapper the app calls from Phase 3.
function renderCardVerdicts() { CardVerdicts.render('card-verdicts-container'); }
