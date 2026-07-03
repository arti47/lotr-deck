# CLAUDE.md

Guidance for Claude Code (and human contributors) working in this repository.

## What This App Is

A **Lord of the Rings: The Card Game (LOTR LCG) deck builder** — a personal tool for
building and analyzing player decks, optionally targeted at a specific quest.

It is a **zero-build static web app**: open `index.html` in a browser and it works.
No npm, no bundler, no server. This is a deliberate constraint — keep it that way.
Dev-time Node scripts (data sync, validation) are fine, but the app itself must run
from plain `<script>` tags.

### Files

| File | Role |
|---|---|
| `index.html` | Single page: all markup + CSS for the three-phase UI |
| `app.js` | All application logic (~1,700 lines) |
| `data.js` | Card database: `const cardData = [...]` (~1,086 cards: Hero, Ally, Attachment, Event, Player Side Quest) |
| `quests.js` | Quest database: `const questData = [...]` (~118 quests with difficulty, focus, pacing, recommended/punished tags, tech cards) |

### Core Functionality

The UI is a three-phase wizard, plus a fellowship (multiplayer) layer:

1. **Phase 1 — Select Heroes**: choose 1–3 heroes; filter by sphere/tag/name/MotK.
   Optionally pick a **target quest**, which shows focus/pacing/difficulty and
   recommended heroes. Starting threat is summed with color warnings (33+ / 35+).
2. **Phase 2 — Card Pool**: card pool is gated to the selected heroes' spheres +
   Neutral. Filters: type, sphere, tag, name, card text, min-stat, sort.
   Left-click adds a copy, right-click removes; 3-copy limit and 50-card limit
   enforced. Decklist import (pasted text), named save slots + autosave
   (localStorage), quest-readiness side panel.
3. **Phase 3 — Analysis & Export**: deck health heuristics (threat, opening
   WP/ATK, composition ratios, card-draw coverage, cost curve, sphere ratio),
   interactive cost curve, trait/tag synergy breakdown with suggestions,
   quest matchup report (recommended-tag coverage red/yellow/green; punished-tag
   warnings, each with add/remove tooltips), plaintext export.

**Fellowship layer**: up to 4 players, each with their own heroes + deck.
`selectedHeroes` and `deckMap` are global aliases into `players[activePlayer]` —
code must mutate them **in place** (`splice(0)`, `.clear()`), never reassign,
or the alias breaks.

### Key Data Structures

- `deckMap: Map<cardName, { card, qty }>` — per player. **Currently keyed by card
  name, which is a known bug** (see below): 58 names have multiple versions.
- `QUEST_TAG_TO_CARD_TAGS` in `app.js` — maps quest-level tag vocabulary to
  card-level tag vocabulary. The two vocabularies are maintained by hand and
  can drift; drift = silent scoring bugs.
- Persistence: `localStorage` keys `lotr_autosave` (state v1) and
  `lotr_saved_decks` (named slots). Serialization is currently by card/hero
  **name** (same identity bug).

## Known Bugs (verified 2026-07-03 code review)

> **All ten items below were fixed in Phase A** (branch
> `claude/app-logic-review-kjvv47`). They are kept here as the record of what
> was wrong and why. See the Roadmap → Phase A section for the resolution notes.

Ordered roughly by severity. Each was confirmed against the actual data, not
just by reading code.

1. **Name-based card identity.** 58 card names have multiple versions
   (8 Aragorns, 7 Bilbo Baggins, …). The load-time dedup key
   (`name-sphere-type`) silently drops 12 cards. `deckMap`, save/load, and
   import all resolve by name with first-match-wins, so a saved deck can
   restore the *wrong version* of a hero/card. Fix: key everything by
   `ringsdb_code` (already present in the data), with name fallback for old saves.
2. **`card.cost` does not exist** (field is `cost_threat`). In
   `getTagSuggestions()` the sort-by-cost is a no-op and the tooltip's cost
   label never renders.
3. **Deck health counts a nonexistent tag.** `renderDeckHealth()` looks for
   `Card Draw (Active)` / `Card Draw (Reactive)`; the data uses `(Active)` /
   `(Passive)`. Passive draw is never counted → draw coverage understated.
4. **Unsatisfiable quest tags.** `Contract`, `Cost Reduction`, and `Solo Play`
   appear in quests' `recommended_tags` but map to no card tag in the data —
   they always render as "🔴 Critical Tech Missing" regardless of the deck.
5. **Player Side Quests half-supported** (11 in data): addable via the "All"
   type filter and counted toward the 50-card limit, but missing from the type
   dropdown, stats bar, deck-health composition — and **silently dropped from
   the export text** while still counted in its total.
6. **`removePlayer()` shifts the active player.** Removing a player with a
   lower index than `activePlayer` leaves it pointing at the wrong player.
   Only the fell-off-the-end case is clamped.
7. **Cost-curve hover highlight is dead code.** `barDiv.innerHTML +=` after
   `appendChild(rect)` re-parses children; the `rect` node the handler mutates
   is detached, so the bar never visually highlights.
8. **Import quirks**: strips trailing `(...)` so `(MotK)` heroes can't be
   imported; duplicate lines overwrite instead of accumulating; 50-card cap
   not enforced; wipes the current deck with no confirmation.
9. **`switchPlayer()` doesn't autosave** → persisted `activePlayer` goes stale.
10. **Markup injection**: card names, saved-deck names, and quest text are
    interpolated into `innerHTML` unescaped. Low severity (local data), but a
    deck name containing a quote breaks the saved-decks list. Add an
    `escapeHtml()` helper and use it at every interpolation site.

## Design Gaps (decided direction: warn, don't block)

- **The 50-card rule is inverted**: the real game requires *minimum* 50 with no
  max; the app enforces a hard max of 50. Decision: treat <50 as incomplete
  (warning), allow >50 with a note about consistency — never hard-block.
- **`is_unique` is in the data but never used.** Surface uniqueness conflicts
  (especially *across fellowship decks*) as deck-health warnings, not blocks.
- **Side quest rules unmodeled** (limit 1 copy each). Warn, don't block.
- Removing a hero strands now-off-sphere cards in the deck; the Phase 2 grid
  hides them so they're awkward to remove. Health flags it, but there should be
  a one-click "remove off-sphere cards" affordance.

## Architecture Critique (for future refactors)

Every bug above traces back to one of three root causes:

1. **Name-based identity** instead of `ringsdb_code`.
2. **Unvalidated tag vocabulary** — quests and cards use hand-maintained tag
   sets with a hand-maintained mapping between them; nothing checks drift.
3. **Duplicated render logic** — three near-identical tooltip systems
   (tech-alert, punished, notable-tech) and repeated card-detail templates.

Other notes:

- Global mutable state with aliasing is fragile but workable; if it grows,
  wrap it in a small store with explicit `getActivePlayer()` accessors.
- Full re-render on every keystroke is fine at ~1k cards; don't optimize
  prematurely, but debounce search inputs if the pool grows.
- Inline styles in JS template strings everywhere — extract repeated ones to
  CSS classes in `index.html` opportunistically when touching the code.
- No tests. The pure logic (`evaluateQuestMatchup`, import parser,
  serialize/deserialize, deck-health math) is easily unit-testable with plain
  Node scripts — no framework needed to stay zero-build.

## Decisions From the 2026-07-03 Review Discussion

- **Audience**: personal tool. Correctness > polish; build features actually used.
- **Card data**: sync from the **RingsDB API** via a dev-time Node script that
  regenerates `data.js`. Curated tags/summaries live in a separate overlay file
  merged by `ringsdb_code` — so refreshing card stats never clobbers curation.
- **Rules**: warn, don't block (see Design Gaps above).
- **Fellowship**: actively used — fix its bugs early; add cross-deck unique
  warnings.
- **Stack**: stays zero-build. Native ES modules and dev-only Node scripts are
  acceptable; bundlers/frameworks are not.
- **Wanted features** (all four, in priority order): collection tracking,
  playtest tools, better quest advisor, deck sharing/export.

## Roadmap

### Phase A — Correctness ✅ DONE
All items below were implemented and verified (16-test Node logic harness +
Playwright browser smoke test) in the `claude/app-logic-review-kjvv47` branch.
- [x] Key cards by `ringsdb_code` everywhere via `cardKey()`: `deckMap`,
      serialization (`version: 2`, v1 name-based saves migrated on load),
      import resolution, hero matching. Load-time dedup now keys on code —
      recovers 10 legitimately-distinct printings the old key silently dropped
      (1084 cards vs 1074), while still collapsing the 2 true duplicates.
- [x] Fix `card.cost` → `cost_threat` in tag suggestions (sort + label).
- [x] Fix card-draw tag names in deck health (`Passive`, not `Reactive`).
- [x] Unsatisfiable quest tags: matchup now only scores tags whose mapped card
      tags exist in the pool (`allCardTags`); the rest (`Contract`,
      `Cost Reduction`, `Solo Play`) are listed as "Not scored (no card data)"
      instead of a false 🔴. Self-correcting if the data changes.
- [x] Player Side Quest support: type-filter option, stats bar, deck-health
      composition row, export section. (No copy restriction added — standard
      rules allow up to 3, so the earlier "1-copy warning" idea was dropped.)
- [x] Fix `removePlayer()` active-index shift; autosave in `switchPlayer()`.
- [x] Fix cost-curve hover (build DOM nodes, no `innerHTML +=`).
- [x] Import fixes: preserve `(MotK)` (match full line before stripping),
      accumulate duplicate lines (cap 3), confirm before wiping, report >50
      as a warning, resolve/store by code, skip-hero and not-found reporting.
- [x] Add `escapeHtml()` and apply at all data-derived interpolation sites.

### Phase B — Data pipeline & validation
- [ ] `scripts/sync-ringsdb.js` (dev-only, Node): fetch player cards from the
      RingsDB API, regenerate `data.js`; curated `tags`/`summary` move to
      `overlay.json` keyed by `ringsdb_code`.
- [ ] `scripts/validate-data.js`: fail on duplicate `ringsdb_code`, quest tags
      with no card-tag mapping, mapped tags absent from the card pool, missing
      fields. Run after every data edit.
- [ ] One-time cleanup of duplicated/templated summaries surfaced by the sync.

### Phase C — Rules & fellowship warnings (warn, don't block)
- [ ] Minimum-50 semantics: <50 = "incomplete", >50 allowed with consistency note.
- [ ] Uniqueness warnings within a deck's context and **across fellowship
      decks** (uses `is_unique`).
- [ ] "Remove off-sphere cards" affordance when a hero is removed.

### Phase D — Features (priority order)
1. **Collection tracking**: mark owned expansions; filter card pool and
   suggestions to owned cards; store in localStorage.
2. **Playtest tools**: sample opening hand + mulligan, draw-probability
   table for key cards by turn.
3. **Better quest advisor**: overall deck-vs-quest score, concrete swap
   suggestions, explain *why* a hero is recommended.
4. **Deck sharing/export**: RingsDB-compatible export format, shareable
   URL (state in fragment) or file download/upload.

### Phase E — Structural (opportunistic, zero-build)
- [ ] Split `app.js` into native ES modules (`state.js`, `persistence.js`,
      `phase1.js`, `phase2.js`, `phase3.js`, `tooltips.js`) via
      `<script type="module">`.
- [ ] Unify the three tooltip systems into one.
- [ ] Node-based unit tests for pure logic (`node --test`, no dependencies).

## Conventions

- Plain JavaScript, no dependencies at runtime; dev scripts may use Node stdlib.
- Mutate `selectedHeroes`/`deckMap` in place; never reassign them except in
  `switchPlayer`/`deserializeState` (which reassign both alias and source together).
- After any deck/hero mutation, call the existing refresh helpers
  (`refreshDeckUI`, `updatePhase1Dashboard` + `checkPhase1Completion`) and
  `autoSave()` — don't hand-roll partial updates.
- All user-visible or data-derived strings going into `innerHTML` must be
  escaped once the helper from Phase A exists.
- Run `scripts/validate-data.js` after touching `data.js`, `quests.js`, or the
  tag mapping in `app.js`.
