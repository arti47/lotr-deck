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
| `app.js` | All application logic (~1,950 lines) |
| `data.js` | Card database: `const cardData = [...]` (~1,100 cards: Hero, Ally, Attachment, Event, Player Side Quest) |
| `quests.js` | Quest database: `const questData = [...]` (~118 quests with difficulty, focus, pacing, recommended/punished tags, tech cards) |

### Core Functionality

The UI is a three-phase wizard, plus a fellowship (multiplayer) layer:

1. **Phase 1 — Select Heroes**: choose 1–3 heroes; filter by sphere/tag/name/MotK.
   Optionally pick a **target quest**, which shows focus/pacing/difficulty and
   recommended heroes. Starting threat is summed with color warnings (33+ / 35+).
2. **Phase 2 — Card Pool**: card pool is gated to the selected heroes' spheres +
   Neutral. Filters: type, sphere, tag, name, card text, min-stat, sort.
   Left-click adds a copy, right-click removes; 3-copy limit enforced (the
   50-card rule is a *minimum*, surfaced as a deck-health warning, not a hard
   cap — Phase C). Decklist import (pasted text), named save slots + autosave
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

- `deckMap: Map<cardKey, { card, qty }>` — per player. Keyed by `cardKey(card)`
  (`ringsdb_code`, name fallback) since Phase A; 58 names have multiple versions,
  which the old name key silently collided.
- `QUEST_TAG_TO_CARD_TAGS` in `app.js` — maps quest-level tag vocabulary to
  card-level tag vocabulary. The two vocabularies are maintained by hand and
  can drift; drift = silent scoring bugs (now caught by `validate-data.js`).
- Persistence: `localStorage` keys `lotr_autosave` (state **v2**) and
  `lotr_saved_decks` (named slots). Serialization is by `ringsdb_code` (cards)
  and `quest_id` (active quest) since Phase A/D0; old name-based saves still
  load via fallbacks.

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

> All four items below are now **resolved** (Phase C + the 2026-07-03 roadmap
> audit, branch `claude/codebase-review-pqugc6`). Kept as the rationale record;
> see the Roadmap → Phase C section for the resolution notes. The side-quest rule
> (limit 1 copy each — this line was right, the Phase A note was wrong) is now a
> deck-health warning.

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
      composition row, export section. (The note that originally stood here —
      "standard rules allow up to 3 side quests" — was **wrong**: the Rules
      Reference limits a deck to 1 copy of each player side quest by title.
      Caught in the 2026-07-03 roadmap audit; a deck-health warning now flags
      2+ copies. Warn, don't block, as usual.)
- [x] Fix `removePlayer()` active-index shift; autosave in `switchPlayer()`.
- [x] Fix cost-curve hover (build DOM nodes, no `innerHTML +=`).
- [x] Import fixes: preserve `(MotK)` (match full line before stripping),
      accumulate duplicate lines (cap 3), confirm before wiping, report >50
      as a warning, resolve/store by code, skip-hero and not-found reporting.
- [x] Add `escapeHtml()` and apply at all data-derived interpolation sites.

### Phase B — Data pipeline & validation ✅ DONE
- [x] `scripts/validate-data.js`: fails on duplicate `ringsdb_code` and missing
      required fields; warns on tag-mapping drift (mapped card-tags absent from
      the pool) and unmeasurable quest tags. Reads the tag mapping straight out
      of `app.js` so there's a single source of truth. Currently passes clean
      (0 errors) with the expected `Contract`/`Cost Reduction`/`Solo Play`
      advisory warning.
- [x] `scripts/extract-overlay.js`: pulls curated `tags`/`summary` into
      `overlay.json` keyed by `ringsdb_code` (1084 cards). Re-runnable.
- [x] One-time cleanup: removed the 2 duplicate-code entries surfaced by the
      validator. `01073` was the same Gandalf curated twice; `01001` was a
      mis-coded distinct "Title attachment" Aragorn (looked AI-synthesized).
      `data.js` is now 1084 cards with unique codes — matching the app's
      post-dedup load, so nothing visible changed.
- [x] `scripts/sync-ringsdb.js`: regenerates `data.js` from RingsDB, stripping
      the API's HTML/`\r\n` from card text and merging `overlay.json` curation
      back in by code. Order-preserving (existing cards keep their place, new
      ones append) so the diff stays legible. `ringsdb.com` is blocked by the
      web-sandbox egress policy, so it also accepts a saved dump via
      `--file <path>` (same array shape the API returns). Dry-run by default
      (`data.generated.js`); `--apply` overwrites `data.js`.
- [x] **First real sync applied** from a RingsDB dump: 1084 → **1100 cards**
      (16 new: Galadriel, Ghân-buri-Ghân + Drúedain, a new Aragorn, etc.).
      24 card texts refreshed to official wording; 0 cost/stat/tag/summary
      changes (curation fully preserved via overlay). 5 local-only codes
      (starter-pack `20xxx` + one custom) kept. Validator passes clean.
      Caveat (now resolved): the new cards shipped with **empty `tags`**. 6 were
      curated in `df9b8ba`; the last **10** were finished in Phase D0, so every
      card now participates in synergy/quest-matchup scoring. One upstream
      RingsDB quirk still rides along — Andrath Guardsman's trait is `Dunedain`
      (missing accent) in RingsDB's own data.

### Dev scripts (zero runtime deps — Node stdlib only)

| Command | What it does |
|---|---|
| `node scripts/validate-data.js` | Lint `data.js`/`quests.js`/tag mapping. Exit 1 on errors (incl. missing/duplicate `quest_id`). **Run after any data edit.** |
| `node scripts/extract-overlay.js` | Regenerate `overlay.json` from the curated fields in `data.js`. |
| `node scripts/add-quest-ids.js [--apply]` | Stamp permanent `quest_id` slugs onto quests missing one. Idempotent; dry-run by default. |
| `node scripts/build-quest-overlay-js.js` | Regenerate the browser global `quest-overlay.js` from `quest-overlay.json` (D1 verdicts read it). Run after editing the JSON. |
| `node scripts/sync-ringsdb-decks.js --file decks.json [--apply]` | Mine `archetypes.json` from a RingsDB decklist dump (D2). Dry-run by default. `--min-votes`/`--min-decks` tune thresholds. |
| `node scripts/sync-ringsdb.js [--apply] [--file dump.json]` | Rebuild `data.js` from RingsDB, merging `overlay.json`. Dry-run by default. Uses ringsdb.com, or a saved dump via `--file`. |

`scripts/lib.js` holds the shared loaders (they `vm`-eval the browser data files
and scrape `QUEST_TAG_TO_CARD_TAGS` out of `app.js`). `overlay.json` is the
committed curation backup — the thing a stat re-sync must never clobber.

### Phase C — Rules & fellowship warnings (warn, don't block) ✅ DONE
All three items implemented and verified (Node logic harness + Playwright browser
smoke test) in the `claude/codebase-review-pqugc6` branch.
- [x] Minimum-50 semantics: removed the hard 50-card cap in `addCardToDeck` (only
      the 3-copy limit is a real rule now). Deck health treats exactly 50 as
      "Complete (50)" (green), >50 as "+N over — trim for consistency" (yellow),
      <50 as "Incomplete — N to reach 50" (red under 45). Counter label reads
      "/ 50 min". Import already reported >50 as a warning, so it's consistent.
- [x] Uniqueness warnings (by *name* — uniqueness is by title, so hero and ally
      printings of one character collide; tracked by name, not `ringsdb_code`).
      `uniquenessWithinPlayer()` flags the same unique name from two different
      cards in one pool (e.g. hero Gandalf + Gandalf ally) → shown as a
      "Uniqueness" section in Deck Health. `uniquenessAcrossFellowship()` flags a
      unique name fielded by 2+ players → shown in the Fellowship Summary card.
      Both are warnings, never blocks.
- [x] "Remove off-sphere cards" affordance: `getOffSphereCards()` finds deck
      cards whose sphere no hero provides (Neutral/blank always allowed); a
      dismissible banner in the Phase 2 side column names the orphan spheres and
      offers a one-click `removeOffSphereCards()` (with confirm). Rendered by
      `renderOffSphereBanner()` on `initPhase2` and every `refreshDeckUI`.

**Addendum (2026-07-03 roadmap audit)** — two gaps found and fixed:
- [x] MotK uniqueness blind spot: the 100 `(MotK) X` hero entries are the same
      character as their base card, but exact-name comparison never collided
      them. `uniqueTitle()` strips the `(MotK)` marker before comparing, so
      `(MotK) Erestor` + Erestor ally now flags. Display names unchanged.
- [x] Side-quest copy limit: the Rules Reference allows only **1 copy of each
      player side quest by title** (the Phase A note claiming 3 was wrong).
      Deck health now shows a red "Side Quest Limit" row per offender at 2+
      copies. Warning only — never blocks.

### Phase D — Tiered teaching deck advisor (major evolution)

> **Full design: [`docs/phase-d-design.md`](docs/phase-d-design.md).** Direction
> set in the 2026-07-03 requirements conversation. This is a big pivot from the
> current heuristic reference tool — roughly **80% data/curation, 20% app code**.

The target app: a **tiered** (beginner → power) advisor that **auto-generates a
full deck** for any quest from the whole card pool, defines "optimal" as a
**proven RingsDB-mined archetype tuned for quest fit + consistency +
survivability**, and flags every card in a pasted deck **Key/Fine/Weak/Dead with
a plain reason**. Stays zero-build by the rule: **pre-compute the *knowledge*
offline (static JSON), compute the *judgment* client-side from it** — no runtime
AI, no server. Offline AI may draft the curated data, but committed output is
hand-verified (the `overlay.json` pattern).

New static data artifacts (all dev-generated, validated, regenerable):
`quest-overlay.json` (structured quest attributes), `archetypes.json` (mined deck
cores), `quest-decks.json` (one baked deck + rationale per quest),
`glossary.json`. New dev scripts: `sync-ringsdb-decks.js`,
`build-quest-attributes.js`, `generate-quest-decks.js`; `validate-data.js` gains
a **staleness guard** (fail when baked artifacts reference codes/quests no longer
in the data).

Sub-phases (see the design doc for deliverables, dependencies, open questions):
- **D0 Foundations** *(in progress; no RingsDB)*:
  - [x] Empty-tag cards curated. Audit found **10** still empty (not 16 — the
        Phase B sync's "16 new" already had 6 curated in commit `df9b8ba`).
        Tagged by a documented rule: ability from text, else the dominant stat
        as a capability (mirrors the data's own `Defender of Rammas` =
        `Defense Boost` convention). Stat-role drafts, human-verifiable;
        `overlay.json` regenerated so the curation is backed up.
  - [x] Tag vocabulary audit: **clean** — 52 distinct tags, no near-duplicate
        drift; the only singletons (`Master`, `Weather`, `Objective
        Interaction`) are legitimate.
  - [x] Permanent `quest_id` slugs stamped on all 118 quests via
        `add-quest-ids.js` (idempotent, so ids never move on rename). Validator
        now errors on a missing or duplicate `quest_id`. All baked Phase D files
        key on `quest_id`, never `quest_name`.
  - [~] `quest-overlay.json` (structured quest attributes) — schema proven with
        **4 curated exemplars** (`journey-along-the-anduin`,
        `escape-from-dol-guldur`, `the-hills-of-emyn-muil`,
        `a-journey-to-rhosgobel`), chosen to span combat / restriction / pure-
        questing / fragile-objective quests. Validator guards keys (must be real
        quest_ids), enum values, and reports coverage. **Field set signed off
        (2026-07-03)** — the 9-field schema is approved; the remaining 114 quests
        can now be curated (still `confidence: ai_draft` until human-verified).
        Add fields only when a D1 verdict rule needs one.
  - [x] Migrated `serializeState()` to persist `activeQuestId`; load resolves by
        `quest_id` first, falling back to `activeQuestName` for old saves (same
        pattern as the v1→v2 card-code migration). A stale saved name no longer
        wins over the id. Verified with a 7-case Node harness.
- **D1 Per-card verdicts** ✅ DONE — client-side verdict engine flags every hero
  and deck card **Key / Fine / Weak / Dead** with a plain reason, against the
  active quest's `quest-overlay.json` attributes. Zero external data.
  - `verdicts.js` — self-contained engine (`CardVerdicts.verdictFor`) + Phase 3
    renderer. Each rule maps to one overlay field (threat_pressure→Threat
    Reduction Key, combat_required:false→attack-only Weak/Dead, ally_limit→allies
    Weak, direct_damage→low-HP allies Weak & Healing Key, etc.). Reuses the app's
    `QUEST_TAG_TO_CARD_TAGS` so tag matching stays consistent.
  - `quest-overlay.js` — browser global generated from `quest-overlay.json` by
    `scripts/build-quest-overlay-js.js` (the JSON can't be `fetch()`ed on
    `file://`). Regenerate after editing the JSON. JSON stays the validated
    source of truth.
  - Phase 3 shows a "Card Verdicts" card (problems first: Dead/Weak, then Key,
    Fine collapsed) with a `confidence` badge; uncurated quests get an honest
    "no structured data yet" note. App wiring is two additive lines in
    `initPhase3` + the quest-change handler.
  - Verified: 13-case Node engine harness + Playwright panel smoke. Only the 4
    curated quests produce verdicts until the other 114 are curated.
- **D2 Archetype mining** 🔶 TOOL DONE, DATA PENDING — `sync-ringsdb-decks.js`
  clusters published decklists by identity (hero spheres + dominant trait),
  promotes recurring cards to `core` (≥50% of a cluster's decks) / `flex`
  (≥25%), derives `good_at`/`weak_at` over the quest-tag vocabulary from core
  tags, parses a quest from each deck's title/description (low yield, honest),
  filters by votes, and emits a coverage report → `archetypes.json` (array,
  `confidence: "mined"`). Heroes are detected by *type* from `data.js`, so a
  dump that lumps heroes into `slots` still works. `validate-data.js` gained the
  **staleness guard**: core/flex codes must exist in `data.js`, source quests
  must be real `quest_ids`, ids unique, confidence enum-checked. Verified with a
  10-case Node harness on synthetic decklists. **No real `archetypes.json` yet**
  — `ringsdb.com` decklists are blocked by egress policy; run it against a saved
  dump: `node scripts/sync-ringsdb-decks.js --file decks.json [--apply]`. Expect
  sparse quest coverage; the D3 fallback chain (mined → hand-authored →
  inferred) covers the gaps. *(RingsDB, build-time)*
- **D3 Deck generation** — `generate-quest-decks.js` → baked `quest-decks.json`;
  app loads + re-critiques live on edit. *(depends on D0, D2)*
- **D4 Beginner tier** — tier toggle, glossary tooltips, "explain why"
  everywhere, one-click "Build & Teach", how-to-play primer. *(depends on D1, D3)*

Honesty is a first-class requirement: every generated deck/verdict carries a
`confidence` badge (`curated`/`mined`/`inferred`); the app claims *"strong on
paper,"* never *"wins,"* since "optimal" is unverifiable without playtesting.

Deferred from the earlier Phase D list (revisit within this frame):
collection/ownership tracking (decided **not** a generation constraint — generate
from the entire pool), playtest tools (draw-probability/mulligan — overlaps the
"survivability" model and honesty story), and deck sharing/export
(RingsDB-compatible export, shareable URL).

### Phase E — Structural (opportunistic, zero-build)

> Rewritten after the 2026-07-03 roadmap audit. The original plan ("split into
> native ES modules") had two errors: **(a)** browsers refuse to load
> `<script type="module">` over `file://` (CORS/opaque-origin rules), which
> would break the core "open index.html and it works" promise; **(b)** the
> split would silently break `scripts/lib.js`, which regex-scrapes
> `QUEST_TAG_TO_CARD_TAGS` out of `app.js` for the validator.

- [ ] Split `app.js` into several **classic** `<script>` files sharing globals
      (`state.js`, `persistence.js`, `phase1.js`, `phase2.js`, `phase3.js`,
      `tooltips.js`) — the same pattern `quests.js`/`data.js`/`app.js` already
      use. **No ES modules** (see above). Load order matters; document it in
      index.html. When the tag mapping moves, update `loadTagMapping()` in
      `scripts/lib.js` to point at its new file (it throws loudly if it can't
      find the mapping, so the validator will catch a miss).
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
