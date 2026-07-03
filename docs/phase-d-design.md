# Phase D+ Design — Tiered Teaching Deck Advisor

Status: **design/spec only, no app code yet.** Approved direction from the
2026-07-03 requirements conversation. This document is the source of truth for
the next major evolution; CLAUDE.md's Roadmap → Phase D section summarizes it and
points here.

## 1. Vision

Evolve the app from a *heuristic reference tool for people who already know the
game* into a **tiered, teaching deck advisor** that:

- serves **beginners through power users** in one app (a tier toggle, not
  separate apps);
- **auto-generates a full deck** for any chosen quest, drawing from the **entire
  card pool**;
- treats "optimal" as a **proven archetype** (mined from RingsDB) **tuned for the
  quest**, with good **internal consistency** and **survivability**;
- flags every card in a pasted deck with a **Key / Fine / Weak / Dead verdict and
  a plain-language reason**;
- stays a **zero-build static site** by pre-computing all knowledge offline.

## 2. The load-bearing constraint: where "smarts" live

The user chose **"pre-compute offline, ship static."** The important nuance that
makes this actually work:

> **Pre-compute the *knowledge*; compute the *judgment* client-side from it.**

A per-card verdict is `f(card, quest, rest-of-deck)`. That is combinatorial —
you cannot pre-bake a verdict for every possible pasted deck. So we split it:

| Pre-computed offline (static data, checked into the repo) | Computed live in-browser (deterministic JS, no deps) |
|---|---|
| Structured quest attributes (`quest-overlay.json`) | Per-card verdict for the deck you actually pasted |
| Card roles/tags (existing `overlay.json`, extended) | Deck-vs-quest score for the deck you're editing |
| Mined archetype corpus (`archetypes.json`) | Re-scoring on every add/remove |
| One baked "recommended deck" per quest (`quest-decks.json`) | Which glossary terms to linkify in visible text |
| Reason templates + glossary (`glossary.json`) | — |

No runtime AI, no server, no network. Offline AI **may** assist authoring the
static data (e.g. a first pass at quest attributes from prose), but its output is
committed data, hand-verified — exactly the `overlay.json` pattern already in use.

**Regeneration discipline** (this is the failure mode to design against): baked
data goes stale when card/quest data changes. Every pre-compute script must be
re-runnable and idempotent, and `validate-data.js` must fail/warn when baked
artifacts are out of sync with `data.js`/`quests.js` (e.g. a `quest-decks.json`
entry referencing a `ringsdb_code` no longer in the pool).

## 3. Data model additions

### 3.1 Structured quest attributes — `quest-overlay.json`

Today a quest carries prose `hazards_description` + hand-maintained
`recommended_tags`/`punished_tags`. Per-card verdicts need *machine-readable*
attributes.

**Quest identity (audit decision):** quests get a permanent `quest_id` slug
(e.g. `core-escape-from-dol-guldur`), added to `quests.js` by a dev script and
enforced unique by the validator. All new baked files key on `quest_id`, never
`quest_name` — keying by name is exactly the identity bug Phase A fixed for
cards (names are unique today, but a rename would silently orphan baked data).
Related migration: `serializeState()` currently stores `activeQuestName`;
move to `quest_id` with a name fallback for old saves, the same pattern as the
v1→v2 card-code migration.

Proposed schema (keyed by `quest_id`, merged into `questData` at dev time,
mirroring the card overlay so a quest re-sync never clobbers curation):

```jsonc
{
  "core2-escape-from-dol-guldur": {
    "combat_required": true,          // false ⇒ pure attack cards are Weak/Dead
    "enemy_profile": {
      "density": "high",              // none | low | medium | high
      "big_enemies": true,            // high-HP/attack enemies present
      "archery": false,
      "needs_sentinel": true          // multiplayer defense signal
    },
    "questing_pressure": "high",      // willpower demand
    "threat_pressure": "high",        // ⇒ threat reduction is Key; high-threat heroes flagged
    "location_pressure": "medium",
    "time_pressure": "fast",          // derived from existing `pacing`, kept explicit
    "restrictions": ["captured_hero", "ally_limit"], // hard rules that make cards Dead
    "confidence": "curated"           // curated | ai_draft | inferred — drives honesty badges
  }
}
```

The exact field set is an **open question (§7)** — start minimal, add fields only
when a verdict rule actually needs one.

### 3.2 Card roles

Verdicts reason over what a card *does*. Most of this is derivable from existing
`tags`/`traits`/stats (an attacker has `attack >= 2` or an attack-boost tag,
etc.), so prefer a **derivation function** over new hand data. Add a `roles`
field to `overlay.json` only for cards the derivation gets wrong.

Prerequisite: **finish tag curation.** 16 recently-synced cards have empty
`tags` and are invisible to every tag-based rule. This is Phase D0 and blocks
everything downstream.

### 3.3 Archetype corpus — `archetypes.json`

Mined from RingsDB published decklists. Quality bar (from the conversation):
**quest-tagged, popular, highly-rated.** Each archetype:

```jsonc
{
  "id": "leadership-dwarves",
  "name": "Leadership Dwarves",
  "identity": { "spheres": ["Leadership"], "key_traits": ["Dwarf"] },
  "core": ["01049", "..."],          // ringsdb_codes that recur across sourced decks
  "flex": ["..."],                    // commonly-swapped slots
  "good_at": ["Ally Mustering", "Attack Boost"],
  "weak_at": ["Threat Reduction"],
  "sources": [{ "url": "...", "rating": 42, "quest": "..." }],
  "confidence": "mined"               // mined | hand_authored | inferred
}
```

Reality check baked into the design: RingsDB has **no structured quest field**
(quest association is parsed from deck title/description, low yield) and
rating/popularity is **sparse across the ~118 quests**. Expect many quests to
have no minable archetype. The pipeline must therefore support a **fallback
chain**: mined → hand-authored → synergy-inferred, each labeled by `confidence`
so the UI can be honest.

### 3.4 Baked generated decks — `quest-decks.json`

For each quest, the generator (§4) emits one recommended decklist plus the
rationale, so the app ships a ready answer with zero client-side generation cost:

```jsonc
{
  "core2-escape-from-dol-guldur": {   // keyed by quest_id (§3.1)
    "archetype": "spirit-questing",
    "heroes": ["...codes..."],
    "cards": [["01049", 3], ["...", 2]],
    "rationale": {
      "why_heroes": "…",
      "per_card": { "01049": { "verdict": "Key", "reason": "…" } }
    },
    "products_needed": ["Core Set", "The Dead Marshes", "…"],
    "confidence": "inferred",         // propagated from archetype + quest attrs
    "coverage_note": "No proven RingsDB deck for this quest; built heuristically."
  }
}
```

**Products needed (audit decision):** generation draws from the entire pool, so
a beginner's one-click deck will reference products they don't own. Rather than
constraining generation or baking Core-only variants, each baked deck carries
`products_needed`, derived at generation time from `ringsdb_code` pack prefixes
via a small static prefix→product-name table. Beginner mode displays it
prominently next to the deck.

### 3.5 Glossary — `glossary.json`

Hand-authored `{ term: definition }` for beginner vocabulary (sphere, threat,
tech card, mulligan, staging area, questing, shadow, etc.). A client helper
linkifies occurrences of these terms in visible card/quest text (Beginner tier).

## 4. Dev-time pipeline (Node stdlib; offline AI optional, output committed)

All scripts follow the existing `scripts/` conventions (dry-run by default,
`--apply` to write, `--file` dump fallback because ringsdb.com is blocked by this
environment's egress policy, re-runnable, validated after).

1. **`sync-ringsdb-decks.js`** — ingest published decklists (API or `--file`),
   parse quest from title/description, filter by rating/popularity, cluster
   recurring cores → `archetypes.json`. Emits a **coverage report** (quests with
   ≥1 mined archetype vs none).
2. **`build-quest-attributes.js`** — scaffold `quest-overlay.json` entries from
   `hazards_description`/tags (optional AI first pass), flagged
   `confidence: "ai_draft"` until a human promotes them to `"curated"`.
3. **`generate-quest-decks.js`** — for each quest: pick best-fit archetype (mined
   → hand → inferred), tune to the quest (add recommended-tag tech, cut Dead
   cards, meet consistency + survivability targets), emit `quest-decks.json` with
   per-card rationale.
4. **Extend `extract-overlay.js`** to also capture any `roles` curation.
5. **`add-quest-ids.js`** (D0) — one-time script that derives a permanent
   `quest_id` slug per quest into `quests.js`; idempotent (never regenerates an
   existing id, so renames can't move data).
6. **Extend `validate-data.js`**: schema-check the new files; enforce
   `quest_id` presence + uniqueness; report coverage (quests missing
   attributes / a generated deck; cards missing tags/roles); fail on baked
   references to card codes or quest_ids absent from the data (the staleness
   guard); fail on generated decks violating the hard legality constraints
   above.

Scoring model (deterministic, tunable weights in one place):
`quest_fit` (recommended-tag coverage, punished-tag avoidance, restriction
compliance) + `consistency` (curve, card draw, economy, sphere balance) +
`survivability` (threat headroom, defense/healing vs `threat_pressure`). Weights
live in a single constants block so they're auditable and adjustable.

**Hard legality constraints (audit addition — these are filters, not weights;
a generated deck violating any of them is a generator bug):**

1. Minimum 50 cards (no maximum, but the generator targets exactly 50 for
   consistency).
2. Max 3 copies of any card by title.
3. Max **1 copy of each player side quest** by title (Rules Reference — the
   app's deck health warns on this since the Phase C addendum).
4. 1–3 heroes with distinct unique titles (via `uniqueTitle()`, which strips
   the `(MotK)` marker).
5. Every card's sphere must be provided by a chosen hero, or be Neutral.
6. **No `(MotK)` heroes**: they require the Messenger of the King contract,
   and contracts don't exist in the card pool at all (verified — no `Contract`
   type in `data.js`). Until contracts are modeled, MotK entries are hero-pool
   display options only, never generator picks.
7. Avoid duplicate unique titles between chosen heroes and deck cards (legal to
   *build*, but a generated "recommended" deck shouldn't ship a known
   uniqueness warning).

## 5. App layer (thin presentation over static data)

- **Tier toggle** (Beginner / Standard / Power), persisted in localStorage.
  Gates how much explanation and hand-holding shows; the underlying data is the
  same.
- **Per-card verdict panel** (Phase 3, and Phase 2 as you build): client-side
  verdict engine over `quest-overlay.json`; Key/Fine/Weak/Dead chips + reason.
  This directly answers the "flag problematic cards" requirement and works with
  **no** RingsDB dependency, so it can ship before generation.
- **"Explain why" annotations** everywhere: pull from baked rationale +
  templated reasons.
- **One-click "Build & Teach"**: load the `quest-decks.json` entry for the
  chosen quest, populate the deck, walk through hero/card reasons and how to
  pilot it — and show the `products_needed` list up front so a newcomer knows
  what the deck assumes they own.
- **Glossary tooltips** + **how-to-play primer** (static content, modal/page).
  Injection-ordering rule: card/quest text is `escapeHtml()`-ed first, then the
  linkifier wraps matched glossary terms in trusted markup it generates itself.
  Never linkify before escaping — that reintroduces the markup-injection bug
  (Known Bugs #10) through the back door.
- **Honesty surface**: every generated deck / verdict shows a confidence badge
  (`curated` / `mined` / `inferred`) and, where relevant, a coverage note.
  "Optimal" is never asserted without playtest evidence — the app claims
  *"strong on paper,"* not *"wins."*

## 6. Phasing & dependencies

| Phase | Deliverable | Depends on | RingsDB? |
|---|---|---|---|
| **D0 Foundations** | Finish 16 card-tag gaps + audit vocabulary; add `quest_id` slugs (`add-quest-ids.js`); define & curate `quest-overlay.json`; extend validator coverage | — | no |
| **D1 Per-card verdicts** | Client-side verdict engine + reasons; Phase 3 UI | D0 | no |
| **D2 Archetype mining** | `sync-ringsdb-decks.js` → `archetypes.json` + coverage report | — | yes |
| **D3 Deck generation** | `generate-quest-decks.js` → `quest-decks.json`; app loads + live critique on edit | D0, D2 | build-time only |
| **D4 Beginner tier** | Tier toggle, glossary, explain-why wiring, one-click Build & Teach, how-to-play primer | D1, D3 | no |

D0 → D1 is the highest-leverage, lowest-risk start: it answers the "flag
problematic cards" goal, needs no external data, and produces the quest
attributes that D3 also consumes.

## 7. Open questions (resolve during each phase, not blocking this doc)

1. **Quest attribute schema** — minimal viable field set; add-on-demand.
2. **Decks per quest** — one baked deck, or a few (per sphere identity)?
3. **Archetype→quest mapping** when no quest-tagged deck exists — hand-map, or
   infer from quest attributes vs archetype `good_at`/`weak_at`?
4. **Reason wording** — templated phrases vs richer AI-authored prose (baked).
5. **Verdict thresholds** — where Key/Fine/Weak/Dead cut over; needs playtest or
   community sanity-checking, not just intuition.
6. **Multiplayer** — do verdicts/generation account for a fellowship, or
   single-deck first?

## 8. Honest risk summary

- **~80% of this is data/curation, ~20% app code.** The app is a thin layer; the
  value and the effort are in the pipeline and the curated knowledge.
- **RingsDB mining under-delivers on quest-specificity.** Plan for fallbacks and
  label confidence rather than pretending coverage is uniform.
- **Staleness is the silent killer.** Without the validator staleness guard,
  baked advice drifts from the data and nobody notices — exactly the class of bug
  the 2026-07-03 review was about, one level up.
- **"Optimal" is unverifiable without playtesting.** Design for honesty
  (confidence badges), not false confidence.
