const cardData = [
  {
    "name": "Aragorn",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Dúnedain",
      "Noble",
      "Ranger"
    ],
    "text": "Sentinel.\nResponse: After Aragorn commits to a quest, spend 1 resource from his resource pool to ready him.",
    "summary": "Aragorn readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01001.png",
    "ringsdb_code": "01001"
  },
  {
    "name": "Théodred",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Noble",
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After Théodred commits to a quest, choose a hero committed to that quest. Add 1 resource to that hero's resource pool.",
    "summary": "Théodred generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01002.png",
    "ringsdb_code": "01002"
  },
  {
    "name": "Glóin",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf",
      "Noble"
    ],
    "text": "Response: After Glóin suffers damage, add 1 resource to his resource pool for each point of damage he just suffered.",
    "summary": "Glóin generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01003.png",
    "ringsdb_code": "01003"
  },
  {
    "name": "Gimli",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Dwarf",
      "Noble",
      "Warrior"
    ],
    "text": "Gimli gets +1 [attack] for each damage token on him.",
    "summary": "Gimli can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01004.png",
    "ringsdb_code": "01004"
  },
  {
    "name": "Legolas",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noble",
      "Silvan",
      "Warrior"
    ],
    "text": "Ranged.\nResponse: After Legolas participates in an attack that destroys an enemy, place 2 progress tokens on the current quest.",
    "summary": "Legolas triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01005.png",
    "ringsdb_code": "01005"
  },
  {
    "name": "Thalin",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "While Thalin is committed to a quest, deal 1 damage to each enemy as it is revealed by the encounter deck.",
    "summary": "Thalin deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Encounter Deck Manipulation"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01006.png",
    "ringsdb_code": "01006"
  },
  {
    "name": "Éowyn",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noble",
      "Rohan"
    ],
    "text": "Action: Discard 1 card from your hand to give Éowyn +1 [willpower] until the end of the phase. This effect may be triggered by each player once each round.",
    "summary": "Éowyn can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost",
      "Multiplayer"
    ],
    "willpower": 4,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01007.png",
    "ringsdb_code": "01007"
  },
  {
    "name": "Eleanor",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "Response: Exhaust Eleanor to cancel the \"when revealed\" effects of a treachery card just revealed by the encounter deck. Then, discard that card, and replace it with the next card from the encounter deck.",
    "summary": "Eleanor cancels a treachery's When Revealed effect once per round, acting as a reusable safety net against dangerous encounter surprises.",
    "tags": [
      "Treachery Cancellation",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01008.png",
    "ringsdb_code": "01008"
  },
  {
    "name": "Dúnhere",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Dúnhere can target enemies in the staging area when he attacks alone. When doing so, he gets +1 [attack].",
    "summary": "Dúnhere can attack enemies still in the staging area, neutralizing threats before they engage and freeing allies for other duties.",
    "tags": [
      "Attack Boost",
      "Staging Area Attack"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01009.png",
    "ringsdb_code": "01009"
  },
  {
    "name": "Denethor",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Noble",
      "Steward"
    ],
    "text": "Action: Exhaust Denethor to look at the top card of the encounter deck. You may move that card to the bottom of the deck.",
    "summary": "Denethor lets you look at (and often rearrange) the top of the encounter deck, giving you critical foreknowledge to plan each round.",
    "tags": [
      "Scrying"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01010.png",
    "ringsdb_code": "01010"
  },
  {
    "name": "Glorfindel",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Noble",
      "Noldor",
      "Warrior"
    ],
    "text": "Action: Pay 1 resource from Glorfindel's pool to heal 1 damage on any character. (Limit once per round.)",
    "summary": "Glorfindel heals 1 damage per action, sustaining characters through repeated combat without dedicated healing allies.",
    "tags": [
      "Healing"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01011.png",
    "ringsdb_code": "01011"
  },
  {
    "name": "Beravor",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Action: Exhaust Beravor to choose a player. That player draws 2 cards. Limit once per round.",
    "summary": "Beravor exhausts to draw 2 cards for any player, providing the most reliable on-demand card draw in Lore.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01012.png",
    "ringsdb_code": "01012"
  },
  {
    "name": "Guard of the Citadel",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "",
    "summary": "Guard of the Citadel is a stat-line ally with no special text, valued purely for its printed numbers.",
    "tags": [],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01013.png",
    "ringsdb_code": "01013"
  },
  {
    "name": "Faramir",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Noble",
      "Ranger"
    ],
    "text": "Action: Exhaust Faramir to choose a player. Each character controlled by that player gets +1 [willpower] until the end of the phase.",
    "summary": "Faramir boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01014.png",
    "ringsdb_code": "01014"
  },
  {
    "name": "Son of Arnor",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain"
    ],
    "text": "Response: After Son of Arnor enters play, choose an enemy card in the staging area or currently engaged with another player. Engage that enemy.",
    "summary": "Son of Arnor manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01015.png",
    "ringsdb_code": "01015"
  },
  {
    "name": "Snowbourn Scout",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Rohan",
      "Scout"
    ],
    "text": "Response: After Snowbourn Scout enters play, choose a location. Place 1 progress token on that location.",
    "summary": "Snowbourn Scout places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01016.png",
    "ringsdb_code": "01016"
  },
  {
    "name": "Silverlode Archer",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Archer",
      "Silvan"
    ],
    "text": "Ranged.",
    "summary": "Silverlode Archer has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01017.png",
    "ringsdb_code": "01017"
  },
  {
    "name": "Longbeard Orc Slayer",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Response: After Longbeard Orc Slayer enters play, deal 1 damage to each Orc enemy in play.",
    "summary": "Longbeard Orc Slayer deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01018.png",
    "ringsdb_code": "01018"
  },
  {
    "name": "Brok Ironfist",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "6",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Response: After a Dwarf hero you control leaves play, put Brok Ironfist into play from your hand.",
    "summary": "Brok Ironfist puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01019.png",
    "ringsdb_code": "01019"
  },
  {
    "name": "Ever Vigilant",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose and ready 1 ally card.",
    "summary": "Ever Vigilant readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01020.png",
    "ringsdb_code": "01020"
  },
  {
    "name": "Common Cause",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Exhaust 1 hero you control to choose and ready a different hero.",
    "summary": "Common Cause readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01021.png",
    "ringsdb_code": "01021"
  },
  {
    "name": "For Gondor!",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Until the end of the phase, all characters get +1 [attack]. All Gondor characters also get +1 [defense] until the end of the phase.",
    "summary": "For Gondor! grants +1 attack and +1 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01022.png",
    "ringsdb_code": "01022"
  },
  {
    "name": "Sneak Attack",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Put 1 ally card into play from your hand. At the end of the phase, if that ally is still in play, return it to your hand.",
    "summary": "Sneak Attack puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01023.png",
    "ringsdb_code": "01023"
  },
  {
    "name": "Valiant Sacrifice",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After an ally card leaves play, that card's controller draws 2 cards.",
    "summary": "Valiant Sacrifice provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Card Draw (Passive)",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01024.png",
    "ringsdb_code": "01024"
  },
  {
    "name": "Steward of Gondor",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Title"
    ],
    "text": "Attach to a hero.\nAttached hero gains the Gondor trait.\nAction: Exhaust Steward of Gondor to add 2 resources to attached hero's resource pool.",
    "summary": "Steward of Gondor generates 2 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01026.png",
    "ringsdb_code": "01026"
  },
  {
    "name": "Celebrían's Stone",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to a hero. Restricted.\nAttached hero gains +2 [willpower]\nIf attached hero is Aragorn, he also gains a [spirit] resource icon.",
    "summary": "Celebrían's Stone grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Willpower Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01027.png",
    "ringsdb_code": "01027"
  },
  {
    "name": "Veteran Axehand",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "",
    "summary": "Veteran Axehand is a stat-line ally with no special text, valued purely for its printed numbers.",
    "tags": [],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01028.png",
    "ringsdb_code": "01028"
  },
  {
    "name": "Gondorian Spearman",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After Gondorian Spearman is declared as a defender, deal 1 damage to the attacking enemy.",
    "summary": "Gondorian Spearman has Sentinel and deals 1 damage when it defends, combining defensive coverage with a passive chip-damage engine.",
    "tags": [
      "Direct Damage",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01029.png",
    "ringsdb_code": "01029"
  },
  {
    "name": "Horseback Archer",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Archer"
    ],
    "text": "Ranged.",
    "summary": "Horseback Archer has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01030.png",
    "ringsdb_code": "01030"
  },
  {
    "name": "Beorn",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "6",
    "traits": [
      "Beorning",
      "Warrior"
    ],
    "text": "Action: Beorn gains +5 [attack] until the end of the phase. At the end of the phase in which you trigger this effect, shuffle Beorn back into your deck. (Limit once per round.)",
    "summary": "Beorn provides +5 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 3,
    "health": 6,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01031.png",
    "ringsdb_code": "01031"
  },
  {
    "name": "Blade Mastery",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a character. Until the end of the phase, that character gains +1 [attack] and +1 [defense].",
    "summary": "Blade Mastery grants +1 attack and +1 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01032.png",
    "ringsdb_code": "01032"
  },
  {
    "name": "Rain of Arrows",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust a character you control with the ranged keyword to choose a player. Deal 1 damage to each enemy engaged with that player.",
    "summary": "Rain of Arrows deals 1 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01033.png",
    "ringsdb_code": "01033"
  },
  {
    "name": "Feint",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Combat Action: Choose an enemy engaged with a player. That enemy cannot attack that player this phase.",
    "summary": "Feint prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01034.png",
    "ringsdb_code": "01034"
  },
  {
    "name": "Quick Strike",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust a character you control to immediately declare it as an attacker (and resolve its attack) against any eligible enemy target.",
    "summary": "Quick Strike readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01035.png",
    "ringsdb_code": "01035"
  },
  {
    "name": "Thicket of Spears",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "You must use resources from 3 different heroes' pools to pay for this card.\nAction: Choose a player. That player's engaged enemies cannot attack that player this phase.",
    "summary": "Thicket of Spears prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01036.png",
    "ringsdb_code": "01036"
  },
  {
    "name": "Swift Strike",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: After a character is declared as a defender, deal 2 damage to the attacking enemy.",
    "summary": "Swift Strike deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01037.png",
    "ringsdb_code": "01037"
  },
  {
    "name": "Stand Together",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a player. That player may declare any number of his eligible characters as defenders against each enemy attacking him this phase.",
    "summary": "Stand Together provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01038.png",
    "ringsdb_code": "01038"
  },
  {
    "name": "Blade of Gondolin",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a hero. Restricted.\nAttached hero gets +1 [attack] when attacking an Orc.\nResponse: After attached hero attacks and destroys an enemy, place 1 progress token on the current quest.",
    "summary": "Blade of Gondolin grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01039.png",
    "ringsdb_code": "01039"
  },
  {
    "name": "Citadel Plate",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a hero. Restricted.\nAttached hero gets +4 Hit Points.",
    "summary": "Citadel Plate adds +4 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01040.png",
    "ringsdb_code": "01040"
  },
  {
    "name": "Dwarven Axe",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a hero. Restricted.\nAttached hero gains +1 [attack] (+2 [attack] instead if attached hero is a Dwarf.)",
    "summary": "Dwarven Axe grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01041.png",
    "ringsdb_code": "01041"
  },
  {
    "name": "Horn of Gondor",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Artifact"
    ],
    "text": "Attach to a hero. Restricted.\nResponse: After a character is destroyed, add 1 resource to attached hero's pool.",
    "summary": "Horn of Gondor generates 1 resources per exhaust, serving as the primary income attachment in Tactics decks.",
    "tags": [
      "Resource Generation",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01042.png",
    "ringsdb_code": "01042"
  },
  {
    "name": "Wandering Took",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Reduce your threat by 3 to give control of Wandering Took to another player. Raise that player's threat by 3. (Limit once per round.)",
    "summary": "Wandering Took reduces threat by 3 on a triggered condition, helping stall the threat track in decks that lack dedicated threat management.",
    "tags": [
      "Threat Reduction",
      "Threat Payment",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01043.png",
    "ringsdb_code": "01043"
  },
  {
    "name": "Lórien Guide",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Response: After Lórien Guide commits to a quest, place 1 progress token on the active location.",
    "summary": "Lórien Guide places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01044.png",
    "ringsdb_code": "01044"
  },
  {
    "name": "Northern Tracker",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Response: After Northern Tracker commits to a quest, place 1 progress token on each location in the staging area.",
    "summary": "Northern Tracker places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01045.png",
    "ringsdb_code": "01045"
  },
  {
    "name": "The Galadhrim's Greeting",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Action: Reduce one player's threat by 6, or reduce each player's threat by 2.",
    "summary": "The Galadhrim's Greeting reduces threat by 6, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01046.png",
    "ringsdb_code": "01046"
  },
  {
    "name": "Strength of Will",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After you travel to a location, exhaust a [spirit] character to place 2 progress tokens on that location.",
    "summary": "Strength of Will places 2 progress on locations, helping to escape location lock or clear locations that are throttling quest progress.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01047.png",
    "ringsdb_code": "01047"
  },
  {
    "name": "Hasty Stroke",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: Cancel a shadow effect just triggered during combat.",
    "summary": "Hasty Stroke cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01048.png",
    "ringsdb_code": "01048"
  },
  {
    "name": "Will of the West",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a player. Shuffle that player's discard pile back into his deck. Remove Will of the West from the game.",
    "summary": "Will of the West provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01049.png",
    "ringsdb_code": "01049"
  },
  {
    "name": "A Test of Will",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: Cancel the \"when revealed\" effects of a card that was just revealed from the encounter deck.",
    "summary": "A Test of Will cancels a treachery's When Revealed effects and replaces it, acting as a one-time hard counter to the most dangerous encounter surprises.",
    "tags": [
      "Treachery Cancellation",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01050.png",
    "ringsdb_code": "01050"
  },
  {
    "name": "Stand and Fight",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "X",
    "traits": [],
    "text": "Action: Choose an ally with a printed cost of X in any player's discard pile. Put that ally into play under your control. (The chosen ally can belong to any sphere of influence.)",
    "summary": "Stand and Fight puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Recursion",
      "Ally Mustering"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01051.png",
    "ringsdb_code": "01051"
  },
  {
    "name": "A Light in the Dark",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Choose an enemy engaged with a player. Return that enemy to the staging area.",
    "summary": "A Light in the Dark prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01052.png",
    "ringsdb_code": "01052"
  },
  {
    "name": "Dwarven Tomb",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Return 1 [spirit] card from your discard pile to your hand.",
    "summary": "Dwarven Tomb retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Recursion"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01053.png",
    "ringsdb_code": "01053"
  },
  {
    "name": "Fortune or Fate",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Action: Choose a hero in any player's discard pile. Put that card into play, under its owner's control.",
    "summary": "Fortune or Fate retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Recursion"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01054.png",
    "ringsdb_code": "01054"
  },
  {
    "name": "The Favor of the Lady",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a hero.\nAttached hero gains +1 [willpower].",
    "summary": "The Favor of the Lady gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01055.png",
    "ringsdb_code": "01055"
  },
  {
    "name": "Power in the Earth",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a location.\nAttached location gets -1 [threat].",
    "summary": "Power in the Earth is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Staging Area Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01056.png",
    "ringsdb_code": "01056"
  },
  {
    "name": "Unexpected Courage",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a hero.\nAction: Exhaust Unexpected Courage to ready attached hero.",
    "summary": "Unexpected Courage allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01057.png",
    "ringsdb_code": "01057"
  },
  {
    "name": "Daughter of the Nimrodel",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan"
    ],
    "text": "Action: Exhaust Daughter of the Nimrodel to heal up to 2 damage on any 1 hero.",
    "summary": "Daughter of the Nimrodel heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01058.png",
    "ringsdb_code": "01058"
  },
  {
    "name": "Erebor Hammersmith",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dwarf",
      "Craftsman"
    ],
    "text": "Response: After you play Erebor Hammersmith, return the topmost attachment in any player's discard pile to his hand.",
    "summary": "Erebor Hammersmith provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01059.png",
    "ringsdb_code": "01059"
  },
  {
    "name": "Henamarth Riversong",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Silvan"
    ],
    "text": "Action: Exhaust Henamarth Riversong to look at the top card of the encounter deck.",
    "summary": "Henamarth Riversong lets you look at and manipulate the top of the encounter deck, converting blind reveal into calculated risk management.",
    "tags": [
      "Scrying"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01060.png",
    "ringsdb_code": "01060"
  },
  {
    "name": "Miner of the Iron Hills",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Miner of the Iron Hills enters play, choose and discard 1 Condition attachment from play.",
    "summary": "Miner of the Iron Hills provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Condition Removal",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01061.png",
    "ringsdb_code": "01061"
  },
  {
    "name": "Gléowine",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Minstrel",
      "Rohan"
    ],
    "text": "Action: Exhaust Gléowine to choose a player. That player draws 1 card.",
    "summary": "Gléowine draws 1 card on demand by exhausting, providing reliable hand replenishment for Lore decks.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01062.png",
    "ringsdb_code": "01062"
  },
  {
    "name": "Lore of Imladris",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Choose a character. Heal all damage from that character.",
    "summary": "Lore of Imladris provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01063.png",
    "ringsdb_code": "01063"
  },
  {
    "name": "Lórien's Wealth",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Action: Choose a player. That player draws 3 cards.",
    "summary": "Lórien's Wealth draws X cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01064.png",
    "ringsdb_code": "01064"
  },
  {
    "name": "Radagast's Cunning",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Quest Action: Choose an enemy in the staging area. Until the end of the phase, that enemy does not contribute its [threat]",
    "summary": "Radagast's Cunning reduces threat in the staging area, easing a difficult questing round or buying time for the team to set up defenses.",
    "tags": [
      "Staging Area Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01065.png",
    "ringsdb_code": "01065"
  },
  {
    "name": "Gandalf's Search",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "X",
    "traits": [],
    "text": "Action: Look at the top X cards of any player's deck, add 1 of those cards to its owner's hand, and return the rest to the top of the deck in any order.",
    "summary": "Gandalf's Search provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Scrying"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01067.png",
    "ringsdb_code": "01067"
  },
  {
    "name": "Beorn's Hospitality",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Action: Choose a player. Heal all damage on each hero controlled by that player.",
    "summary": "Beorn's Hospitality provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Healing",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01068.png",
    "ringsdb_code": "01068"
  },
  {
    "name": "Forest Snare",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Item",
      "Trap"
    ],
    "text": "Attach to an enemy engaged with a player.\nAttached enemy cannot attack.",
    "summary": "Forest Snare is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01069.png",
    "ringsdb_code": "01069"
  },
  {
    "name": "Protector of Lórien",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a hero.\nAction: Discard a card from your hand to give attached hero +1 [defense] or +1 [willpower] until the end of the phase. Limit 3 times per phase.",
    "summary": "Protector of Lórien boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01070.png",
    "ringsdb_code": "01070"
  },
  {
    "name": "Dark Knowledge",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a hero. Attached hero gets -1 [willpower]\nResponse: Exhaust Dark Knowledge to look at 1 shadow card that was just dealt to an enemy attacking you.",
    "summary": "Dark Knowledge is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01071.png",
    "ringsdb_code": "01071"
  },
  {
    "name": "Self Preservation",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a character.\nAction: Exhaust Self Preservation to heal 2 points of damage from attached character.",
    "summary": "Self Preservation provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01072.png",
    "ringsdb_code": "01072"
  },
  {
    "name": "Gandalf",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Istari"
    ],
    "text": "At the end of the round, discard Gandalf from play.\nResponse: After Gandalf enters play, (choose 1): draw 3 cards, deal 4 damage to 1 enemy in play, or reduce your threat by 5.",
    "summary": "Gandalf draws 3 cards automatically on a triggered condition, rewarding the right sequencing with passive hand advantage.",
    "tags": [
      "Card Draw (Passive)",
      "Threat Reduction",
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 4,
    "attack": 4,
    "defense": 4,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/01073.png",
    "ringsdb_code": "01073"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Hobbit"
    ],
    "text": "The first player draws 1 additional card in the resource phase.",
    "summary": "Bilbo Baggins offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Card Draw (Passive)"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02001.png",
    "ringsdb_code": "02001"
  },
  {
    "name": "Dúnedain Mark",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Signal"
    ],
    "text": "Attach to a hero.\nAttached hero gains +1 [attack]\nAction: Pay 1 resource from attached hero's pool to attach Dúnedain Mark to another hero.",
    "summary": "Dúnedain Mark grants +1 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02002.png",
    "ringsdb_code": "02002"
  },
  {
    "name": "Campfire Tales",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Each player draws 1 card.",
    "summary": "Campfire Tales draws X cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02003.png",
    "ringsdb_code": "02003"
  },
  {
    "name": "Winged Guardian",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Sentinel.\nWinged Guardian cannot have restricted attachments.\nForced: After an attack in which Winged Guardian defends resolves, pay 1 [tactics] resource or discard Winged Guardian from play.",
    "summary": "Winged Guardian has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Sentinel",
      "Forced Effect"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 4,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02004.png",
    "ringsdb_code": "02004"
  },
  {
    "name": "The Eagles Are Coming!",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Eagle"
    ],
    "text": "Action: Search the top 5 cards of your deck for any number of Eagle cards and add them to your hand. Shuffle the other cards back into your deck.",
    "summary": "The Eagles Are Coming! searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02005.png",
    "ringsdb_code": "02005"
  },
  {
    "name": "Mustering the Rohirrim",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Search the top 10 cards of your deck for any 1 Rohan ally card and add it to your hand. Then, shuffle the other cards back into your deck.",
    "summary": "Mustering the Rohirrim searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02007.png",
    "ringsdb_code": "02007"
  },
  {
    "name": "Rivendell Minstrel",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After you play Rivendell Minstrel from your hand, search your deck for 1 Song card and add it to your hand. Shuffle your deck.",
    "summary": "Rivendell Minstrel searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02008.png",
    "ringsdb_code": "02008"
  },
  {
    "name": "Strider's Path",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a location is revealed from the encounter deck, immediately travel to that location without resolving its Travel effect. If another location is currently active, return it to the staging area.",
    "summary": "Strider's Path manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02009.png",
    "ringsdb_code": "02009"
  },
  {
    "name": "Song of Kings",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero.\nAttached hero gains a [leadership] resource icon.",
    "summary": "Song of Kings grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02010.png",
    "ringsdb_code": "02010"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Frodo Baggins is damaged, cancel the damage and instead raise your threat by the amount of damage he would have been dealt. (Limit once per phase.)",
    "summary": "Frodo Baggins converts damage to threat, trading threat acceleration for invulnerability—best in decks with heavy threat reduction support.",
    "tags": [
      "Threat Payment",
      "Damage Prevention",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02025.png",
    "ringsdb_code": "02025"
  },
  {
    "name": "Dúnedain Warning",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Signal"
    ],
    "text": "Attach to a hero.\nAttached hero gains +1 [defense]\nAction: Pay 1 resource from attached hero's pool to attach Dúnedain Warning to another hero.",
    "summary": "Dúnedain Warning boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02026.png",
    "ringsdb_code": "02026"
  },
  {
    "name": "Second Breakfast",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Each player returns the topmost attachment card from his discard pile to his hand.",
    "summary": "Second Breakfast retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Recursion",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02027.png",
    "ringsdb_code": "02027"
  },
  {
    "name": "Beorning Beekeeper",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Beorning"
    ],
    "text": "Action: Discard Beorning Beekeeper from play to deal 1 damage to each enemy in the staging area.",
    "summary": "Beorning Beekeeper deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02028.png",
    "ringsdb_code": "02028"
  },
  {
    "name": "Born Aloft",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Condition"
    ],
    "text": "Attach to an ally.\nAction: Discard Born Aloft from play to return attached ally to its owner's hand.",
    "summary": "Born Aloft is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02029.png",
    "ringsdb_code": "02029"
  },
  {
    "name": "Éomund",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan"
    ],
    "text": "Response: After Éomund leaves play, ready all Rohan characters in play.",
    "summary": "Éomund readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02030.png",
    "ringsdb_code": "02030"
  },
  {
    "name": "Nor am I a Stranger",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a character.\nAttached character gains the Rohan trait.",
    "summary": "Nor am I a Stranger is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02031.png",
    "ringsdb_code": "02031"
  },
  {
    "name": "Longbeard Map-Maker",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Spend 1 [lore] resource to give Longbeard Map-Maker +1 [willpower] until the end of the phase.",
    "summary": "Longbeard Map-Maker boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Sphere Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02032.png",
    "ringsdb_code": "02032"
  },
  {
    "name": "A Burning Brand",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Attach to a [lore] character. Restricted.\nResponse: Exhaust A Burning Brand to cancel a shadow effect just triggered during an attack that attached character is defending.",
    "summary": "A Burning Brand is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Shadow Cancellation",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02033.png",
    "ringsdb_code": "02033"
  },
  {
    "name": "Song of Wisdom",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero.\nAttached hero gains a [lore] resource icon.",
    "summary": "Song of Wisdom grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02034.png",
    "ringsdb_code": "02034"
  },
  {
    "name": "Prince Imrahil",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "Response: After a character leaves play, ready Prince Imrahil. (Limit once per round.)",
    "summary": "Prince Imrahil readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02050.png",
    "ringsdb_code": "02050"
  },
  {
    "name": "Dúnedain Quest",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Signal"
    ],
    "text": "Attach to a hero.\nAttached hero gains +1 [willpower]\nAction: Pay 1 resource from attached hero's pool to attach Dúnedain Quest to another hero.",
    "summary": "Dúnedain Quest gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02051.png",
    "ringsdb_code": "02051"
  },
  {
    "name": "Parting Gifts",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Move any number of resource tokens from a [leadership] hero's resource pool to any other hero's resource pool.",
    "summary": "Parting Gifts provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02052.png",
    "ringsdb_code": "02052"
  },
  {
    "name": "Landroval",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Sentinel.\nLandroval cannot have restricted attachments.\nResponse: After a hero card is destroyed, return Landroval to his owner's hand to put that hero back into play, with 1 damage token on it. (Limit once per game.)",
    "summary": "Landroval has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02053.png",
    "ringsdb_code": "02053"
  },
  {
    "name": "To the Eyrie",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: After an ally is destroyed, exhaust 1 Eagle character to move that ally from the discard pile to its owner's hand.",
    "summary": "To the Eyrie retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Recursion",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02054.png",
    "ringsdb_code": "02054"
  },
  {
    "name": "Ancient Mathom",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mathom"
    ],
    "text": "Attach to a location.\nResponse: After attached location is explored, the first player draws 3 cards.",
    "summary": "Ancient Mathom draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02056.png",
    "ringsdb_code": "02056"
  },
  {
    "name": "Haldir of Lórien",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Silvan"
    ],
    "text": "Ranged. Sentinel.",
    "summary": "Haldir of Lórien has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Sentinel",
      "Ranged"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02057.png",
    "ringsdb_code": "02057"
  },
  {
    "name": "Infighting",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Move any number of damage from one enemy to another.",
    "summary": "Infighting prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02058.png",
    "ringsdb_code": "02058"
  },
  {
    "name": "Radagast",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Istari"
    ],
    "text": "Radagast collects 1 resource each resource phase. These resources can be used to pay for Creature cards played from your hand.\nAction: Spend X resources from Radagast's pool to heal X wounds on any 1 Creature.",
    "summary": "Radagast generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02059.png",
    "ringsdb_code": "02059"
  },
  {
    "name": "Brand son of Bain",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dale"
    ],
    "text": "Ranged.\nResponse: After Brand son of Bain attacks and defeats an enemy engaged with another player, choose and ready one of that player's characters.",
    "summary": "Brand son of Bain triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Ranged",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02072.png",
    "ringsdb_code": "02072"
  },
  {
    "name": "Keen-eyed Took",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Keen-eyed Took enters play, reveal the top card of each player's deck.\nAction: Return Keen-eyed Took to your hand to discard the top card of each player's deck.",
    "summary": "Keen-eyed Took provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02073.png",
    "ringsdb_code": "02073"
  },
  {
    "name": "Rear Guard",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Quest Action: Discard a [leadership] ally to give each hero committed to this quest +1 [willpower] until the end of the phase.",
    "summary": "Rear Guard gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02074.png",
    "ringsdb_code": "02074"
  },
  {
    "name": "Descendant of Thorondor",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Descendant of Thorondor cannot have restricted attachments.\nResponse: After Descendant of Thorondor enters or leaves play, deal 2 damage to any 1 enemy in the staging area.",
    "summary": "Descendant of Thorondor deals 2 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02075.png",
    "ringsdb_code": "02075"
  },
  {
    "name": "Meneldor's Flight",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose an Eagle ally. Return that character to its owner's hand.",
    "summary": "Meneldor's Flight provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02076.png",
    "ringsdb_code": "02076"
  },
  {
    "name": "The Riddermark's Finest",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Rohan"
    ],
    "text": "Action: Exhaust and discard The Riddermark's Finest to place 2 progress tokens on any location.",
    "summary": "The Riddermark's Finest places 2 progress tokens on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02077.png",
    "ringsdb_code": "02077"
  },
  {
    "name": "Ride to Ruin",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Discard a Rohan ally to choose a location. Place 3 progress tokens on that location.",
    "summary": "Ride to Ruin places 3 progress on locations, helping to escape location lock or clear locations that are throttling quest progress.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02078.png",
    "ringsdb_code": "02078"
  },
  {
    "name": "Gildor Inglorion",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Noldor"
    ],
    "text": "Action: Exhaust Gildor Inglorion to look at the top 3 cards of your deck. Switch one of those cards with a card from your hand. Then, return the 3 cards to the top of your deck, in any order.",
    "summary": "Gildor Inglorion lets you look at and manipulate the top of the encounter deck, converting blind reveal into calculated risk management.",
    "tags": [
      "Scrying",
      "Player Deck Manipulation"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02079.png",
    "ringsdb_code": "02079"
  },
  {
    "name": "Gildor's Counsel",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Play during the Quest phase, before characters are committed to the Quest.\nAction: Reveal 1 less card from the encounter deck this phase. (To a minimum of 1.)",
    "summary": "Gildor's Counsel manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02080.png",
    "ringsdb_code": "02080"
  },
  {
    "name": "Song of Travel",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero.\nAttached hero gains a [spirit] resource icon.",
    "summary": "Song of Travel grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02081.png",
    "ringsdb_code": "02081"
  },
  {
    "name": "Boromir",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Gondor",
      "Noble",
      "Warrior"
    ],
    "text": "Action: Raise your threat by 1 to ready Boromir. (Limit once per phase.)\nAction: Discard Boromir to deal 2 damage to each enemy engaged with a single player.",
    "summary": "Boromir raises threat as a cost to ready, delivering extra attacks or defenses each round at the price of accelerating your threat clock.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Payment",
      "Direct Damage"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02095.png",
    "ringsdb_code": "02095"
  },
  {
    "name": "Dúnedain Watcher",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain"
    ],
    "text": "Response: Discard Dúnedain Watcher from play to cancel the shadow effects of a card just triggered.",
    "summary": "Dúnedain Watcher cancels or discards shadow cards, preventing dangerous shadow effects that could otherwise wipe defenders or spike enemy attack.",
    "tags": [
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02096.png",
    "ringsdb_code": "02096"
  },
  {
    "name": "Dúnedain Cache",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Attach to a hero.\nAttached hero gains ranged.\nAction: Pay 1 resource from attached hero's pool to attach Dúnedain Cache to another hero.",
    "summary": "Dúnedain Cache grants Ranged to the attached character, turning them into a ranged attacker who can assist any player in combat.",
    "tags": [
      "Ranged",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02097.png",
    "ringsdb_code": "02097"
  },
  {
    "name": "Vassal of the Windlord",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Ranged.Vassal of the Windlord cannot have restricted attachments.\nForced: After an attack in which Vassal of the Windlord attacked resolves, discard Vassal of the Windlord from play.",
    "summary": "Vassal of the Windlord has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged",
      "Forced Effect"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02098.png",
    "ringsdb_code": "02098"
  },
  {
    "name": "Song of Mocking",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero.\nAction: Exhaust Song of Mocking to choose another hero. Until the end of the phase, attached hero takes all damage assigned to the chosen hero.",
    "summary": "Song of Mocking is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Damage Prevention"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02099.png",
    "ringsdb_code": "02099"
  },
  {
    "name": "Elfhelm",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "While Elfhelm is ready, he gains:\n\"Response: After your threat is raised as the result of questing unsuccessfully, or by an encounter or quest card effect, reduce your threat by 1.\"",
    "summary": "Elfhelm reduces threat by 1 on a triggered condition, helping stall the threat track in decks that lack dedicated threat management.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02100.png",
    "ringsdb_code": "02100"
  },
  {
    "name": "We Do Not Sleep",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Action: Until the end of the phase, Rohan characters do not exhaust to commit to quests.",
    "summary": "We Do Not Sleep provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Action Advantage (Non-Exhausting)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02101.png",
    "ringsdb_code": "02101"
  },
  {
    "name": "Silvan Tracker",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan"
    ],
    "text": "Response: After a Silvan character readies during the refresh phase, heal 1 damage from that character.",
    "summary": "Silvan Tracker heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02102.png",
    "ringsdb_code": "02102"
  },
  {
    "name": "Fast Hitch",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a Hobbit character.\nAction: Exhaust Fast Hitch to ready attached character.",
    "summary": "Fast Hitch allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02103.png",
    "ringsdb_code": "02103"
  },
  {
    "name": "Song of Battle",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero.\nAttached hero gains a [tactics] resource icon.",
    "summary": "Song of Battle grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02104.png",
    "ringsdb_code": "02104"
  },
  {
    "name": "Dáin Ironfoot",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Dwarf",
      "Noble"
    ],
    "text": "While Dáin Ironfoot is ready, Dwarf characters get +1 [attack] and +1 [willpower].",
    "summary": "Dáin Ironfoot can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Willpower Boost"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/02116.png",
    "ringsdb_code": "02116"
  },
  {
    "name": "Dúnedain Signal",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Signal"
    ],
    "text": "Attach to a hero.\nAttached hero gains sentinel.\nAction: Pay 1 resource from attached hero's pool to attach Dúnedain Signal to another hero.",
    "summary": "Dúnedain Signal grants Sentinel, allowing the attached character to defend attacks against any player—a key multiplayer defensive tool.",
    "tags": [
      "Sentinel",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02117.png",
    "ringsdb_code": "02117"
  },
  {
    "name": "Dawn Take You All",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play after shadow cards have been dealt, before any attacks have resolved.\nCombat Action: Each player may choose and discard 1 facedown shadow card from an enemy with which he is engaged.",
    "summary": "Dawn Take You All cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Shadow Cancellation",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02118.png",
    "ringsdb_code": "02118"
  },
  {
    "name": "Eagles of the Misty Mountains",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Eagles of the Misty Mountains cannot have restricted attachments. Eagles of the Misty Mountains gets +1 [attack] and +1 [defense] for each facedown attachment it has.\nResponse: After another Eagle character leaves play, you may attach that card facedown to Eagles of the Misty Mountains.",
    "summary": "Eagles of the Misty Mountains provides +1 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Attachment Synergy",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02119.png",
    "ringsdb_code": "02119"
  },
  {
    "name": "Support of the Eagles",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Boon"
    ],
    "text": "Attach to a [tactics] hero.\nAction: Exhaust Support of the Eagles to choose an Eagle ally. Until the end of the phase, attached hero adds that ally's [attack] or [defense] (choose 1) to its own.",
    "summary": "Support of the Eagles provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02120.png",
    "ringsdb_code": "02120"
  },
  {
    "name": "West Road Traveller",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan"
    ],
    "text": "Response: After you play West Road Traveller from your hand, switch the active location with any other location in the staging area.",
    "summary": "West Road Traveller provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Location Control (Travel/Bypass)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02121.png",
    "ringsdb_code": "02121"
  },
  {
    "name": "Mirkwood Runner",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "While Mirkwood Runner is attacking alone, the defending enemy does not count its [defense].\n\"...let a ploughman plough, but choose an otter for swimming, and for running light over grass and leaf or over snow-an Elf.\"\n–Legolas, The Fellowship of the Ring",
    "summary": "Mirkwood Runner provides +X attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02123.png",
    "ringsdb_code": "02123"
  },
  {
    "name": "Rumour from the Earth",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Look at the top card of the encounter deck. Then, you may pay 1 [lore] resource to return Rumour from the Earth to your hand.",
    "summary": "Rumour from the Earth provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Scrying"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02124.png",
    "ringsdb_code": "02124"
  },
  {
    "name": "Shadow of the Past",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Move the top card of the encounter discard pile to the top of the encounter deck.",
    "summary": "Shadow of the Past manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02125.png",
    "ringsdb_code": "02125"
  },
  {
    "name": "Dwalin",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Dwalin attacks and destroys an Orc enemy, lower your threat by 2.",
    "summary": "Dwalin reduces threat by 2, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/03001.png",
    "ringsdb_code": "03001"
  },
  {
    "name": "Bifur",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Pay 1 resource from a hero's resource pool to add 1 resource to Bifur's resource pool. Any player may trigger this ability. (Limit once per round.)",
    "summary": "Bifur generates 1 resource per activation, making them the premier economic engine for Lore decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/03002.png",
    "ringsdb_code": "03002"
  },
  {
    "name": "Durin's Song",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Action: Choose a Dwarf hero. That hero gets +2 [willpower], +2 [attack], and +2 [defense] until the end of the round.",
    "summary": "Durin's Song grants +2 attack and +2 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03004.png",
    "ringsdb_code": "03004"
  },
  {
    "name": "Ever Onward",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Response: After players quest unsuccessfully, choose a player. That player does not raise his threat.",
    "summary": "Ever Onward provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Threat Payment",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03005.png",
    "ringsdb_code": "03005"
  },
  {
    "name": "Veteran of Nanduhirion",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Veteran of Nanduhirion enters play with 1 damage on it.",
    "summary": "Veteran of Nanduhirion provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [],
    "willpower": 0,
    "attack": 3,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03006.png",
    "ringsdb_code": "03006"
  },
  {
    "name": "Dwarrowdelf Axe",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a Dwarf character.\nAttached character gets +1 [attack]\nResponse: After attached character attacks, deal 1 damage to the defending enemy.",
    "summary": "Dwarrowdelf Axe grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Direct Damage",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03007.png",
    "ringsdb_code": "03007"
  },
  {
    "name": "Khazâd! Khazâd!",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a Dwarf character. Until the end of the phase, that character gets +3 [attack].",
    "summary": "Khazâd! Khazâd! boosts attack by +3 for the phase, helping the team overcome high-defense enemies when focused fire alone isn't enough.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03008.png",
    "ringsdb_code": "03008"
  },
  {
    "name": "Zigil Miner",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Exhaust Zigil Miner and name a number to discard the top 2 cards of your deck. If at least one of those cards has cost equal to the named number, choose a hero you control. For each card that matches the named number, add 1 resource to that hero's resource pool.",
    "summary": "Zigil Miner generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Player Deck Manipulation"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03009.png",
    "ringsdb_code": "03009"
  },
  {
    "name": "Untroubled by Darkness",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Each Dwarf character gets +1 [willpower] until the end of the phase. (+2 [willpower] instead if the active location is an Underground or Dark location.)",
    "summary": "Untroubled by Darkness gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost",
      "Location Control (Travel/Bypass)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03010.png",
    "ringsdb_code": "03010"
  },
  {
    "name": "Erebor Record Keeper",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Dwarf"
    ],
    "text": "Erebor Record Keeper cannot attack or defend.\nAction: Exhaust Erebor Record Keeper and pay 1 [lore] resource to choose and ready a Dwarf character.",
    "summary": "Erebor Record Keeper readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Enemy Control"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03011.png",
    "ringsdb_code": "03011"
  },
  {
    "name": "Ancestral Knowledge",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust a Dwarf character to place 2 progress tokens on the active location. (4 progress tokens instead if it is an Underground or Mountain location.)",
    "summary": "Ancestral Knowledge places 2 progress on locations, helping to escape location lock or clear locations that are throttling quest progress.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03012.png",
    "ringsdb_code": "03012"
  },
  {
    "name": "Boots from Erebor",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Dwarf or Hobbit character.\nLimit 1 Boots from Erebor per character.\nAttached character gets +1 hit point.",
    "summary": "Boots from Erebor adds +1 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/03013.png",
    "ringsdb_code": "03013"
  },
  {
    "name": "Elrohir",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Noldor",
      "Noble",
      "Ranger"
    ],
    "text": "While Elladan is in play, Elrohir gets +2 [defense].\nResponse: After Elrohir is declared as a defender, pay 1 resource from his resource pool to ready him.",
    "summary": "Elrohir readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04001.png",
    "ringsdb_code": "04001"
  },
  {
    "name": "Taking Initiative",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Discard the top card of your deck. If the discarded card's printed cost is equal to or higher than the number of characters you control, draw 2 cards and deal 2 damage to any enemy.",
    "summary": "Taking Initiative deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Card Draw (Active)",
      "Direct Damage",
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04002.png",
    "ringsdb_code": "04002"
  },
  {
    "name": "Timely Aid",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Secrecy 3.\nAction: Reveal the top 5 cards of your deck and put 1 revealed ally into play, if able. Shuffle all other revealed cards back into your deck.",
    "summary": "Timely Aid puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Resource Discount",
      "Player Deck Manipulation",
      "Ally Mustering",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04003.png",
    "ringsdb_code": "04003"
  },
  {
    "name": "Unseen Strike",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a character you control. Until the end of the phase, that character gets +3 [attack] while attacking an enemy with a higher engagement cost than your threat.",
    "summary": "Unseen Strike boosts attack by +3 for the phase, helping the team overcome high-defense enemies when focused fire alone isn't enough.",
    "tags": [
      "Attack Boost",
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04004.png",
    "ringsdb_code": "04004"
  },
  {
    "name": "Keeping Count",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [],
    "text": "Attach to a hero. Limit 1 per hero.\nAttached hero gets +1 [attack] for each resource token on another copy of Keeping Count that is above the current number of resource tokens on this card.\nForced: After attached hero attacks and destroys an enemy, place 1 resource token on this card.",
    "summary": "Keeping Count grants +1 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Forced Effect"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04005.png",
    "ringsdb_code": "04005"
  },
  {
    "name": "Bofur",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Quest Action: Spend 1 [spirit] resource to put Bofur into play from your hand, exhausted and committed to a quest. If you quest successfully this phase and Bofur is still in play, return him to your hand.",
    "summary": "Bofur puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering",
      "Sphere Synergy"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04006.png",
    "ringsdb_code": "04006"
  },
  {
    "name": "Renewed Friendship",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After another player plays an attachment on a hero you control, you may (choose 1): ready 1 of that player's heroes, have that player draw 1 card, or lower that player's threat by 2.",
    "summary": "Renewed Friendship readies one or more characters or heroes, giving the team extra actions—especially valuable during heavy combat rounds.",
    "tags": [
      "Card Draw (Passive)",
      "Action Advantage (Readying)",
      "Threat Reduction",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04007.png",
    "ringsdb_code": "04007"
  },
  {
    "name": "Ravenhill Scout",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dale",
      "Scout"
    ],
    "text": "Action: Exhaust Ravenhill Scout to move up to 2 progress tokens from 1 location to another location.",
    "summary": "Ravenhill Scout places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04008.png",
    "ringsdb_code": "04008"
  },
  {
    "name": "Needful to Know",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Secrecy 2.\nAction: Raise your threat by 1 to look at the top card of the encounter deck. Then, reduce your threat by X, where X is the threat of that card.",
    "summary": "Needful to Know reduces threat by X, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Resource Discount",
      "Threat Reduction",
      "Threat Payment",
      "Scrying",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04009.png",
    "ringsdb_code": "04009"
  },
  {
    "name": "Good Meal",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [],
    "text": "Attach to a Hobbit hero.\nAction: Discard Good Meal to lower the cost of the next event you play this round that matches attached hero's sphere by 2.",
    "summary": "Good Meal reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04010.png",
    "ringsdb_code": "04010"
  },
  {
    "name": "Elladan",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Noldor",
      "Noble",
      "Ranger"
    ],
    "text": "While Elrohir is in play, Elladan gets +2 [attack].\nResponse: After Elladan is declared as an attacker, pay 1 resource from his resource pool to ready him.",
    "summary": "Elladan readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04028.png",
    "ringsdb_code": "04028"
  },
  {
    "name": "Dúnedain Wanderer",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Ranged. Sentinel. Secrecy 3.",
    "summary": "Dúnedain Wanderer has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Resource Discount",
      "Sentinel",
      "Ranged",
      "Secrecy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04029.png",
    "ringsdb_code": "04029"
  },
  {
    "name": "Lure of Moria",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Action: Ready all Dwarf characters.",
    "summary": "Lure of Moria readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04030.png",
    "ringsdb_code": "04030"
  },
  {
    "name": "Rivendell Blade",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Noldor or Silvan character. Restricted.\nWhen attached character attacks an enemy, that enemy gets -2 [defense] until the end of the phase.",
    "summary": "Rivendell Blade is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04031.png",
    "ringsdb_code": "04031"
  },
  {
    "name": "Hail of Stones",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust X characters to deal X damage to an enemy in the staging area.",
    "summary": "Hail of Stones deals X damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04032.png",
    "ringsdb_code": "04032"
  },
  {
    "name": "Rider of the Mark",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan"
    ],
    "text": "Action: Spend 1 [spirit] resource to give control of Rider of the Mark to another player. (Limit once per round.)\nResponse: After Rider of the Mark changes control, discard a shadow card dealt to an enemy you are engaged with.",
    "summary": "Rider of the Mark cancels or discards shadow cards, preventing dangerous shadow effects that could otherwise wipe defenders or spike enemy attack.",
    "tags": [
      "Shadow Cancellation",
      "Sphere Synergy",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04033.png",
    "ringsdb_code": "04033"
  },
  {
    "name": "Song of Eärendil",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a [spirit] hero.\nResponse: After Song of Eärendil enters play, draw 1 card.\nResponse: After another player raises his threat, raise your threat by 1 to reduce that player's threat by 1.",
    "summary": "Song of Eärendil draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Threat Reduction",
      "Threat Payment",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04034.png",
    "ringsdb_code": "04034"
  },
  {
    "name": "Bombur",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Exhaust Bombur to choose a location. That location gets -1 [threat] until the end of the phase. (That location does not contribute its [threat] instead if it is an Underground location.)",
    "summary": "Bombur reduces the threat contribution of locations or enemies in the staging area, easing the questing burden without committing progress.",
    "tags": [
      "Staging Area Control"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04035.png",
    "ringsdb_code": "04035"
  },
  {
    "name": "Out of the Wild",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Secrecy 2.\nAction: Search the top 5 cards of the encounter deck for any 1 non-objective card worth no victory points and add it to your victory display. Shuffle the encounter deck. Add Out of the Wild to the victory display.",
    "summary": "Out of the Wild manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Resource Discount",
      "Encounter Deck Manipulation",
      "Victory Display Synergy",
      "Objective Interaction",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04036.png",
    "ringsdb_code": "04036"
  },
  {
    "name": "The End Comes",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After a Dwarf character leaves play, shuffle the encounter discard pile back into the encounter deck.",
    "summary": "The End Comes manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04037.png",
    "ringsdb_code": "04037"
  },
  {
    "name": "Aragorn",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Sentinel.\nRefresh Action: Reduce your threat to your starting threat level. (Limit once per game.)",
    "summary": "Aragorn reduces threat by X, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Sentinel"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04053.png",
    "ringsdb_code": "04053"
  },
  {
    "name": "Grave Cairn",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a character leaves play, add its [attack] to another character's [attack] until the end of the round.",
    "summary": "Grave Cairn provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04054.png",
    "ringsdb_code": "04054"
  },
  {
    "name": "Sword that was Broken",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Artifact"
    ],
    "text": "Attach to a hero.\nAttached hero gains a [leadership] resource icon.\nIf attached hero is Aragorn, each character you control gets +1 [willpower].",
    "summary": "Sword that was Broken grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04055.png",
    "ringsdb_code": "04055"
  },
  {
    "name": "Watcher of the Bruinen",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Warrior"
    ],
    "text": "Sentinel.\nWatcher of the Bruinen does not exhaust to defend.\nForced: After Watcher of the Bruinen defends, either discard it from play or discard 1 card from your hand.",
    "summary": "Watcher of the Bruinen has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Sentinel",
      "Forced Effect"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04056.png",
    "ringsdb_code": "04056"
  },
  {
    "name": "Rivendell Bow",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Noldor or Silvan character, or to Aragorn. Limit 1 per character.\nAttached character gains ranged.\nIf attached character has the printed ranged keyword, it gets +1 [attack] during a ranged attack.",
    "summary": "Rivendell Bow grants +1 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Ranged",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04057.png",
    "ringsdb_code": "04057"
  },
  {
    "name": "Arwen Undómiel",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Response: After Arwen Undómiel exhausts, choose a character. That character gains sentinel and gets +1 [defense] until the end of the round.",
    "summary": "Arwen Undómiel has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04058.png",
    "ringsdb_code": "04058"
  },
  {
    "name": "Elrond's Counsel",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: If you control a unique Noldor character, give another character +1 [willpower] until the end of the phase and lower your threat by 3.",
    "summary": "Elrond's Counsel gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Threat Reduction",
      "Willpower Boost",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04059.png",
    "ringsdb_code": "04059"
  },
  {
    "name": "Short Cut",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a location enters play, exhaust a Hobbit character to shuffle that location back into the encounter deck. Then, reveal 1 card from the encounter deck and add it to the staging area.",
    "summary": "Short Cut manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Location Control (Travel/Bypass)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04060.png",
    "ringsdb_code": "04060"
  },
  {
    "name": "Legacy of Durin",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a Dwarf hero.\nResponse: After you play a Dwarf character from your hand, exhaust Legacy of Durin to draw 1 card.",
    "summary": "Legacy of Durin draws 1 card on demand, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04061.png",
    "ringsdb_code": "04061"
  },
  {
    "name": "Resourceful",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [],
    "text": "Secrecy 3.\nAttach to a hero you control.\nAttached hero collects 1 additional resource during the resource phase each round.",
    "summary": "Resourceful generates 1 resources per exhaust, serving as the primary income attachment in Neutral decks.",
    "tags": [
      "Resource Generation",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04062.png",
    "ringsdb_code": "04062"
  },
  {
    "name": "Háma",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After Háma is declared as an attacker, return a [tactics] event from your discard pile to your hand. Then, choose and discard 1 card from your hand. (Limit 3 times per game for the group.)",
    "summary": "Háma retrieves cards from the discard pile, enabling recursion loops or recovering key cards lost to treacheries.",
    "tags": [
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04076.png",
    "ringsdb_code": "04076"
  },
  {
    "name": "Erestor",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Noldor"
    ],
    "text": "Action: Choose and discard 1 card from your hand to draw 1 card. (Limit once per round.)",
    "summary": "Erestor draws 1 card on demand by exhausting, providing reliable hand replenishment for Leadership decks.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04077.png",
    "ringsdb_code": "04077"
  },
  {
    "name": "Fresh Tracks",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After an enemy is added to the staging area, deal 1 damage to that enemy. Players ignore that enemy while making engagement checks this round.",
    "summary": "Fresh Tracks deals 1 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04078.png",
    "ringsdb_code": "04078"
  },
  {
    "name": "Erebor Battle Master",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Erebor Battle Master gets +1 [attack] for each other Dwarf ally you control. (Limit +4 [attack].)",
    "summary": "Erebor Battle Master provides +1 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04079.png",
    "ringsdb_code": "04079"
  },
  {
    "name": "Ring Mail",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Dwarf or Hobbit character. Restricted.\nAttached character gets +1 hit point and +1 [defense].",
    "summary": "Ring Mail gives +1 defense and +1 hit points, dramatically improving a character's ability to tank repeated attacks.",
    "tags": [
      "Defense Boost",
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04080.png",
    "ringsdb_code": "04080"
  },
  {
    "name": "Out of Sight",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Secrecy 3.\nAction: Enemies engaged with you cannot attack you this phase.",
    "summary": "Out of Sight prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Resource Discount",
      "Enemy Control",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04081.png",
    "ringsdb_code": "04081"
  },
  {
    "name": "Ever My Heart Rises",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Condition"
    ],
    "text": "Attach a Dwarf character.\nResponse: After you travel to a Mountain or Underground location, ready attached character and reduce your threat by 1.",
    "summary": "Ever My Heart Rises allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04082.png",
    "ringsdb_code": "04082"
  },
  {
    "name": "Warden of Healing",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Healer"
    ],
    "text": "Action: Exhaust Warden of Healing to heal 1 damage on up to 2 different characters. Then, you may pay 2 [lore] resources to ready Warden of Healing.",
    "summary": "Warden of Healing heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Action Advantage (Readying)",
      "Healing"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04083.png",
    "ringsdb_code": "04083"
  },
  {
    "name": "Word of Command",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust an Istari character to search your deck for 1 card and add it to your hand. Shuffle your deck.",
    "summary": "Word of Command searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04084.png",
    "ringsdb_code": "04084"
  },
  {
    "name": "Love of Tales",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a [lore] hero. Limit 1 per hero.\nResponse: After a Song card is played, exhaust Love of Tales to add 1 resource to attached hero's resource pool.",
    "summary": "Love of Tales generates 1 resources per exhaust, serving as the primary income attachment in Lore decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04085.png",
    "ringsdb_code": "04085"
  },
  {
    "name": "Glorfindel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Noldor",
      "Noble",
      "Warrior"
    ],
    "text": "Forced: After Glorfindel exhausts to commit to a quest, raise your threat by 1.",
    "summary": "Glorfindel offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Threat Payment",
      "Forced Effect"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04101.png",
    "ringsdb_code": "04101"
  },
  {
    "name": "Longbeard Elder",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Longbeard Elder commits to a quest, look at the top card of the encounter deck. If that card is a location, place 1 progress token on the current quest. Otherwise, Longbeard Elder gets -1 [willpower] until the end of the phase.",
    "summary": "Longbeard Elder places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Scrying",
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04102.png",
    "ringsdb_code": "04102"
  },
  {
    "name": "Path of Need",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Condition"
    ],
    "text": "Limit 1 per deck. Attach to a location.\nHeroes do not exhaust to attack, defend, or commit to a quest while attached location is the active location.",
    "summary": "Path of Need is a support attachment that enhances the attached character's role in Leadership builds.",
    "tags": [
      "Location Control (Travel/Bypass)",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04103.png",
    "ringsdb_code": "04103"
  },
  {
    "name": "Trollshaw Scout",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Scout"
    ],
    "text": "Ranged.\nTrollshaw Scout does not exhaust to attack.\nForced: After Trollshaw Scout attacks, either discard it from play or discard 1 card from your hand.",
    "summary": "Trollshaw Scout has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Ranged",
      "Forced Effect"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04104.png",
    "ringsdb_code": "04104"
  },
  {
    "name": "Heavy Stroke",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a Dwarf deals X damage to an enemy during combat, deal an additional X damage to that enemy. (Limit once per phase.)",
    "summary": "Heavy Stroke provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04105.png",
    "ringsdb_code": "04105"
  },
  {
    "name": "Imladris Stargazer",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor"
    ],
    "text": "Action: Exhaust Imladris Stargazer to choose a player. That player looks at the top 5 cards of his deck and then returns them to the top of his deck in any order.",
    "summary": "Imladris Stargazer searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Multiplayer"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04106.png",
    "ringsdb_code": "04106"
  },
  {
    "name": "Light of Valinor",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a Noldor or Silvan hero.\nAttached hero does not exhaust to commit to a quest.",
    "summary": "Light of Valinor lets the attached character act without exhausting, freeing them to contribute fully in both questing and combat.",
    "tags": [
      "Action Advantage (Non-Exhausting)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04107.png",
    "ringsdb_code": "04107"
  },
  {
    "name": "Daeron's Runes",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Draw 2 cards. Then, discard 1 card from your hand.",
    "summary": "Daeron's Runes draws 2 cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04108.png",
    "ringsdb_code": "04108"
  },
  {
    "name": "Healing Herbs",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a [lore] hero.\nAction: Discard Healing Herbs and exhaust attached hero to heal all damage on 1 character.",
    "summary": "Healing Herbs provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04109.png",
    "ringsdb_code": "04109"
  },
  {
    "name": "Asfaloth",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Noldor or Silvan hero.\nAction: Exhaust Asfaloth to place 1 progress token on any location. (2 tokens instead if attached hero is Glorfindel.)",
    "summary": "Asfaloth places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04110.png",
    "ringsdb_code": "04110"
  },
  {
    "name": "Elrond",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "13",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "You may spend resources from Elrond's resource pool to pay for [spirit], [leadership], and [tactics] allies.\nResponse: After a character is healed by another card effect, heal 1 damage on it.",
    "summary": "Elrond heals 1 damage per action, sustaining characters through repeated combat without dedicated healing allies.",
    "tags": [
      "Resource Smoothing",
      "Healing",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04128.png",
    "ringsdb_code": "04128"
  },
  {
    "name": "We Are Not Idle",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Exhaust X Dwarf heroes to add X resources to a hero's resource pool and draw 1 card.",
    "summary": "We Are Not Idle draws 1 card immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04129.png",
    "ringsdb_code": "04129"
  },
  {
    "name": "Hardy Leadership",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [],
    "text": "Attach to a [leadership] hero.\nEach Dwarf gets +1 hit point.",
    "summary": "Hardy Leadership adds +1 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04130.png",
    "ringsdb_code": "04130"
  },
  {
    "name": "Hands Upon the Bow",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust a character you control with ranged to immediately declare it as an attacker (and resolve its attack) against an enemy in the staging area. It gets +1 [attack] during this attack.",
    "summary": "Hands Upon the Bow readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Staging Area Attack",
      "Ranged"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04131.png",
    "ringsdb_code": "04131"
  },
  {
    "name": "A Elbereth! Gilthoniel!",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Secrecy 4.\nResponse: After a non-unique enemy attacks you, put that enemy on the bottom of the encounter deck. If your threat is lower than that enemy's engagement cost, set your threat equal to the engagement cost of that enemy.",
    "summary": "A Elbereth! Gilthoniel! forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Resource Discount",
      "Encounter Deck Manipulation",
      "Engagement Control",
      "Response Trigger",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04132.png",
    "ringsdb_code": "04132"
  },
  {
    "name": "Miruvor",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a hero.\nAction: Discard Miruvor to (choose two): ready attached hero, add 1 resource to attached hero's resource pool, attached hero gets +1 [willpower] until the end of the round, or put Miruvor on the top of your deck.",
    "summary": "Miruvor generates 1 resources per exhaust, serving as the primary income attachment in Spirit decks.",
    "tags": [
      "Resource Generation",
      "Action Advantage (Readying)",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04133.png",
    "ringsdb_code": "04133"
  },
  {
    "name": "Master of the Forge",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Craftsman"
    ],
    "text": "Action: Exhaust Master of the Forge to search the top 5 cards of your deck for any 1 attachment and add it to your hand. Shuffle the other cards back into your deck.",
    "summary": "Master of the Forge searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04134.png",
    "ringsdb_code": "04134"
  },
  {
    "name": "Peace, and Thought",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Refresh Action: Exhaust 2 heroes to draw 5 cards.",
    "summary": "Peace, and Thought draws 5 cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04135.png",
    "ringsdb_code": "04135"
  },
  {
    "name": "Risk Some Light",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Secrecy 3.\nAction: Look at the top 3 cards of the encounter deck. You may select 1 card and move it to the bottom of the encounter deck. Return any unselected cards to the top of the encounter deck, in any order.",
    "summary": "Risk Some Light manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Resource Discount",
      "Scrying",
      "Encounter Deck Manipulation",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/04136.png",
    "ringsdb_code": "04136"
  },
  {
    "name": "Vilya",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Ring",
      "Artifact"
    ],
    "text": "Attach to Elrond. He gains a [spirit] resource icon.\nAction: Exhaust Elrond and Vilya to reveal the top card of your deck. You can immediately play or put into play the revealed card for no cost, if able. Otherwise, move the revealed card to the bottom of your deck.",
    "summary": "Vilya grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/04137.png",
    "ringsdb_code": "04137"
  },
  {
    "name": "Beregond",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Sentinel.\nLower the cost to play Weapon and Armor attachments on Beregond by 2.",
    "summary": "Beregond has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Resource Discount",
      "Sentinel"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 4,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/05001.png",
    "ringsdb_code": "05001"
  },
  {
    "name": "Boromir",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Gondor",
      "Warrior",
      "Noble"
    ],
    "text": "While Boromir has at least 1 resource in his resource pool, Gondor allies get +1 [attack].",
    "summary": "Boromir can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/05002.png",
    "ringsdb_code": "05002"
  },
  {
    "name": "Errand-rider",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Gondor"
    ],
    "text": "Action: Exhaust Errand-rider to move 1 resource from the resource pool of a hero you control to another hero's resource pool.",
    "summary": "Errand-rider provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05003.png",
    "ringsdb_code": "05003"
  },
  {
    "name": "Citadel Custodian",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Gondor"
    ],
    "text": "Lower the cost to play Citadel Custodian by 1 for each Gondor ally in play.",
    "summary": "Citadel Custodian provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05004.png",
    "ringsdb_code": "05004"
  },
  {
    "name": "Mutual Accord",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Until the end of the phase, each Gondor card in play gains the Rohan trait, and each Rohan card in play gains the Gondor trait.",
    "summary": "Mutual Accord provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Sphere Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05005.png",
    "ringsdb_code": "05005"
  },
  {
    "name": "Wealth of Gondor",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a Gondor hero. Add 1 resource to that hero's resource pool.",
    "summary": "Wealth of Gondor generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05006.png",
    "ringsdb_code": "05006"
  },
  {
    "name": "Defender of Rammas",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "",
    "summary": "Defender of Rammas is a stat-line ally with no special text, valued purely for its printed numbers.",
    "tags": [
      "Defense Boost"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 4,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05007.png",
    "ringsdb_code": "05007"
  },
  {
    "name": "Behind Strong Walls",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Ready a defending Gondor character. That character gets +1 [defense] until the end of the phase.",
    "summary": "Behind Strong Walls readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05008.png",
    "ringsdb_code": "05008"
  },
  {
    "name": "Spear of the Citadel",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a [tactics] character. Limit 1 per character.\nResponse: After attached character is declared as a defender, deal 1 damage to the attacking enemy.",
    "summary": "Spear of the Citadel is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Direct Damage",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05009.png",
    "ringsdb_code": "05009"
  },
  {
    "name": "Damrod",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Action: Discard Damrod from play to lower your threat by 1 for each enemy in the staging area.",
    "summary": "Damrod reduces threat by 1 on a triggered condition, helping stall the threat track in decks that lack dedicated threat management.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/05010.png",
    "ringsdb_code": "05010"
  },
  {
    "name": "Light the Beacons",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Action: All characters get +2 [defense] and do not exhaust to defend until the end of the round.",
    "summary": "Light the Beacons provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Defense Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05011.png",
    "ringsdb_code": "05011"
  },
  {
    "name": "A Watchful Peace",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a location worth no victory points leaves play as an explored location, return it to the top of the encounter deck.",
    "summary": "A Watchful Peace manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05012.png",
    "ringsdb_code": "05012"
  },
  {
    "name": "Blood of Númenor",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a Gondor or Dúnedain hero.\nAction: Spend 1 resource from attached hero's resource pool to give attached hero +1 [defense] for each resource in its resource pool until the end of the phase. (Limit once per phase.)",
    "summary": "Blood of Númenor boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05013.png",
    "ringsdb_code": "05013"
  },
  {
    "name": "Hunter of Lamedon",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Outlands"
    ],
    "text": "Response: After you play Hunter of Lamedon from your hand, reveal the top card of your deck. If it is an Outlands card, add it to your hand. Otherwise, discard it.",
    "summary": "Hunter of Lamedon searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05014.png",
    "ringsdb_code": "05014"
  },
  {
    "name": "Ithilien Tracker",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Action: Exhaust Ithilien Tracker to lower the [threat] of the next enemy added to the staging area to 0 until the end of the phase.",
    "summary": "Ithilien Tracker reduces threat by 1 on a triggered condition, helping stall the threat track in decks that lack dedicated threat management.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 0,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05015.png",
    "ringsdb_code": "05015"
  },
  {
    "name": "Master of Lore",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor"
    ],
    "text": "Action: Exhaust Master of Lore to name a card type. Lower the cost for you to play the next [lore] card of that type by 1 until the end of the phase (to a minimum of 1).",
    "summary": "Master of Lore provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05016.png",
    "ringsdb_code": "05016"
  },
  {
    "name": "Ranger Spikes",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Trap"
    ],
    "text": "Play Ranger Spikes into the staging area unattached.\nIf unattached, attach Ranger Spikes to the next eligible enemy that enters the staging area.\nPlayers do not make engagement checks against attached enemy. Attached enemy gets -2 [threat].",
    "summary": "Ranger Spikes is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Staging Area Control",
      "Engagement Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05017.png",
    "ringsdb_code": "05017"
  },
  {
    "name": "Envoy of Pelargir",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor"
    ],
    "text": "Response: After Envoy of Pelargir enters play, add 1 resource to a Gondor or Noble hero's resource pool.",
    "summary": "Envoy of Pelargir generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/05018.png",
    "ringsdb_code": "05018"
  },
  {
    "name": "Hirluin the Fair",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Outlands"
    ],
    "text": "Ranged.\nYou may use resources from Hirluin the Fair's resource pool to pay for Outlands ally cards of any sphere.",
    "summary": "Hirluin the Fair offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Ranged"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06001.png",
    "ringsdb_code": "06001"
  },
  {
    "name": "Warrior of Lossarnach",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Outlands"
    ],
    "text": "Each Outlands character you control gets +1 [defense].",
    "summary": "Warrior of Lossarnach provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Defense Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06002.png",
    "ringsdb_code": "06002"
  },
  {
    "name": "Gaining Strength",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Discard 2 resources from your hero's resource pool to add 3 resources to that hero's resource pool.",
    "summary": "Gaining Strength generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06003.png",
    "ringsdb_code": "06003"
  },
  {
    "name": "Knights of the Swan",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Outlands"
    ],
    "text": "Each Outlands character you control gets +1 [attack].",
    "summary": "Knights of the Swan provides +1 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06004.png",
    "ringsdb_code": "06004"
  },
  {
    "name": "Gondorian Shield",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Armor",
      "Item"
    ],
    "text": "Attach to a hero. Restricted.\nLimit 1 per hero.\nAttached hero gains +1 [defense]. (+2 [defense] instead if attached hero has the Gondor trait.)",
    "summary": "Gondorian Shield boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06005.png",
    "ringsdb_code": "06005"
  },
  {
    "name": "Ethir Swordsman",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Outlands"
    ],
    "text": "Each Outlands character you control gets +1 [willpower].",
    "summary": "Ethir Swordsman boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06006.png",
    "ringsdb_code": "06006"
  },
  {
    "name": "Ring of Barahir",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Ring"
    ],
    "text": "Attach to a hero.\nAttached hero gets +1 hit point for each Artifact attachment attached to it.\nIf attached hero is Aragorn, he also gains a [lore] resource icon.",
    "summary": "Ring of Barahir grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06007.png",
    "ringsdb_code": "06007"
  },
  {
    "name": "Anfalas Herdsman",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Outlands"
    ],
    "text": "Each Outlands character you control gets +1 hit point.",
    "summary": "Anfalas Herdsman provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Hit Point Boost"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06008.png",
    "ringsdb_code": "06008"
  },
  {
    "name": "Mithrandir's Advice",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Draw 1 card for each hero you control with a printed [lore] resource icon.",
    "summary": "Mithrandir's Advice draws 1 card immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Resource Smoothing",
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06009.png",
    "ringsdb_code": "06009"
  },
  {
    "name": "A Good Harvest",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Name a sphere. Until the end of the phase, you can spend resources of any sphere when paying for cards that belong to the named sphere.",
    "summary": "A Good Harvest provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06010.png",
    "ringsdb_code": "06010"
  },
  {
    "name": "Mirlonde",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Silvan"
    ],
    "text": "Each hero you control with a printed [lore] resource icon gets -1 threat cost.",
    "summary": "Mirlonde offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06032.png",
    "ringsdb_code": "06032"
  },
  {
    "name": "Forlong",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Outlands"
    ],
    "text": "While you control Outlands allies that belong to 4 different spheres, ready Forlong at the beginning of each phase.",
    "summary": "Forlong readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06033.png",
    "ringsdb_code": "06033"
  },
  {
    "name": "Strength of Arms",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if each hero you control has a printed [leadership] resource icon.\nAction: Ready each ally in play.",
    "summary": "Strength of Arms readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06034.png",
    "ringsdb_code": "06034"
  },
  {
    "name": "Mighty Prowess",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a [tactics] hero hero. Limit 1 per hero.\nResponse: After attached hero attacks and destroys an enemy, deal 1 damage to another enemy that shares a Trait with the enemy just destroyed.",
    "summary": "Mighty Prowess is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06035.png",
    "ringsdb_code": "06035"
  },
  {
    "name": "Trained for War",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if each hero you control has the printed [tactics] resource icon.\nAction: Until the end of the phase, if the current quest does not have Siege, it gains Battle.",
    "summary": "Trained for War provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06036.png",
    "ringsdb_code": "06036"
  },
  {
    "name": "Silvan Refugee",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Forced: After a character leaves play, discard Silvan Refugee from play.",
    "summary": "Silvan Refugee creates value when allies enter or leave play, enabling Sneak Attack loops or triggering repeated enter-play bonuses.",
    "tags": [
      "Bounce / Leaves Play Synergy",
      "Forced Effect"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06037.png",
    "ringsdb_code": "06037"
  },
  {
    "name": "Against the Shadow",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if each hero you control has the printed [spirit] resource icon.\nAction: Until the end of the phase, [spirit] characters use their [willpower] instead of [defense].",
    "summary": "Against the Shadow provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06038.png",
    "ringsdb_code": "06038"
  },
  {
    "name": "Harbor Master",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After a card effect adds any number of resources to the resource pool of a hero you control, Harbor Master gains +1 [defense] until the end of the round.",
    "summary": "Harbor Master provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Defense Boost",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06039.png",
    "ringsdb_code": "06039"
  },
  {
    "name": "Advance Warning",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if each hero you control has a printed [lore] resource icon.\nAction: Until the end of the phase, enemies do not make engagement checks.",
    "summary": "Advance Warning forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06040.png",
    "ringsdb_code": "06040"
  },
  {
    "name": "White Tower Watchman",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor"
    ],
    "text": "If each hero you control belongs to the same sphere of influence, you may assign damage from undefended enemy attacks to White Tower Watchman instead of a hero you control.",
    "summary": "White Tower Watchman provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Damage Prevention"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06041.png",
    "ringsdb_code": "06041"
  },
  {
    "name": "Pippin",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Hobbit"
    ],
    "text": "If each hero you control has the Hobbit trait, Pippin gains: \"Response: After an enemy engages you, raise your threat by 3 to return it to the staging area. Until the end of the round, that enemy cannot engage you.\"",
    "summary": "Pippin triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Threat Payment"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06056.png",
    "ringsdb_code": "06056"
  },
  {
    "name": "Denethor",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "Denethor gets -1 [willpower] for each damaged hero you control.\nDiscard Denethor if his [willpower] is 0 or less.",
    "summary": "Denethor provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [],
    "willpower": 3,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06057.png",
    "ringsdb_code": "06057"
  },
  {
    "name": "Lord of Morthond",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Gondor or Outlands hero.\nIf each hero you control has a printed [leadership] resource icon, Lord of Morthond gains: \"Response: After you play a [lore], [spirit], or [tactics] ally, draw 1 card.\"",
    "summary": "Lord of Morthond grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Card Draw (Passive)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06058.png",
    "ringsdb_code": "06058"
  },
  {
    "name": "Book of Eldacar",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Record"
    ],
    "text": "Attach to a [tactics] hero.\nReduce the cost to play Book of Eldacar by 1 for each hero you control with a printed [tactics] resource icon.\nAction: Discard Book of Eldacar to play any [tactics] event card in your discard pile as if it were in your hand. Then, place that event on the bottom of your deck.",
    "summary": "Book of Eldacar grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06059.png",
    "ringsdb_code": "06059"
  },
  {
    "name": "Gondorian Discipline",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Gondor"
    ],
    "text": "Response: Cancel up to 2 points of damage just dealt to a Gondor character.",
    "summary": "Gondorian Discipline provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Damage Prevention",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06060.png",
    "ringsdb_code": "06060"
  },
  {
    "name": "Minas Tirith Lampwright",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Gondor",
      "Craftsman"
    ],
    "text": "Response: After an encounter card with surge is revealed, discard Minas Tirith Lampwright to name enemy, location, or treachery. If the next encounter card revealed is the named type, discard it without resolving its effects.",
    "summary": "Minas Tirith Lampwright provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Surge",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06061.png",
    "ringsdb_code": "06061"
  },
  {
    "name": "Small Target",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a Hobbit hero you control exhausts to defend an attack, choose another enemy engaged with you and reveal the attacking enemy's shadow card. If that shadow card has no shadow effect, resolve this enemy's attack against the chosen enemy. If that shadow card has a shadow effect, resolve this attack as normal.",
    "summary": "Small Target provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06062.png",
    "ringsdb_code": "06062"
  },
  {
    "name": "Ithilien Archer",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Ranged.\nResponse: After Ithilien Archer attacks and damages an enemy, return that enemy to the staging area.",
    "summary": "Ithilien Archer has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Staging Area Attack",
      "Ranged",
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06063.png",
    "ringsdb_code": "06063"
  },
  {
    "name": "Ithilien Pit",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Trap"
    ],
    "text": "Play Ithilien Pit into the staging area unattached.\nIf unattached, attach Ithilien Pit to the next eligible enemy that enters the staging area.\nAny character may choose attached enemy as the target of an attack.",
    "summary": "Ithilien Pit is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06064.png",
    "ringsdb_code": "06064"
  },
  {
    "name": "Hobbit-sense",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if each of your heroes is a Hobbit.\nCombat Action: Enemies engaged with you do not attack this round. You cannot declare attacks this round.",
    "summary": "Hobbit-sense prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06065.png",
    "ringsdb_code": "06065"
  },
  {
    "name": "Faramir",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Gondor",
      "Ranger",
      "Noble"
    ],
    "text": "Ranged.\nFaramir gets +1 [attack] for each enemy in the staging area.",
    "summary": "Faramir can attack enemies still in the staging area, neutralizing threats before they engage and freeing allies for other duties.",
    "tags": [
      "Attack Boost",
      "Staging Area Attack",
      "Ranged"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06081.png",
    "ringsdb_code": "06081"
  },
  {
    "name": "Sword of Morthond",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Gondor ally.\nAttached ally gains the Outlands trait.",
    "summary": "Sword of Morthond is a support attachment that enhances the attached character's role in Leadership builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06082.png",
    "ringsdb_code": "06082"
  },
  {
    "name": "Men of the West",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "X",
    "traits": [
      "Outlands"
    ],
    "text": "Action: Return X Outlands allies from your discard pile to your hand.",
    "summary": "Men of the West retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Recursion"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06083.png",
    "ringsdb_code": "06083"
  },
  {
    "name": "Knight of Minas Tirith",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "If each of your heroes has a printed [tactics] hero resource icon, Knight of Minas Tirith Tirith gains: \"Response: After Knight of Minas Tirith enters play, choose an enemy in the staging area. Engage that enemy and exhaust Knight of Minas Tirith to declare it as attacker (and resolve its attack) against that enemy.\"",
    "summary": "Knight of Minas Tirith manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06084.png",
    "ringsdb_code": "06084"
  },
  {
    "name": "Gondorian Fire",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Gondor"
    ],
    "text": "Attach to a Gondor or Dúnedain hero.\nAction: Spend 1 resource from attached hero's resource pool to give attached hero +1 [attack] for each resource in its resource pool until the end of the phase. (Limit once per phase.)",
    "summary": "Gondorian Fire grants +1 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06085.png",
    "ringsdb_code": "06085"
  },
  {
    "name": "Pelargir Shipwright",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Craftsman"
    ],
    "text": "Pelargir Shipwright gets +1 [willpower] for each hero you control with a printed [spirit] hero resource icon.",
    "summary": "Pelargir Shipwright boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06086.png",
    "ringsdb_code": "06086"
  },
  {
    "name": "Map of Earnil",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Record"
    ],
    "text": "Attach to a [spirit] hero.\nReduce the cost to play Map of Earnil by 1 for each hero you control with a printed [spirit] resource icon.\nAction: Discard Map of Earnil to play any [spirit] event card in your discard pile as if it were in your hand. Then, place that event on the bottom of your deck.",
    "summary": "Map of Earnil grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06087.png",
    "ringsdb_code": "06087"
  },
  {
    "name": "Ranger Bow",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a Ranger character.\nAction: Exhaust Ranger Bow and attached character to deal 1 damage to an enemy in the staging area.",
    "summary": "Ranger Bow is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Direct Damage",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06088.png",
    "ringsdb_code": "06088"
  },
  {
    "name": "Forest Patrol",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if you control at least 1 Ranger character.\nAction: Deal 3 damage to an enemy with at least 1 Trap card attached to it.",
    "summary": "Forest Patrol deals 3 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Traps"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06089.png",
    "ringsdb_code": "06089"
  },
  {
    "name": "Palantir",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to a Noble hero.\nPlanning Action: Exhaust Palantir and attached hero to name a card type and look at the top 3 cards of the encounter deck. For each of those cards that matches the named type, draw a card. For each of those cards that does not match the named type, raise your threat by 2.",
    "summary": "Palantir draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Threat Payment",
      "Scrying"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06090.png",
    "ringsdb_code": "06090"
  },
  {
    "name": "Caldara",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor"
    ],
    "text": "Action: Discard Caldara to put 1 [spirit] ally from your discard pile into play for each other hero you control with a printed [spirit] resource icon. (Limit once per game.)",
    "summary": "Caldara retrieves cards from the discard pile, enabling recursion loops or recovering key cards lost to treacheries.",
    "tags": [
      "Resource Smoothing",
      "Recursion",
      "Ally Mustering"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06107.png",
    "ringsdb_code": "06107"
  },
  {
    "name": "Squire of the Citadel",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Gondor"
    ],
    "text": "Response: After Squire of the Citadel leaves play, add 1 resource to a Gondor hero's resource pool.",
    "summary": "Squire of the Citadel generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06108.png",
    "ringsdb_code": "06108"
  },
  {
    "name": "Tome of Atanatar",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Record"
    ],
    "text": "Attach to a [leadership] hero.\nReduce the cost to play Tome of Atanatar by 1 for each hero you control with a printed [leadership] resource icon.\nAction: Discard Tome of Atanatar to play any [leadership] event card in your discard pile as if it were in your hand. Then, place that event on the bottom of your deck.",
    "summary": "Tome of Atanatar grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06109.png",
    "ringsdb_code": "06109"
  },
  {
    "name": "Guthlaf",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan"
    ],
    "text": "If there is at least 1 Rohan hero in play, lower the cost to play Guthlaf by 1.\nIf there is at least 1 Gondor hero in play, Guthlaf gains sentinel.",
    "summary": "Guthlaf has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Resource Discount",
      "Sentinel"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06110.png",
    "ringsdb_code": "06110"
  },
  {
    "name": "The Hammer-stroke",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Encounter Action: Engage each enemy in play.",
    "summary": "The Hammer-stroke forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06111.png",
    "ringsdb_code": "06111"
  },
  {
    "name": "Emery",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor"
    ],
    "text": "Action: Discard the top 3 card of your deck to put Emery into play from your hand, under any player's control. Then, if any of the discarded cards have the [tactics], [lore] or [leadership] sphere, discard Emery.",
    "summary": "Emery puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Resource Smoothing",
      "Ally Mustering"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06112.png",
    "ringsdb_code": "06112"
  },
  {
    "name": "Children of the Sea",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a Silvan or Noldor ally you control. That ally gets +2 [willpower] until the end of the phase. At the end of the phase, shuffle that ally into its owner's deck if it is still in play.",
    "summary": "Children of the Sea gives +2 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06113.png",
    "ringsdb_code": "06113"
  },
  {
    "name": "Anborn",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Action: Exhaust Anborn to return 1 Trap card from your discard pile to your hand.",
    "summary": "Anborn retrieves cards from the discard pile, enabling recursion of key events or allies that were spent or discarded early.",
    "tags": [
      "Traps",
      "Recursion"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06114.png",
    "ringsdb_code": "06114"
  },
  {
    "name": "Poisoned Stakes",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Trap"
    ],
    "text": "Play Poisoned Stakes into the staging area unattached.\nIf unattached, attach Poisoned Stakes to the next eligble enemy that enters the staging area.\nAt the end of each round, deal 2 damage to attached enemy.",
    "summary": "Poisoned Stakes is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Direct Damage"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06115.png",
    "ringsdb_code": "06115"
  },
  {
    "name": "Well-Equipped",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Discard the top 2 cards of your deck. You may attach 1 attachment card discarded by this effect to an eligible Dwarf character in play.",
    "summary": "Well-Equipped searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06116.png",
    "ringsdb_code": "06116"
  },
  {
    "name": "Théoden",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Rohan",
      "Noble",
      "Warrior"
    ],
    "text": "Sentinel.\nEach [tactics] hero with a printed [tactics] resource icon gets +1 [willpower].",
    "summary": "Théoden can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Resource Smoothing",
      "Willpower Boost",
      "Sentinel"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06134.png",
    "ringsdb_code": "06134"
  },
  {
    "name": "Pelargir Ship Captain",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor"
    ],
    "text": "Response: After Pelargir Ship Captain enters play, move 1 resource from the resource pool of a hero you control to another hero's resource pool.",
    "summary": "Pelargir Ship Captain provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Smoothing",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06135.png",
    "ringsdb_code": "06135"
  },
  {
    "name": "Visionary Leadership",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a Gondor hero.\nWhile attached hero has at least 1 resource in its resource pool, Gondor characters get +1 [willpower].",
    "summary": "Visionary Leadership gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06136.png",
    "ringsdb_code": "06136"
  },
  {
    "name": "Spear of the Mark",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a Rohan character.\nAttached character gets +1 [attack] (+2 [attack] instead if attacking an enemy in the staging area).",
    "summary": "Spear of the Mark grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Staging Area Attack",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06137.png",
    "ringsdb_code": "06137"
  },
  {
    "name": "Forth Eorlingas!",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Combat Action: Each Rohan hero can be declared as an attacker against enemies in the staging area this phase.",
    "summary": "Forth Eorlingas! provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Staging Area Attack"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06138.png",
    "ringsdb_code": "06138"
  },
  {
    "name": "Steed of the Mark",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Gondor or Rohan hero.\nResponse: after attached hero commits to a quest, spend 1 resource from attached hero's resource pool to ready attached hero.",
    "summary": "Steed of the Mark allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06139.png",
    "ringsdb_code": "06139"
  },
  {
    "name": "Lay of Nimrodel",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Action: Choose a [spirit] hero. Until the end of the phase, that hero gets +1 [willpower] for each resource in its resource pool.",
    "summary": "Lay of Nimrodel gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06140.png",
    "ringsdb_code": "06140"
  },
  {
    "name": "Ered Nimrais Prospector",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Ered Nimrais Prospector enters play, discard the top 3 cards of your deck. Then, choose and shuffle 1 card from your discard pile back into your deck.",
    "summary": "Ered Nimrais Prospector retrieves cards from the discard pile, enabling recursion of key events or allies that were spent or discarded early.",
    "tags": [
      "Player Deck Manipulation",
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06141.png",
    "ringsdb_code": "06141"
  },
  {
    "name": "Scroll of Isildur",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Record"
    ],
    "text": "Attach to a [lore] hero.\nReduce the cost to play Scroll of Isildur by 1 for each hero you control with a printed [lore] resource icon.\nAction: Discard Scroll of Isildur to play any [lore] event card in your discard pile as if it were in your hand. Then, place that event on the bottom of your deck.",
    "summary": "Scroll of Isildur grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/06142.png",
    "ringsdb_code": "06142"
  },
  {
    "name": "Hidden Cache",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After Hidden Cache is discarded from your deck, add 2 resources to the resource pool of a hero you control.\nAction: Spend 1 resource to draw 1 card.",
    "summary": "Hidden Cache generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/06143.png",
    "ringsdb_code": "06143"
  },
  {
    "name": "Éomer",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Rohan",
      "Noble",
      "Warrior"
    ],
    "text": "Response: After a character leaves play, Éomer gets +2 [attack] until the end of the round. (Limit once per round.)",
    "summary": "Éomer can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/07001.png",
    "ringsdb_code": "07001"
  },
  {
    "name": "Gríma",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Rohan",
      "Isengard"
    ],
    "text": "Action: Lower the cost of the next card you play from your hand this round by 1. That card gains Doomed 1. (Limit once per round.)",
    "summary": "Gríma offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Discount",
      "Doomed"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/07002.png",
    "ringsdb_code": "07002"
  },
  {
    "name": "Saruman",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Istari",
      "Isengard"
    ],
    "text": "Doomed 3.\nAt the end of the round, discard Saruman from play.\nResponse: After Saruman enters play, choose a non-unique enemy or location in the staging area. While Saruman is in play, the chosen enemy or location is considered to be out of play.",
    "summary": "Saruman provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Doomed",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 5,
    "defense": 4,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/07003.png",
    "ringsdb_code": "07003"
  },
  {
    "name": "Orthanc Guard",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Isengard"
    ],
    "text": "Response: After you raise your threat from the Doomed keyword, ready Orthanc Guard.",
    "summary": "Orthanc Guard readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Payment",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07004.png",
    "ringsdb_code": "07004"
  },
  {
    "name": "Isengard Messenger",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Isengard"
    ],
    "text": "Response: After you raise your threat from the Doomed keyword, Isengard Messenger gets +1 [willpower] until the end of the round. (Limit twice per round.)",
    "summary": "Isengard Messenger boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Threat Payment",
      "Willpower Boost",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07005.png",
    "ringsdb_code": "07005"
  },
  {
    "name": "Westfold Outrider",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan",
      "Scout"
    ],
    "text": "Action: Discard Westfold Outrider to choose an enemy not engaged with you. Engage the chosen enemy.",
    "summary": "Westfold Outrider manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07006.png",
    "ringsdb_code": "07006"
  },
  {
    "name": "Westfold Horse-breeder",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Rohan"
    ],
    "text": "Response: After Westfold Horse-breeder enters play, search the top 10 cards of your deck for a Mount attachment and add it to your hand. Shuffle your deck.",
    "summary": "Westfold Horse-breeder searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07007.png",
    "ringsdb_code": "07007"
  },
  {
    "name": "Rohan Warhorse",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a [tactics] or Rohan hero. Restricted.\nResponse: After attached hero participates in an attack that destroys an enemy, exhaust Rohan Warhorse to ready attached hero.",
    "summary": "Rohan Warhorse grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07008.png",
    "ringsdb_code": "07008"
  },
  {
    "name": "Silver Lamp",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Attach to a [spirit] hero.\nWhile attached hero is ready, shadow cards dealt to enemies engaged with you are dealt face up. (Shadow card effects are still resolved when resolving enemy attacks.)",
    "summary": "Silver Lamp is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07009.png",
    "ringsdb_code": "07009"
  },
  {
    "name": "Keys of Orthanc",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a hero.\nResponse: After you raise your threat from the Doomed keyword, exhaust Keys of Orthanc to add 1 resource to attached hero's resource pool.",
    "summary": "Keys of Orthanc generates 1 resources per exhaust, serving as the primary income attachment in Neutral decks.",
    "tags": [
      "Resource Generation",
      "Threat Payment",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/07010.png",
    "ringsdb_code": "07010"
  },
  {
    "name": "Legacy of Númenor",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 4.\nAction: Add 1 resource to each hero's resource pool.",
    "summary": "Legacy of Númenor generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Doomed"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07011.png",
    "ringsdb_code": "07011"
  },
  {
    "name": "Deep Knowledge",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 2.\nAction: Each player draws 2 cards.",
    "summary": "Deep Knowledge draws X cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Doomed",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07012.png",
    "ringsdb_code": "07012"
  },
  {
    "name": "The Wizards's Voice",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Spell"
    ],
    "text": "Doomed 3.\nAction: Each player chooses 1 enemy engaged with him. Until the end of the phase, each chosen enemy cannot attack the player that chose it.",
    "summary": "The Wizards's Voice prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Doomed",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07013.png",
    "ringsdb_code": "07013"
  },
  {
    "name": "Power of Orthanc",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Spell"
    ],
    "text": "Doomed 2.\nAction: Each player may choose and discard a Condition attachment from play.",
    "summary": "Power of Orthanc provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Condition Removal",
      "Doomed",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07014.png",
    "ringsdb_code": "07014"
  },
  {
    "name": "The Seeing-stone",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 1.\nAction: Search your deck for a card with the Doomed keyword and add it to your hand. Shuffle your deck.",
    "summary": "The Seeing-stone searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Doomed"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/07015.png",
    "ringsdb_code": "07015"
  },
  {
    "name": "Naith Guide",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Response: After Naith Guide enters play, choose a hero. That hero does not exhaust to quest this round.",
    "summary": "Naith Guide provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08002.png",
    "ringsdb_code": "08002"
  },
  {
    "name": "Swift and Silent",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Ready a hero you control. Then, if your threat is 20 or less and this is the first time you played a copy of Swift and Silent this round, return this card to your hand instead of discarding it.",
    "summary": "Swift and Silent readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08003.png",
    "ringsdb_code": "08003"
  },
  {
    "name": "Firefoot",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a [tactics] or Rohan hero. Restricted.\nAttached hero gets +1 [attack] (+2 [attack] instead if attached hero is Éomer).\nResponse: After attached hero attacks alone, exhaust Firefoot to choose a non-unique enemy engaged with you. Excess damage dealt by this attack is assigned to the chosen enemy.",
    "summary": "Firefoot grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attack Boost",
      "Damage Prevention",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08004.png",
    "ringsdb_code": "08004"
  },
  {
    "name": "Close Call",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed X.\nResponse: Cancel X damage just dealt to a hero.",
    "summary": "Close Call provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Damage Prevention",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08005.png",
    "ringsdb_code": "08005"
  },
  {
    "name": "Blue Mountain Trader",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Choose another player. That player gains control of Blue Mountain Trader. Then, that player moves 1 resource from the resource pool of a hero he controls to the resource pool of a hero you control, or Blue Mountain Trader is discarded. (Limit once per round.)",
    "summary": "Blue Mountain Trader provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Smoothing",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08006.png",
    "ringsdb_code": "08006"
  },
  {
    "name": "The Fall of Gil-Galad",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Limit 1 per deck. Attach to a hero.\nResponse: When attached hero is destroyed, add The Fall of Gil-Galad to the victory display to reduce your threat by X, where X is the attached hero's threat cost.",
    "summary": "The Fall of Gil-Galad reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08007.png",
    "ringsdb_code": "08007"
  },
  {
    "name": "Ithilien Lookout",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Secrecy 2.\nResponse: After Ithilien Lookout enters play, look at the top card of the encounter deck. If it is an enemy, you may discard it.",
    "summary": "Ithilien Lookout lets you look at and manipulate the top of the encounter deck, converting blind reveal into calculated risk management.",
    "tags": [
      "Resource Discount",
      "Scrying",
      "Response Trigger",
      "Secrecy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08008.png",
    "ringsdb_code": "08008"
  },
  {
    "name": "The Tree People",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Return a Silvan ally you control to your hand to search the top 5 cards of your deck for a Silvan ally. Put that ally into play and shuffle the other cards back into your deck. You can only play 1 copy of The Tree People each phase.",
    "summary": "The Tree People puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Player Deck Manipulation",
      "Ally Mustering",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08009.png",
    "ringsdb_code": "08009"
  },
  {
    "name": "The White Council",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "X",
    "traits": [],
    "text": "X is the number of players in the game.\nAction: Starting with the first player, each player chooses 1 different option: ready a hero he controls, add 1 resource to the resource pool of a hero he controls, draw 1 card, or shuffle 1 card from his discard pile into his deck.",
    "summary": "The White Council readies one or more characters or heroes, giving the team extra actions—especially valuable during heavy combat rounds.",
    "tags": [
      "Resource Generation",
      "Card Draw (Active)",
      "Action Advantage (Readying)",
      "Recursion",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08010.png",
    "ringsdb_code": "08010"
  },
  {
    "name": "Idraen",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Dúnedain",
      "Ranger",
      "Scout"
    ],
    "text": "Response: After a location is explored, ready Idraen.",
    "summary": "Idraen readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08025.png",
    "ringsdb_code": "08025"
  },
  {
    "name": "Rivendell Scout",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Scout"
    ],
    "text": "Secrecy 2.",
    "summary": "Rivendell Scout provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount",
      "Secrecy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08026.png",
    "ringsdb_code": "08026"
  },
  {
    "name": "Feigned Voices",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Combat Action: Return a Silvan ally you control to your hand to choose an enemy engaged with a player. That enemy cannot attack that player this phase.",
    "summary": "Feigned Voices prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08027.png",
    "ringsdb_code": "08027"
  },
  {
    "name": "Rúmil",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Ranged.\nResponse: After you play Rúmil from your hand, choose an enemy engaged with a player. Deal X damage to that enemy where X is the number of ranged characters you control.",
    "summary": "Rúmil has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08028.png",
    "ringsdb_code": "08028"
  },
  {
    "name": "Elven Mail",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Restricted.\nAttach to a Noldor or Silvan character.\nAttached character gets +2 hit points and gains sentinel.",
    "summary": "Elven Mail adds +2 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Sentinel",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08029.png",
    "ringsdb_code": "08029"
  },
  {
    "name": "Greyflood Wanderer",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain",
      "Scout"
    ],
    "text": "You may give Greyflood Wanderer doomed 2 when you play from your hand. If you do, it gains: \"Response: After you play Greyflood Wanderer, place 1 progress token on each location in play.\"",
    "summary": "Greyflood Wanderer places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Doomed"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08030.png",
    "ringsdb_code": "08030"
  },
  {
    "name": "Warden of Arnor",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Scout hero.\nWhile attached character is committed to the quest, place 1 progress on the first location revealed by the encounter deck each round.",
    "summary": "Warden of Arnor lets the attached hero look at or manipulate the encounter deck, providing consistent scrying without spending event cards.",
    "tags": [
      "Encounter Deck Manipulation",
      "Location Control (Progress)",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08031.png",
    "ringsdb_code": "08031"
  },
  {
    "name": "Message from Elrond",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a player. That player may choose 1 card from his hand and add it to another player's hand. At the end of the round, if the chosen card is in that player's hand or in play, shuffle it into its owner's deck.",
    "summary": "Message from Elrond provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08032.png",
    "ringsdb_code": "08032"
  },
  {
    "name": "Noiseless Movement",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose an enemy in the staging area. That enemy does not make engagement checks this round. Then, if your threat is 20 or less and this is the first time you played a copy of Noiseless Movement this round, return this card to your hand instead of discarding it.",
    "summary": "Noiseless Movement forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08033.png",
    "ringsdb_code": "08033"
  },
  {
    "name": "Leaf Brooch",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nThe first event card you play each round that matches attached hero's printed sphere gains secrecy 1.",
    "summary": "Leaf Brooch is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Resource Discount",
      "Attachment Synergy",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08034.png",
    "ringsdb_code": "08034"
  },
  {
    "name": "Haldir of Lórien",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Silvan",
      "Ranger",
      "Scout"
    ],
    "text": "Ranged.\nCombat Action: If you have not engaged an enemy this round, exhaust Haldir of Lórien to declare him as an attacker (and resolve his attack) against an enemy not engaged with you. Limit once per round.",
    "summary": "Haldir of Lórien offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Ranged",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08056.png",
    "ringsdb_code": "08056"
  },
  {
    "name": "Herald of Anórien",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor"
    ],
    "text": "You may give Herald of Anórien doomed 2 when you play it from your hand. If you do, it gains: \"Response: After you play Herald of Anórien, choose a player. That player may put into play 1 ally from his hand with a printed cost 2 or lower.\"",
    "summary": "Herald of Anórien provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Doomed",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08057.png",
    "ringsdb_code": "08057"
  },
  {
    "name": "O Lórien!",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero.\nAction: Exhaust O Lórien! to lower the cost of the next Silvan ally played this phase by 1 (to a minimum of 1).",
    "summary": "O Lórien! reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08058.png",
    "ringsdb_code": "08058"
  },
  {
    "name": "Gwaihir",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nResponse: After Gwaihir enters play, search your discard pile for an Eagle ally and put it into play under your control. At the end of the round, if that ally is still in play, add it to your hand.",
    "summary": "Gwaihir retrieves cards from the discard pile, enabling recursion of key events or allies that were spent or discarded early.",
    "tags": [
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08059.png",
    "ringsdb_code": "08059"
  },
  {
    "name": "Pursuing the Enemy",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Return a Silvan ally you control to your hand to choose a player. Deal 1 damage to each enemy engaged with that player.",
    "summary": "Pursuing the Enemy deals 1 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Bounce / Leaves Play Synergy",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08060.png",
    "ringsdb_code": "08060"
  },
  {
    "name": "Courage Awakened",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a hero. That hero gets +2 [willpower] until the end of the phase. Then, if your threat is 20 or less and this is the first time you played a copy of Courage Awakened this round, return this card to your hand instead of discarding it.",
    "summary": "Courage Awakened gives +2 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08061.png",
    "ringsdb_code": "08061"
  },
  {
    "name": "Free to Choose",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After your threat is raised by an encounter card effect, reduce your threat by an equal amount.",
    "summary": "Free to Choose reduces threat by X, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08062.png",
    "ringsdb_code": "08062"
  },
  {
    "name": "Galadhrim Minstrel",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan",
      "Minstrel"
    ],
    "text": "Response: After Galadhrim Minstrel enters play, search the top five cards of your deck for an event card and add it to your hand. Shuffle the other cards back into your deck.",
    "summary": "Galadhrim Minstrel searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08063.png",
    "ringsdb_code": "08063"
  },
  {
    "name": "Lembas",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Play only if you control a Noldor or Silvan hero.\nAttach to a hero.\nAction: Discard Lembas to ready attached hero and heal 3 damage from it.",
    "summary": "Lembas allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08064.png",
    "ringsdb_code": "08064"
  },
  {
    "name": "Defender of the Naith",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After a Silvan ally you control leaves play, ready Defender of the Naith.",
    "summary": "Defender of the Naith readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08065.png",
    "ringsdb_code": "08065"
  },
  {
    "name": "Mablung",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After you engage an enemy, add 1 resource to Mablung's resource pool. (Limit once per phase.)",
    "summary": "Mablung generates 1 resource per activation, making them the premier economic engine for Tactics decks.",
    "tags": [
      "Resource Generation",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08084.png",
    "ringsdb_code": "08084"
  },
  {
    "name": "Follow Me!",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Take control of the first player token and draw 1 card.",
    "summary": "Follow Me! draws 1 card immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08085.png",
    "ringsdb_code": "08085"
  },
  {
    "name": "Tighten Our Belts",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Refresh Action: Choose a player. Each hero that player controls that did not spend any resources this round gains 1 resource. Only 1 copy of Tighten Our Belts can be played by the players each round.",
    "summary": "Tighten Our Belts provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08086.png",
    "ringsdb_code": "08086"
  },
  {
    "name": "Galadhon Archer",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan",
      "Warrior"
    ],
    "text": "Ranged.\nResponse: After Galadhon Archer enters play, deal 1 damage to an enemy not engaged with you.",
    "summary": "Galadhon Archer has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08087.png",
    "ringsdb_code": "08087"
  },
  {
    "name": "Bow of the Galadhrim",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a Silvan character with the ranged keyword.\nAttached character gets +1 [attack] (+2 [attack] instead if attacking an enemy not engaged with you.)",
    "summary": "Bow of the Galadhrim grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Ranged",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08088.png",
    "ringsdb_code": "08088"
  },
  {
    "name": "Celduin Traveler",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dale",
      "Scout"
    ],
    "text": "Secrecy 2.\nResponse: After Celduin Traveler enters play, look at the top card of the encounter deck. If it is a location, you may discard it.",
    "summary": "Celduin Traveler lets you look at and manipulate the top of the encounter deck, converting blind reveal into calculated risk management.",
    "tags": [
      "Resource Discount",
      "Scrying",
      "Response Trigger",
      "Secrecy"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08089.png",
    "ringsdb_code": "08089"
  },
  {
    "name": "Island Amid Perils",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Return a Silvan ally you control to your hand to reduce your threat by X where X is the printed cost of the ally returned to your hand.",
    "summary": "Island Amid Perils reduces threat by X, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08090.png",
    "ringsdb_code": "08090"
  },
  {
    "name": "Mirkwood Pioneer",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Woodman"
    ],
    "text": "You may give Mirkwood Pioneer doomed 1 when you play it from your hand. If you do, it gains: \"Response: After you play Mirkwood Pioneer, choose a card in the staging area. Until the end of the round, the chosen card does not contribute its [threat].\"",
    "summary": "Mirkwood Pioneer reduces the threat contribution of locations or enemies in the staging area, easing the questing burden without committing progress.",
    "tags": [
      "Staging Area Control",
      "Doomed"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08091.png",
    "ringsdb_code": "08091"
  },
  {
    "name": "Defender of the West",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a non-objective unique ally in play.\nThe first player gains control of attached ally.\nDamage from undefended attacks against you may be assigned to attached ally.",
    "summary": "Defender of the West is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Damage Prevention",
      "Attachment Synergy",
      "Objective Interaction"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08093.png",
    "ringsdb_code": "08093"
  },
  {
    "name": "Heir of Mardil",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Noble hero.\nResponse: After attached hero gains any number of resources from a card effect, exhaust Heir of Mardil to ready attached hero.",
    "summary": "Heir of Mardil allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08113.png",
    "ringsdb_code": "08113"
  },
  {
    "name": "Orophin",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Ranged.\nResponse: After Orophin enters play, return a Silvan ally from your discard pile to your hand.",
    "summary": "Orophin has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged",
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08114.png",
    "ringsdb_code": "08114"
  },
  {
    "name": "Henneth Annûn Guard",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "You may give Henneth Annûn Guard doomed 1 when you play it from your hand. If you do, it gains: \"Response: After you play Henneth Annûn Guard, choose a character. Until the end of the round, that character gets +2 [defense] and gains sentinel.\"",
    "summary": "Henneth Annûn Guard has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Doomed"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08115.png",
    "ringsdb_code": "08115"
  },
  {
    "name": "Charge of the Rohirrim",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Until the end of the phase, each Rohan character with a Mount attachment gets +3 [attack].",
    "summary": "Charge of the Rohirrim boosts attack by +3 for the phase, helping the team overcome high-defense enemies when focused fire alone isn't enough.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08116.png",
    "ringsdb_code": "08116"
  },
  {
    "name": "Galadriel's Handmaiden",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan"
    ],
    "text": "Response: After Galadriel's Handmaiden enters play, choose a player. That player reduces his threat by 1.",
    "summary": "Galadriel's Handmaiden reduces threat by 1 on a triggered condition, helping stall the threat track in decks that lack dedicated threat management.",
    "tags": [
      "Threat Reduction",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08117.png",
    "ringsdb_code": "08117"
  },
  {
    "name": "Mirror of Galadriel",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to Galadriel.\nAction: Exhaust Mirror of Galadriel to search the top 10 cards of your deck for a card and add it to your hand. Shuffle the rest back into your deck. Then, discard a random card from your hand.",
    "summary": "Mirror of Galadriel enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08118.png",
    "ringsdb_code": "08118"
  },
  {
    "name": "Wandering Ent",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments.\nEnters play exhausted.",
    "summary": "Wandering Ent provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08119.png",
    "ringsdb_code": "08119"
  },
  {
    "name": "Cloak of Lórien",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Noldor or Silvan character.\nLimit 1 per character.\nAttached character gets +1 [defense] (+2 [defense] instead if the active location has the Forest trait).",
    "summary": "Cloak of Lórien boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Location Control (Travel/Bypass)",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08120.png",
    "ringsdb_code": "08120"
  },
  {
    "name": "Nenya",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Ring"
    ],
    "text": "Attach to Galadriel. She gains a [lore] resource icon.\nQuest Action: Exhaust Nenya and Galadriel to add her [willpower] to another character's [willpower] until the end of the phase.",
    "summary": "Nenya grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08121.png",
    "ringsdb_code": "08121"
  },
  {
    "name": "Erkenbrand",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Sentinel.\nWhile Erkenbrand is defending, he gains: \"Response: Deal 1 damage to Erkenbrand to cancel a shadow effect just triggered.\"",
    "summary": "Erkenbrand deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Sentinel",
      "Shadow Cancellation"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08137.png",
    "ringsdb_code": "08137"
  },
  {
    "name": "Warden of Helm's Deep",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Sentinel.",
    "summary": "Warden of Helm's Deep has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Sentinel"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 3,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08138.png",
    "ringsdb_code": "08138"
  },
  {
    "name": "The Day's Rising",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero with sentinel.\nResponse: After attached hero defends against an attack and takes no damage while defending that attack, exhaust The Day's Rising to add 1 resource to the attached hero's resource pool.",
    "summary": "The Day's Rising generates 1 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Sentinel",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08139.png",
    "ringsdb_code": "08139"
  },
  {
    "name": "Captain of Gondor",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Warrior hero.\nResponse: After you optionally engage an enemy, exhaust Captain of Gondor to give attached hero +1 [attack] and +1 [defense] until the end of the round.",
    "summary": "Captain of Gondor provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08140.png",
    "ringsdb_code": "08140"
  },
  {
    "name": "Booming Ent",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nBooming Ent gets +1 [attack] for each damaged Ent character you control.",
    "summary": "Booming Ent provides +1 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08141.png",
    "ringsdb_code": "08141"
  },
  {
    "name": "Ride Them Down",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Quest Action: Choose a non-unique enemy in the staging area. Until the end of the phase, progress that would be placed on the quest from questing successfully is instead assigned as damage to the chosen enemy. (Progress must still be placed on any active location first.)",
    "summary": "Ride Them Down manipulates the active location or allows travel without triggering its effect, bypassing costly travel penalties.",
    "tags": [
      "Damage Prevention",
      "Location Control (Travel/Bypass)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08142.png",
    "ringsdb_code": "08142"
  },
  {
    "name": "Shadows Give Way",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "You must use resources from 3 different heroes' pools to pay for this card.\nAction: Discard each shadow card from each enemy in play.",
    "summary": "Shadows Give Way cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Shadow Cancellation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08143.png",
    "ringsdb_code": "08143"
  },
  {
    "name": "Don't Be Hasty!",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: When an encounter card is revealed but before resolving any of that card's keywords or \"when revealed\" effects, choose a character committed to the quest. Ready that character and remove it from the quest.",
    "summary": "Don't Be Hasty! readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08144.png",
    "ringsdb_code": "08144"
  },
  {
    "name": "Waters of Nimrodel",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Doomed 3.\nAction: Heal all damage on each character in play.",
    "summary": "Waters of Nimrodel provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Healing",
      "Doomed"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/08145.png",
    "ringsdb_code": "08145"
  },
  {
    "name": "Treebeard",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Treebeard enters play exhausted and collects 1 resource each resource phase. These resources can be used to pay for Ent cards played from your hand.\nAction: Pay 2 resources from Treebeard's pool to ready an Ent character.",
    "summary": "Treebeard generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Action Advantage (Readying)"
    ],
    "willpower": 2,
    "attack": 4,
    "defense": 3,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08146.png",
    "ringsdb_code": "08146"
  },
  {
    "name": "Aragorn",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Dúnedain",
      "Ranger",
      "Warrior"
    ],
    "text": "Each enemy engaged with you gets -1 [defense].\nResponse: After Aragorn participates in an attack that destroys an enemy, choose an enemy not engaged with you and engage that enemy.",
    "summary": "Aragorn triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/09001.png",
    "ringsdb_code": "09001"
  },
  {
    "name": "Halbarad",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "While you are engaged with any enemy, Halbarad does not exhaust to commit to a quest.\nYou may optionally engage 1 additional enemy during the encounter phase.",
    "summary": "Halbarad quests without exhausting, leaving them free for combat while still contributing the full questing round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/09002.png",
    "ringsdb_code": "09002"
  },
  {
    "name": "Weather Hills Watchman",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dúnedain"
    ],
    "text": "Response: After Weather Hills Watchman enters play, search the top 5 cards of your deck for a Signal card and add it to your hand. Shuffle the other cards back into your deck.",
    "summary": "Weather Hills Watchman searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger",
      "Weather"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09003.png",
    "ringsdb_code": "09003"
  },
  {
    "name": "Dúnedain Hunter",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "0",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Forced: After Dúnedain Hunter enters play, search the top 5 cards of the encounter deck for a non-unique enemy and put it into play engaged with you. If no enemy enters play by this effect, discard Dúnedain Hunter. Shuffle the encounter deck.",
    "summary": "Dúnedain Hunter manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Encounter Deck Manipulation",
      "Engagement Control",
      "Forced Effect"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09004.png",
    "ringsdb_code": "09004"
  },
  {
    "name": "Sarn Ford Sentry",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain",
      "Scout"
    ],
    "text": "Response: After Sarn Ford Sentry enters play, draw 1 card for each enemy engaged with you.",
    "summary": "Sarn Ford Sentry draws 1 card automatically on a triggered condition, rewarding the right sequencing with passive hand advantage.",
    "tags": [
      "Card Draw (Passive)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09005.png",
    "ringsdb_code": "09005"
  },
  {
    "name": "Warden of Annúminas",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Warden of Annúminas gets +1 [willpower] for each enemy engaged with you.",
    "summary": "Warden of Annúminas boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09006.png",
    "ringsdb_code": "09006"
  },
  {
    "name": "Ranger Summons",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Signal"
    ],
    "text": "Play only if you control a Dúnedain hero.\nPlanning Action: Shuffle 1 of your set aside Ranger of the North allies with the encounter keyword into the encounter deck. Then, remove Ranger Summons from the game.",
    "summary": "Ranger Summons manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09007.png",
    "ringsdb_code": "09007"
  },
  {
    "name": "Tireless Hunters",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only before the resolving enemy attacks step.\nCombat Action: Choose an enemy not engaged with you. Engage that enemy. Then, discard a shadow card from that enemy, if able.",
    "summary": "Tireless Hunters cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Shadow Cancellation",
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09008.png",
    "ringsdb_code": "09008"
  },
  {
    "name": "Expert Trackers",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After you engage an enemy, exhaust a Scout or Ranger character to place X progress tokens on a location. X is the engaged enemy's printed [threat].",
    "summary": "Expert Trackers forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Engagement Control",
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09009.png",
    "ringsdb_code": "09009"
  },
  {
    "name": "Heir of Valandil",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Dúnedain hero.\nPlanning Action: Exhaust Heir of Valandil to reduce the cost of the next Dúnedain ally you play this phase by 1 for each enemy engaged with you.",
    "summary": "Heir of Valandil reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/09010.png",
    "ringsdb_code": "09010"
  },
  {
    "name": "Athelas",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Dúnedain or Healer character.\nAction: Discard Athelas and exhaust attached character to heal all damage on a character. You may discard a Condition attachment from that character.",
    "summary": "Athelas provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing",
      "Condition Removal"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09011.png",
    "ringsdb_code": "09011"
  },
  {
    "name": "Secret Vigil",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to an enemy. Limit 1 per enemy.\nAttached enemy gets -1 [threat].\nResponse: When attached enemy is destroyed, reduce each player's threat by the attached enemy's printed [threat].",
    "summary": "Secret Vigil reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Staging Area Control",
      "Attachment Synergy",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09012.png",
    "ringsdb_code": "09012"
  },
  {
    "name": "Star Brooch",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Dúnedain or Noldor hero. Limit 1 per hero.\nWhile you are engaged with an enemy, attached hero gets +1 [willpower] and cannot have its [willpower] reduced.",
    "summary": "Star Brooch gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Engagement Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09013.png",
    "ringsdb_code": "09013"
  },
  {
    "name": "Gather Information",
    "sphere": "Neutral",
    "type": "Player Side Quest",
    "cost_threat": "0",
    "traits": [],
    "text": "Limit 1 per deck.\nResponse: After this stage is defeated, each player may search his deck for 1 card and add it to his hand. Each player shuffles his deck.",
    "summary": "Gather Information provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09014.png",
    "ringsdb_code": "09014"
  },
  {
    "name": "Ranger of the North",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "-",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Encounter. Surge. Ranged. Sentinel.\nWhen Revealed: The first player chooses a player to take control of Ranger of the North. Then, either deal 2 damage to an enemy or place 2 progress tokens on a location.",
    "summary": "Ranger of the North places 2 progress tokens on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Direct Damage",
      "Sentinel",
      "Ranged",
      "Location Control (Progress)",
      "Surge"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/09015.png",
    "ringsdb_code": "09015"
  },
  {
    "name": "Merry",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After an enemy is revealed from the top of the encounter deck, exhaust Merry to reduce your threat by that enemy's [threat].",
    "summary": "Merry reduces threat by X, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10001.png",
    "ringsdb_code": "10001"
  },
  {
    "name": "Ingold",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor"
    ],
    "text": "Ingold gets +1 [willpower] for each hero you control with at least 1 resource in its resource pool.",
    "summary": "Ingold boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10002.png",
    "ringsdb_code": "10002"
  },
  {
    "name": "Rallying Cry",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: After an ally leaves play, add it to its owner's hand instead of placing it in the discard pile.\nValour Action: Until the end of the phase, add each ally that leaves play to its owner's hand instead of placing it in the discard pile.",
    "summary": "Rallying Cry provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Bounce / Leaves Play Synergy",
      "Response Trigger",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10003.png",
    "ringsdb_code": "10003"
  },
  {
    "name": "Honour Guard",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Response: Exhaust Honour Guard to cancel 1 point of damage just dealt to a character.\nValour Response: Exhaust and discard Honour Guard to cancel up to 5 damage just dealt to a character.",
    "summary": "Honour Guard provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Damage Prevention",
      "Response Trigger",
      "Valour"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10004.png",
    "ringsdb_code": "10004"
  },
  {
    "name": "Raven-winged Helm",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach a hero with Sentinel. Limit 1 per hero.\nResponse: Exhaust Raven-winged Helm to prevent 1 point of damage just dealt to attached character.",
    "summary": "Raven-winged Helm grants Sentinel, allowing the attached character to defend attacks against any player—a key multiplayer defensive tool.",
    "tags": [
      "Damage Prevention",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10005.png",
    "ringsdb_code": "10005"
  },
  {
    "name": "Curious Brandybuck",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Forced: After the active location is explored, place Curious Brandybuck on the bottom of its owner's deck.\nResponse: After you travel to a location, put Curious Brandybuck into play from your hand, under any player's control.",
    "summary": "Curious Brandybuck puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Location Control (Travel/Bypass)",
      "Ally Mustering",
      "Forced Effect",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10006.png",
    "ringsdb_code": "10006"
  },
  {
    "name": "Hobbit Pony",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Hobbit hero. Restricted.\nQuest Action: If attached hero is not committed to the quest, exhaust Hobbit Pony and attached hero to commit attached hero to the quest.",
    "summary": "Hobbit Pony is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10007.png",
    "ringsdb_code": "10007"
  },
  {
    "name": "East Road Ranger",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain",
      "Scout"
    ],
    "text": "East Road Ranger gets +2 [willpower] while committed to a side quest.",
    "summary": "East Road Ranger boosts each character's willpower by +2, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Side Quest Synergy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10008.png",
    "ringsdb_code": "10008"
  },
  {
    "name": "Scout Ahead",
    "sphere": "Lore",
    "type": "Player Side Quest",
    "cost_threat": "0",
    "traits": [],
    "text": "Limit 1 per deck.\nResponse: When this stage is defeated, the first player searches the top X cards of the encounter deck for 1 non-objective card worth no victory points and adds it to the victory display. Put the remaining cards back in any order. X is the number of players in the game plus 4.",
    "summary": "Scout Ahead provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Encounter Deck Manipulation",
      "Victory Display Synergy",
      "Response Trigger",
      "Objective Interaction"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10009.png",
    "ringsdb_code": "10009"
  },
  {
    "name": "Ranger of Cardolan",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Response: After you engage an enemy, if you control at least 1 Dúnedain hero, spend 1 resource to put Ranger of Cardolan into play from your hand, under your control. At the end of the round, if Ranger of Cardolan is still in play, shuffle it into its owner's deck.",
    "summary": "Ranger of Cardolan puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Engagement Control",
      "Ally Mustering",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10010.png",
    "ringsdb_code": "10010"
  },
  {
    "name": "Rossiel",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Silvan"
    ],
    "text": "If the active location shares a Trait with a location in the victory display, Rossiel gets +2 [willpower].\nIf the attacking enemy shares a Trait with an enemy in the victory display, Rossiel gets +2 [defense].",
    "summary": "Rossiel can boost willpower by +2, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Defense Boost",
      "Willpower Boost",
      "Location Control (Travel/Bypass)",
      "Victory Display Synergy"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10028.png",
    "ringsdb_code": "10028"
  },
  {
    "name": "Veteran of Osgiliath",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Veteran of Osgiliath gets +1 [willpower], +1 [attack], and +1 [defense] while your threat is 40 or higher.",
    "summary": "Veteran of Osgiliath boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Valour"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10029.png",
    "ringsdb_code": "10029"
  },
  {
    "name": "Descendants of Kings",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Ready up to X Dúnedain characters you control. X is the number of enemies engaged with you.",
    "summary": "Descendants of Kings readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10030.png",
    "ringsdb_code": "10030"
  },
  {
    "name": "Derndingle Warrior",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Ent",
      "Warrior"
    ],
    "text": "Sentinel.\nCannot have restricted attachments.\nEnters play exhausted.\nWhile Derndingle Warrior is defending, it gains: \"Action: Deal 1 damage to Derndingle Warrior to give it +3 [defense] for this attack.\" (Limit once per attack.)",
    "summary": "Derndingle Warrior has Sentinel and deals 1 damage when it defends, combining defensive coverage with a passive chip-damage engine.",
    "tags": [
      "Defense Boost",
      "Direct Damage",
      "Sentinel",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10031.png",
    "ringsdb_code": "10031"
  },
  {
    "name": "Boomed and Trumpeted",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Ent"
    ],
    "text": "Response: After an Ent character takes any amount of damage, ready it. That character gets +3 [attack] until the end of the phase.",
    "summary": "Boomed and Trumpeted readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10032.png",
    "ringsdb_code": "10032"
  },
  {
    "name": "Elven Jeweler",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Craftsman"
    ],
    "text": "Action: Discard 2 cards from your hand to put Elven Jeweler into play from your hand, under your control.",
    "summary": "Elven Jeweler puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10033.png",
    "ringsdb_code": "10033"
  },
  {
    "name": "Double Back",
    "sphere": "Spirit",
    "type": "Player Side Quest",
    "cost_threat": "0",
    "traits": [],
    "text": "Limit 1 per deck.\nResponse: When this stage is defeated, reduce each player's threat by 5.",
    "summary": "Double Back provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Threat Reduction",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10034.png",
    "ringsdb_code": "10034"
  },
  {
    "name": "Leave No Trace",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 3 copies of Leave No Trace in the victory display.\nResponse: After a non-unique location is explored, add Leave No Trace to the victory display to add that location to the victory display.",
    "summary": "Leave No Trace interacts with the victory display, enabling removal of dangerous encounter cards or scaling effects from cleared cards.",
    "tags": [
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10035.png",
    "ringsdb_code": "10035"
  },
  {
    "name": "Distant Stars",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Exhaust a Ranger or Scout character to discard a non-unique active location. Then, search the encounter deck and discard pile for a non-unique location and make it the active location. Shuffle the encounter deck.",
    "summary": "Distant Stars manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Location Control (Travel/Bypass)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10036.png",
    "ringsdb_code": "10036"
  },
  {
    "name": "Keen as Lances",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Reduce the cost to play Keen as Lances by 1 for each card worth no victory points in the victory display.\nAction: Add Keen as Lances to the victory display. Then, choose one: add 2 resources to a hero's resource pool, draw 3 cards, or reduce your threat by 4.",
    "summary": "Keen as Lances generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Card Draw (Active)",
      "Threat Reduction",
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10037.png",
    "ringsdb_code": "10037"
  },
  {
    "name": "Dori",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dwarf"
    ],
    "text": "Sentinel.\nResponse: After another hero is declared as a defender, exhaust Dori to add his [defense] to the defending hero's [defense] for this attack.",
    "summary": "Dori has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10054.png",
    "ringsdb_code": "10054"
  },
  {
    "name": "Ranger Provisions",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a location. Limit 1 per location.\nResponse: After attached location is explored, the first player adds 1 resource to each of his heroes' resource pools.",
    "summary": "Ranger Provisions generates 2 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10055.png",
    "ringsdb_code": "10055"
  },
  {
    "name": "Dúnedain Message",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Signal"
    ],
    "text": "Action: Search your deck for a side quest and add it to your hand. Shuffle your deck.",
    "summary": "Dúnedain Message searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Side Quest Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10056.png",
    "ringsdb_code": "10056"
  },
  {
    "name": "Longbeard Sentry",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Action: Discard 2 cards from the top of your deck to give Longbeard Sentry sentinel and +1 [defense] until the end of the phase. (Limit once per phase.)",
    "summary": "Longbeard Sentry has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Defense Boost",
      "Sentinel"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10057.png",
    "ringsdb_code": "10057"
  },
  {
    "name": "Delay the Enemy",
    "sphere": "Tactics",
    "type": "Player Side Quest",
    "cost_threat": "0",
    "traits": [],
    "text": "Battle.\nLimit 1 per deck.\nResponse: When this stage is defeated, each player may choose and discard a non-unique enemy engaged with him.",
    "summary": "Delay the Enemy provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Enemy Control",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10058.png",
    "ringsdb_code": "10058"
  },
  {
    "name": "Steed of Imladris",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a [spirit] or Noldor hero. Restricted.\nResponse: After attached hero commits to a quest, discard a card from your hand to place 2 progress on the active location.",
    "summary": "Steed of Imladris grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Location Control (Progress)",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10059.png",
    "ringsdb_code": "10059"
  },
  {
    "name": "Fair and Perilous",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a Noldor or Silvan character.\nUntil the end of the phase, add that character's [willpower] to its [attack].",
    "summary": "Fair and Perilous boosts attack by +X for the phase, helping the team overcome high-defense enemies when focused fire alone isn't enough.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10060.png",
    "ringsdb_code": "10060"
  },
  {
    "name": "Wellinghall Preserver",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments.\nEnters play exhausted.\nResponse: After Wellinghall Preserver readies, heal 1 damage from an Ent character.",
    "summary": "Wellinghall Preserver heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10061.png",
    "ringsdb_code": "10061"
  },
  {
    "name": "None Return",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 3 copies of None Return in the victory display.\nResponse: After a non-unique enemy is destroyed, add None Return to the victory display to add that enemy to the victory display.",
    "summary": "None Return interacts with the victory display, enabling removal of dangerous encounter cards or scaling effects from cleared cards.",
    "tags": [
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10062.png",
    "ringsdb_code": "10062"
  },
  {
    "name": "Hope Rekindled",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Action: Reduce the cost of the next event that has a Valour trigger you play this phase by 2.\nValour Action: Search the top 10 cards of your deck for an event that has a Valour trigger and add it to your hand. Shuffle your deck.",
    "summary": "Hope Rekindled searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Resource Discount",
      "Player Deck Manipulation",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10063.png",
    "ringsdb_code": "10063"
  },
  {
    "name": "Erestor",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Noldor"
    ],
    "text": "Draw 3 additional cards at the beginning of the resource phase.\nAt the end of the round, discard all cards in your hand.",
    "summary": "Erestor offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Card Draw (Passive)"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10084.png",
    "ringsdb_code": "10084"
  },
  {
    "name": "Reinforcements",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "You must spend resources from 3 different heroes' resource pools to play this card.\nAction: The players, as a group, can put up to 2 allies into play from their hands. Each of these allies may enter play under any player's control. At the end of the phase, return each of those allies that are still in play to their owners' hands.",
    "summary": "Reinforcements puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10085.png",
    "ringsdb_code": "10085"
  },
  {
    "name": "Send for Aid",
    "sphere": "Leadership",
    "type": "Player Side Quest",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 1 per deck.\nResponse: When this stage is defeated, each player may search the top 10 cards of his deck for an ally and put it into play under his control. Each player who did shuffles his deck.",
    "summary": "Send for Aid provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10086.png",
    "ringsdb_code": "10086"
  },
  {
    "name": "Elven Spear",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Noldor or Silvan hero. Restricted.\nAction: Discard a card from your hand to give attached hero +1 [attack] until the end of the phase. Limit 3 times per phase.",
    "summary": "Elven Spear grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10087.png",
    "ringsdb_code": "10087"
  },
  {
    "name": "Horn's Cry",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: All enemies get -1 [attack] until the end of the phase.\nValour Action: Choose a player. Each enemy engaged with that player gets -3 [attack] until the end of the phase.",
    "summary": "Horn's Cry provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Valour",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10088.png",
    "ringsdb_code": "10088"
  },
  {
    "name": "Galadhrim Weaver",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Silvan",
      "Craftsman"
    ],
    "text": "Cannot attack or defend.\nResponse: After Galadhrim Weaver enters play, shuffle the top card of your discard pile into your deck.",
    "summary": "Galadhrim Weaver controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10089.png",
    "ringsdb_code": "10089"
  },
  {
    "name": "Silver Harp",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Instrument"
    ],
    "text": "Restricted.\nAttach to a [spirit] hero.\nResponse: After a card is discarded from your hand, exhaust Silver Harp to return that card to your hand.",
    "summary": "Silver Harp is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10090.png",
    "ringsdb_code": "10090"
  },
  {
    "name": "Galdor of the Havens",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After 1 or more cards are discarded from your hand, draw 1 card. Limit once per round.",
    "summary": "Galdor of the Havens draws 1 card on demand by exhausting, providing reliable hand replenishment for Lore decks.",
    "tags": [
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10091.png",
    "ringsdb_code": "10091"
  },
  {
    "name": "The Door is Closed!",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After an encounter card is revealed from the encounter deck, cancel its effects and discard it if there is a card with the same title in the victory display.",
    "summary": "The Door is Closed! manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10092.png",
    "ringsdb_code": "10092"
  },
  {
    "name": "Elf-friend",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a character.\nAttached character gains the Noldor and Silvan traits.",
    "summary": "Elf-friend is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10093.png",
    "ringsdb_code": "10093"
  },
  {
    "name": "Amarthiúl",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dúnedain",
      "Ranger",
      "Warrior"
    ],
    "text": "While you are engaged with at least 1 enemy, Amarthiúl gains the [tactics] resource icon.\nWhile you are engaged with at least 2 enemies, add 1 additional resource to Amarthiúl's resource pool when you collect resources during the resource phase.",
    "summary": "Amarthiúl generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation",
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10115.png",
    "ringsdb_code": "10115"
  },
  {
    "name": "Guardian of Arnor",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Sentinel.\nGuardian of Arnor gets +1 [defense] for each enemy engaged with you.",
    "summary": "Guardian of Arnor has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Defense Boost",
      "Sentinel"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10116.png",
    "ringsdb_code": "10116"
  },
  {
    "name": "Doom Hangs Still",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Planning Action: Until the end of the round, players do not raise their threat from questing unsuccessfully.\nValour Planning Action: Raise each player's threat by 2 to skip the quest phase this round.",
    "summary": "Doom Hangs Still provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Threat Payment",
      "Valour",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10117.png",
    "ringsdb_code": "10117"
  },
  {
    "name": "Beechbone",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nResponse: After Beechbone is declared as an attacker, deal 1 damage to him to deal X damage to the defending enemy. X is the amount of damage on Beechbone.",
    "summary": "Beechbone deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10118.png",
    "ringsdb_code": "10118"
  },
  {
    "name": "Hold Your Ground!",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose and ready a sentinel character.\nValour Action: Ready all sentinel characters.",
    "summary": "Hold Your Ground! readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10119.png",
    "ringsdb_code": "10119"
  },
  {
    "name": "Lindir",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After Lindir enters play, if you have less than 3 cards in your hand, draw until you have 3 cards in your hand.",
    "summary": "Lindir provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10120.png",
    "ringsdb_code": "10120"
  },
  {
    "name": "Lords of the Eldar",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Lords of the Eldar can only be played from your discard pile.\nAction: Place Lords of the Eldar on the bottom of your deck from your discard pile. Then, until the end of the round all Noldor characters get +1 [willpower], +1 [attack], and +1 [defense].",
    "summary": "Lords of the Eldar grants +1 attack and +1 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Recursion"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10121.png",
    "ringsdb_code": "10121"
  },
  {
    "name": "The Long Defeat",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a quest card in play. Limit 1 per quest.\nResponse: After attached quest card is defeated, each player either draws 2 cards or heals up to 5 damage from among characters he controls.",
    "summary": "The Long Defeat provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Card Draw (Passive)",
      "Healing",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10122.png",
    "ringsdb_code": "10122"
  },
  {
    "name": "Quick Ears",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: Exhaust a Dúnedain or Ranger hero to cancel an enemy card just revealed from the encounter deck. Then, shuffle it back into the encounter deck and reveal an additional encounter card.",
    "summary": "Quick Ears manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10123.png",
    "ringsdb_code": "10123"
  },
  {
    "name": "Favor of the Valar",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a player's threat dial. Limit 1 per player.\nForced: When you would be eliminated by reaching your threat elimination level, instead discard Favor of the Valar and reduce your threat to 5 less than your threat elimination level. You are not eliminated.",
    "summary": "Favor of the Valar reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Forced Effect"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10124.png",
    "ringsdb_code": "10124"
  },
  {
    "name": "Arwen Undómiel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Action: Discard a card from your hand to add 1 resource to a Noldor's resource pool, or to Aragorn's resource pool. (Limit once per round.)",
    "summary": "Arwen Undómiel generates 1 resource per activation, making them the premier economic engine for Spirit decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10140.png",
    "ringsdb_code": "10140"
  },
  {
    "name": "Éothain",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After a Rohan ally is discarded from play by a card effect, ready Éothain.",
    "summary": "Éothain provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10141.png",
    "ringsdb_code": "10141"
  },
  {
    "name": "Sword of Númenor",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Dúnedain or Gondor hero. Restricted.\nAttached hero gets +1 [attack].\nResponse: After attached hero participates in an attack that destroys an enemy with 5 or more printed hit points, exhaust Sword of Númenor to add 1 resource to attached hero's resource pool.",
    "summary": "Sword of Númenor generates 1 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Attack Boost",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10142.png",
    "ringsdb_code": "10142"
  },
  {
    "name": "Fornost Bowman",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Ranged.\nFornost Bowman gets +1 [attack] for each enemy engaged with you.",
    "summary": "Fornost Bowman has Ranged and gets +1 attack under certain conditions, serving as a flexible ranged attacker in multiplayer.",
    "tags": [
      "Attack Boost",
      "Ranged"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10143.png",
    "ringsdb_code": "10143"
  },
  {
    "name": "Hour of Wrath",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Action: Choose a hero. Until the end of the phase, the chosen hero does not exhaust to attack or defend.\nValour Action: Choose a player. Until the end of the phase, each of that player's heroes do not exhaust to attack or defend.",
    "summary": "Hour of Wrath provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Valour",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10144.png",
    "ringsdb_code": "10144"
  },
  {
    "name": "Elven-light",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Elven-light can only be played from your discard pile.\nAction: Return Elven-light to your hand from your discard pile. Then, draw 1 card.",
    "summary": "Elven-light retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Card Draw (Active)",
      "Recursion"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10145.png",
    "ringsdb_code": "10145"
  },
  {
    "name": "Tale of Tinúviel",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Action: Exhaust a Noldor character to ready a Dúnedain character, or vice-versa. Until the end of the phase, add the exhausted character's printed [willpower] to the other character's [willpower], [attack] and [defense].",
    "summary": "Tale of Tinúviel readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10146.png",
    "ringsdb_code": "10146"
  },
  {
    "name": "Galadhrim Healer",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan",
      "Healer"
    ],
    "text": "Response: After Galadhrim Healer enters play, choose a player. Heal 1 damage from each hero controlled by that player.",
    "summary": "Galadhrim Healer heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10147.png",
    "ringsdb_code": "10147"
  },
  {
    "name": "Weather-stained Cloak",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Ranger character. Limit 1 per character.\nWhile attached character is commited to the quest, Weather-stained Cloak gains: \"Response: Exhaust Weather-stained Cloak to cancel 1 point of damage just dealt to attached character.\"",
    "summary": "Weather-stained Cloak is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Damage Prevention",
      "Attachment Synergy",
      "Weather"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/10148.png",
    "ringsdb_code": "10148"
  },
  {
    "name": "Sword-thain",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Title"
    ],
    "text": "Attach to a unique ally belonging to any sphere of influence.\nAttached character loses the ally card type and gains the hero card type.",
    "summary": "Sword-thain is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/10149.png",
    "ringsdb_code": "10149"
  },
  {
    "name": "Círdan the Shipwright",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Draw 1 additional card at the beginning of the resource phase.\nForced: After drawing cards at the beginning of the resource phase, choose and discard 1 of those cards.",
    "summary": "Círdan the Shipwright offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Card Draw (Passive)",
      "Forced Effect"
    ],
    "willpower": 4,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/11001.png",
    "ringsdb_code": "11001"
  },
  {
    "name": "Galdor of the Havens",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After drawing your setup hand, instead of taking a mulligan, you may discard any number of cards from your hand. Then, draw that many cards.\nAction: If you have no cards in your hand, draw 6 cards. (Limit once per game.)",
    "summary": "Galdor of the Havens exhausts to draw 6 cards for any player, providing the most reliable on-demand card draw in Lore.",
    "tags": [
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/11002.png",
    "ringsdb_code": "11002"
  },
  {
    "name": "Mithlond Sea-watcher",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Warrior"
    ],
    "text": "While the top card of your discard pile is an ally, Mithlond Sea-watcher gets +2 [attack] and gains ranged.",
    "summary": "Mithlond Sea-watcher has Ranged and gets +2 attack under certain conditions, serving as a flexible ranged attacker in multiplayer.",
    "tags": [
      "Attack Boost",
      "Ranged"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11003.png",
    "ringsdb_code": "11003"
  },
  {
    "name": "Skyward Volley",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "As an additional cost to play Skyward Volley, exhaust a ranged character you control.\nCombat Action: Deal 2 damage to an enemy engaged with a player. Resolve that effect again for each copy of Skyward Volley currently in your discard pile (you may choose different targets).",
    "summary": "Skyward Volley deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Ranged"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11004.png",
    "ringsdb_code": "11004"
  },
  {
    "name": "Grappling Hook",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a character.\nQuest Action: Discard Grappling Hook and exhaust attached character to commit attached character to the quest, using its [attack] instead of its [willpower] (or instead of its [defense] if the current quest has the siege keyword).",
    "summary": "Grappling Hook is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Action Advantage (Non-Exhausting)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11005.png",
    "ringsdb_code": "11005"
  },
  {
    "name": "Warden of the Havens",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Warrior"
    ],
    "text": "While the top card of your discard pile is an attachment, Warden of the Havens gets +2 [defense] and gains sentinel.",
    "summary": "Warden of the Havens has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11006.png",
    "ringsdb_code": "11006"
  },
  {
    "name": "Anchor Watch",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: After an enemy is declared as an attacker against you, declare an exhausted character you control as the defender. Resolve that effect again for each copy of Anchor Watch currently in your discard pile (all chosen characters are defending against this attack).",
    "summary": "Anchor Watch provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11007.png",
    "ringsdb_code": "11007"
  },
  {
    "name": "Mariner's Compass",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a [leadership] or a Scout character.\nResponse: At the beginning of the travel phase, exhaust Mariner's Compass and attached character to search the top 5 cards of the encounter deck for a location. Switch that location with a location in the staging area. Shuffle the encounter deck.",
    "summary": "Mariner's Compass grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11008.png",
    "ringsdb_code": "11008"
  },
  {
    "name": "Lindon Navigator",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Scout"
    ],
    "text": "Lindon Navigator does not exhaust to commit to a quest, and can commit to quests while exhausted.\nForced: After resolving a quest to which Lindon Navigator was committed, either discard it from play or discard 1 card from your hand.",
    "summary": "Lindon Navigator provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Forced Effect"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11009.png",
    "ringsdb_code": "11009"
  },
  {
    "name": "The Evening Star",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Place 2 progress on any location. Resolve that effect again for each copy of The Evening Star currently in your discard pile (you may choose new targets).",
    "summary": "The Evening Star places 2 progress on locations, helping to escape location lock or clear locations that are throttling quest progress.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11010.png",
    "ringsdb_code": "11010"
  },
  {
    "name": "Explorer's Almanac",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a location in the staging area.\nProgress from questing successfully may be placed on the attached location before it is placed on the current quest.",
    "summary": "Explorer's Almanac places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11011.png",
    "ringsdb_code": "11011"
  },
  {
    "name": "Sailor of Lune",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Scout"
    ],
    "text": "While the top card of your discard pile is an event, Sailor of Lune gets +1 [willpower] and gains: \"Cannot be damaged while committed to the quest.\"",
    "summary": "Sailor of Lune boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11012.png",
    "ringsdb_code": "11012"
  },
  {
    "name": "Elwing's Flight",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Quest Action: Ready a questing character and give that character +1 [willpower] until the end of the phase. Resolve that effect again for each copy of Elwing's Flight currently in your discard pile (you may choose different targets).",
    "summary": "Elwing's Flight readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/11013.png",
    "ringsdb_code": "11013"
  },
  {
    "name": "To the Sea, to the Sea!",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a Noldor character.\nAction: Exhaust To the Sea, to the Sea! and discard X cards from your hand to reduce the cost of the next Noldor ally played this phase by X (to a minimum of 1).",
    "summary": "To the Sea, to the Sea! reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/11014.png",
    "ringsdb_code": "11014"
  },
  {
    "name": "Narya",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Ring",
      "Artifact"
    ],
    "text": "Attach to Círdan the Shipwright or Gandalf.\nAttached character gains a [leadership] resource icon.\nAction: Exhaust Narya and attached character to choose and ready up to 2 allies. Each of those allies gets +1 [attack] and +1 [defense] until the end of the phase.",
    "summary": "Narya grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Attack Boost",
      "Defense Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/11015.png",
    "ringsdb_code": "11015"
  },
  {
    "name": "Denethor",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Noble",
      "Steward"
    ],
    "text": "Setup: Add 2 resources to Denethor's resource pool.\nAction: Move 1 resource from Denethor's resource pool to another Gondor hero's resource pool. (Limit once per round.)",
    "summary": "Denethor generates 2 resources per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12001.png",
    "ringsdb_code": "12001"
  },
  {
    "name": "Rod of the Steward",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Gondor hero.\nAction: Spend 2 resources from attached hero's resource pool to draw 1 card.",
    "summary": "Rod of the Steward draws 1 card on demand, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12002.png",
    "ringsdb_code": "12002"
  },
  {
    "name": "In Service of the Steward",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a character.\nAttached character gains the Gondor trait.",
    "summary": "In Service of the Steward is a support attachment that enhances the attached character's role in Leadership builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12003.png",
    "ringsdb_code": "12003"
  },
  {
    "name": "Azain Silverbeard",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Response: After Azain Silverbeard participates in an attack that destroys an enemy, spend 1 [tactics] resource to deal 2 damage to another enemy that shares a Trait with the destroyed enemy. Any player may trigger this response.",
    "summary": "Azain Silverbeard deals 2 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12004.png",
    "ringsdb_code": "12004"
  },
  {
    "name": "Last Stand",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After a Warrior character is destroyed while defending against an enemy attack, deal damage to the attacking enemy equal to that character's printed [attack].",
    "summary": "Last Stand provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12005.png",
    "ringsdb_code": "12005"
  },
  {
    "name": "Glorfindel",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Noldor",
      "Noble",
      "Warrior"
    ],
    "text": "Glorfindel can be played from your discard pile.\nAction: Discard a card from your hand to ready Glorfindel. (Limit once per phase.)",
    "summary": "Glorfindel readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Recursion"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12006.png",
    "ringsdb_code": "12006"
  },
  {
    "name": "Tides of Fate",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: When a shadow card increases an enemy's [attack] by any amount, increase the defending character's [defense] by 3 for that attack. Then, the players as a group may spend 2 [tactics] resources to ready the defending character and give it +3 [attack] for its next attack this phase.",
    "summary": "Tides of Fate readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12007.png",
    "ringsdb_code": "12007"
  },
  {
    "name": "Imladris Caregiver",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Healer"
    ],
    "text": "Action: Discard a card from your hand to heal 1 damage on any character. (Limit twice per round).",
    "summary": "Imladris Caregiver heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12008.png",
    "ringsdb_code": "12008"
  },
  {
    "name": "Heed the Dream",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a player. That player searches the top 5 cards of his deck for a card, adds it to his hand, and shuffles his deck. Then, the players as a group may spend 3 [leadership] resources to have that player search his deck for another card, add it to his hand, and shuffle his deck.",
    "summary": "Heed the Dream searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Sphere Synergy",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12009.png",
    "ringsdb_code": "12009"
  },
  {
    "name": "Guardian of Rivendell",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor",
      "Warrior"
    ],
    "text": "As an additional cost to play Guardian of Rivendell from your hand, you must discard 2 cards from your hand.",
    "summary": "Guardian of Rivendell provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12010.png",
    "ringsdb_code": "12010"
  },
  {
    "name": "Vanish from Sight",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Play only if you control 2 or fewer heroes.\nAction: Until the end of the phase, if your threat is higher than 20, treat your threat as if it is 20.",
    "summary": "Vanish from Sight reduces threat by X, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12011.png",
    "ringsdb_code": "12011"
  },
  {
    "name": "Lanwyn",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dale",
      "Scout"
    ],
    "text": "Ranged.\nResponse: After an encounter card with surge is revealed, either ready Lanwyn or give her +2 [willpower] until the end of the phase. (Limit twice per phase.)",
    "summary": "Lanwyn readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Willpower Boost",
      "Ranged",
      "Surge",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12030.png",
    "ringsdb_code": "12030"
  },
  {
    "name": "Eldahir",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Noble"
    ],
    "text": "Sentinel.\nAction: Spend 1 [lore] resource to look at a facedown shadow card dealt to an engaged enemy. If that card has a shadow effect, Eldahir gets +2 [defense] until the end of the phase. Any player may trigger this action. (Limit once per phase.)",
    "summary": "Eldahir has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Engagement Control",
      "Sphere Synergy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12031.png",
    "ringsdb_code": "12031"
  },
  {
    "name": "Captain's Wisdom",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Resource Action: Exhaust a Noble hero you control to add 2 resources to that hero's resource pool.",
    "summary": "Captain's Wisdom generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12032.png",
    "ringsdb_code": "12032"
  },
  {
    "name": "Master Ironsmith",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Craftsman"
    ],
    "text": "Response: After you play Master Ironsmith from your hand, if you paid all of its resource cost from a single hero's resource pool, attach a Weapon or Armor attachment from your hand or discard pile to that hero without paying its resource cost.",
    "summary": "Master Ironsmith provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12033.png",
    "ringsdb_code": "12033"
  },
  {
    "name": "Raiment of War",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Armor",
      "Weapon"
    ],
    "text": "Attach to a Warrior character. Raiment of War counts as 2 Restricted attachments.\nAttached character gets +1 [attack], +1 [defense] and +2 hit points.",
    "summary": "Raiment of War provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12034.png",
    "ringsdb_code": "12034"
  },
  {
    "name": "Sam Gamgee",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Hobbit"
    ],
    "text": "Reduce the cost to play Sam Gamgee by 2 if you control Frodo Baggins.\nResponse: After a player raises his threat, that player may spend 1 [spirit] resource to ready Sam Gamgee. He gets +1 [willpower], +1 [attack] and +1 [defense] until the end of the round. (Limit once per round.)",
    "summary": "Sam Gamgee readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Resource Discount",
      "Action Advantage (Readying)",
      "Threat Payment",
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Sphere Synergy"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12035.png",
    "ringsdb_code": "12035"
  },
  {
    "name": "Elevenses",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only after the staging step.\nQuest Action: Choose X questing Hobbit characters you control. Ready each chosen character and remove them from the quest. Then, reduce your threat by X.",
    "summary": "Elevenses readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Reduction"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12036.png",
    "ringsdb_code": "12036"
  },
  {
    "name": "Mirkwood Explorer",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Woodman",
      "Scout"
    ],
    "text": "Response: After Mirkwood Explorer quests successfully, place 1 progress on it.\nAction: Exhaust Mirkwood Explorer to move all progress from it to a location in play.",
    "summary": "Mirkwood Explorer places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12037.png",
    "ringsdb_code": "12037"
  },
  {
    "name": "Guarded Ceaselessly",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a location.\nAction: Exhaust a Ranger or Scout character to give attached location -2 [threat] until the end of the phase.",
    "summary": "Guarded Ceaselessly is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Staging Area Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12038.png",
    "ringsdb_code": "12038"
  },
  {
    "name": "Elfhelm",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Rohan",
      "Scout",
      "Warrior"
    ],
    "text": "Each [spirit] hero with an attached Mount gets +1 [willpower].\nEach [tactics] hero with an attached Mount gets +1 [attack].\nEach [leadership] hero with an attached Mount gets +1 [defense].",
    "summary": "Elfhelm can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12057.png",
    "ringsdb_code": "12057"
  },
  {
    "name": "Ceorl",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan",
      "Scout"
    ],
    "text": "Spend 1 [spirit] resource to ready Ceorl. Then, you may give control of Ceorl to another player. Any player may trigger this action. (Limit once per phase).",
    "summary": "Ceorl readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Sphere Synergy",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12058.png",
    "ringsdb_code": "12058"
  },
  {
    "name": "Armored Destrier",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a [leadership] or sentinel hero. Restricted.\nResponse: After attached hero defends against an attack, exhaust Armored Destrier to ready attached hero. Then, discard a shadow card from another enemy engaged with the defending player.",
    "summary": "Armored Destrier grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Sentinel",
      "Shadow Cancellation",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12059.png",
    "ringsdb_code": "12059"
  },
  {
    "name": "Déorwine",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Sentinel.\nWhile Déorwine is defending, he gains: “Response: Spend 1 [leadership] resource to cancel a shadow effect just triggered. Any player may trigger this response.”",
    "summary": "Déorwine cancels or discards shadow cards, preventing dangerous shadow effects that could otherwise wipe defenders or spike enemy attack.",
    "tags": [
      "Sentinel",
      "Shadow Cancellation",
      "Sphere Synergy"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12060.png",
    "ringsdb_code": "12060"
  },
  {
    "name": "Revealed in Wrath",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if you control a Noldor hero.\nAction: Choose a non-unique enemy. Until the end of the phase, treat the chosen enemy's printed text box as if it were blank (except for Traits).",
    "summary": "Revealed in Wrath prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12061.png",
    "ringsdb_code": "12061"
  },
  {
    "name": "Rhovanion Outrider",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dale",
      "Scout"
    ],
    "text": "Response: After Rhovanion Outrider commits to the quest, place 1 progress on a location in the staging area. If that location is not explored by this effect, give Rhovanion Outrider +1 [willpower] until the end of the phase.",
    "summary": "Rhovanion Outrider places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Willpower Boost",
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12062.png",
    "ringsdb_code": "12062"
  },
  {
    "name": "Scouting Party",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: After you commit characters to the quest, if each character you have committed to the quest is a Scout, each of those characters gets +2 [willpower] until the end of the phase.",
    "summary": "Scouting Party gives +2 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12063.png",
    "ringsdb_code": "12063"
  },
  {
    "name": "Entangling Nets",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Trap"
    ],
    "text": "Play Entangling Nets into the staging area unattached.\nIf unattached, attach Entangling Nets to the next eligible enemy that enters the staging area.\nAttached enemy gets –2 [attack] and –2 [defense].",
    "summary": "Entangling Nets is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12064.png",
    "ringsdb_code": "12064"
  },
  {
    "name": "Arrows from the Trees",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only after making engagement checks.\nEncounter Action: If no enemies were engaged this phase, deal 1 damage to each enemy in the staging area. Then, the players as a group may spend 3 [tactics] resources to deal 2 additional damage to each enemy in the staging area.",
    "summary": "Arrows from the Trees deals 1 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Sphere Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12065.png",
    "ringsdb_code": "12065"
  },
  {
    "name": "Ered Luin Miner",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Ered Luin Miner is discarded from your deck, put it into play under your control.",
    "summary": "Ered Luin Miner provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12066.png",
    "ringsdb_code": "12066"
  },
  {
    "name": "Argalad",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Ranged.\nAction: Exhaust Argalad to choose an enemy in the staging area. Until the end of the phase, that enemy gets -X [threat], where X is Argalad's [attack]. If this effect reduces the enemy's [threat] to 0, deal 1 damage to it. (Limit once per round.)",
    "summary": "Argalad reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Direct Damage",
      "Ranged"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12082.png",
    "ringsdb_code": "12082"
  },
  {
    "name": "Dwarven Sellsword",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Forced: At the end of the round, discard Dwarven Sellsword unless the players as a group spend 1 [leadership] resource.",
    "summary": "Dwarven Sellsword provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Sphere Synergy",
      "Forced Effect"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12083.png",
    "ringsdb_code": "12083"
  },
  {
    "name": "Dúnedain Remedy",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Signal"
    ],
    "text": "Attach to a hero.\nResponse: After Dúnedain Remedy is attached to a hero, heal 1 damage on that hero.\nAction: Pay 1 resource from attached hero's resource pool to attach Dúnedain Remedy to another hero.",
    "summary": "Dúnedain Remedy provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12084.png",
    "ringsdb_code": "12084"
  },
  {
    "name": "Marksman of Lórien",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan",
      "Warrior"
    ],
    "text": "Ranged.\nResponse: After Marksman of Lórien enters play, choose an enemy. That enemy gets -2 [defense] until the end of the round.",
    "summary": "Marksman of Lórien has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12085.png",
    "ringsdb_code": "12085"
  },
  {
    "name": "Battle-fury",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only before the staging step.\nQuest Action: Exhaust a hero you control to immediately declare it as an attacker (and resolve its attack) against any eligible enemy target. Then, the players as a group may spend 1 [spirit] resource to commit that hero to the quest.",
    "summary": "Battle-fury readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Sphere Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12086.png",
    "ringsdb_code": "12086"
  },
  {
    "name": "Woodland Courier",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Response: After Woodland Courier enters play, place 1 progress on a location (2 progress instead if that location has the Forest trait).",
    "summary": "Woodland Courier places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12087.png",
    "ringsdb_code": "12087"
  },
  {
    "name": "Hithlain",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a location. Limit 1 per location\nResponse: After a player plays a Silvan ally from his hand, place 1 progress on attached location.",
    "summary": "Hithlain places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12088.png",
    "ringsdb_code": "12088"
  },
  {
    "name": "Robin Smallburrow",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit",
      "Shirriff"
    ],
    "text": "Response: After you travel to a location, spend 1 [spirit] resource to raise the engagement cost of each enemy in play by X until the end of the round, where X is that location's quest points. Any player may trigger this response.",
    "summary": "Robin Smallburrow manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control",
      "Location Control (Travel/Bypass)",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12089.png",
    "ringsdb_code": "12089"
  },
  {
    "name": "Interrogation",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose an enemy with an attached Trap card. Look at the top X cards of the encounter deck, where X is that enemy's printed [threat]. You may discard 1 of those cards. Return the rest to the top of the deck, in the same order.",
    "summary": "Interrogation provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Scrying",
      "Traps"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12090.png",
    "ringsdb_code": "12090"
  },
  {
    "name": "Strider",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a hero.\nWhile you control 2 or fewer heroes, attached hero does not exhaust to commit to the quest.\nWhile you control 5 or fewer characters, attached hero gets +2 [willpower].",
    "summary": "Strider lets the attached character act without exhausting, freeing them to contribute fully in both questing and combat.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12091.png",
    "ringsdb_code": "12091"
  },
  {
    "name": "Na'asiyah",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Corsair",
      "Warrior"
    ],
    "text": "Resources in Na'asiyah's resource pool cannot be used to pay for allies.\nAction: While Na'asiyah is attacking or defending, pay 1 resource from her resource pool to give her +2 [attack] or +2 [defense] for this attack.",
    "summary": "Na'asiyah can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Defense Boost"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12109.png",
    "ringsdb_code": "12109"
  },
  {
    "name": "Rune-master",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Ranger or [leadership] hero.\nResponse: After a Signal attachment is attached to a hero, exhaust Rune-master to add 1 resource to that hero's resource pool.",
    "summary": "Rune-master generates 1 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12110.png",
    "ringsdb_code": "12110"
  },
  {
    "name": "Terrible to Behold",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After you declare a Noble character as a defender against an attack made by an engaged enemy, return that enemy to the staging area. Then, cancel the attack.",
    "summary": "Terrible to Behold prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Staging Area Attack",
      "Enemy Control",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12111.png",
    "ringsdb_code": "12111"
  },
  {
    "name": "Veteran Sword-elf",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor",
      "Warrior"
    ],
    "text": "Veteran Sword-elf gets +1 [attack] and +1 [defense] for each copy of Veteran Sword-elf in your discard pile.",
    "summary": "Veteran Sword-elf provides +1 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Defense Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12112.png",
    "ringsdb_code": "12112"
  },
  {
    "name": "Vigilant Guard",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a Warrior character. Limit 1 per character.\nAttached character gets +2 hit points.\nResponse: When another character would be assigned any amount of damage, place 1 of that damage on attached character instead.",
    "summary": "Vigilant Guard adds +2 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Damage Prevention",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12113.png",
    "ringsdb_code": "12113"
  },
  {
    "name": "Knife-work",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a player. Each enemy engaged with that player gets -1 [defense] until the end of the phase. Then, the players as a group may spend 2 [lore] resources to have the chosen player draw 1 card each time he attacks and destroys an enemy this phase.",
    "summary": "Knife-work draws 1 card immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Sphere Synergy",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12114.png",
    "ringsdb_code": "12114"
  },
  {
    "name": "Linhir Sea-captain",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor"
    ],
    "text": "Response: After you play Linhir Sea-captain from your hand, if you paid all of its resouce cost from a single hero's resource pool, both that hero and Linhir Sea-captain do not exhaust to quest this round.",
    "summary": "Linhir Sea-captain provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12115.png",
    "ringsdb_code": "12115"
  },
  {
    "name": "Windfola",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a [spirit] hero, or to Éowyn. Restricted.\nAttached character gets +1 [willpower].\nResponse: After attached character is removed from the quest, exhaust Windfola to commit that character to the quest.",
    "summary": "Windfola grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Willpower Boost",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12116.png",
    "ringsdb_code": "12116"
  },
  {
    "name": "Ioreth",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "0",
    "traits": [
      "Gondor",
      "Healer"
    ],
    "text": "Cannot attack or defend.\nAction: Spend 1 [lore] resource and exhaust Ioreth. Then, heal 3 points of damage on a character. Any player may trigger this action.",
    "summary": "Ioreth heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing",
      "Enemy Control",
      "Sphere Synergy"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12117.png",
    "ringsdb_code": "12117"
  },
  {
    "name": "The Houses of Healing",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "You may exhaust any number of Healer characters you control as part of this card's cost. Reduce the cost to play this card by 1 for each Healer character you exhaust in this way.\nRefresh Action: Choose a hero in any player's discard pile. Put that hero into play under its owner's control, with 1 damage token on it.",
    "summary": "The Houses of Healing retrieves a card from the discard pile, recycling spent events, lost attachments, or eliminated allies back into play.",
    "tags": [
      "Resource Discount",
      "Recursion"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12118.png",
    "ringsdb_code": "12118"
  },
  {
    "name": "Justice Shall Be Done",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Limit 1 per deck.\nPlanning Action: Add Justice Shall Be Done to the victory display to draw 3 cards and add 3 resources to the resource pool of each hero you control. At the end of the round, you are eliminated from the game.",
    "summary": "Justice Shall Be Done generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Card Draw (Active)",
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12119.png",
    "ringsdb_code": "12119"
  },
  {
    "name": "Prince Imrahil",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Gondor",
      "Noble",
      "Warrior"
    ],
    "text": "Combat Action: Spend 1 resource from Prince Imrahil's resource pool to search the top 5 cards of your deck for an ally who shares at least 1 Trait with him, and put that ally into play. Shuffle your deck. At the end of the phase, if that ally is still in play, shuffle it into your deck. (Limit once per round.)",
    "summary": "Prince Imrahil searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Ally Mustering"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12138.png",
    "ringsdb_code": "12138"
  },
  {
    "name": "Knight of the White Tower",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Knight of the White Tower's resource cost must be paid from a single hero’s resource pool.",
    "summary": "Knight of the White Tower provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [],
    "willpower": 2,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12139.png",
    "ringsdb_code": "12139"
  },
  {
    "name": "Hold the Line",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: When an enemy attacks a player, that player may declare up to 3 eligible characters as defenders against this attack. Then, the players as a group may spend 2 [tactics] resources to ready each defending character that takes no damage from this attack.",
    "summary": "Hold the Line readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12140.png",
    "ringsdb_code": "12140"
  },
  {
    "name": "Soldier of Dol Amroth",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Response: After Soldier of Dol Amroth enters play, reduce the cost of the next [tactics] card you play this phase by 1.",
    "summary": "Soldier of Dol Amroth provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12141.png",
    "ringsdb_code": "12141"
  },
  {
    "name": "Súlien",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Scout"
    ],
    "text": "Action: Spend 1 [lore] resource to exhaust Súlien. Then, each location in the staging area gets –1 [threat] until the end of the phase. Any player may trigger this action.",
    "summary": "Súlien reduces the threat contribution of locations or enemies in the staging area, easing the questing burden without committing progress.",
    "tags": [
      "Staging Area Control",
      "Sphere Synergy"
    ],
    "willpower": 3,
    "attack": 0,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12142.png",
    "ringsdb_code": "12142"
  },
  {
    "name": "Inspiring Presence",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Choose a hero you control. Each hero with lower threat cost than the chosen hero gets +2 [defense] until the end of the phase. Then, the players as a group may spend 2 [leadership] resources to give +2 [attack] to each hero with lower threat cost than the chosen hero until the end of the phase.",
    "summary": "Inspiring Presence grants +2 attack and +2 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Resource Discount",
      "Threat Reduction",
      "Attack Boost",
      "Defense Boost",
      "Sphere Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12143.png",
    "ringsdb_code": "12143"
  },
  {
    "name": "Guardian of Ithilien",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After Guardian of Ithilien enters play, return an enemy engaged with you to the staging area.",
    "summary": "Guardian of Ithilien controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12144.png",
    "ringsdb_code": "12144"
  },
  {
    "name": "Ranger Spear",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Ranger character. Restricted.\nAttached character gets +1 [attack] (+2 [attack] instead when attacking an enemy with an attachment on it).",
    "summary": "Ranger Spear grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/12145.png",
    "ringsdb_code": "12145"
  },
  {
    "name": "Prince of Dol Amroth",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Title"
    ],
    "text": "Attach to Prince Imrahil.\nPrice Imrahil gains the Outlands trait.\nWhile you control Outlands allies that belong to 4 different spheres, add 1 additional resource to Prince Imrahil's resource pool when you collect resources during the resource phase (if Prince Imrahil is a hero).",
    "summary": "Prince of Dol Amroth generates 1 resources per exhaust, serving as the primary income attachment in Neutral decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/12146.png",
    "ringsdb_code": "12146"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Baggins",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit"
    ],
    "text": "The first player gains control of Bilbo Baggins.\nBilbo Baggins cannot gain resources from player card effects.\nIf Bilbo Baggins leaves play, the players lose the game.",
    "summary": "Bilbo Baggins offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131001.png",
    "ringsdb_code": "131001"
  },
  {
    "name": "Thorin Oakenshield",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Dwarf",
      "Noble",
      "Warrior"
    ],
    "text": "If you control at least 5 Dwarf characters, add 1 additional resource to Thorin Oakenshield's pool when you collect resources during the resource phase.",
    "summary": "Thorin Oakenshield generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131002.png",
    "ringsdb_code": "131002"
  },
  {
    "name": "Nori",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After you play a Dwarf character from your hand, reduce your threat by 1.",
    "summary": "Nori reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131003.png",
    "ringsdb_code": "131003"
  },
  {
    "name": "Ori",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Dwarf"
    ],
    "text": "If you control at least 5 Dwarf characters, draw 1 additional card at the beginning of the resource phase.",
    "summary": "Ori offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Card Draw (Passive)"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131004.png",
    "ringsdb_code": "131004"
  },
  {
    "name": "Beorn",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Beorning",
      "Warrior"
    ],
    "text": "Sentinel. Cannot have attachments.\nImmune to player card effects.\nBeorn does not exhaust to defend.",
    "summary": "Beorn defends without exhausting, serving as an infinite wall that can re-defend after counterattacking.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Sentinel",
      "Immune"
    ],
    "willpower": 0,
    "attack": 5,
    "defense": 1,
    "health": 10,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131005.png",
    "ringsdb_code": "131005"
  },
  {
    "name": "Fili",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After you play Fili from your hand during the planning phase, search your deck for Kili and put him into play under your control. Then, shuffle your deck.",
    "summary": "Fili searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131006.png",
    "ringsdb_code": "131006"
  },
  {
    "name": "Kili",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After you play Kili from your hand during the planning phase, search your deck for Fili and put him into play under your control. Then, shuffle your deck.",
    "summary": "Kili searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131007.png",
    "ringsdb_code": "131007"
  },
  {
    "name": "Bofur",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Exhaust Bofur to search the top 5 cards of your deck for 1 Weapon attachment. Add that card to your hand and shuffle the other cards back into your deck.",
    "summary": "Bofur searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131008.png",
    "ringsdb_code": "131008"
  },
  {
    "name": "Dori",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After a hero is assigned any amount of damage, exhaust Dori to place that damage on Dori instead.",
    "summary": "Dori provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Damage Prevention",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131009.png",
    "ringsdb_code": "131009"
  },
  {
    "name": "Gandalf",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Istari"
    ],
    "text": "Gandalf does not exhaust to commit to a quest.\nForced: At the end of the refresh phase, discard Gandalf from play. You may raise your threat by 2 to cancel this effect.",
    "summary": "Gandalf provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Threat Payment",
      "Forced Effect"
    ],
    "willpower": 4,
    "attack": 4,
    "defense": 4,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131010.png",
    "ringsdb_code": "131010"
  },
  {
    "name": "Cram",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a hero.\nAction: Discard Cram to ready attached hero.",
    "summary": "Cram allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131011.png",
    "ringsdb_code": "131011"
  },
  {
    "name": "Spare Hood and Cloak",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a character.\nAction: Exhaust Spare Hood and Cloak and exhaust attached character to ready another character. Then, attach Spare Hood and Cloak to that character.",
    "summary": "Spare Hood and Cloak allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131012.png",
    "ringsdb_code": "131012"
  },
  {
    "name": "Thrór's Map",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to a hero.\nTravel Action: Discard Thrór's Map to choose a location in the staging area. Make that location the active location. (If there is another active location, return it to the staging area.)",
    "summary": "Thrór's Map is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Location Control (Travel/Bypass)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/131013.png",
    "ringsdb_code": "131013"
  },
  {
    "name": "A Very Good Tale",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Exhaust 2 allies you control to shuffle your deck and discard the top 5 cards. Put up to 2 allies discarded by this effect into play under your control. The total cost of the allies put into play cannot exceed the total cost of the allies exhausted to pay for this effect.",
    "summary": "A Very Good Tale puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131014.png",
    "ringsdb_code": "131014"
  },
  {
    "name": "Foe-hammer",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After a hero you control attacks and destroys an enemy, exhaust a Weapon card attached to that hero to draw 3 cards.",
    "summary": "Foe-hammer draws 3 cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131015.png",
    "ringsdb_code": "131015"
  },
  {
    "name": "Goblin-cleaver",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Combat Action: Exhaust a Weapon card attached to a hero you control to choose an enemy engaged with you. Deal 2 damage to that enemy. (Deal 3 damage instead if the enemy is an Orc.)",
    "summary": "Goblin-cleaver deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131016.png",
    "ringsdb_code": "131016"
  },
  {
    "name": "Late Adventurer",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Quest Action: Exhaust a character you control that is not committed to the quest to commit that character to the quest.",
    "summary": "Late Adventurer provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Action Advantage (Non-Exhausting)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131017.png",
    "ringsdb_code": "131017"
  },
  {
    "name": "Expecting Mischief",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play during the quest phase, before the staging step.\nAction: Deal 2 damage to the first enemy revealed from the encounter deck this phase.",
    "summary": "Expecting Mischief deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131018.png",
    "ringsdb_code": "131018"
  },
  {
    "name": "Burglar Baggins",
    "sphere": "Baggins",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Bilbo Baggins gets +2 [willpower], +2 [attack], and +2 [defense] until the end of the phase. (You may spend a [baggins] resource from Bilbo Baggins' resource pool to play this card even if you do not control Bilbo Baggins.)",
    "summary": "Burglar Baggins grants +2 attack and +2 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/131019.png",
    "ringsdb_code": "131019"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Baggins",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit",
      "Burglar"
    ],
    "text": "Bilbo Baggins does not count against the hero limit and cannot gain resources from non-treasure cards. The first player gains control of Bilbo Baggins.\nAction: Spend 1 [baggins] resource to search your deck for a treasure card and add it to your hand.\nIf Bilbo Baggins leaves play, the players have lost the game.",
    "summary": "Bilbo Baggins searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132001.png",
    "ringsdb_code": "132001"
  },
  {
    "name": "Balin",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: Pay 1 resource from Balin's resource pool to cancel a shadow effect just triggered during an attack. Then, deal the attacking enemy another shadow card. (Limit once per attack.)",
    "summary": "Balin triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132002.png",
    "ringsdb_code": "132002"
  },
  {
    "name": "Bard the Bowman",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Esgaroth",
      "Warrior"
    ],
    "text": "Ranged.\nWhen Bard the Bowman makes a ranged attack, the enemy he attacks gets -2 [defense] until the end of the phase.",
    "summary": "Bard the Bowman offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Ranged"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132003.png",
    "ringsdb_code": "132003"
  },
  {
    "name": "Óin",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Dwarf"
    ],
    "text": "While you control at least 5 Dwarf characters, Óin gets +1 [attack] and gains the [tactics] resource icon.",
    "summary": "Óin can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Resource Smoothing",
      "Attack Boost"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132004.png",
    "ringsdb_code": "132004"
  },
  {
    "name": "Bombur",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Dwarf"
    ],
    "text": "When counting the number of Dwarf characters you control, Bombur counts as two.",
    "summary": "Bombur offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [],
    "willpower": 0,
    "attack": 1,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132005.png",
    "ringsdb_code": "132005"
  },
  {
    "name": "Glóin",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "While you control at least 5 Dwarf characters, Glóin gains: \"Response: After you play Glóin from your hand, choose a hero. Add 2 resources to that hero's resource pool.\"",
    "summary": "Glóin generates 2 resources per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132006.png",
    "ringsdb_code": "132006"
  },
  {
    "name": "Bifur",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "While you control at least 5 Dwarf characters, Bifur gains: \"Response: After you play Bifur from your hand, draw 2 cards.\"",
    "summary": "Bifur draws 2 cards automatically on a triggered condition, rewarding the right sequencing with passive hand advantage.",
    "tags": [
      "Card Draw (Passive)"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132007.png",
    "ringsdb_code": "132007"
  },
  {
    "name": "Dwalin",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Sentinel.\nWhile you control at least 5 Dwarf characters, lower the cost to play Dwalin by 2.",
    "summary": "Dwalin has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Resource Discount",
      "Sentinel"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132008.png",
    "ringsdb_code": "132008"
  },
  {
    "name": "Straight Shot",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Exhaust a Weapon attachment to choose a non-unique enemy with 0 [defense]. Discard the chosen enemy.",
    "summary": "Straight Shot prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132009.png",
    "ringsdb_code": "132009"
  },
  {
    "name": "Desperate Alliance",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose a hero you control. Until the end of the phase, give control of that hero and all resources in that hero's resource pool to another player. (Limit 1 per phase.)",
    "summary": "Desperate Alliance provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132010.png",
    "ringsdb_code": "132010"
  },
  {
    "name": "Ravens of the Mountain",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Exhaust a hero you control to shuffle the encounter deck and look at its top card. Place progress tokens on the current quest equal to the [threat] of the card you looked at. Then, put that card back on top of the encounter deck.",
    "summary": "Ravens of the Mountain manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132011.png",
    "ringsdb_code": "132011"
  },
  {
    "name": "To me! O my kinsfolk!",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: If you control at least 1 Dwarf hero, put a Dwarf ally from your discard pile into play under your control. Put that ally on the bottom of your deck at the end of the phase.",
    "summary": "To me! O my kinsfolk! puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Recursion",
      "Ally Mustering"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132012.png",
    "ringsdb_code": "132012"
  },
  {
    "name": "The Lucky Number",
    "sphere": "Baggins",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a character in play (other than Bilbo Baggins). Add Bilbo Baggins' total [willpower], [attack], and [defense] to that character's [willpower], [attack], and [defense] respectively until the end of the phase.",
    "summary": "The Lucky Number boosts attack by +X for the phase, helping the team overcome high-defense enemies when focused fire alone isn't enough.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132013.png",
    "ringsdb_code": "132013"
  },
  {
    "name": "Great Yew Bow",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a hero with the printed Ranged keyword. Restricted.\nCombat Action: Choose an enemy in the staging area. Exhaust Great Yew Bow and attached hero to make a ranged attack against that enemy. Declare attached hero as the attacker. No other attackers can be declared for this attack.",
    "summary": "Great Yew Bow grants Ranged to the attached character, turning them into a ranged attacker who can assist any player in combat.",
    "tags": [
      "Ranged",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132014.png",
    "ringsdb_code": "132014"
  },
  {
    "name": "Black Arrow",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Limit 1 per deck. Attach to a hero with Ranged.\nResponse: After attached hero declares an attack, add Black Arrow to the victory display to give attached hero +5 [attack] for this attack.",
    "summary": "Black Arrow grants +5 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Ranged",
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132015.png",
    "ringsdb_code": "132015"
  },
  {
    "name": "Thrór's Key",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to a hero.\nResponse: After a location is added to the staging area, attach Thrór's Key to that location. While attached to a location, Thrór's Key gains: \"Treat attached location's printed text box as blank, except for traits.\"",
    "summary": "Thrór's Key is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Enemy Control",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132016.png",
    "ringsdb_code": "132016"
  },
  {
    "name": "Expert Treasure-hunter",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nResponse: After attached hero quests successfully, name a card type and discard the top card of your deck. If the discarded card is the named type, take it into your hand.",
    "summary": "Expert Treasure-hunter enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/132017.png",
    "ringsdb_code": "132017"
  },
  {
    "name": "King Under the Mountain",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Dwarf hero.\nAction: Exhaust King Under the Mountain to look at the top 2 cards of your deck. Add 1 to your hand and discard the other.",
    "summary": "King Under the Mountain lets the attached hero look at or manipulate the encounter deck, providing consistent scrying without spending event cards.",
    "tags": [
      "Scrying",
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/132018.png",
    "ringsdb_code": "132018"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit",
      "Ring-bearer"
    ],
    "text": "Response: Spend 1 [fellowship] resource and exhaust The One Ring to cancel the effect of an encounter card just revealed from the encounter deck. Shuffle that card back into the encounter deck and reveal another encounter card.",
    "summary": "Frodo Baggins triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141001.png",
    "ringsdb_code": "141001"
  },
  {
    "name": "Sam Gamgee",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After you engage an enemy with a higher engagement cost than your threat, ready Sam Gamgee. He gets +1 [willpower] +1 [attack] and +1 [defense] until the end of the round.",
    "summary": "Sam Gamgee readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141002.png",
    "ringsdb_code": "141002"
  },
  {
    "name": "Merry",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Hobbit"
    ],
    "text": "Merry gets +1 [attack] for each Hobbit hero you control.\nResponse: After Merry participates in an attack that destroys an enemy, ready another character that participated in that attack.",
    "summary": "Merry readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141003.png",
    "ringsdb_code": "141003"
  },
  {
    "name": "Pippin",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Hobbit"
    ],
    "text": "Each enemy in play gets +1 engagement cost for each Hobbit hero you control.\nResponse: After you engage an enemy with an engagement cost higher than your threat, draw a card.",
    "summary": "Pippin triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Card Draw (Passive)",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141004.png",
    "ringsdb_code": "141004"
  },
  {
    "name": "Fatty Bolger",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Fatty Bolger to choose an enemy in the staging area and raise your threat by that enemy's [threat]. Until the end of the phase, that enemy does not contribute its [threat]. (Limit once per round.)",
    "summary": "Fatty Bolger offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Threat Payment",
      "Staging Area Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141005.png",
    "ringsdb_code": "141005"
  },
  {
    "name": "Bill the Pony",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Pony"
    ],
    "text": "Cannot have attachments.\nLower the cost to play Bill the Pony by 2 if you control Sam Gamgee.\nEach Hobbit character gets +1 hit point.",
    "summary": "Bill the Pony provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount",
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141006.png",
    "ringsdb_code": "141006"
  },
  {
    "name": "Barliman Butterbur",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Bree"
    ],
    "text": "If each hero you control has the Hobbit trait, damage from undefended attacks against you may be assigned to Barliman Butterbur.",
    "summary": "Barliman Butterbur provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Damage Prevention"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141007.png",
    "ringsdb_code": "141007"
  },
  {
    "name": "Farmer Maggot",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Farmer Maggot enters play, deal 1 damage to an enemy engaged with you. (Deal 2 damage instead if that enemy's engagement cost is higher than your threat.)",
    "summary": "Farmer Maggot deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141008.png",
    "ringsdb_code": "141008"
  },
  {
    "name": "Halfling Determination",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Choose a Hobbit character. That character gets +2 [willpower], +2 [attack], and +2 [defense] until the end of the phase.",
    "summary": "Halfling Determination grants +2 attack and +2 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141009.png",
    "ringsdb_code": "141009"
  },
  {
    "name": "Smoke Rings",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Reduce your threat by 1 for each Pipe you control. Each hero with a Pipe attachment gets +1 [willpower] until the end of the phase.",
    "summary": "Smoke Rings gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Threat Reduction",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141010.png",
    "ringsdb_code": "141010"
  },
  {
    "name": "Take No Notice",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Lower the cost play Take No Notice by 1 for each Hobbit or Ranger hero you control.\nAction: Add 5 to each enemy's engagement cost until the end of the round.",
    "summary": "Take No Notice forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Resource Discount",
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141011.png",
    "ringsdb_code": "141011"
  },
  {
    "name": "Frodo's Intuition",
    "sphere": "Fellowship",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Each hero you control gets +1 [willpower] until the end of the round. Draw 1 card for each Hobbit hero you control.",
    "summary": "Frodo's Intuition gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Card Draw (Active)",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141012.png",
    "ringsdb_code": "141012"
  },
  {
    "name": "Hobbit Cloak",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Hobbit hero. Limit 1 per hero.\nAttached hero gets +2 [defense] while defending against an attack by an enemy with an engagement cost higher than your threat.",
    "summary": "Hobbit Cloak boosts defense by +2, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Engagement Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141013.png",
    "ringsdb_code": "141013"
  },
  {
    "name": "Dagger of Westernesse",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a hero.\nAttached hero gets +1 [attack] (+2 [attack] instead if attacking an enemy with an engagement cost higher than your threat).",
    "summary": "Dagger of Westernesse grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Engagement Control",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141014.png",
    "ringsdb_code": "141014"
  },
  {
    "name": "Hobbit Pipe",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Pipe"
    ],
    "text": "Attach to a Hobbit character. Limit 1 per character.\nResponse: After your threat is reduced by an event card effect, exhaust Hobbit Pipe to draw a card.",
    "summary": "Hobbit Pipe draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/141015.png",
    "ringsdb_code": "141015"
  },
  {
    "name": "Elf-stone",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to the active location. Attached location gets +1 quest point.\nResponse: After attached location leaves play as an explored location, the first player puts 1 ally into play from his hand.",
    "summary": "Elf-stone is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Location Control (Travel/Bypass)",
      "Attachment Synergy",
      "Ally Mustering",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/141016.png",
    "ringsdb_code": "141016"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit",
      "Ring-bearer"
    ],
    "text": "Response: After Frodo Baggins exhausts to defend an attack, exhaust The One Ring and spend 1 [fellowship] resource to target the attacking enemy. Then, this attack deals no damage and each player raises his threat by 2.",
    "summary": "Frodo Baggins triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Threat Payment",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142001.png",
    "ringsdb_code": "142001"
  },
  {
    "name": "Gandalf",
    "sphere": "Neutral",
    "type": "Hero",
    "cost_threat": "14",
    "traits": [
      "Istari"
    ],
    "text": "Play with the top card of your deck faceup. Once per phase, you may play the top card of your deck as if it was in your hand. When playing a card this way, Gandalf is considered to have the printed [leadership], [lore], [tactics], and [spirit] icons.",
    "summary": "Gandalf searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Resource Smoothing",
      "Player Deck Manipulation"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 3,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142002.png",
    "ringsdb_code": "142002"
  },
  {
    "name": "Galadriel",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "At the end of the round, discard Galadriel from play.\nResponse: After you play Galadriel from your hand, search the top 5 cards of your deck for an attachment of cost 3 or less and put it into play. Put the remaining cards back in any order.",
    "summary": "Galadriel searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 0,
    "defense": 0,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142003.png",
    "ringsdb_code": "142003"
  },
  {
    "name": "Boromir",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Boromir gets +2 [defense] while defending against an enemy with an engagement cost higher than your threat.\nResponse: After Boromir takes any amount of damage, ready him.",
    "summary": "Boromir readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142004.png",
    "ringsdb_code": "142004"
  },
  {
    "name": "Elrond",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor",
      "Healer"
    ],
    "text": "At the end of the round, discard Elrond from play.\nResponse: After Elrond enters play, choose one: heal all damage on a hero, discard a Condition attachment, or each player draws 1 card.",
    "summary": "Elrond heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Card Draw (Active)",
      "Healing",
      "Condition Removal",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142005.png",
    "ringsdb_code": "142005"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Bilbo Baggins enters play, search your deck for a Pipe attachment and add it to your hand. Shuffle your deck.",
    "summary": "Bilbo Baggins searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142006.png",
    "ringsdb_code": "142006"
  },
  {
    "name": "Flame of Anor",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Spell"
    ],
    "text": "Action: Add Flame of Anor to the victory display and discard the top card of your deck to ready an Istari character you control. That character gets +X [attack] until the end of the phase where X is the discarded card's cost.",
    "summary": "Flame of Anor readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Player Deck Manipulation",
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/142007.png",
    "ringsdb_code": "142007"
  },
  {
    "name": "Gandalf's Staff",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Artifact",
      "Item",
      "Staff"
    ],
    "text": "Attach to Gandalf. Restricted.\nAction: Exhaust Gandalf's Staff to (choose one): choose a player to draw 1 card, add 1 resource to a hero's resource pool, or discard a shadow card from a non-unique enemy.",
    "summary": "Gandalf's Staff generates 1 resources per exhaust, serving as the primary income attachment in Neutral decks.",
    "tags": [
      "Resource Generation",
      "Card Draw (Active)",
      "Shadow Cancellation",
      "Restricted",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142008.png",
    "ringsdb_code": "142008"
  },
  {
    "name": "Wizard Pipe",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Pipe"
    ],
    "text": "Attach to an Istari character. Limit 1 per character.\nAction: Exhaust Wizard Pipe to exchange a card in your hand with the top card of your deck.",
    "summary": "Wizard Pipe enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/142009.png",
    "ringsdb_code": "142009"
  },
  {
    "name": "Fellowship of the Ring",
    "sphere": "Fellowship",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Fellowship"
    ],
    "text": "Attach to the Ring-bearer.\nEach hero gets +1 [willpower].\nForced: After a character is destroyed, discard Fellowship of the Ring.",
    "summary": "Fellowship of the Ring gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Forced Effect"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/142010.png",
    "ringsdb_code": "142010"
  },
  {
    "name": "Aragorn",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Dúnedain",
      "Noble",
      "Ranger"
    ],
    "text": "The first player gains control of Aragorn. If Aragorn leaves play, the players lose the game.\nAction: Spend 2 resources from Aragorn's resource pool to ready a hero.",
    "summary": "Aragorn readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143001.png",
    "ringsdb_code": "143001"
  },
  {
    "name": "Théoden",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Rohan",
      "Noble",
      "Warrior"
    ],
    "text": "Sentinel.\nReduce the cost of the first Rohan ally you play from your hand each round by 1 (to a minimum of 0).",
    "summary": "Théoden has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Resource Discount",
      "Sentinel"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143002.png",
    "ringsdb_code": "143002"
  },
  {
    "name": "Treebeard",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "13",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments.\nAction: Deal 1 damage to Treebeard to give him +1 [willpower] and +1 [attack] until the end of the phase. (Limit 5 times per phase.)",
    "summary": "Treebeard deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Attack Boost",
      "Willpower Boost",
      "Direct Damage"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 3,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143003.png",
    "ringsdb_code": "143003"
  },
  {
    "name": "Gimli",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After an enemy is revealed from the encounter deck, ready Gimli.",
    "summary": "Gimli readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143004.png",
    "ringsdb_code": "143004"
  },
  {
    "name": "Legolas",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Silvan",
      "Warrior"
    ],
    "text": "Ranged.\nResponse: After Legolas participates in an attack that destroys an enemy, draw 1 card.",
    "summary": "Legolas draws 1 card automatically on a triggered condition, rewarding the right sequencing with passive hand advantage.",
    "tags": [
      "Card Draw (Passive)",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143005.png",
    "ringsdb_code": "143005"
  },
  {
    "name": "Quickbeam",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nResponse: After Quickbeam enters play, deal 1 damage to him to ready him.",
    "summary": "Quickbeam readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143006.png",
    "ringsdb_code": "143006"
  },
  {
    "name": "Háma",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Combat Action: Ready Háma. He gets +3 [defense] until the end of the phase. At the end of the phase, discard Háma. (Limit once per round.)",
    "summary": "Háma readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143007.png",
    "ringsdb_code": "143007"
  },
  {
    "name": "Arod",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a hero or Legolas.\nResponse: After attached character participates in an attack that destroys an enemy, exhaust Arod to place 1 progress token on any location.",
    "summary": "Arod places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143008.png",
    "ringsdb_code": "143008"
  },
  {
    "name": "Ent Draught",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Ent"
    ],
    "text": "Play only if you control at least 1 Ent character.\nAttach to a character. Limit 1 per character.\nAttached character gets +2 hit points.",
    "summary": "Ent Draught adds +2 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/143009.png",
    "ringsdb_code": "143009"
  },
  {
    "name": "Herugrim",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Rohan hero. Restricted.\nReduce the cost to play Herugrim on Théoden by 1.\nResponse: After attached hero is declared as an attacker, exhaust Herugrim to add attached hero's [willpower] to its [attack] for this attack.",
    "summary": "Herugrim reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount",
      "Attack Boost",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143010.png",
    "ringsdb_code": "143010"
  },
  {
    "name": "Entmoot",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Ent"
    ],
    "text": "Play only if you control at least 1 Ent character.\nAction: Search the top 5 cards of your deck for any number of Ent cards and add them to your hand. Shuffle the other cards back into your deck.",
    "summary": "Entmoot searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/143011.png",
    "ringsdb_code": "143011"
  },
  {
    "name": "Helm! Helm!",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only after the resolving enemy attacks step is complete.\nCombat Action: Exhaust and discard a Rohan ally you control to choose and discard a non-unique enemy engaged with you.",
    "summary": "Helm! Helm! prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/143012.png",
    "ringsdb_code": "143012"
  },
  {
    "name": "The Three Hunters",
    "sphere": "Fellowship",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Play only if you control [fellowship] Aragorn.\nQuest Action: Choose 3 heroes committed to the quest. Ready those heroes. Until the end of the round, each of the chosen heroes gets +1 [willpower], +1 [attack], and +1 [defense].",
    "summary": "The Three Hunters grants +1 attack and +1 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/143013.png",
    "ringsdb_code": "143013"
  },
  {
    "name": "Shadowfax",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Mount",
      "Mearas"
    ],
    "text": "Attach to Gandalf.\nGandalf gains ranged and sentinel.\nAction: Exhaust Shadowfax to ready Gandalf.",
    "summary": "Shadowfax allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Ranged"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/143014.png",
    "ringsdb_code": "143014"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit",
      "Ring-bearer"
    ],
    "text": "Action: Spend 1 [fellowship] resource and exhaust The One Ring to give Frodo Baggins +2 [willpower] and +2 [attack] until the end of the round.",
    "summary": "Frodo Baggins can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Willpower Boost"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144001.png",
    "ringsdb_code": "144001"
  },
  {
    "name": "Faramir",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Gondor",
      "Noble",
      "Ranger"
    ],
    "text": "Ranged.\nResponse: After you engage an enemy, ready an ally you control. (Limit once per phase.)",
    "summary": "Faramir readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Ranged",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144002.png",
    "ringsdb_code": "144002"
  },
  {
    "name": "Damrod",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Reduce the cost of the first Trap card you play each round by 1 (to a minimum of 0).\nResponse: After a Trap card you control is attached to an enemy, draw 1 card.",
    "summary": "Damrod synergizes with Trap attachments, reducing staging threat and readying or healing whenever a Trap snares an enemy.",
    "tags": [
      "Resource Discount",
      "Card Draw (Passive)",
      "Traps",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144003.png",
    "ringsdb_code": "144003"
  },
  {
    "name": "Anborn",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After an enemy is added to the staging area, exhaust Anborn to give that enemy +5 engagement cost until the end of the round. Then, deal 1 damage to that enemy.",
    "summary": "Anborn deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144004.png",
    "ringsdb_code": "144004"
  },
  {
    "name": "Mablung",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After Mablung enters play, choose an enemy to get +5 engagement cost until the end of the round. Then, you may engage that enemy, or return it to the staging area.",
    "summary": "Mablung manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144005.png",
    "ringsdb_code": "144005"
  },
  {
    "name": "Skinbark",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nWhile Skinbark is attacking alone against an Orc enemy, that enemy does not count its [defense].",
    "summary": "Skinbark provides +X attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 4,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144006.png",
    "ringsdb_code": "144006"
  },
  {
    "name": "Gamling",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After a Rohan ally you control is discarded from play, exhaust Gamling to return that ally to your hand.",
    "summary": "Gamling creates value when allies enter or leave play, enabling Sneak Attack loops or triggering repeated enter-play bonuses.",
    "tags": [
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144007.png",
    "ringsdb_code": "144007"
  },
  {
    "name": "Staff of Lebethron",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Gondor or Hobbit hero. Restricted.\nResponse: After attached hero exhausts to defend an attack from an enemy with engagement cost higher than your threat, exhaust Staff of Lebethron to discard a shadow card from that enemy.",
    "summary": "Staff of Lebethron is a support attachment that enhances the attached character's role in Leadership builds.",
    "tags": [
      "Shadow Cancellation",
      "Engagement Control",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/144008.png",
    "ringsdb_code": "144008"
  },
  {
    "name": "Ambush",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Condition",
      "Trap"
    ],
    "text": "Play Ambush into the staging area unattached. If unattached, attach Ambush to the next eligible enemy that enters the staging area.\nCombat Action: The engaged player discards Ambush to declare an attack against the attached enemy.",
    "summary": "Ambush is a support attachment that enhances the attached character's role in Lore builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/144009.png",
    "ringsdb_code": "144009"
  },
  {
    "name": "Snowmane",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Rohan hero. Restricted.\nIf attached hero is Theoden, Snowmane loses the restricted keyword.\nResponse: After attached hero quests successfully, ready attached hero.",
    "summary": "Snowmane allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/144010.png",
    "ringsdb_code": "144010"
  },
  {
    "name": "Taste it Again!",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a hero you control defends an attack made by an enemy with engagement cost higher than your threat, ready that hero. Until the end of the phase, that hero gets +2 [attack] while attacking that enemy.",
    "summary": "Taste it Again! readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/144011.png",
    "ringsdb_code": "144011"
  },
  {
    "name": "In the Shadows",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Lower the cost to play In the Shadows by 1 for each Hobbit or Ranger hero you control.\nCombat Action: Each enemy engaged with you with engagement cost higher than your threat gets -1 [attack] and -1 [defense] until the end of the phase.",
    "summary": "In the Shadows forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Resource Discount",
      "Engagement Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/144012.png",
    "ringsdb_code": "144012"
  },
  {
    "name": "Speak Your Promise!",
    "sphere": "Fellowship",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Ready the Ring-bearer to choose an enemy engaged with you. If the Ring-bearer's [willpower] is greater than that enemy’s [threat], lower that enemy's [attack] and [defense] by the difference until the end of the phase.",
    "summary": "Speak Your Promise! readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/144013.png",
    "ringsdb_code": "144013"
  },
  {
    "name": "Aragorn",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Dúnedain",
      "Noble",
      "Ranger"
    ],
    "text": "The first player gains control of Aragorn. If Aragorn leaves play,the players lose the game.\nWhile Aragorn has an Artifact attached, he gains sentinel and does not exhaust to quest.",
    "summary": "Aragorn quests without exhausting, leaving them free for combat while still contributing the full questing round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Sentinel",
      "Attachment Synergy"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145001.png",
    "ringsdb_code": "145001"
  },
  {
    "name": "Éowyn",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Rohan",
      "Noble"
    ],
    "text": "Setup: Reduce your threat by 3.\nAction: Raise your threat by 3 to ready Éowyn. She gets +9 [attack] until the end of the phase. (Limit once per game for the group.)",
    "summary": "Éowyn raises threat as a cost to ready, delivering extra attacks or defenses each round at the price of accelerating your threat clock.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Reduction",
      "Threat Payment",
      "Attack Boost"
    ],
    "willpower": 4,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145002.png",
    "ringsdb_code": "145002"
  },
  {
    "name": "Beregond",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After Beregond defends an attack and takes no damage, reduce the defending player's threat by 1. (Limit once per round.)",
    "summary": "Beregond reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 4,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145003.png",
    "ringsdb_code": "145003"
  },
  {
    "name": "Grimbold",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Combat Action: Discard Grimbold to choose an enemy engaged with a player. That enemy cannot attack that player this phase.",
    "summary": "Grimbold controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145004.png",
    "ringsdb_code": "145004"
  },
  {
    "name": "Prince Imrahil",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "While there is a hero in your discard pile, Prince Imrahil loses the ally card type and gains the hero card type.",
    "summary": "Prince Imrahil provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145005.png",
    "ringsdb_code": "145005"
  },
  {
    "name": "Halbarad",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Reduce the cost to play Halbarad by 1 for each enemy engaged with you.\nEach enemy engaged with you gets +10 engagement cost.",
    "summary": "Halbarad manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Resource Discount",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145006.png",
    "ringsdb_code": "145006"
  },
  {
    "name": "Ghân-buri-Ghân",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Wose"
    ],
    "text": "X is the [threat] of the active location.\nTravel Action: Discard Ghân-buri-Ghân to travel to a location without resolving its Travel effect.",
    "summary": "Ghân-buri-Ghân provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Location Control (Travel/Bypass)"
    ],
    "willpower": null,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145007.png",
    "ringsdb_code": "145007"
  },
  {
    "name": "Sterner than Steel",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: Exhaust a Weapon or Armor card attached to the defending character to cancel a shadow effect just triggered during combat.",
    "summary": "Sterner than Steel cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/145008.png",
    "ringsdb_code": "145008"
  },
  {
    "name": "Desperate Defense",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a sentinel character is declared as a defender, it gets +2 [defense] for this attack. If this attack deals no damage, ready the defending character.",
    "summary": "Desperate Defense readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/145009.png",
    "ringsdb_code": "145009"
  },
  {
    "name": "Golden Shield",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Rohan hero. Restricted.\nResponse: After attached hero is declared as a defender, exhaust Golden Shield to add attached hero's [willpower] to it's [defense] for this attack.",
    "summary": "Golden Shield is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145010.png",
    "ringsdb_code": "145010"
  },
  {
    "name": "Livery of the Tower",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Gondor hero. Restricted.\nResponse: Spend X resources from attached hero's pool to cancel X damage just dealt to attached hero.",
    "summary": "Livery of the Tower is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Damage Prevention",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/145011.png",
    "ringsdb_code": "145011"
  },
  {
    "name": "Roheryn",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Dúnedain hero.\nIf the attached hero is Aragorn, he gains a [tactics] icon.\nResponse: After you optionally engage an enemy, exhaust Roheryn and attached hero to declare attached hero as an attacker (and resolve its attack) against that enemy.",
    "summary": "Roheryn grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145012.png",
    "ringsdb_code": "145012"
  },
  {
    "name": "Banner of Elendil",
    "sphere": "Fellowship",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to Aragorn.\nWhile Aragorn is commited to the quest, each other questing character you control gets +1 [willpower].\nWhile Aragorn is attacking, each other attacking character you control gets +1 [attack].",
    "summary": "Banner of Elendil grants +1 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/145013.png",
    "ringsdb_code": "145013"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit",
      "Ring-bearer"
    ],
    "text": "Planning Action: Exhaust The One Ring to add 1 resource to a hero's pool.",
    "summary": "Frodo Baggins generates 1 resource per activation, making them the premier economic engine for Fellowship decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146001.png",
    "ringsdb_code": "146001"
  },
  {
    "name": "Aragorn",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Dunedain",
      "Gondor",
      "Noble",
      "Warrior"
    ],
    "text": "Sentinel. The first player gains control of Aragorn.\nAction: Spend 1 resource from Aragorn's pool to ready him. (Limit once per phase.)\nIf Aragorn leaves play, the players lose the game.",
    "summary": "Aragorn readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146002.png",
    "ringsdb_code": "146002"
  },
  {
    "name": "Éomer",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Rohan",
      "Noble",
      "Warrior"
    ],
    "text": "Response: After Éomer commits to the quest, spend 1 resource from his resource pool to immediately declare him as an attacker (and resolve his attack) against an enemy in the staging area.",
    "summary": "Éomer readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Staging Area Attack",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146003.png",
    "ringsdb_code": "146003"
  },
  {
    "name": "Tom Cotton",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Hobbit"
    ],
    "text": "While you are engaged with an enemy with an engagement cost higher than your threat, the first Hobbit ally you play each round does not require a resource match.\nResponse: After a Hobbit ally enters play, it gets +2 [attack] until the end of the round.",
    "summary": "Tom Cotton can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Resource Smoothing",
      "Attack Boost",
      "Engagement Control",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146004.png",
    "ringsdb_code": "146004"
  },
  {
    "name": "Rosie Cotton",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Rosie Cotton to choose a Hobbit hero and an attribute ([willpower], [attack], [defense]). Add Rosie Cotton's [willpower] to that hero's chosen attribute until the end of the phase. (Limit once per phase.)",
    "summary": "Rosie Cotton provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146005.png",
    "ringsdb_code": "146005"
  },
  {
    "name": "Elfhelm",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Action: Spend 1 resource from a Rohan hero's resource pool to put Elfhelm into play from your hand under your control. At the end of the phase, discard Elfhelm if he is still in play.",
    "summary": "Elfhelm puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146006.png",
    "ringsdb_code": "146006"
  },
  {
    "name": "Elladan",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor",
      "Ranger"
    ],
    "text": "While Elrohir is in play, Elladan gets +2 [attack].\nAfter you optionally engage an Orc enemy, ready Elladan.",
    "summary": "Elladan readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146007.png",
    "ringsdb_code": "146007"
  },
  {
    "name": "Elrohir",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor",
      "Ranger"
    ],
    "text": "While Elladan is in play, Elrohir gets +2 [defense].\nAfter you optionally engage an Orc enemy, ready Elrohir.",
    "summary": "Elrohir readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146008.png",
    "ringsdb_code": "146008"
  },
  {
    "name": "Orc Disguise",
    "sphere": "Fellowship",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to the Ring-bearer. Limit one per hero.\nWhile an Orc is making an enagement check with you, it gets +5 engagement cost.\nResponse: After an Orc engages you, discard Orc Disguise. . Until the end of the round, that enemy cannot attack you.",
    "summary": "Orc Disguise is a support attachment that enhances the attached character's role in Fellowship builds.",
    "tags": [
      "Enemy Control",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/146009.png",
    "ringsdb_code": "146009"
  },
  {
    "name": "Captains of the West",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Quest Action: Until the end of the phase, each Noble hero gets +1 [willpower] and does not exhaust to commit to the quest.",
    "summary": "Captains of the West gives +1 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/146010.png",
    "ringsdb_code": "146010"
  },
  {
    "name": "Gúthwinë",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Rohan hero. Restricted.\nResponse: After attached hero is declared as an attacker, exhaust Gúthwinë to give that hero +2 [attack] for this attack. If this attack destroys an enemy, return a Rohan ally from your discard pile to your hand.",
    "summary": "Gúthwinë grants +2 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Recursion",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/146011.png",
    "ringsdb_code": "146011"
  },
  {
    "name": "Friend of Friends",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a Hobbit hero. Limit 2 copies of Friend of Friends in play.\nWhile another hero has Friend of Friends attached, attached hero gets +1 [willpower], +1 [attack], +1 [defense] and +1 hit point.",
    "summary": "Friend of Friends provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/146012.png",
    "ringsdb_code": "146012"
  },
  {
    "name": "Raise the Shire",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After you engage an enemy, search the top 5 cards of your deck for a Hobbit ally and put it into play (search you entire deck instead if that enemy's engagement cost is higher than your threat). Shuffle your deck. At the end of the round, if that ally is still in play, return it to your hand.",
    "summary": "Raise the Shire forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Engagement Control",
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/146013.png",
    "ringsdb_code": "146013"
  },
  {
    "name": "Gimli",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Dwarf",
      "Noble",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After Gimli is declared as a defender, spend 1 resource from his pool to ready another hero. If that hero is Legolas, he gets +1[attack] until the end of the phase. (Limit once per phase.)",
    "summary": "Gimli readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/16001.png",
    "ringsdb_code": "16001"
  },
  {
    "name": "Legolas",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Silvan",
      "Noble",
      "Scout"
    ],
    "text": "Ranged.\nResponse: After Legolas commits to a quest, discard a card from your hand to ready another hero. If that hero is Gimli, he gets +1[willpower] until the end of the phase. (Limit once per phase.)",
    "summary": "Legolas readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/16002.png",
    "ringsdb_code": "16002"
  },
  {
    "name": "Greenwood Archer",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Silvan"
    ],
    "text": "Ranged.\nResponse: After Greenwood Archer enters play, ready a hero.",
    "summary": "Greenwood Archer readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16003.png",
    "ringsdb_code": "16003"
  },
  {
    "name": "Halfling Bounder",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "While there is a side quest in the victory display, Halfling Bounder gains: \"Response: Discard Halfling Bounder to cancel the 'when revealed' effects of an encounter card that was just revealed from the encounter deck.\"",
    "summary": "Halfling Bounder cancels a treachery's When Revealed effect, providing reusable encounter insurance for decks that can't rely on Lore cancellation.",
    "tags": [
      "Treachery Cancellation",
      "Encounter Deck Manipulation",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16005.png",
    "ringsdb_code": "16005"
  },
  {
    "name": "Vigilant Dúnadan",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "While there is a side quest in the victory display, Vigilant Dúnadan does not exhaust to defend.",
    "summary": "Vigilant Dúnadan provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16006.png",
    "ringsdb_code": "16006"
  },
  {
    "name": "Unlikely Friendship",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Play only if you control a unique character with the Silvan trait and another unique character with the Dwarf trait.\nAction: Draw 1 card and add 1 resource to the resource pool of a hero you control.",
    "summary": "Unlikely Friendship generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Card Draw (Active)",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16007.png",
    "ringsdb_code": "16007"
  },
  {
    "name": "Well Warned",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Play only if you control a unique character with the Noble trait and another unique character with the Scout trait.\nResponse: After a player engages an enemy, reduce his threat by X, where X is that enemy's printed [threat].",
    "summary": "Well Warned forces or manipulates enemy engagements, letting you control which enemies you face and set up optimal combat pairings.",
    "tags": [
      "Threat Reduction",
      "Engagement Control",
      "Unique Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16008.png",
    "ringsdb_code": "16008"
  },
  {
    "name": "Dour Handed",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Deal X damage to an enemy engaged with you. X is the number of side quests in the victory display.",
    "summary": "Dour Handed deals X damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16009.png",
    "ringsdb_code": "16009"
  },
  {
    "name": "Dwarven Shield",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Dwarf hero. Restricted.\nAttached hero gets +1[defense].\nResponse: After attached hero takes damage from an enemy attack, exhaust Dwarven Shield to add 1 resource to attached hero's pool.",
    "summary": "Dwarven Shield generates 1 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16010.png",
    "ringsdb_code": "16010"
  },
  {
    "name": "Mirkwood Long-knife",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Silvan hero. Restricted.\nAttached hero gets +1[willpower] and +1[attack].",
    "summary": "Mirkwood Long-knife is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16011.png",
    "ringsdb_code": "16011"
  },
  {
    "name": "The Road Goes Ever On",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Attach to a quest card in play.\nResponse: When attached quest is defeated, the first player chooses a player. That player searches his deck for a side quest, adds it to his hand, and shuffles his deck.",
    "summary": "The Road Goes Ever On enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation",
      "Side Quest Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16012.png",
    "ringsdb_code": "16012"
  },
  {
    "name": "The Storm Comes",
    "sphere": "Neutral",
    "type": "Player Side Quest",
    "cost_threat": "0",
    "traits": [],
    "text": "Limit 1 copy of The Storm Comes in the victory display.\nWhile this quest is in the victory display, the first ally played by each player each round does not require a resource match.",
    "summary": "The Storm Comes provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Resource Smoothing",
      "Victory Display Synergy",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16013.png",
    "ringsdb_code": "16013"
  },
  {
    "name": "Kahliel",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Harad",
      "Noble"
    ],
    "text": "You may use resources from Kahliel's resource pool to pay for Harad ally cards of any sphere.\nAction: Discard a Harad ally card from your hand to ready a Harad character in play. (Limit once per phase.)",
    "summary": "Kahliel readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17001.png",
    "ringsdb_code": "17001"
  },
  {
    "name": "Prepare for Battle",
    "sphere": "Leadership",
    "type": "Player Side Quest",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 1 copy of Prepare for Battle in the victory display.\nWhile this quest is in the victory display, the first player draws an additional card during the resource phase.",
    "summary": "Prepare for Battle provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17003.png",
    "ringsdb_code": "17003"
  },
  {
    "name": "Yazan",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Harad",
      "Ranger"
    ],
    "text": "Ranged.\nResponse: After Yazan is declared as an attacker, deal 1 damage to a non-unique enemy in play. (Limit once per phase.)",
    "summary": "Yazan has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17004.png",
    "ringsdb_code": "17004"
  },
  {
    "name": "Jubayr",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Harad",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After Jubayr exhausts to defend an attack, discard 1 facedown shadow card from a non-unique enemy. (Limit once per phase.)",
    "summary": "Jubayr cancels or discards shadow cards, preventing dangerous shadow effects that could otherwise wipe defenders or spike enemy attack.",
    "tags": [
      "Sentinel",
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17006.png",
    "ringsdb_code": "17006"
  },
  {
    "name": "Dwarf Pipe",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Pipe"
    ],
    "text": "Attach to a Dwarf character. Limit 1 per character.\nResponse: After a card is discarded from your deck, exhaust Dwarf Pipe to place that card on the bottom of your deck.",
    "summary": "Dwarf Pipe is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17007.png",
    "ringsdb_code": "17007"
  },
  {
    "name": "Firyal",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Harad",
      "Scout"
    ],
    "text": "Response: After Firyal commits to the quest, look at the top card of the encounter deck. Then, you may discard the looked at card.",
    "summary": "Firyal lets you look at and manipulate the top of the encounter deck, converting blind reveal into calculated risk management.",
    "tags": [
      "Scrying",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17008.png",
    "ringsdb_code": "17008"
  },
  {
    "name": "Coney in a Trap",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if you control a unique character with the Ranger trait and another unique character with the Warrior trait.\nResponse: After you engage an enemy, that enemy cannot attack you until the end of the round.",
    "summary": "Coney in a Trap prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Engagement Control",
      "Unique Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17009.png",
    "ringsdb_code": "17009"
  },
  {
    "name": "Kahliel's Headdress",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to Kahliel. Restricted.\nEach Harad character gets +1[willpower].\nRefresh Action: Exhaust Kahliel's Headdress to shuffle the topmost Harad ally in your discard pile into your deck.",
    "summary": "Kahliel's Headdress is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17010.png",
    "ringsdb_code": "17010"
  },
  {
    "name": "Thurindir",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Dunedain",
      "Ranger"
    ],
    "text": "Thurindir gets +1 [willpower] for each side quest in the victory display.\nSetup: Search your deck for a side quest and add it to your hand. Shuffle your deck.",
    "summary": "Thurindir can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost",
      "Player Deck Manipulation",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17028.png",
    "ringsdb_code": "17028"
  },
  {
    "name": "Kahliel's Tribesman",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Harad"
    ],
    "text": "Action: Exhaust Kahliel's Tribesman to choose another Harad character. That character gets +1 [willpower], +1 [attack], and +1 [defense] until the end of the phase.",
    "summary": "Kahliel's Tribesman boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17029.png",
    "ringsdb_code": "17029"
  },
  {
    "name": "Steed of the North",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Dunedain or Ranger hero. Restricted.\nResponse: After you engage an enemy, exhaust Steed of the North to ready attached hero.",
    "summary": "Steed of the North allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Engagement Control",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17030.png",
    "ringsdb_code": "17030"
  },
  {
    "name": "Mighty Warrior",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nAttached hero gains the Warrior trait.\nResponse: After you play Mighty Warrior from your hand, draw a card.",
    "summary": "Mighty Warrior draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17031.png",
    "ringsdb_code": "17031"
  },
  {
    "name": "Proud Hunters",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Play only if you control a unique character with the Noble trait and another unique character with the Ranger trait.\nResponse: After a hero you control participates in an attack that destroys an enemy, add X resources to that hero’s pool. X is the just destroyed enemy’s printed [threat].",
    "summary": "Proud Hunters provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Unique Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17032.png",
    "ringsdb_code": "17032"
  },
  {
    "name": "Dunedain Pathfinder",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "0",
    "traits": [
      "Dunedain",
      "Scout"
    ],
    "text": "Forced: After this ally enters play, search the top 5 cards of the encounter deck for a non-unique location and add it to the staging area. If no location enters play by this effect, discard Dunedain Pathfinder. Shuffle the encounter deck.",
    "summary": "Dunedain Pathfinder creates value when allies enter or leave play, enabling Sneak Attack loops or triggering repeated enter-play bonuses.",
    "tags": [
      "Encounter Deck Manipulation",
      "Bounce / Leaves Play Synergy",
      "Forced Effect"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17033.png",
    "ringsdb_code": "17033"
  },
  {
    "name": "Backtrack",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if the main quest has no keywords.\nAction: Remove X progress from the main quest to place X progress on a location in the staging area.",
    "summary": "Backtrack places X progress on locations, helping to escape location lock or clear locations that are throttling quest progress.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17034.png",
    "ringsdb_code": "17034"
  },
  {
    "name": "Eryn Galen Settler",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Woodman"
    ],
    "text": "Response: When the active location leaves play as an explored location, discard Eryn Galen Settler to discard a location in the staging with the same title as the just explored location.",
    "summary": "Eryn Galen Settler provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Location Control (Travel/Bypass)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17035.png",
    "ringsdb_code": "17035"
  },
  {
    "name": "Explore Secret Ways",
    "sphere": "Lore",
    "type": "Player Side Quest",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 1 copy of Explore Secret Ways in the victory display.\nWhile this side quest is in the victory display, each location in the staging area with the same title as the active location does not contribute its [threat] to the total [threat] of the staging area.",
    "summary": "Explore Secret Ways provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Staging Area Control",
      "Location Control (Travel/Bypass)",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17036.png",
    "ringsdb_code": "17036"
  },
  {
    "name": "Steward of Orthanc",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Isengard"
    ],
    "text": "Response: When you play an event, give it Doomed 1 to draw a card. You cannot trigger this ability if you have already triggered the ability of a Steward of Orthanc this round.",
    "summary": "Steward of Orthanc draws 1 card automatically on a triggered condition, rewarding the right sequencing with passive hand advantage.",
    "tags": [
      "Card Draw (Passive)",
      "Doomed",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17037.png",
    "ringsdb_code": "17037"
  },
  {
    "name": "Haradrim Spear",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted. Attach to a Haradrim character.\nAttached character gets +1 [attack].\nResponse: After attached character is declared as an attacker, it gets +3 [attack] for this attack. After this attack resolves, discard Haradrim Spear.",
    "summary": "Haradrim Spear grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17056.png",
    "ringsdb_code": "17056"
  },
  {
    "name": "Hunting Party",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if you control a unique character with the Warrior trait and another unique character with the Scout trait.\nResponse: After the players have committed characters to the quest, discard a non-unique enemy in the staging area. Then, reveal an encounter card.",
    "summary": "Hunting Party prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Unique Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17057.png",
    "ringsdb_code": "17057"
  },
  {
    "name": "The Red Arrow",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Limit 1 per deck. Attach to a Gondor hero.\nAttached hero gets +1 [willpower].\nValour Response: After attached hero quests successfully, add The Red Arrow to the victory display to search the top 5 cards of your deck for an ally and put it into play.",
    "summary": "The Red Arrow gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Victory Display Synergy",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17058.png",
    "ringsdb_code": "17058"
  },
  {
    "name": "Keep Watch",
    "sphere": "Tactics",
    "type": "Player Side Quest",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 1 copy of Keep Watch in the victory display.\nWhile Keep Watch is in the victory display, each non-unique enemy engaged with a player gets -1 [attack].",
    "summary": "Keep Watch provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17059.png",
    "ringsdb_code": "17059"
  },
  {
    "name": "Rider of Rohan",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Scout"
    ],
    "text": "While a side quest is in the victory display, Rider of Rohan does not exaust to quest.",
    "summary": "Rider of Rohan provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17060.png",
    "ringsdb_code": "17060"
  },
  {
    "name": "Fireside Song",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Song"
    ],
    "text": "Attach to a Hobbit hero. Limit 1 per hero. Attached hero gets +1 [willpower] for each Song attached to it.",
    "summary": "Fireside Song gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17061.png",
    "ringsdb_code": "17061"
  },
  {
    "name": "Dunedain Lookout",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dunedain"
    ],
    "text": "Response: Discard Dúnedain Lookout to cancel the 'When Revealed' effects of an enemy just revealed from the encounter deck.",
    "summary": "Dunedain Lookout cancels a treachery's When Revealed effect, providing reusable encounter insurance for decks that can't rely on Lore cancellation.",
    "tags": [
      "Treachery Cancellation",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17062.png",
    "ringsdb_code": "17062"
  },
  {
    "name": "Doughty Ranger",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a hero. Limit 1 per hero. Attached hero gains the Ranger trait.\nResponse: After you play Doughty Ranger from your hand, draw a card.",
    "summary": "Doughty Ranger draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17063.png",
    "ringsdb_code": "17063"
  },
  {
    "name": "The Free Peoples",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Play only if the characters you control have a total of at least 9 different Traits between them.\nAction: Ready each character in play. Until the end of the phase, each character you control gets +1 [willpower].",
    "summary": "The Free Peoples readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17064.png",
    "ringsdb_code": "17064"
  },
  {
    "name": "Fastred",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After Fastred defends an enemy attack, return that enemy to the staging area to reduce your threat by 2. (Limit once per phase.)",
    "summary": "Fastred reduces threat by 2, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Staging Area Attack",
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17081.png",
    "ringsdb_code": "17081"
  },
  {
    "name": "Song of Hope",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nAction: Spend 1 resource from attached hero’s pool to give attached hero +1 [willpower] until the end of the phase. (Limit 3 times per phase.)",
    "summary": "Song of Hope gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17082.png",
    "ringsdb_code": "17082"
  },
  {
    "name": "Burst into Song",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Action: Ready each hero with a Song attachment.",
    "summary": "Burst into Song readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17083.png",
    "ringsdb_code": "17083"
  },
  {
    "name": "Defender of Cair Andros",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Defender of Cair Andros gets +X [Defense], where X is the tens digit of your threat. (Limit +4 [Defense].)\nValour Response: After Defender of Cair Andros is declared as a defender, deal 1 damage to the attacking enemy.",
    "summary": "Defender of Cair Andros deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Defense Boost",
      "Direct Damage",
      "Valour"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17084.png",
    "ringsdb_code": "17084"
  },
  {
    "name": "Oath of Eorl",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Play only if you control a unique character with the Rohan trait and another unique character with the Gondor trait.\nResponse: At the beginning of the combat phase, you resolve the step in which you attack enemies before resolving enemy attacks this phase. (Each other player resolves the combat phase as normal after you resolve your attacks.)",
    "summary": "Oath of Eorl provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Unique Synergy",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17085.png",
    "ringsdb_code": "17085"
  },
  {
    "name": "Fearless Scout",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a hero. Limit 1 per hero. Attached hero gains the Scout trait.\nResponse: After you play Fearless Scout from your hand, draw a card.",
    "summary": "Fearless Scout draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17086.png",
    "ringsdb_code": "17086"
  },
  {
    "name": "Rally the West",
    "sphere": "Spirit",
    "type": "Player Side Quest",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 1 copy of Rally the West in the victory display. While this side quest is in the victory display, each hero gets +1 [willpower].",
    "summary": "Rally the West provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Willpower Boost",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17087.png",
    "ringsdb_code": "17087"
  },
  {
    "name": "Dúnedain Pipe",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Pipe"
    ],
    "text": "Attach to a Dúnedain character. Limit 1 per character.\nAction: Exhaust Dúnedain Pipe and place a card from your hand on the bottom of your deck to draw a card.",
    "summary": "Dúnedain Pipe draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17088.png",
    "ringsdb_code": "17088"
  },
  {
    "name": "Old Toby",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [
      "Pipeweed"
    ],
    "text": "Action: Draw 1 card for each Pipe you control. Heal 1 damage from each hero with a Pipe attachment.",
    "summary": "Old Toby draws 1 card immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17089.png",
    "ringsdb_code": "17089"
  },
  {
    "name": "Southron Refugee",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Harad"
    ],
    "text": "Action: Exhaust Southron Refugee to reduce the cost of the next Harad ally you play this phase by 1.",
    "summary": "Southron Refugee provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17090.png",
    "ringsdb_code": "17090"
  },
  {
    "name": "Folco Boffin",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Hobbit"
    ],
    "text": "Folco Boffin gets -1 threat cost for each Hobbit hero you control.\nAction: Discard Folco Boffin to reduce your threat by 7. (Limit once per game.)",
    "summary": "Folco Boffin reduces threat by 7, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17109.png",
    "ringsdb_code": "17109"
  },
  {
    "name": "Knight of Dale",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dale",
      "Warrior"
    ],
    "text": "Action: Spend 1 [leadership] resource to ready Knight of Dale. (Limit once per round.)\nValour Action: Ready Knight of Dale. (Limit once per round.)",
    "summary": "Knight of Dale readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Sphere Synergy",
      "Valour"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17110.png",
    "ringsdb_code": "17110"
  },
  {
    "name": "Diligent Noble",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nAttached hero gains the Noble trait.\nResponse: After you play Diligent Noble from your hand, draw a card.",
    "summary": "Diligent Noble draws 1 card automatically on a trigger, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Passive)",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17111.png",
    "ringsdb_code": "17111"
  },
  {
    "name": "Riddermark Knight",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After Riddermark Knight is declared as an attacker, it gets +2 [attack] for this attack. At the end of this attack, discard Riddermark Knight.",
    "summary": "Riddermark Knight provides +2 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17112.png",
    "ringsdb_code": "17112"
  },
  {
    "name": "Fierce Defense",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Combat Action: Deal 3 damage to a non-unique enemy engaged with you.\nValour Action: Discard a non-unique enemy engaged with you.",
    "summary": "Fierce Defense deals 3 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Enemy Control",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17113.png",
    "ringsdb_code": "17113"
  },
  {
    "name": "Eregion Survivor",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor"
    ],
    "text": "While you have no cards in your hand, Eregion Survivor gets +1 [willpower], +1 [attack], and +1 [defense].",
    "summary": "Eregion Survivor boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17114.png",
    "ringsdb_code": "17114"
  },
  {
    "name": "Heirs of Earendil",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if you control a unique character with the Noldor trait and another unique character with the Dúnedain trait.\nAction: Choose a non-unique location in the staging area and raise your threat by X to discard it. X is the chosen location's printed quest points.",
    "summary": "Heirs of Earendil provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Threat Payment",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17115.png",
    "ringsdb_code": "17115"
  },
  {
    "name": "Leaflock",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments.\nEnters play exhausted.\nLeaflock gets +1 [willpower] for each damaged Ent character you control. (Limit +4 [willpower].)",
    "summary": "Leaflock boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17116.png",
    "ringsdb_code": "17116"
  },
  {
    "name": "Legacy Blade",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a hero. Restricted.\nAttached hero gets +1 [attack] for each side quest in the victory display. (Limit +3 [attack].)",
    "summary": "Legacy Blade grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Victory Display Synergy",
      "Side Quest Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17117.png",
    "ringsdb_code": "17117"
  },
  {
    "name": "Open the Armory",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Search the top 10 cards of your deck for a Weapon or Armor attachment and add it to your hand. Shuffle your deck.\nValour Action: Search the top 5 cards of your deck for a Weapon or Armor attachment and put it into play. Shuffle your deck.",
    "summary": "Open the Armory searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17118.png",
    "ringsdb_code": "17118"
  },
  {
    "name": "Quickbeam",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments.\nAction: Deal 2 damage to Quickbeam to ready him. (Limit once per phase.)",
    "summary": "Quickbeam readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Direct Damage"
    ],
    "willpower": 2,
    "attack": 4,
    "defense": 1,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17135.png",
    "ringsdb_code": "17135"
  },
  {
    "name": "Halfast Gamgee",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Hobbit"
    ],
    "text": "Reduce the cost to play Halfast Gamgee by 1 for each side quest in the victory display.\nResponse: After Halfast Gamgee enters play, add 1 resource to a hero's resource pool.",
    "summary": "Halfast Gamgee generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Victory Display Synergy",
      "Side Quest Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17136.png",
    "ringsdb_code": "17136"
  },
  {
    "name": "Bulwark of the West",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Discard an ally you control to choose and discard a Condition attachment.",
    "summary": "Bulwark of the West provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Condition Removal"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17137.png",
    "ringsdb_code": "17137"
  },
  {
    "name": "Beorning Guardian",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Beorning"
    ],
    "text": "Response: After Beorning Guardian participates in an attack that destroys an enemy, discard Beorning Guardian to place X progress on a location, where X is the destroyed enemy's printed [threat].",
    "summary": "Beorning Guardian places 1 progress token on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17138.png",
    "ringsdb_code": "17138"
  },
  {
    "name": "Followed",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition",
      "Trap"
    ],
    "text": "Play into your play area unattached.\nWhile unattached, attach to the next eligible enemy that engages you.\nWhile attached enemy is engaged with you, reduce the total [threat] in the staging area by X, where X is attached enemy's printed [threat].",
    "summary": "Followed reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Staging Area Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17139.png",
    "ringsdb_code": "17139"
  },
  {
    "name": "Flight to the Sea",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if you control a Noldor or Silvan hero.\nPlanning Action: Shuffle a set aside Wind from the Sea into the encounter deck. Then, remove Flight to the Sea from the game.",
    "summary": "Flight to the Sea manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17140.png",
    "ringsdb_code": "17140"
  },
  {
    "name": "Emyn Arnen Ranger",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After Emyn Arnen Ranger commits to the quest, choose an enemy with a Trap attachment. Until the end of the phase, Emyn Arnen Ranger gets +X [willpower], where X is the chosen enemy's printed [threat].",
    "summary": "Emyn Arnen Ranger provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Traps",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17141.png",
    "ringsdb_code": "17141"
  },
  {
    "name": "The Dam Bursts",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if you control a unique character with the Ent trait and another unique character with the Hobbit trait.\nAction: Ready each damaged Ent character you control.",
    "summary": "The Dam Bursts readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17142.png",
    "ringsdb_code": "17142"
  },
  {
    "name": "Magic Ring",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Artifact",
      "Item",
      "Ring"
    ],
    "text": "Attach to a hero. Limit 1 per hero and 1 per deck.\nAction: Exhaust Magic Ring and raise your threat by 1 to (choose 1): heal 1 damage from attached hero, add 1 resource to attached hero's pool, or ready attached hero.",
    "summary": "Magic Ring generates 1 resources per exhaust, serving as the primary income attachment in Neutral decks.",
    "tags": [
      "Resource Generation",
      "Action Advantage (Readying)",
      "Threat Payment",
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17143.png",
    "ringsdb_code": "17143"
  },
  {
    "name": "Wind from the Sea",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "-",
    "traits": [],
    "text": "Encounter.\nWhen Revealed: Ready each hero committed to the quest and remove Wind from the Sea from the game.\nShadow: Ready the defending character",
    "summary": "Wind from the Sea readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17144.png",
    "ringsdb_code": "17144"
  },
  {
    "name": "Brand son of Bain",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dale",
      "Noble"
    ],
    "text": "Each Dale character you control with a player attachment gets +1 [willpower].\nResponse: After you play an attachment on a Dale character without an attachment, draw a card.",
    "summary": "Brand son of Bain can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Card Draw (Passive)",
      "Willpower Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/18001.png",
    "ringsdb_code": "18001"
  },
  {
    "name": "Bard son of Brand",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dale",
      "Noble"
    ],
    "text": "While playing an Item attachment, Bard son of Brand is considered to have the printed [leadership], [lore], and [tactics] icons.\nResponse: When a character leaves play, return each attachment attached to that character to its owner's hand. (Limit once per phase.)",
    "summary": "Bard son of Brand generates a bonus each time a character leaves or enters play, creating value in Sneak Attack or Ally-sacrifice strategies.",
    "tags": [
      "Resource Smoothing",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/18002.png",
    "ringsdb_code": "18002"
  },
  {
    "name": "Redwater Sentry",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dale",
      "Warrior"
    ],
    "text": "Reduce the cost to play Armor attachments on Redwater Sentry by 1.\nRedwater Sentry gets +1 [defense] and gains Sentinel while it has an Armor attachment.",
    "summary": "Redwater Sentry has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Resource Discount",
      "Defense Boost",
      "Sentinel",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18003.png",
    "ringsdb_code": "18003"
  },
  {
    "name": "North Realm Lookout",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dale",
      "Scout"
    ],
    "text": "North Realm Lookout gets +1 [willpower] and does not exhaust to quest while it has an Item attachment",
    "summary": "North Realm Lookout boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18004.png",
    "ringsdb_code": "18004"
  },
  {
    "name": "Warrior of Dale",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dale",
      "Warrior"
    ],
    "text": "Reduce the cost to play Weapon attachments on Warrior of Dale by 1.\nWarrior of Dale gets +1 [attack] and gains ranged while it has a Weapon attachment.",
    "summary": "Warrior of Dale has Ranged and gets +1 attack under certain conditions, serving as a flexible ranged attacker in multiplayer.",
    "tags": [
      "Resource Discount",
      "Attack Boost",
      "Ranged",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18005.png",
    "ringsdb_code": "18005"
  },
  {
    "name": "Long Lake Trader",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dale"
    ],
    "text": "Action: Exhaust Long Lake Trader to move an Item attachment from a character you control to another eligible character.",
    "summary": "Long Lake Trader provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18006.png",
    "ringsdb_code": "18006"
  },
  {
    "name": "Hauberk of Mail",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Dale or Warrior character. Limit 1 per character.\nAttached character gets +1 [defense] (and +1 hit point if attached character has the sentinel keyword).",
    "summary": "Hauberk of Mail gives +1 defense and +1 hit points, dramatically improving a character's ability to tank repeated attacks.",
    "tags": [
      "Defense Boost",
      "Hit Point Boost",
      "Sentinel",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18007.png",
    "ringsdb_code": "18007"
  },
  {
    "name": "King of Dale",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Dale or Esgaroth hero.\nPlanning Action: Exhaust King of Dale to reduce the cost of the next Dale ally you play this phase by 1 for each different player attachment on attached hero. That ally does not require a resource match.",
    "summary": "King of Dale grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/18008.png",
    "ringsdb_code": "18008"
  },
  {
    "name": "Bow of Yew",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a Dale or Warrior character.\nRestricted.\nResponse: After attached character is declared as an attacker, exhaust Bow of Yew to deal 1 damage to the defending enemy.",
    "summary": "Bow of Yew is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Direct Damage",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18009.png",
    "ringsdb_code": "18009"
  },
  {
    "name": "Map of Rhovanion",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Dale or Scout character. Limit 1 per character. Response: After attached character commits to the quest, place 1 progress on the active location.",
    "summary": "Map of Rhovanion places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18010.png",
    "ringsdb_code": "18010"
  },
  {
    "name": "Necklace of Girion",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Guarded (enemy or location).\nAttach to a hero.\nAttached hero gets +2 [willpower] and collects an additional resource during the resource phase.",
    "summary": "Necklace of Girion gives +2 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/18011.png",
    "ringsdb_code": "18011"
  },
  {
    "name": "Traffic from Dale",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Planning Action: Choose a Dale hero you control. Add 1 resource to its pool for each character you control with a player attachment. You can only play 1 copy of Traffic from Dale each round.",
    "summary": "Traffic from Dale generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18012.png",
    "ringsdb_code": "18012"
  },
  {
    "name": "To Arms!",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Choose an ally with a player attachment. Ready that ally.",
    "summary": "To Arms! readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18013.png",
    "ringsdb_code": "18013"
  },
  {
    "name": "Valour of the North",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After a character is declared as an attacker or defender against an enemy with an attachment, that character gets +3 [attack] and +3 [defense] until the end of this attack.",
    "summary": "Valour of the North grants +3 attack and +3 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18014.png",
    "ringsdb_code": "18014"
  },
  {
    "name": "Bartering",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Planning Action: Choose a ready player attachment on a character you control. Return that attachment to its owner’s hand to reduce the cost of the next attachment played this phase by X, where is the chosen attachment’s cost.",
    "summary": "Bartering provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/18015.png",
    "ringsdb_code": "18015"
  },
  {
    "name": "Grimbeorn the Old",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Beorning",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After Grimbeorn the Old defends an attack, spend 1 resource from his pool to declare him as an attacker against that enemy (and resolve his attack). The defending enemy gets -2 [defense] for this attack.",
    "summary": "Grimbeorn the Old has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 3,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19001.png",
    "ringsdb_code": "19001"
  },
  {
    "name": "Guardian of Esgaroth",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dale"
    ],
    "text": "Guardian of Esgaroth gets +1 [willpower], +1 [attack], +1 [defense], and +1 hit point for each different player card attachment it has. (Limit +3 to each.)",
    "summary": "Guardian of Esgaroth boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19002.png",
    "ringsdb_code": "19002"
  },
  {
    "name": "Squire's Helm",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to an ally. Restricted.\nLimit 1 per ally.\nAttached ally gets +2 hit points.",
    "summary": "Squire's Helm adds +2 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19003.png",
    "ringsdb_code": "19003"
  },
  {
    "name": "Beorning Skin-changer",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Beorning"
    ],
    "text": "Combat Action: Choose a Beorning ally with printed cost 3 or more in your hand or discard pile. Discard Beorning Skin-changer to put that ally into play.",
    "summary": "Beorning Skin-changer puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19004.png",
    "ringsdb_code": "19004"
  },
  {
    "name": "Beorn's Rage",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Response: After a Beorning character is declared as an attacker or defender against an enemy, that enemy gets -2 [attack] and -2 [defense] until the end of the phase.",
    "summary": "Beorn's Rage provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19005.png",
    "ringsdb_code": "19005"
  },
  {
    "name": "Woodmen's Clearing",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a location. Limit 1 per location.\nResponse: When attached location leaves play as an explored location, the first player reduces his threat by 3.",
    "summary": "Woodmen's Clearing reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19006.png",
    "ringsdb_code": "19006"
  },
  {
    "name": "The Hidden Way",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: At the beginning of the quest phase, search the top 5 cards of the encounter deck for a location and make it the active location, returning any previous active location to the staging area. Then, reveal 1 less encounter card this phase (to a minimum of 0). Shuffle the encounter deck.",
    "summary": "The Hidden Way manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Location Control (Travel/Bypass)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19007.png",
    "ringsdb_code": "19007"
  },
  {
    "name": "Long Lake Fisherman",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dale"
    ],
    "text": "Response: After Long Lake Fisherman enters play, name a number. Then, search the top 5 cards of your deck for a card whose printed cost is equal to that number and add it to your hand. Shuffle your deck.",
    "summary": "Long Lake Fisherman searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19008.png",
    "ringsdb_code": "19008"
  },
  {
    "name": "Grey Cloak",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a [spirit] or Scout character. Limit 1 per character.\nEncounter Action: Exhaust attached character and discard Grey Cloak to choose a non-unique enemy in the staging area. That enemy does not make engagement checks against you this phase.",
    "summary": "Grey Cloak grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19009.png",
    "ringsdb_code": "19009"
  },
  {
    "name": "The Arkenstone",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Guarded (enemy or location).\nAttach to a hero.\nEach unique character you control gains +1 [willpower].\nAction: Reduce your threat by 2 to attach The Arkenstone to a hero controlled by another player and raise that player's threat by 2. (Limit once per round.)",
    "summary": "The Arkenstone gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Threat Reduction",
      "Threat Payment",
      "Willpower Boost",
      "Guarded",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19010.png",
    "ringsdb_code": "19010"
  },
  {
    "name": "Haldan",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Woodman",
      "Scout"
    ],
    "text": "While the active location has an attachment on it, Haldan does not exhaust to quest.\nResponse: When the active location is explored, draw 1 card for each attachment on it.",
    "summary": "Haldan quests without exhausting, leaving them free for combat while still contributing the full questing round.",
    "tags": [
      "Card Draw (Passive)",
      "Action Advantage (Non-Exhausting)",
      "Location Control (Travel/Bypass)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19026.png",
    "ringsdb_code": "19026"
  },
  {
    "name": "Wiglaf",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Dale",
      "Scout",
      "Warrior"
    ],
    "text": "Response: After you play Wiglaf, play an Item attachment on him from your hand for no cost.\nAction: Exhaust an attachment on Wiglaf to ready him. (Limit once per phase.)",
    "summary": "Wiglaf readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19027.png",
    "ringsdb_code": "19027"
  },
  {
    "name": "Ancestral Armor",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a [leadership] or Noble character. Restricted.\nLimit 1 per character\nAttached characters gets +2 [defense] and +2 hit points.",
    "summary": "Ancestral Armor grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Defense Boost",
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19028.png",
    "ringsdb_code": "19028"
  },
  {
    "name": "Glamdring",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Weapon"
    ],
    "text": "Guarded (enemy or location)\nAttach to a hero or Gandalf. Restricted.\nAttached character gets +2 [attack]\nResponse: After attached character destroys an enemy, draw 1 card.",
    "summary": "Glamdring grants +2 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Card Draw (Passive)",
      "Attack Boost",
      "Attachment Synergy",
      "Restricted",
      "Guarded",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19029.png",
    "ringsdb_code": "19029"
  },
  {
    "name": "Woodmen's Path",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a location with no progress tokens on it.\nWhile attached location is the active location, reduce its quest point value to 1.",
    "summary": "Woodmen's Path places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19030.png",
    "ringsdb_code": "19030"
  },
  {
    "name": "Meneldor",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nResponse: After Meneldor enters or leaves play, place 2 progress on a location.",
    "summary": "Meneldor places 2 progress tokens on locations each round, aggressively clearing the staging area of location lock.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19031.png",
    "ringsdb_code": "19031"
  },
  {
    "name": "Flight of the Eagles",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Return an Eagle ally to your hand to shuffle a set-aside Eagle of the North into the encounter deck. Then, remove Flight of the Eagles from the game.",
    "summary": "Flight of the Eagles manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19032.png",
    "ringsdb_code": "19032"
  },
  {
    "name": "Wild Stallion",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature"
    ],
    "text": "Cannot have attachments\nPlanning Action: Attach Wild Stallion to an ally you control. (Counts as a Mount attachment with the text: \"Restricted. Limit 1 per ally. Attached ally gets +1 [willpower], +1 [attack], +1 [defense], and +1 hit point.\")",
    "summary": "Wild Stallion boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19033.png",
    "ringsdb_code": "19033"
  },
  {
    "name": "South Away!",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Travel Action: Choose a location in the staging area with a player card attachment and make it the active location, returning any previous active location to the staging area. Reduce each player's threat by X, where X is the number of attachments on the active location.",
    "summary": "South Away! reduces threat by X, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction",
      "Location Control (Travel/Bypass)",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19034.png",
    "ringsdb_code": "19034"
  },
  {
    "name": "Eagle of the North",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "-",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Encounter. Surge.\nCannot have restricted attachments.\nWhen Revealed: The first player chooses a player to take control of Eagle of the North. The chosen player may choose and discard a non-unique enemy in the staging area.",
    "summary": "Eagle of the North controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control",
      "Surge"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19035.png",
    "ringsdb_code": "19035"
  },
  {
    "name": "Thranduil",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Silvan",
      "Noble"
    ],
    "text": "Combat Action: Play a Silvan ally from your hand. You do not need a resource match for this ally. (Limit once per round.)",
    "summary": "Thranduil offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19056.png",
    "ringsdb_code": "19056"
  },
  {
    "name": "The Elvenking",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Silvan hero.\nAction: Exhaust The Elvenking and return a Silvan ally you control to your hand to ready attached hero.",
    "summary": "The Elvenking allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19057.png",
    "ringsdb_code": "19057"
  },
  {
    "name": "Orcrist",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Weapon"
    ],
    "text": "Guarded (enemy or location).\nAttach to a hero. Restricted.\nAttached hero gets +2 [attack].\nResponse: After attached hero destroys an enemy, add 1 resource to attached hero's pool.",
    "summary": "Orcrist generates 1 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Attack Boost",
      "Attachment Synergy",
      "Restricted",
      "Guarded",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19058.png",
    "ringsdb_code": "19058"
  },
  {
    "name": "Forest Road Traveler",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Woodman",
      "Scout"
    ],
    "text": "Forest Road Traveler gets +1 [willpower], +1 [attack], and +1 [defense] for each attachment on the active location.",
    "summary": "Forest Road Traveler boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Location Control (Travel/Bypass)",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19059.png",
    "ringsdb_code": "19059"
  },
  {
    "name": "Leather Boots",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a [lore] or Ranger character. Limit 1 per character.\nResponse: After a location is revealed from the encounter deck, exhaust Leather Boots to ready attached character.",
    "summary": "Leather Boots grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19060.png",
    "ringsdb_code": "19060"
  },
  {
    "name": "Giant Bear",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Creature",
      "Beorning"
    ],
    "text": "Cannot have attachments.\nAction: Ready Giant Bear. At the end of the phase in which you triggered this effect, shuffle Giant Bear back into your deck. (Limit once per phase.)",
    "summary": "Giant Bear readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 0,
    "attack": 4,
    "defense": 3,
    "health": 4,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19061.png",
    "ringsdb_code": "19061"
  },
  {
    "name": "Outmatched",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition",
      "Trap"
    ],
    "text": "Play into your play area unattached.\nIf unattached, attach to the next eligible enemy that engages you.\nResponse: After attached enemy resolves its attack, ready the defending character.",
    "summary": "Outmatched allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19062.png",
    "ringsdb_code": "19062"
  },
  {
    "name": "Galion",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "0",
    "traits": [
      "Silvan"
    ],
    "text": "Cannot attack or defend.\nResponse: After Galion enters play, he gets +1 [willpower] until the end of the round.",
    "summary": "Galion boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19063.png",
    "ringsdb_code": "19063"
  },
  {
    "name": "Quicker Than Sight",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: Return a Silvan ally you control to your hand to cancel a shadow effect just triggered during combat.",
    "summary": "Quicker Than Sight cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Shadow Cancellation",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19064.png",
    "ringsdb_code": "19064"
  },
  {
    "name": "Thalion",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "While there is at least 1 side quest in the victory display, ready Thalion at the beginning of the combat phase.\nWhile there are at least 3 side quests in the victory display, Thalion loses the ally card type, gains the hero card type and the resource icons of each sphere on a side quest in the victory display.",
    "summary": "Thalion readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Victory Display Synergy",
      "Side Quest Synergy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19065.png",
    "ringsdb_code": "19065"
  },
  {
    "name": "Dáin Ironfoot",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Dwarf",
      "Noble",
      "Warrior"
    ],
    "text": "While Dáin Ironfoot is defending, he gains, 'Action: Discard the top card of your deck to give Dáin Ironfoot +1 [defense] for this attack. (Limit 3 times per phase.)'",
    "summary": "Dáin Ironfoot searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Defense Boost",
      "Player Deck Manipulation"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19084.png",
    "ringsdb_code": "19084"
  },
  {
    "name": "Soldier of Erebor",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Action: Discard the top 3 cards from your deck to ready Soldier of Erebor. (Limit once per round.)",
    "summary": "Soldier of Erebor readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 3,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19085.png",
    "ringsdb_code": "19085"
  },
  {
    "name": "Man the Walls",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Play only if no other copies of Man the Walls have been played this round. Planning Action: Reduce the cost of the next ally played by each player this phase by 1. Those allies cannot quest this round.",
    "summary": "Man the Walls provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19086.png",
    "ringsdb_code": "19086"
  },
  {
    "name": "Mirkwood Hunter",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Woodman",
      "Ranger"
    ],
    "text": "Ranged.\nReduce the cost to play Mirkwood Hunter by 1 for each attachment on the active location.",
    "summary": "Mirkwood Hunter has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Resource Discount",
      "Ranged",
      "Location Control (Travel/Bypass)"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19087.png",
    "ringsdb_code": "19087"
  },
  {
    "name": "Familiar Lands",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Each location with an attachment gets -2 [threat] until the end of the phase.",
    "summary": "Familiar Lands reduces threat in the staging area, easing a difficult questing round or buying time for the team to set up defenses.",
    "tags": [
      "Staging Area Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19088.png",
    "ringsdb_code": "19088"
  },
  {
    "name": "Warrior Sword",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a [tactics] or Warrior character. Limit 1 per character. Attached character gets +1 [attack] for each enemy engaged with you. (Limit +3 [attack].)",
    "summary": "Warrior Sword grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attack Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19089.png",
    "ringsdb_code": "19089"
  },
  {
    "name": "Swift and Strong",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Response: After a character you control attacks and destroys an enemy, exhaust a Weapon attached to that character to ready that character and give it +2 [attack] for its next attack this phase.",
    "summary": "Swift and Strong readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19090.png",
    "ringsdb_code": "19090"
  },
  {
    "name": "Descendant of Girion",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dale"
    ],
    "text": "Reduce the cost to play Item attachments on Descendant of Girion by 1.",
    "summary": "Descendant of Girion provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19091.png",
    "ringsdb_code": "19091"
  },
  {
    "name": "Valiant Determination",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Condition"
    ],
    "text": "Attach to an ally. Attached ally does not exhaust to quest.",
    "summary": "Valiant Determination lets the attached character quest without exhausting, freeing them to contribute fully in both questing and combat.",
    "tags": [
      "Action Advantage (Non-Exhausting)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19092.png",
    "ringsdb_code": "19092"
  },
  {
    "name": "Ring of Thrór",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Ring"
    ],
    "text": "Guarded (enemy or location).\nAttach to a Dwarf hero. Action: Exhaust Thrór's Ring and discard the top card of your deck to ready attached hero. If the discarded card is an attachment, put it into play.",
    "summary": "Ring of Thrór allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Player Deck Manipulation",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19093.png",
    "ringsdb_code": "19093"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Hobbit",
      "Burglar"
    ],
    "text": "Response: After Bilbo Baggins commits to the quest, choose an enemy in the staging area. Until the end of the phase, Bilbo Baggins gets +X [willpower] where X is that enemy’s [threat]. If the players quest successfully, deal 1 damage to that enemy (2 damage instead if it is guarding a card).",
    "summary": "Bilbo Baggins deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19112.png",
    "ringsdb_code": "19112"
  },
  {
    "name": "Greenwood Defender",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan",
      "Warrior"
    ],
    "text": "Response: After Greenwood Defender enters play, it does not exhaust to defend until the end of the round.",
    "summary": "Greenwood Defender provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19113.png",
    "ringsdb_code": "19113"
  },
  {
    "name": "Elf Guide",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Return a Silvan ally you control to your hand to choose a hero. Add 1 resource to that hero’s pool.",
    "summary": "Elf Guide generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19114.png",
    "ringsdb_code": "19114"
  },
  {
    "name": "Gaffer Gamgee",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Combat Action: Return Gaffer Gamgee to your hand to choose an enemy with engagement cost higher than your threat. Until the end of the round, that enemy cannot attack you.",
    "summary": "Gaffer Gamgee controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control",
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19115.png",
    "ringsdb_code": "19115"
  },
  {
    "name": "Drinking Song",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Action: Count the number of cards in your hand and shuffle your hand into your deck. Then, draw an equal number of cards. Draw 1 additional card if you control a unique Hobbit character.",
    "summary": "Drinking Song draws X cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Card Draw (Active)",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19116.png",
    "ringsdb_code": "19116"
  },
  {
    "name": "Sting",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Artifact",
      "Item",
      "Weapon"
    ],
    "text": "Guarded (enemy).\nAttach to a Hobbit hero. Restricted.\nAttached hero gets +1 [willpower], +1 [attack], and +1 [defense].\nResponse: After attached hero is declared as an attacker or defender against an enemy, deal 1 damage to that enemy.",
    "summary": "Sting provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Direct Damage",
      "Attachment Synergy",
      "Restricted",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19117.png",
    "ringsdb_code": "19117"
  },
  {
    "name": "Round Shield",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a character. Restricted.\nResponse: After a shadow effect is triggered during combat, exhaust Round Shield to give attached character +2 [defense] for this attack.",
    "summary": "Round Shield boosts defense by +2, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19118.png",
    "ringsdb_code": "19118"
  },
  {
    "name": "Erebor Toymaker",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf",
      "Craftsman"
    ],
    "text": "Response: After you play Erebor Toymaker from your hand, reduce the cost of the next attachment played this phase by 2.",
    "summary": "Erebor Toymaker provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Discount",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19119.png",
    "ringsdb_code": "19119"
  },
  {
    "name": "Armor of Erebor",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Dale or Dwarf character. Restricted.\nAttached character gets +1 [defense] and gains sentinel.",
    "summary": "Armor of Erebor boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19120.png",
    "ringsdb_code": "19120"
  },
  {
    "name": "The Shirefolk",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Play only if each of your heroes is a Hobbit.\nAction: Reduce your threat by 4.",
    "summary": "The Shirefolk reduces threat by 4, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19121.png",
    "ringsdb_code": "19121"
  },
  {
    "name": "Radagast",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Istari"
    ],
    "text": "While playing a Creature ally, Radagast gains the printed [leadership], [spirit], and [tactics] icons.\nResponse: After you play a Creature card, Radagast does not exhaust to quest this round.",
    "summary": "Radagast quests without exhausting, leaving them free for combat while still contributing the full questing round.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Non-Exhausting)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19145.png",
    "ringsdb_code": "19145"
  },
  {
    "name": "Messenger Raven",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Creature"
    ],
    "text": "Cannot attack, defend, of have attachments. Refresh Action: Return Messenger Raven to it's owner's hand and name a card type. Choose a player to look at the top card of his deck. If that card is the named type, add it to its owner's hand. If it is not, discard it.",
    "summary": "Messenger Raven controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Scrying",
      "Enemy Control",
      "Player Deck Manipulation",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19146.png",
    "ringsdb_code": "19146"
  },
  {
    "name": "The King's Return",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Action: Search your deck for a Guarded attachment and put it into play. Shuffle your deck.",
    "summary": "The King's Return searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19147.png",
    "ringsdb_code": "19147"
  },
  {
    "name": "Loyal Hound",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature"
    ],
    "text": "Cannot have attachments. Response: Discard Loyal Hound to cancel up to 2 damage just dealt to a hero you control.",
    "summary": "Loyal Hound provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Damage Prevention"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19148.png",
    "ringsdb_code": "19148"
  },
  {
    "name": "The Great Hunt",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "You must use resources from 3 different heroes' pools to pay for this card. Combat Action: Choose and discard a non-unique enemy in the staging area.",
    "summary": "The Great Hunt prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19149.png",
    "ringsdb_code": "19149"
  },
  {
    "name": "Bywater Shirriff",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit",
      "Shirriff"
    ],
    "text": "Bywater Shirriff gets +1 [willpower], +1 [attack], and +1 [defense] while you are engaged with an enemy with engagement cost higher than your threat.",
    "summary": "Bywater Shirriff boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19150.png",
    "ringsdb_code": "19150"
  },
  {
    "name": "Gwaihir's Debt",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Play only if you control a unique character with the Istari trait and another unique character with the Eagle trait. Action: Search the top 5 cards of your deck for an Eagle or Istari ally and put it into play. Shuffle your deck. At the end of the round, if that ally is still in play, return it to your hand.",
    "summary": "Gwaihir's Debt searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19151.png",
    "ringsdb_code": "19151"
  },
  {
    "name": "Mithril Shirt",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Armor"
    ],
    "text": "Guarded (location).\nGuarded (location). Attach to a hero. Response: When attached hero is dealt any amount of damage, reduce that amount by 1.",
    "summary": "Mithril Shirt is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19152.png",
    "ringsdb_code": "19152"
  },
  {
    "name": "Reforged",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "X",
    "traits": [],
    "text": "Action: Choose an Item attachment with a printed cost of X in any player's discard pile and play that attachment for no cost. (The chosen attachment can belong to any sphere of influence.)",
    "summary": "Reforged provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/19153.png",
    "ringsdb_code": "19153"
  },
  {
    "name": "Radagast's Staff",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Artifact",
      "Item",
      "Staff"
    ],
    "text": "Attach to Radagast. Action: Exhaust Radagast's Staff to choose one: Reduce the cost of the next Creature ally you play this phase by 2, ready a Creature ally, or return a non-unique Creature enemy engaged with you to the staging area.",
    "summary": "Radagast's Staff reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount",
      "Action Advantage (Readying)",
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/19154.png",
    "ringsdb_code": "19154"
  },
  {
    "name": "Gildor Inglorion",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Action: Pay 1 resource from Gildor Inglorion's resource pool to choose a player to draw 1 card (Limit once per round.)",
    "summary": "Gildor Inglorion exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Leadership.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/20002.png",
    "ringsdb_code": "20002"
  },
  {
    "name": "Andrath Guardsman",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dunedain",
      "Ranger"
    ],
    "text": "Response: After you play Andrath Guardsman from your hand, choose a non-unique enemy engaged with you. That enemy cannot attack you this round.",
    "summary": "Andrath Guardsman controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17002.png",
    "ringsdb_code": "17002"
  },
  {
    "name": "Grim Resolve",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Action: Ready all characters in play.",
    "summary": "Grim Resolve readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/20026.png",
    "ringsdb_code": "20026"
  },
  {
    "name": "Thorin Stonehelm",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf",
      "Noble",
      "Warrior"
    ],
    "text": "Response: After Thorin Stonehelm is declared as an attacker, discard the top card of your deck to deal 1 damage to an enemy engaged with you.",
    "summary": "Thorin Stonehelm deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/20036.png",
    "ringsdb_code": "20036"
  },
  {
    "name": "Dúnedain Lookout",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dúnedain"
    ],
    "text": "Response: Discard Dúnedain Lookout to cancel the 'when revealed' effects of an enemy just revealed from the encounter deck.",
    "summary": "Dúnedain Lookout cancels a treachery's When Revealed effect, providing reusable encounter insurance for decks that can't rely on Lore cancellation.",
    "tags": [
      "Treachery Cancellation",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/20050.png",
    "ringsdb_code": "20050"
  },
  {
    "name": "Secret Paths",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Quest Action: Choose a location in the staging area. Until the end of the phase, that location does not contribute its [threat]",
    "summary": "Secret Paths reduces threat in the staging area, easing a difficult questing round or buying time for the team to set up defenses.",
    "tags": [
      "Staging Area Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01066.png",
    "ringsdb_code": "01066"
  },
  {
    "name": "The One Ring",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Artifact",
      "Ring",
      "Master"
    ],
    "text": "Restricted.\nImmune to non-Master card effects. Setup: Attach to a hero you control and search your deck for a Master card. Add it to your hand and shuffle your deck. Your threat elimination level is reduced by 5. If The One Ring leaves play, the players lose the game.",
    "summary": "The One Ring enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation",
      "Restricted",
      "Master",
      "Immune"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21001.png",
    "ringsdb_code": "21001"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Frodo Baggins commits to the quest, spend 1 resource from his resource pool to ready another unique character committed to the quest. If you quest successfully this phase, reduce your threat by 1.",
    "summary": "Frodo Baggins readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21002.png",
    "ringsdb_code": "21002"
  },
  {
    "name": "Merry",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Merry enters play, each unique ally you control gets +1 [willpower] until the end of the round.",
    "summary": "Merry boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21003.png",
    "ringsdb_code": "21003"
  },
  {
    "name": "Pippin",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Pippin gets +2 [attack] while attacking an enemy with an engagement cost higher than your threat. Response: After you engage an enemy with an engagement cost higher than your threat, ready Pippin.",
    "summary": "Pippin readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21004.png",
    "ringsdb_code": "21004"
  },
  {
    "name": "Faramir",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Gondor",
      "Noble",
      "Ranger"
    ],
    "text": "Response: After Faramir enters play, choose a non-unique enemy in the staging area. Engage that enemy and deal 2 damage to it (4 damage instead if it has an attachment on it).",
    "summary": "Faramir deals 2 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21005.png",
    "ringsdb_code": "21005"
  },
  {
    "name": "Derufin",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Ranged.\nRanged. Response: After Derufin participates in an attack which destroys an enemy engaged with a player, discard Derufin to reduce the engaged player's threat by X, where X is the destroyed enemy's printed [threat].",
    "summary": "Derufin has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Threat Reduction",
      "Ranged"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21006.png",
    "ringsdb_code": "21006"
  },
  {
    "name": "The Gathering Storm",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Planning Action: Search the top 5 cards of the encounter deck for an enemy. Add that enemy to the staging area to reduce the cost of the first ally you play this phase by X, where X is that enemy's [threat]. Shuffle the encounter deck.",
    "summary": "The Gathering Storm manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Resource Discount",
      "Encounter Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/21007.png",
    "ringsdb_code": "21007"
  },
  {
    "name": "Put Off Pursuit",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to the active location. Limit 1 per location. Attached location gets +2 quest points. Response: After attached location is explored, discard cards from the encounter deck until a location is discarded. Add that location to the staging area to choose an non-unique enemy in the staging area and shuffle it into the encounter deck.",
    "summary": "Put Off Pursuit lets the attached hero look at or manipulate the encounter deck, providing consistent scrying without spending event cards.",
    "tags": [
      "Encounter Deck Manipulation",
      "Location Control (Travel/Bypass)",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/21008.png",
    "ringsdb_code": "21008"
  },
  {
    "name": "The Master Ring",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Master"
    ],
    "text": "Response: Exhaust The One Ring and raise your threat by 1 to cancel the effects of an encounter card just revealed from the encounter deck and discard that card. Then, reveal an encounter card.",
    "summary": "The Master Ring manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Threat Payment",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/21009.png",
    "ringsdb_code": "21009"
  },
  {
    "name": "The Ruling Ring",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Master"
    ],
    "text": "Combat Action: Exhaust The One Ring and raise your threat by 1 to choose a non-Nazgul enemy engaged with you. Until the end of the phase, that enemy cannot attack you.",
    "summary": "The Ruling Ring prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Threat Payment",
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/21010.png",
    "ringsdb_code": "21010"
  },
  {
    "name": "The Ring of Power",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Master"
    ],
    "text": "Action: Exhaust The One Ring and raise your threat by 1 to ready the hero with The One Ring Attached. That hero gets +1 [willpower], +1 [attack], and +1 [defense] until the end of the phase.",
    "summary": "The Ring of Power readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Payment",
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/21011.png",
    "ringsdb_code": "21011"
  },
  {
    "name": "Sméagol",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "3",
    "traits": [
      "Gollum"
    ],
    "text": "Side A\nCannot have attachments. Setup: Shuffle 2 copies of Stinker into the encounter deck. Response: After you travel to a location, raise your threat by 1 to draw 1 card.\nSide B\nImmune to non-Gollum card effects. Gollum engages the first player. Forced: When Gollum is defeated, flip him to Sméagol and return him to his owner's control, exhausted.",
    "summary": "Sméagol triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Card Draw (Passive)",
      "Threat Payment",
      "Encounter Deck Manipulation",
      "Location Control (Travel/Bypass)",
      "Immune"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/21072.png",
    "ringsdb_code": "21072"
  },
  {
    "name": "Soldier of Gondor",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor"
    ],
    "text": "Response: After Soldier of Gondor enters play, search the top 5 cards of your deck for a Gondor ally and add it to your hand (any number of Gondor allies instead if your threat is 40 or higher). Shuffle your deck.",
    "summary": "Soldier of Gondor searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger",
      "Valour"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22002.png",
    "ringsdb_code": "22002"
  },
  {
    "name": "Cautious Halfling",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Cautious Halfling enters play, look at the top card of the encounter deck. If that card is not an enemy, draw a card.",
    "summary": "Cautious Halfling draws 1 card automatically on a triggered condition, rewarding the right sequencing with passive hand advantage.",
    "tags": [
      "Card Draw (Passive)",
      "Scrying",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22004.png",
    "ringsdb_code": "22004"
  },
  {
    "name": "Tom Bombadillo!",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [
      "Song"
    ],
    "text": "Play only if you control a Hobbit hero. You cannot play this card if there is a copy of Tom Bombadillo! in the victory display. Planning Action: Add Tom Bombadillo the the victory display to shuffle a set-aside copy of Tom Bombadil into the encounter deck.",
    "summary": "Tom Bombadillo! manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22005.png",
    "ringsdb_code": "22005"
  },
  {
    "name": "Durin's Axe",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Weapon"
    ],
    "text": "Guarded (enemy). Restricted.\nGuarded (enemy). Restricted. Attach to a hero. Attached hero gets +2 [attack]. Response: After attach hero attacks and destroys an enemy, deal 1 damage to an enemy engaged with you.",
    "summary": "Durin's Axe grants +2 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Direct Damage",
      "Attachment Synergy",
      "Restricted",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22006.png",
    "ringsdb_code": "22006"
  },
  {
    "name": "Charge into Battle",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Play only after staging step. Quest Action: You may declare and resolve an attack against each non-unique enemy in the staging are as if it were engaged with you.",
    "summary": "Charge into Battle provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Staging Area Attack"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22007.png",
    "ringsdb_code": "22007"
  },
  {
    "name": "Silver Circlet",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Restricted.\nAttach to a [spirit] hero. Limit 1 per hero. Restricted. Attached hero gets +2 [willpower].",
    "summary": "Silver Circlet gives +2 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22008.png",
    "ringsdb_code": "22008"
  },
  {
    "name": "Inner Strength",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Master"
    ],
    "text": "Attach to the hero with The One Ring. Limit 1 per hero. Attached hero gets +1 [defense]. Response: Exhaust The One Ring and raise your threat by 1 to cancel a shadow effect just triggered during an attack that attached hero is defending.",
    "summary": "Inner Strength boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Threat Payment",
      "Defense Boost",
      "Shadow Cancellation",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22009.png",
    "ringsdb_code": "22009"
  },
  {
    "name": "Tom Bombadil",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "-",
    "traits": [
      "Legend"
    ],
    "text": "Encounter.\nWhen Revealed: Choose a player. That player gains control of Tom Bombadil, ready and committed to the quest. At the end of the round, remove Tom Bombadil and a copy of Tom Bombadillo! in the victory display from the game. This effect cannot be cancelled.",
    "summary": "Tom Bombadil provides niche utility to Neutral decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Victory Display Synergy",
      "Multiplayer"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 3,
    "health": 6,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22010.png",
    "ringsdb_code": "22010"
  },
  {
    "name": "Lothíriel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "If Éomer is in play, Lothíriel gains the Rohan trait.\nResponse: After Lothíriel commits to a quest, choose an ally in your hand. If that ally shares a Trait with her, put that ally into play exhausted and committed to the quest. At the end of the phase, if that ally is still in play, shuffle it into your deck.",
    "summary": "Lothíriel triggers ally mustering, flooding the board faster than normal resource income would allow.",
    "tags": [
      "Ally Mustering",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22027.png",
    "ringsdb_code": "22027"
  },
  {
    "name": "Angbor the Fearless",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "While your threat is 40 or higher, Angbor the Fearless gets +2 [attack] and does not exhaust to quest.",
    "summary": "Angbor the Fearless provides +2 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Attack Boost",
      "Valour"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22028.png",
    "ringsdb_code": "22028"
  },
  {
    "name": "Need Drives Them",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Action: Each player whose threat is 40 or higher readies all characters he controls.",
    "summary": "Need Drives Them provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Valour",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22029.png",
    "ringsdb_code": "22029"
  },
  {
    "name": "Woodland Sentry",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Silvan"
    ],
    "text": "Response: After you play Woodland Sentry from your hand, choose an enemy or location in play. If there is a copy of that card in the victory display, discard the chosen card.",
    "summary": "Woodland Sentry provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22030.png",
    "ringsdb_code": "22030"
  },
  {
    "name": "Keen Longbow",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a [lore] hero. Limit 1 per hero.\nRestricted. Attached hero gains ranged.\nResponse: After attached hero is declared an as attacker against an enemy, discard up to 3 cards from your hand to deal 1 damage to that enemy for each card discarded this way.",
    "summary": "Keen Longbow grants Ranged to the attached character, turning them into a ranged attacker who can assist any player in combat.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22031.png",
    "ringsdb_code": "22031"
  },
  {
    "name": "War Axe",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Attach to a [tactics] character. Limit 1 per character.\nRestricted.\nAttached characters gets +1 [attack] for each attachment it has with the restricted keyword.",
    "summary": "War Axe grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22032.png",
    "ringsdb_code": "22032"
  },
  {
    "name": "Strength and Courage",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Master"
    ],
    "text": "Attach to the hero with The One Ring.\nLimit 1 per hero. Attached hero gets +1 [attack].\nResponse: After attached hero is declared as an attacker, exhaust The One Ring and raise your threat by 1 to double attached hero's printed [attack] for this attack.",
    "summary": "Strength and Courage grants +1 attack, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Threat Payment",
      "Attack Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22033.png",
    "ringsdb_code": "22033"
  },
  {
    "name": "Knight of Belfalas",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Response: After Knight of Belfalas enters play, return a Gondor ally from your discard pile to your hand.",
    "summary": "Knight of Belfalas retrieves cards from the discard pile, enabling recursion of key events or allies that were spent or discarded early.",
    "tags": [
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22034.png",
    "ringsdb_code": "22034"
  },
  {
    "name": "Horn of the Mark",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to a Rohan hero or Merry. Restricted.\nResponse: When a character leaves play, if that character shares at least one trait with the attached hero, exhaust Horn of the Mark to draw 1 card.",
    "summary": "Horn of the Mark draws 1 card on demand, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Active)",
      "Bounce / Leaves Play Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22035.png",
    "ringsdb_code": "22035"
  },
  {
    "name": "Host of Galadhrim",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Planning Action: Return each Silvan ally you control to your hand. Then, play each of those allies from your hand one at a time at no cost.",
    "summary": "Host of Galadhrim provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22036.png",
    "ringsdb_code": "22036"
  },
  {
    "name": "Saruman",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "13",
    "traits": [
      "Istari",
      "Isengard"
    ],
    "text": "When a player card effect would reduce your threat by any amount, reduce that amount to 1.\nWhile playing an event with the printed doomed keyword, Saruman gains the printed [leadership], [spirit], and [tactics] icons.\nResponse: After you play a card with the doomed keyword, ready Saruman.",
    "summary": "Saruman readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 4,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22054.png",
    "ringsdb_code": "22054"
  },
  {
    "name": "Power of Command",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Master"
    ],
    "text": "Attach to the hero with The One Ring.\nLimit 1 per hero. Attached hero gets +1 [willpower].\nResponse: After attached hero commits to the quest, exhaust The One Ring and raise your threat by 1 to give each other unique character you control +1 [willpower] until the end of the phase.",
    "summary": "Power of Command gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Threat Payment",
      "Willpower Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22055.png",
    "ringsdb_code": "22055"
  },
  {
    "name": "Horns! Horns! Horns!",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 2.\nAction: Each player may put one ally card into play from his hand. At the end of the phase, shuffle each of those allies that are still in play into their owners' decks.",
    "summary": "Horns! Horns! Horns! puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Ally Mustering",
      "Doomed",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22056.png",
    "ringsdb_code": "22056"
  },
  {
    "name": "Soldier of Isengard",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Isengard"
    ],
    "text": "Doomed 2.\nResponse: After a player raises his threat from the doomed keyword, give control of Soldier of Isengard to that player.",
    "summary": "Soldier of Isengard provides niche utility to Lore decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Threat Payment",
      "Doomed",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22057.png",
    "ringsdb_code": "22057"
  },
  {
    "name": "Far-sighted",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 1.\nAction: Look at the top 5 cards of the encounter deck. Put them back in the same order.",
    "summary": "Far-sighted provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Scrying",
      "Doomed"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22058.png",
    "ringsdb_code": "22058"
  },
  {
    "name": "Nori",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Nori participates in an attack that destroys an enemy, put the top card of your discard pile on the bottom of your deck.",
    "summary": "Nori provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22059.png",
    "ringsdb_code": "22059"
  },
  {
    "name": "Golden Belt",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nAttached hero can have 1 additional restricted attachment.",
    "summary": "Golden Belt is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22060.png",
    "ringsdb_code": "22060"
  },
  {
    "name": "Rohirrim Scout",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan",
      "Scout"
    ],
    "text": "Action: Discard Rohirrim Scout to choose a non-unique enemy in the staging area. That enemy does not make engagement checks against you this round.",
    "summary": "Rohirrim Scout manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22061.png",
    "ringsdb_code": "22061"
  },
  {
    "name": "The Muster of Rohan",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "While paying for The Muster of Rohan, each Rohan hero you control is considered to have a [spirit] icon.\nPlanning Action: Search the top 10 cards of your deck for up to 4 Rohan allies and put them into play. Shuffle your deck. If any of those allies are still in play at the end of the round, discard them.",
    "summary": "The Muster of Rohan searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Resource Smoothing",
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22062.png",
    "ringsdb_code": "22062"
  },
  {
    "name": "Saruman's Staff",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Artifact",
      "Item",
      "Staff"
    ],
    "text": "Attach to Saruman. Restricted.\nAction: Exhaust Saruman's Staff to (choose one): Reduce the X value of the next Doomed X event you play this phase by 2, or search the top 5 cards of your deck for a Doomed event and add it to your hand. Shuffle your deck.)",
    "summary": "Saruman's Staff enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22063.png",
    "ringsdb_code": "22063"
  },
  {
    "name": "Wandering Exile",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After Wandering Exile commits to a quest, discard a card from your hand to ready Wandering Exile.",
    "summary": "Wandering Exile readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22082.png",
    "ringsdb_code": "22082"
  },
  {
    "name": "Stone of Elostirion",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Guarded (location). Restricted.\nAttach to a hero. Attached hero gets +2 [willpower]. You draw 1 additional card during the resource phase.",
    "summary": "Stone of Elostirion gives +2 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Card Draw (Passive)",
      "Willpower Boost",
      "Attachment Synergy",
      "Restricted",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22084.png",
    "ringsdb_code": "22084"
  },
  {
    "name": "Well Preserved",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Master"
    ],
    "text": "Attach to the hero with The One Ring.\nLimit 1 per hero. Attached hero gets + 1 hit point.\nResponse: At the beginning of the round, exhaust The One Ring and raise your threat by 1 to heal all damage from attached hero.",
    "summary": "Well Preserved provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Threat Payment",
      "Healing",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22085.png",
    "ringsdb_code": "22085"
  },
  {
    "name": "Northern Bowmaster",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Ranged.\nYou cannot play Northern Bowmaster from your hand unless you are engaged with an enemy.",
    "summary": "Northern Bowmaster has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged",
      "Engagement Control"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22086.png",
    "ringsdb_code": "22086"
  },
  {
    "name": "Reckless Attack",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 2.\nAction: Each player deals 2 damage to an enemy engaged with him.",
    "summary": "Reckless Attack deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Doomed",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22087.png",
    "ringsdb_code": "22087"
  },
  {
    "name": "Odo Proudfoot",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Odo Proudfoot enters play, search the top 5 cards of your deck for a Hobbit ally and add it to your hand. Shuffle the other cards back into your deck.",
    "summary": "Odo Proudfoot searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22088.png",
    "ringsdb_code": "22088"
  },
  {
    "name": "Defiant Challenge",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Doomed 2.\nAction: Each player may ready a character he controls.",
    "summary": "Defiant Challenge readies one or more characters or heroes, giving the team extra actions—especially valuable during heavy combat rounds.",
    "tags": [
      "Action Advantage (Readying)",
      "Doomed",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22089.png",
    "ringsdb_code": "22089"
  },
  {
    "name": "Helm of Secrecy",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Limit 1 per deck.\nAction: Choose a hero you control and discard all tokens from it. Select a different non-[fellowship], non-[baggins] hero from your collection with a threat cost less than or equal to the chosen hero. Swap those heroes, moving all eligible attachments to the hero from your collection.",
    "summary": "Helm of Secrecy provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22090.png",
    "ringsdb_code": "22090"
  },
  {
    "name": "Gwaihir",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "13",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Ranged. Sentinel.\nCannot have restricted attachments. Gwaihir does not ready during the refresh phase.\nResponse: After an Eagle ally enters or leaves play, ready Gwaihir. (Limit once per phase.)",
    "summary": "Gwaihir readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Ranged",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 4,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22108.png",
    "ringsdb_code": "22108"
  },
  {
    "name": "Hobbit Archer",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit",
      "Archer"
    ],
    "text": "Ranged.\nHobbit Archer gets +1 [attack] while attacking an enemy with a higher engagement cost than your threat.",
    "summary": "Hobbit Archer has Ranged and gets +1 attack under certain conditions, serving as a flexible ranged attacker in multiplayer.",
    "tags": [
      "Attack Boost",
      "Ranged",
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22109.png",
    "ringsdb_code": "22109"
  },
  {
    "name": "Red Book of Westmarch",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Attach to a Hobbit hero. Restricted.\nWhile attached hero is committed to the quest, each Hobbit character gets +1 [willpower].\nResponse: After you quest successfully, exhaust Red Book of Westmarch to add 1 resource to attached hero's resource pool.",
    "summary": "Red Book of Westmarch generates 1 resources per exhaust, serving as the primary income attachment in Leadership decks.",
    "tags": [
      "Resource Generation",
      "Willpower Boost",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22110.png",
    "ringsdb_code": "22110"
  },
  {
    "name": "Dale Messenger",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dale"
    ],
    "text": "Response: After Dale Messenger enters play, choose a player. That player heals 1 damage from each character he controls with a player card attachment.",
    "summary": "Dale Messenger heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Healing",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22111.png",
    "ringsdb_code": "22111"
  },
  {
    "name": "Song of Healing",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nAction: Discard 1 card from your hand to heal 1 damage from attached hero. Any player may trigger this effect.",
    "summary": "Song of Healing provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22112.png",
    "ringsdb_code": "22112"
  },
  {
    "name": "Eagle Emissary",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nForced: After Eagle Emissary quests successfully, pay 1 [tactics] resource or discard it from play.",
    "summary": "Eagle Emissary provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Forced Effect"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22113.png",
    "ringsdb_code": "22113"
  },
  {
    "name": "Bilbo's Plan",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After you attack and destroy an enemy, shuffle the encounter discard pile into the encounter deck and discard cards from the top until an enemy is discarded. Add that enemy to the staging area to discard a non-unique location with [threat] equal to or less that that enemy's [threat].",
    "summary": "Bilbo's Plan prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Encounter Deck Manipulation",
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22114.png",
    "ringsdb_code": "22114"
  },
  {
    "name": "Spare Pipe",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Pipe"
    ],
    "text": "Attach to a character.\nAttached character gets +1 hit point.\nResponse: After you play Spare Pipe, search the top 5 cards of your deck for an event and add it to your hand. Shuffle your deck.",
    "summary": "Spare Pipe adds +1 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22115.png",
    "ringsdb_code": "22115"
  },
  {
    "name": "Smoke and Think",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Reduce the cost of the next card you play by 1 for each Pipe you control.",
    "summary": "Smoke and Think provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22116.png",
    "ringsdb_code": "22116"
  },
  {
    "name": "Wilyador",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Ranged. Sentinel.\nCannot have restricted attachments.\nForced: At the end of the round, discard Wilyador unless the players as a group spend 1 resource.",
    "summary": "Wilyador has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Sentinel",
      "Ranged",
      "Forced Effect"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22117.png",
    "ringsdb_code": "22117"
  },
  {
    "name": "Aragorn",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Dúnedain",
      "Ranger",
      "Scout"
    ],
    "text": "Sentinel.\nAction: Exhaust Aragorn to choose a location in the staging area. Until the end of the phase, that location gets -X [threat], where X is Aragorn's [willpower]. If this effect reduces the location's [threat] to 0, place 1 progress on it. (Limit once per round.)",
    "summary": "Aragorn reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Sentinel",
      "Location Control (Progress)"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22137.png",
    "ringsdb_code": "22137"
  },
  {
    "name": "Shining Shield",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Armor",
      "Item"
    ],
    "text": "Attach to a Noble hero. Limit 1 per hero.\nRestricted.\nAttached hero gets +1 [defense] (+2 [defense] instead if your threat is 40 or higher).",
    "summary": "Shining Shield boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Attachment Synergy",
      "Restricted",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22138.png",
    "ringsdb_code": "22138"
  },
  {
    "name": "Knowledge of the Enemy",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Planning Action: Choose a hero you control. Add 1 resource to its resource pool for each enemy engaged with you. You can only play 1 Knowledge of the Enemy each round.",
    "summary": "Knowledge of the Enemy generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22139.png",
    "ringsdb_code": "22139"
  },
  {
    "name": "Haleth",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Woodman",
      "Scout"
    ],
    "text": "Response: After Haleth quests successfully, search the top 5 cards of your deck for an attachment and add it to your hand. Shuffle your deck.",
    "summary": "Haleth searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22140.png",
    "ringsdb_code": "22140"
  },
  {
    "name": "Woodman Lore",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Ready up to X Woodman characters you control, where X is the number of locations with player card attachments.",
    "summary": "Woodman Lore readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22141.png",
    "ringsdb_code": "22141"
  },
  {
    "name": "Westfold Lancer",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After Westfold Lancer quests successfully, discard it to choose a non-unique enemy in the staging area. Deal 2 damage to the chosen enemy.",
    "summary": "Westfold Lancer deals 2 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22142.png",
    "ringsdb_code": "22142"
  },
  {
    "name": "Tireless Thoroughbred",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Mount"
    ],
    "text": "Restricted.\nAttach to a Warrior character. Restricted. Attached character gains ranged and sentinel.",
    "summary": "Tireless Thoroughbred grants Ranged to the attached character, turning them into a ranged attacker who can assist any player in combat.",
    "tags": [
      "Sentinel",
      "Ranged",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22143.png",
    "ringsdb_code": "22143"
  },
  {
    "name": "Misty Mountain Journeyman",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Dúnedain",
      "Scout"
    ],
    "text": "You cannot play Misty Mountain Journeyman from your hand unless you are engaged with an enemy.",
    "summary": "Misty Mountain Journeyman manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22144.png",
    "ringsdb_code": "22144"
  },
  {
    "name": "A Desperate Path",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: At the end of the staging step, discard cards from the top of the encounter deck until you discard a treachery. Resolve its 'when revealed' effects to ready each of your questing characters. Each of your questing characters gets +1 [willpower] until the end of the phase.",
    "summary": "A Desperate Path readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Action Advantage (Readying)",
      "Willpower Boost",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22145.png",
    "ringsdb_code": "22145"
  },
  {
    "name": "Thorongil",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "3",
    "traits": [
      "Title"
    ],
    "text": "Attach to a non-[fellowship], non-[baggins] hero you control.\nResponse: After you attach Thorongil to a hero, search your collection for a different non-[fellowship], non-[baggins] version of that hero and attach it to Thorongil. While Thorongil is in play, attached hero gains the game text and resource icon of the attached hero card. If Thorongil leaves play, remove the hero card attached to it from the game.",
    "summary": "Thorongil is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22146.png",
    "ringsdb_code": "22146"
  },
  {
    "name": "Ingold",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Response: After a Gondor or Warrior ally enters play under your control, draw 1 card. Then, either spend 1 resource from Ingold’s pool or raise your threat by 1. (Limit once per phase.)",
    "summary": "Ingold generates a bonus each time a character leaves or enters play, creating value in Sneak Attack or Ally-sacrifice strategies.",
    "tags": [
      "Card Draw (Passive)",
      "Threat Payment",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/300001.png",
    "ringsdb_code": "300001"
  },
  {
    "name": "Celador",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Gondor",
      "Ranger",
      "Warrior"
    ],
    "text": "Ranged.\nReduce the total [threat] in the staging area by 1 for each unattached Trap you control.\nResponse: After a Trap card you control is attached to an enemy, either ready Celador or reduce your threat by 1.",
    "summary": "Celador readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Threat Reduction",
      "Ranged",
      "Staging Area Control",
      "Traps",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/300002.png",
    "ringsdb_code": "300002"
  },
  {
    "name": "Thengel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Rohan",
      "Noble",
      "Warrior"
    ],
    "text": "Response: After an ally is discarded from play, that ally’s owner searches the top 5 cards of their deck for an ally that shares a Trait with the discarded ally, puts it into play exhausted, and shuffles their deck. (Limit once per round.)",
    "summary": "Thengel triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/300003.png",
    "ringsdb_code": "300003"
  },
  {
    "name": "Herubrand",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Herubrand gets +1 [willpower] for each hero you control with at least 1 restricted attachment.\nResponse: After an enemy in the staging area is destroyed, draw 1 card.",
    "summary": "Herubrand can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Card Draw (Passive)",
      "Willpower Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/300004.png",
    "ringsdb_code": "300004"
  },
  {
    "name": "Deeping Bowman",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Devoted. Ranged.\nAction: Discard Deeping Bowman to choose an enemy. Until the end of the phase, that enemy does not count its [defense] while determining combat damage.",
    "summary": "Deeping Bowman has Ranged and gets +X attack under certain conditions, serving as a flexible ranged attacker in multiplayer.",
    "tags": [
      "Attack Boost",
      "Ranged"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300005.png",
    "ringsdb_code": "300005"
  },
  {
    "name": "Open the Gates",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Search the top 5 cards of your deck for an ally that shares a Trait with each of your heroes and put it into play. Shuffle your deck. At the end of the phase, if that ally did not leave play, add it to your hand.",
    "summary": "Open the Gates searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300006.png",
    "ringsdb_code": "300006"
  },
  {
    "name": "Wealth of Adventure",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Action: Search your deck for a card with the Skill trait and add it to your hand. Shuffle your deck.",
    "summary": "Wealth of Adventure searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300007.png",
    "ringsdb_code": "300007"
  },
  {
    "name": "Feast of Plenty",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Feast of Plenty’s resource cost must be paid from a single hero’s resource pool.\nAction: Ready up to 3 heroes and add 1 resource to each of their resource pools. Only 1 copy of Feast of Plenty can be played by the players each round.",
    "summary": "Feast of Plenty readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Resource Generation",
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300008.png",
    "ringsdb_code": "300008"
  },
  {
    "name": "Deeping Defender",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan"
    ],
    "text": "Devoted.\nResponse: After Deeping Defender defends an attack, return the attacking enemy to the staging area and deal 1 damage to it.",
    "summary": "Deeping Defender controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Staging Area Attack",
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 3,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300009.png",
    "ringsdb_code": "300009"
  },
  {
    "name": "Morwen Steelsheen",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Rohan",
      "Gondor",
      "Noble"
    ],
    "text": "Action: Put Morwen Steelsheen into play from your hand. Then, discard a Rohan or Gondor ally you control.\nResponse: After a Rohan or Gondor ally leaves play, exhaust Morwen Steelsheen to either heal 2 damage from a character or reduce your threat by 1.",
    "summary": "Morwen Steelsheen heals 2 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Threat Reduction",
      "Healing",
      "Ally Mustering",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/300010.png",
    "ringsdb_code": "300010"
  },
  {
    "name": "It Should Be Spared",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: After a Trap card you control attaches to an enemy, return it to your hand. Then, play it from your hand for no cost.",
    "summary": "It Should Be Spared provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount",
      "Traps",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300011.png",
    "ringsdb_code": "300011"
  },
  {
    "name": "Spring the Trap",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [
      "Skill"
    ],
    "text": "Response: After a Trap card you control attaches to an enemy, put a Ranger ally into play from your hand.",
    "summary": "Spring the Trap puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Traps",
      "Ally Mustering",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300012.png",
    "ringsdb_code": "300012"
  },
  {
    "name": "Squire of the Mark",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Rohan",
      "Servant"
    ],
    "text": "Response: After a Rohan ally you control is discarded from play, add Squire of the Mark to the victory display to put that ally into play exhausted.",
    "summary": "Squire of the Mark puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering",
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300013.png",
    "ringsdb_code": "300013"
  },
  {
    "name": "Rammas Lookout",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Scout"
    ],
    "text": "Devoted.\nWhile each hero you control has at least 1 resource in its resource pool, Rammas Lookout gets +1 [willpower] and does not exhaust to quest.",
    "summary": "Rammas Lookout boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Willpower Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300014.png",
    "ringsdb_code": "300014"
  },
  {
    "name": "Théodwyn",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Rohan",
      "Noble"
    ],
    "text": "Response: After Théodwyn enters play, either draw 1 card or add 1 resource to a Noble hero’s resource pool.",
    "summary": "Théodwyn generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Card Draw (Passive)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/300015.png",
    "ringsdb_code": "300015"
  },
  {
    "name": "Light-footed Steed",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Rohan hero. Restricted.\nResponse: After a character you control leaves play, exhaust Light-footed Steed to ready attached hero. Then, if the character that left play was unique, attached hero gets +1 [attack] until the end of the round.",
    "summary": "Light-footed Steed allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Attachment Synergy",
      "Bounce / Leaves Play Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300016.png",
    "ringsdb_code": "300016"
  },
  {
    "name": "Rammas Sentry",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Devoted.\nWhile each hero you control has at least 1 resource in its resource pool, Rammas Sentry gains: “Response: Cancel 1 point of damage just dealt to a Gondor character. (Limit once per phase.)”",
    "summary": "Rammas Sentry provides niche utility to Tactics decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Damage Prevention"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300017.png",
    "ringsdb_code": "300017"
  },
  {
    "name": "Live Bait",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Trap"
    ],
    "text": "Play only if you control an unattached Trap attachment.\nAction: Choose a non-unique enemy in play. Until the end of the round, treat the chosen enemy’s printed text box as if it were blank (except for Traits). Then, attach an unattached Trap attachment you control to that enemy.",
    "summary": "Live Bait prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control",
      "Traps"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300018.png",
    "ringsdb_code": "300018"
  },
  {
    "name": "Worthy of Remembrance",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Combat Action: Discard a Rohan ally you control to choose an enemy. Deal 2 damage to that enemy (4 damage instead if the ally was unique).",
    "summary": "Worthy of Remembrance deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300019.png",
    "ringsdb_code": "300019"
  },
  {
    "name": "Need Brooks No Delay",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "Reduce the cost to play Need Brooks No Delay by 1 for each Rohan hero you control.\nPlanning Action: Search the top 10 cards of your deck for a card with printed cost 2 or less (3 or less if it is unique) and set it aside. Shuffle your deck. Then, play the set aside card for no cost as if it were in your hand.",
    "summary": "Need Brooks No Delay searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Resource Discount",
      "Player Deck Manipulation",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/300020.png",
    "ringsdb_code": "300020"
  },
  {
    "name": "Fatty Bolger",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Hobbit"
    ],
    "text": "Setup: Reduce your threat by 2.\nResponse: Raise your threat by 4 and exhaust Fatty Bolger to cancel a non-unique enemy card just revealed from the encounter deck and add it to the victory display. (Limit once per game for the group.)",
    "summary": "Fatty Bolger reduces threat by 2, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Threat Payment",
      "Encounter Deck Manipulation",
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/301001.png",
    "ringsdb_code": "301001"
  },
  {
    "name": "Widfast",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Woodman",
      "Scout"
    ],
    "text": "Setup: Search your collection for a Creature ally and add it to your hand. For the first round, reduce its cost by 2.\nTravel Action: If there is 1 active location, spend 1 resource from Widfast’s pool to travel to another location, resolving its Travel effect. (There are now 2 active locations.)",
    "summary": "Widfast offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Discount",
      "Location Control (Travel/Bypass)"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/301002.png",
    "ringsdb_code": "301002"
  },
  {
    "name": "Lily Cotton",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Lily Cotton to ready a different Hobbit ally and add Lily Cotton’s [willpower], [attack], and [defense] to that ally’s [willpower], [attack], and [defense] respectively until the end of the phase. At the end of the phase, if that ally is still in play, return it to its owner’s hand. (Limit once per phase.)",
    "summary": "Lily Cotton readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/301003.png",
    "ringsdb_code": "301003"
  },
  {
    "name": "A Lesson in Caution",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Secrecy 1.\nAction: Draw 1 card. Then, either reduce your threat by 2, or the next card you play this phase gains secrecy 1.",
    "summary": "A Lesson in Caution reduces threat by 2, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Resource Discount",
      "Card Draw (Active)",
      "Threat Reduction",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/301004.png",
    "ringsdb_code": "301004"
  },
  {
    "name": "There and Back Again",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Secrecy 1.\nResponse: After a Hobbit ally leaves play, search your hand and discard pile for a copy of that ally and put it into play, under any player’s control.",
    "summary": "There and Back Again provides situational at a reduced Secrecy 1 cost for low-threat decks support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount",
      "Bounce / Leaves Play Synergy",
      "Response Trigger",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/301005.png",
    "ringsdb_code": "301005"
  },
  {
    "name": "Buckland Shirriff",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Hobbit",
      "Shirriff"
    ],
    "text": "Devoted. Ranged.\nResponse: After an enemy that shares a Trait with an enemy in the victory display is added to the staging area, spend 1 [lore] resource to put Buckland Shirriff into play from your hand, under your control.",
    "summary": "Buckland Shirriff has Ranged, contributing attack power to any player's combat without needing to engage the enemy itself.",
    "tags": [
      "Ranged",
      "Ally Mustering",
      "Victory Display Synergy",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/301006.png",
    "ringsdb_code": "301006"
  },
  {
    "name": "Weep No More!",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "1",
    "traits": [],
    "text": "Limit 3 copies of Weep No More! in the victory display.\nResponse: After a “when revealed” effect or a shadow effect on a treachery card resolves, add Weep No More! to the victory display to add that treachery card to the victory display.",
    "summary": "Weep No More! interacts with the victory display, enabling removal of dangerous encounter cards or scaling effects from cleared cards.",
    "tags": [
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/301007.png",
    "ringsdb_code": "301007"
  },
  {
    "name": "Fear! Fire! Foes!",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Secrecy 1. Play only if you do not control a Warrior hero.\nAction: Choose a non-unique enemy and an attribute ([threat], [attack], or [defense]). Until the end of the phase, reduce the chosen attribute of that enemy to 0.",
    "summary": "Fear! Fire! Foes! provides situational at a reduced Secrecy 1 cost for low-threat decks support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Resource Discount",
      "Secrecy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/301008.png",
    "ringsdb_code": "301008"
  },
  {
    "name": "Horn-call of Buckland",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a [lore] or Hobbit hero.\nResponse: After you engage an enemy that shares a Trait with an enemy in the victory display, exhaust Horn-call of Buckland to ready attached hero. Then, that enemy gets −1 [attack] and −1 [defense] until the end of the round.",
    "summary": "Horn-call of Buckland grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Engagement Control",
      "Attachment Synergy",
      "Victory Display Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/301009.png",
    "ringsdb_code": "301009"
  },
  {
    "name": "Young Tom",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Hobbit"
    ],
    "text": "During the round that Young Tom enters play, enemies get +5 engagement cost.",
    "summary": "Young Tom manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/301010.png",
    "ringsdb_code": "301010"
  },
  {
    "name": "Gavin",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Scout"
    ],
    "text": "Cannot have attachments.\nResponse: After an encounter card without surge is revealed, exhaust Gavin to give that card surge and add 1 resource to the pool of a Scout hero you control. If the next encounter card revealed is not a location, discard it without resolving its effects.",
    "summary": "Gavin generates 1 resource per activation, supplementing your heroes' income for expensive cards.",
    "tags": [
      "Resource Generation",
      "Surge",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/301011.png",
    "ringsdb_code": "301011"
  },
  {
    "name": "Alagos",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nResponse: After an Eagle ally enters a player’s play area, add 1 resource to the pool of a hero that player controls. (Limit once per round.)",
    "summary": "Alagos generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302038.png",
    "ringsdb_code": "302038"
  },
  {
    "name": "Faunith",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nQuest Action: Play an Eagle ally from your hand. Then, you may exhaust that ally to either commit it to the quest or deal 1 damage to an enemy in the staging area.",
    "summary": "Faunith deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302039.png",
    "ringsdb_code": "302039"
  },
  {
    "name": "Messenger of Manwë",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot defend or have restricted attachments.\nResponse: After Messenger of Manwë enters your play area, give an Eagle or Noble hero you control +1 [willpower] until the end of the round.\nResponse: After Messenger of Manwë commits to the quest, give control of it to another player.",
    "summary": "Messenger of Manwë boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/302040.png",
    "ringsdb_code": "302040"
  },
  {
    "name": "Veteran Eagle",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Eagle",
      "Warrior"
    ],
    "text": "Cannot have restricted attachments.\nResponse: After Veteran Eagle enters your play area, each copy of Veteran Eagle you control gets +1 [willpower], +1 [attack] and +1 [defense] until the end of the round.",
    "summary": "Veteran Eagle boosts each character's willpower by +1, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/302041.png",
    "ringsdb_code": "302041"
  },
  {
    "name": "Chieftain of the Skies",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Devoted.\nCannot have restricted attachments.\nResponse: After Chieftain of the Skies enters your play area, ready an ally you control.",
    "summary": "Chieftain of the Skies readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 3,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/302042.png",
    "ringsdb_code": "302042"
  },
  {
    "name": "Box of Earth",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Gift"
    ],
    "text": "Play only if you control a Noldor or Silvan hero.\nAttach to a hero.\nAction: Exhaust Box of Earth to choose a location. Place 1 progress on that location and give it the Forest trait until the end of the round.",
    "summary": "Box of Earth places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302043.png",
    "ringsdb_code": "302043"
  },
  {
    "name": "Roving Herbmaster",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dúnedain",
      "Healer"
    ],
    "text": "Response: After a player reduces their threat, heal 1 damage from a character you control. Then, you may give control of Roving Herbmaster to another player. (Limit once per round.)",
    "summary": "Roving Herbmaster heals 1 damage per action—sometimes on multiple targets—making it the most efficient healing option in Lore.",
    "tags": [
      "Threat Reduction",
      "Healing",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/302044.png",
    "ringsdb_code": "302044"
  },
  {
    "name": "Grip",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature"
    ],
    "text": "Limit 1 per deck. Cannot have attachments. Each enemy in play gets +1 engagement cost.\nResponse: After Grip enters play, search your deck for a Creature ally and add it to your hand. Until the end of the phase, that ally does not require a resource match. Shuffle your deck.",
    "summary": "Grip manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302045.png",
    "ringsdb_code": "302045"
  },
  {
    "name": "Fang",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature"
    ],
    "text": "Limit 1 per deck. Cannot have attachments. Each enemy in play gets +1 engagement cost.\nResponse: After Fang enters play, search your deck for a Creature ally and add it to your hand. Until the end of the phase, that ally does not require a resource match. Shuffle your deck.",
    "summary": "Fang manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302046.png",
    "ringsdb_code": "302046"
  },
  {
    "name": "Wolf",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature"
    ],
    "text": "Limit 1 per deck. Cannot have attachments. Each enemy in play gets +1 engagement cost.\nResponse: After Wolf enters play, search your deck for a Creature ally and add it to your hand. Until the end of the phase, that ally does not require a resource match. Shuffle your deck.",
    "summary": "Wolf manipulates enemy engagement costs or forces engagements, letting you control which enemies you face each round.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302047.png",
    "ringsdb_code": "302047"
  },
  {
    "name": "Hidden Roosts",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Eagle"
    ],
    "text": "Response: When an Eagle ally leaves play, that ally’s controller reduces their threat by X, where X is the printed cost of the ally. If X is 2 or less, that player also draws 1 card.",
    "summary": "Hidden Roosts reduces threat by X, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Card Draw (Passive)",
      "Threat Reduction",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/302048.png",
    "ringsdb_code": "302048"
  },
  {
    "name": "Breath of Arda",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "X",
    "traits": [
      "Eagle"
    ],
    "text": "Encounter Action: Return X Eagle allies you own (under any player’s control) to your hand. Then, put each of those allies into play under any player’s control, one at a time. Remove Breath of Arda from the game.",
    "summary": "Breath of Arda puts an ally into play without paying its cost, enabling board flooding or enabling a key ally's enter-play ability mid-round.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/302049.png",
    "ringsdb_code": "302049"
  },
  {
    "name": "Golden Crown",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Eagle"
    ],
    "text": "Attach to an Eagle hero. Attached hero gains the Noble trait.\nAction: Exhaust Golden Crown to choose an Eagle ally you own under any player’s control. Either give control of that ally to a different player, or discard that ally from play to add 1 resource to attached hero’s pool.",
    "summary": "Golden Crown generates 1 resources per exhaust, serving as the primary income attachment in Neutral decks.",
    "tags": [
      "Resource Generation",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302050.png",
    "ringsdb_code": "302050"
  },
  {
    "name": "Guided by Fate",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a hero.\nResponse: When you would shuffle a set-aside card with the encounter keyword into the encounter deck, shuffle it into the top 5 cards instead.\nAction: If the encounter deck has 5 or more cards in it, exhaust Guided by Fate and raise your threat by 1 to shuffle the top card of the encounter discard pile into the top 5 cards of the encounter deck.",
    "summary": "Guided by Fate lets the attached hero look at or manipulate the encounter deck, providing consistent scrying without spending event cards.",
    "tags": [
      "Threat Payment",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/302051.png",
    "ringsdb_code": "302051"
  },
  {
    "name": "Barliman Butterbur",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Bree"
    ],
    "text": "Response: After Barliman Butterbur takes damage from an undefended attack, draw 1 card.",
    "summary": "Barliman Butterbur triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Card Draw (Passive)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/303071.png",
    "ringsdb_code": "303071"
  },
  {
    "name": "Nob",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Hobbit",
      "Bree",
      "Servant"
    ],
    "text": "Reduce the cost of the first Item attachment you play on another Bree or Hobbit character each round by 1.\nAction: Exhaust Nob to draw a card. If that card is an Item attachment, ready a Bree character. (Limit once per round.)",
    "summary": "Nob readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Resource Discount",
      "Card Draw (Passive)",
      "Action Advantage (Readying)"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/303072.png",
    "ringsdb_code": "303072"
  },
  {
    "name": "Harry Goatleaf",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Bree"
    ],
    "text": "Response: Cancel 1 point of combat damage just dealt to a hero you control. (Limit once per round per hero.)",
    "summary": "Harry Goatleaf prevents or cancels incoming damage, enabling a hero to absorb punishment without losing hit points.",
    "tags": [
      "Damage Prevention",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/303073.png",
    "ringsdb_code": "303073"
  },
  {
    "name": "Bob",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit",
      "Bree",
      "Servant"
    ],
    "text": "Response: After Bob enters play, search your deck for a Mount or Pony card and add it to your hand. Shuffle your deck.",
    "summary": "Bob searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/303074.png",
    "ringsdb_code": "303074"
  },
  {
    "name": "Bree Pony",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to a Bree or Hobbit character. Restricted.\nAttached character gets +1 hit point.\nResponse: When attached character takes damage from an undefended attack, exhaust Bree Pony to reduce that damage by 1.",
    "summary": "Bree Pony adds +1 hit points, enabling the attached hero to absorb punishment and survive scenarios with brutal recurring damage.",
    "tags": [
      "Hit Point Boost",
      "Attachment Synergy",
      "Restricted",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303075.png",
    "ringsdb_code": "303075"
  },
  {
    "name": "Half-pint",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item"
    ],
    "text": "Attach to a character.\nRefresh Action: Discard Half-pint to heal up to 2 damage from attached character. Then, put an Item attachment in your discard pile on the top of your deck.",
    "summary": "Half-pint provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303076.png",
    "ringsdb_code": "303076"
  },
  {
    "name": "Seasoned Forager",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a hero you control. Limit 1 per player.\nYour heroes cannot gain resources from player card effects.\nAction: Exhaust Seasoned Forager to reduce the cost of the next card you play this phase that matches the attached hero’s sphere by 1.",
    "summary": "Seasoned Forager reduces the cost of certain cards, providing consistent economic efficiency in decks that play many of that card type.",
    "tags": [
      "Resource Discount",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303077.png",
    "ringsdb_code": "303077"
  },
  {
    "name": "Pint",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Play only if you control a unique Bree character.\nAttach to a hero.\nAction: Exhaust Pint to heal 1 damage from attached hero.\nAction: Discard Pint to heal 5 damage from attached hero.",
    "summary": "Pint provides on-demand healing, keeping characters alive through attrition-heavy quests without a dedicated healer ally.",
    "tags": [
      "Healing",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303078.png",
    "ringsdb_code": "303078"
  },
  {
    "name": "Scheming Staddler",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Bree"
    ],
    "text": "Response: After an undefended attack damages a hero you control, deal 1 damage to the attacking enemy. (Limit once per phase.)",
    "summary": "Scheming Staddler deals 1 damage to enemies outside standard combat, softening targets or eliminating low-health enemies without spending an attack.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303079.png",
    "ringsdb_code": "303079"
  },
  {
    "name": "Bree-land Protector",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Dúnedain",
      "Bree"
    ],
    "text": "Devoted.\nResponse: Exhaust Bree-land Protector to cancel a shadow effect just triggered during an attack and deal the attacking enemy another shadow card. If this attack deals no damage, return Bree-land Protector to its owner’s hand after the attack.",
    "summary": "Bree-land Protector cancels or discards shadow cards, preventing dangerous shadow effects that could otherwise wipe defenders or spike enemy attack.",
    "tags": [
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303080.png",
    "ringsdb_code": "303080"
  },
  {
    "name": "A Stout Heart",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: Cancel a shadow effect just triggered during an undefended attack. After this attack damages a single hero, the controller of that hero may spend 1 resource from its pool to reduce their threat by 3.",
    "summary": "A Stout Heart cancels or discards a shadow card, preventing deadly shadow effects from turning a manageable defense into a catastrophe.",
    "tags": [
      "Threat Reduction",
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303081.png",
    "ringsdb_code": "303081"
  },
  {
    "name": "Gift of Foresight",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a hero with at least 2 printed [willpower]. Limit 1 per hero.\nAttached hero gets +2 [defense] if it has not committed to the quest this round.",
    "summary": "Gift of Foresight boosts defense by +2, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303082.png",
    "ringsdb_code": "303082"
  },
  {
    "name": "Archet Alekeeper",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Bree"
    ],
    "text": "Devoted.\nResponse: After an undefended attack damages a hero you control, ready Archet Alekeeper and give it +1 [attack] until the end of the phase.",
    "summary": "Archet Alekeeper readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/303083.png",
    "ringsdb_code": "303083"
  },
  {
    "name": "Gaeronel",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Noldor",
      "Warrior"
    ],
    "text": "While there is a top card of your discard pile,\nGaeronel gets +2 [willpower] if it is an event;\nGaeronel gets +2 [attack] if it is an ally;\nGaeronel gets +2 [defense] if it is an attachment.",
    "summary": "Gaeronel can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/304101.png",
    "ringsdb_code": "304101"
  },
  {
    "name": "Glorfindel",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Noldor",
      "Noble",
      "Warrior"
    ],
    "text": "Glorfindel gets +2 [attack] while attacking alone.\nGlorfindel gets +2 [attack] while attacking a unique enemy.",
    "summary": "Glorfindel can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Unique Synergy"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/304102.png",
    "ringsdb_code": "304102"
  },
  {
    "name": "Harlond Lookout",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Noldor",
      "Scout"
    ],
    "text": "Devoted.\nResponse: After Harlond Lookout is destroyed, ready a character you control.",
    "summary": "Harlond Lookout readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304103.png",
    "ringsdb_code": "304103"
  },
  {
    "name": "Balin",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Dwarf"
    ],
    "text": "Devoted.\nResponse: After a card is discarded from the top of your deck, ready Balin. (Limit once per round.)",
    "summary": "Balin readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/304104.png",
    "ringsdb_code": "304104"
  },
  {
    "name": "Salvaged Supplies",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Item"
    ],
    "text": "Response: At the end of the refresh phase, if none of your heroes gained any resources from player card effects this round, add 1 resource to the pool of a hero you control.\nAction: Exhaust a character you control to return Salvaged Supplies from your discard pile to your hand.",
    "summary": "Salvaged Supplies generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Recursion",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304105.png",
    "ringsdb_code": "304105"
  },
  {
    "name": "Lay of the Nauglamír",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "5",
    "traits": [
      "Noldor",
      "Dwarf",
      "Song"
    ],
    "text": "Devoted.\nAction: Discard the top 10 cards of your deck. Choose up to 2 different Noldor or Dwarf allies discarded by this effect and put them into play. Each chosen ally must have a printed cost of 2 or less. You may shuffle any number of the other cards discarded by this effect back into your deck. Remove Lay of the Nauglamír from the game.",
    "summary": "Lay of the Nauglamír searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304106.png",
    "ringsdb_code": "304106"
  },
  {
    "name": "Wandering Spirit",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "0",
    "traits": [
      "Noldor",
      "Spirit"
    ],
    "text": "Cannot enter play.\nAction: If Wandering Spirit is in your discard pile, move it up or down by 1 or 2 cards. Then, if it is next to a Noldor ally with a printed cost of 2 or less, you may spend 1 [spirit] resource and remove Wandering Spirit from the game to put that ally into play. (Limit once per round.)",
    "summary": "Wandering Spirit puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Ally Mustering",
      "Sphere Synergy"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 0,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304107.png",
    "ringsdb_code": "304107"
  },
  {
    "name": "Relic of Nargothrond",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Armor"
    ],
    "text": "Attach to a Noldor or Dwarf character. Restricted. Limit 1 per character. Relic of Nargothrond can be played from your discard pile once per round.\nAttached character gets +1 [defense].\nAction: Discard Relic of Nargothrond to give attached character +2 [defense] until the end of the phase.",
    "summary": "Relic of Nargothrond boosts defense by +1, converting a fragile hero into a reliable blocker or improving a defender's survivability.",
    "tags": [
      "Defense Boost",
      "Recursion",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304108.png",
    "ringsdb_code": "304108"
  },
  {
    "name": "Onward Into Battle",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Skill"
    ],
    "text": "Attach to a Warrior hero.\nEncounter Action: Exhaust Onward Into Battle to ready attached hero.",
    "summary": "Onward Into Battle allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304109.png",
    "ringsdb_code": "304109"
  },
  {
    "name": "Legacy of Gondolin",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a Noldor hero you control. Limit 1 per hero.\nYou cannot play allies or attachments from your hand unless you have 2 or fewer cards in your hand.\nAction: Exhaust Legacy of Gondolin to either draw 1 card or discard Legacy of Gondolin.",
    "summary": "Legacy of Gondolin draws 1 card on demand, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/304110.png",
    "ringsdb_code": "304110"
  },
  {
    "name": "Rowan",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Woodman",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After you play an attachment on a location, add 1 resource to the pool of a hero you control. (Limit once per round.)\nQuest Action: Choose a player to take control of the first player token. Each player can only be chosen once per game.",
    "summary": "Rowan generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation",
      "Sentinel",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/305144.png",
    "ringsdb_code": "305144"
  },
  {
    "name": "Osbera",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Beorning"
    ],
    "text": "Side A\nReduce the total [threat] in the staging area by 1 for each damaged Beorning character you control (limit –5 [threat]).\nResponse: After you engage an enemy, spend 1 resource from Osbera’s pool to flip her.\nSide B\nCannot have restricted attachments. If you are not engaged with an enemy, flip Osbera.\nResponse: Deal 1 damage to a Beorning character you control to cancel 2 points of damage just dealt to a character you control. (Limit once per round.)",
    "summary": "Osbera reduces threat by X, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Direct Damage",
      "Damage Prevention",
      "Staging Area Control",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/305145.png",
    "ringsdb_code": "305145"
  },
  {
    "name": "Woodmen's Outpost",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a location. Limit 1 per location.\nResponse: After attached location is explored, each character controlled by the first player gets +1 [attack] and +1 [defense] until the end of the round.",
    "summary": "Woodmen's Outpost provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305146.png",
    "ringsdb_code": "305146"
  },
  {
    "name": "Lie of the Land",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a location.\nAction: Exhaust a Scout character to place 1 progress on attached location. If that location is not explored by this effect, you may attach Lie of the Land to another location.",
    "summary": "Lie of the Land places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305147.png",
    "ringsdb_code": "305147"
  },
  {
    "name": "Hunting Dogs",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Creature",
      "Scout"
    ],
    "text": "Devoted. Cannot have attachments.\nResponse: After a location with an attachment is explored, ready Hunting Dogs.",
    "summary": "Hunting Dogs readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305148.png",
    "ringsdb_code": "305148"
  },
  {
    "name": "Beorning Pony",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Creature",
      "Beorning",
      "Pony"
    ],
    "text": "Cannot have attachments.\nResponse: After Beorning Pony enters play, discard the top 5 cards of your deck. Then, you may spend 1 [tactics] resource to add one of the cards discarded by this effect to your hand.",
    "summary": "Beorning Pony searches the top cards of a deck for a target, improving deck consistency and tutoring critical cards on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305149.png",
    "ringsdb_code": "305149"
  },
  {
    "name": "Birna",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Beorning"
    ],
    "text": "Action: Exhaust Birna and spend 1 [tactics] resource to put a Beorning ally from your discard pile into play. At the end of the phase, if that ally is still in play or in your discard pile, shuffle it into your deck.",
    "summary": "Birna puts another ally into play, enabling free board flooding or chaining ally abilities without paying full cost.",
    "tags": [
      "Recursion",
      "Ally Mustering",
      "Sphere Synergy"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/305150.png",
    "ringsdb_code": "305150"
  },
  {
    "name": "Descendants of Beorn",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Response: When a Beorning ally you control leaves play, add 1 resource to a Beorning hero’s pool for each damage token that was on that ally (up to that ally’s printed hit points).",
    "summary": "Descendants of Beorn generates extra resources immediately, providing a one-time economic burst for a critical turn.",
    "tags": [
      "Resource Generation",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305151.png",
    "ringsdb_code": "305151"
  },
  {
    "name": "Beorn's Welcome",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Boon"
    ],
    "text": "Play only if you control a Beorning hero. Attach to a hero. Limit 1 per hero.\nResponse: After you spend any resources from attached hero’s pool for a purpose other than paying to play a card, exhaust Beorn’s Welcome to add 1 resource to attached hero’s pool.",
    "summary": "Beorn's Welcome generates 1 resources per exhaust, serving as the primary income attachment in Tactics decks.",
    "tags": [
      "Resource Generation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305152.png",
    "ringsdb_code": "305152"
  },
  {
    "name": "Subdued",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Condition"
    ],
    "text": "Attach to a damaged enemy engaged with you. Limit 1 per enemy.\nAttached enemy gets –4 [attack].",
    "summary": "Subdued is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305153.png",
    "ringsdb_code": "305153"
  },
  {
    "name": "Without My Hat",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Limit 1 copy of Without My Hat in the victory display.\nAction: Add Without My Hat to the victory display to search your collection for an attachment. If no copy of that attachment was in your deck during setup, add it to your hand.",
    "summary": "Without My Hat interacts with the victory display, enabling removal of dangerous encounter cards or scaling effects from cleared cards.",
    "tags": [
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/305154.png",
    "ringsdb_code": "305154"
  },
  {
    "name": "Gilraen",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dúnedain",
      "Noble"
    ],
    "text": "Setup: You may choose to give Gilraen –2 [willpower] and up to 2 other Dúnedain heroes +2 [willpower] until the end of the game.\nAction: Turn a shadow card dealt to an enemy faceup. Then, you may deal that enemy 1 additional faceup shadow card to draw 1 card. (Limit once per phase.)",
    "summary": "Gilraen exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Spirit.",
    "tags": [
      "Card Draw (Active)",
      "Willpower Boost"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306182.png",
    "ringsdb_code": "306182"
  },
  {
    "name": "A Fair Exchange",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "0",
    "traits": [],
    "text": "Action: Discard a unique card from your hand that shares a title with a card in play to search your deck for a different unique card and add it to your hand. Shuffle your deck.",
    "summary": "A Fair Exchange searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation",
      "Unique Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/306184.png",
    "ringsdb_code": "306184"
  },
  {
    "name": "Elessar",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Noble hero or Aragorn. Attached character gains the Gondor trait. If attached character is Aragorn, he gains the Noble trait.\nAction: Exhaust Elessar to choose an ally that is defending an attack and shares a Trait with the attached character. Either ready that ally or give it +1 [defense] for that attack.",
    "summary": "Elessar allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306185.png",
    "ringsdb_code": "306185"
  },
  {
    "name": "The Renewer",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Gondor hero or Aragorn. Attached character gains the Healer trait.\nAction: Exhaust The Renewer to choose a questing ally that shares a Trait with the attached character. Either ready that ally and heal 1 damage from it or give it +1 [willpower] until the end of the phase.",
    "summary": "The Renewer allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Willpower Boost",
      "Healing",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306186.png",
    "ringsdb_code": "306186"
  },
  {
    "name": "Elendilmir",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item"
    ],
    "text": "Guarded (location).\nAttach to a hero.\nReplace each instance of “once per phase” or “once per round” in the attached character’s text box with “twice per phase” or “twice per round” respectively.\nAction: Exhaust Aragorn to discard the location guarding Elendilmir. Then, attach Elendilmir to Aragorn.",
    "summary": "Elendilmir is a support attachment that enhances the attached character's role in Spirit builds.",
    "tags": [
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306187.png",
    "ringsdb_code": "306187"
  },
  {
    "name": "Estel",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Dúnedain hero or Aragorn. Attached character gains the Noldor trait.\nAction: Exhaust Estel and discard 1 card from your hand to search the top X cards of your deck for 1 card and add it to your hand. Shuffle your deck. X is the number of Traits on the attached character.",
    "summary": "Estel enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306188.png",
    "ringsdb_code": "306188"
  },
  {
    "name": "Chieftain of the North",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Ranger hero or Aragorn. Attached character gains the Warrior trait.\nAction: Exhaust Chieftain of the North to choose an attacking ally that shares a Trait with the attached character. Either ready that ally or give it +1 [attack] for that attack.",
    "summary": "Chieftain of the North allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306189.png",
    "ringsdb_code": "306189"
  },
  {
    "name": "Grey Companion",
    "sphere": "Neutral",
    "type": "Ally",
    "cost_threat": "5",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Sentinel.\nResponse: When you play Grey Companion from your hand, exhaust X Title attachments you control to reduce its cost by X.",
    "summary": "Grey Companion has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Resource Discount",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/306190.png",
    "ringsdb_code": "306190"
  },
  {
    "name": "Andúril",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "4",
    "traits": [
      "Artifact",
      "Item",
      "Weapon"
    ],
    "text": "Attach to a hero with 4 or more Traits.\nRestricted. If attached hero is Aragorn, he gains a [leadership] resource icon.\nAttached hero gets +1 [willpower], +1 [attack], and +1 [defense].\nAction: Exhaust Andúril to ready attached hero.",
    "summary": "Andúril grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Attachment Synergy",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306191.png",
    "ringsdb_code": "306191"
  },
  {
    "name": "Elena",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Noldor",
      "Minstrel"
    ],
    "text": "Reduce the cost of each Instrument attachment you play by 1.\nSetup: Search your deck for an Instrument attachment and add it to your hand. Shuffle your deck.",
    "summary": "Elena searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Resource Discount",
      "Player Deck Manipulation"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307001.png",
    "ringsdb_code": "307001"
  },
  {
    "name": "Tom Bombadil",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Legend",
      "Minstrel"
    ],
    "text": "X is the number of Song cards attached to Tom Bombadil.\nResponse: After you play a Song card, either deal 2 damage to an enemy engaged with a player or heal 2 damage from a character. (Limit once per phase.)",
    "summary": "Tom Bombadil heals 2 damage per action, sustaining characters through repeated combat without dedicated healing allies.",
    "tags": [
      "Direct Damage",
      "Healing",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": 0,
    "defense": 0,
    "health": 6,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307002.png",
    "ringsdb_code": "307002"
  },
  {
    "name": "Goldberry",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Spirit",
      "Healer",
      "Minstrel"
    ],
    "text": "Minstrel characters with at least 1 Song attachment do not exhaust to quest.\nResponse: After you play a Song event, attach it to a Minstrel character. It counts as a Song attachment with a blank text box. (Limit once per round.)",
    "summary": "Goldberry lets allies quest without exhausting on the turn they enter play, enabling rapid board deployment and quest pressure simultaneously.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 0,
    "defense": 0,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307003.png",
    "ringsdb_code": "307003"
  },
  {
    "name": "Lobelia Sackville-Baggins",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Hobbit",
      "Burglar"
    ],
    "text": "You may look at other players’ hands at any time.\nAction: Choose an Item attachment in play or in a player’s hand. Pay X resources to attach it to Lobelia Sackville-Baggins, even if she is ineligible for it. X is its printed cost. (Limit once per round.)",
    "summary": "Lobelia Sackville-Baggins offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307004.png",
    "ringsdb_code": "307004"
  },
  {
    "name": "An Unexpected Party",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Action: Search the top 10 cards of your deck for up to 2 cards with the Song, Instrument, or Minstrel trait and add them to your hand. Shuffle the other cards back into your deck.",
    "summary": "An Unexpected Party searches or tutors from your deck, finding a specific card you need for the current board state.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307005.png",
    "ringsdb_code": "307005"
  },
  {
    "name": "Song of Slumber",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song",
      "Spell"
    ],
    "text": "Play only if you control a Minstrel hero.\nCombat Action: Choose up to 2 enemies engaged with you. Those enemies cannot attack you this phase.",
    "summary": "Song of Slumber prevents enemy attacks or removes an enemy from combat, buying a round of breathing room when defenses would otherwise collapse.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307006.png",
    "ringsdb_code": "307006"
  },
  {
    "name": "Songs of Slaying",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Action: Each Minstrel character gets +1 [attack] until the end of the phase. Each character with a Song attachment gets +1 [attack] until the end of the phase.",
    "summary": "Songs of Slaying boosts attack by +1 for the phase, helping the team overcome high-defense enemies when focused fire alone isn't enough.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307007.png",
    "ringsdb_code": "307007"
  },
  {
    "name": "Wooden Lyre",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Instrument"
    ],
    "text": "Attach to a [leadership] or Minstrel hero. Restricted.\nAction: Exhaust an Instrument attachment to give a character defending an attack +1 [defense] for that attack.",
    "summary": "Wooden Lyre grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Defense Boost",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307008.png",
    "ringsdb_code": "307008"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit",
      "Minstrel"
    ],
    "text": "Response: After Bilbo Baggins commits to the quest, look at the top card of your deck. If that card has flavor text, you may (choose 1): leave it there, discard it, or spend 1 [lore] resource to add it to your hand.",
    "summary": "Bilbo Baggins lets you look at and manipulate the top of the encounter deck, converting blind reveal into calculated risk management.",
    "tags": [
      "Scrying",
      "Player Deck Manipulation",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307009.png",
    "ringsdb_code": "307009"
  },
  {
    "name": "Hey Dol! Merry Dol!",
    "sphere": "Lore",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Song"
    ],
    "text": "Action: Reduce your threat by 1. Then, if this is the first time you played a copy of Hey Dol! Merry Dol! this round, you may exhaust a Minstrel hero to return it to your hand.",
    "summary": "Hey Dol! Merry Dol! reduces threat by 1, acting as a threat safety valve for critical moments when the dial is about to turn past the last enemy.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307010.png",
    "ringsdb_code": "307010"
  },
  {
    "name": "Fatty Lumpkin",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Mount"
    ],
    "text": "Attach to Tom Bombadil or a Hobbit character.\nAction: Exhaust Fatty Lumpkin to ready a character you control with a Mount attachment.",
    "summary": "Fatty Lumpkin allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307011.png",
    "ringsdb_code": "307011"
  },
  {
    "name": "Bronze Bell",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Instrument"
    ],
    "text": "Attach to a [lore] or Minstrel hero. Restricted.\nAction: Exhaust an Instrument attachment to choose a player. Each enemy engaged with that player gets –1 [defense] until the end of the phase.",
    "summary": "Bronze Bell grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Attachment Synergy",
      "Restricted",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307012.png",
    "ringsdb_code": "307012"
  },
  {
    "name": "Daughter of Withywindle",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Spirit",
      "Minstrel"
    ],
    "text": "Response: After Daughter of Withywindle enters play, choose a hero with a Song attachment. Until the end of the round, that hero gains the [leadership], [lore], [spirit], and [tactics] icons.",
    "summary": "Daughter of Withywindle provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Resource Smoothing",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307013.png",
    "ringsdb_code": "307013"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Frodo Baggins to return a card from your discard pile to your hand. (Limit once per game.)\nIf Frodo Baggins is destroyed, or if he is discarded from play by a card effect, the players lose the game.",
    "summary": "Frodo Baggins retrieves cards from the discard pile, enabling recursion of key events or allies that were spent or discarded early.",
    "tags": [
      "Recursion"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307014.png",
    "ringsdb_code": "307014"
  },
  {
    "name": "Bilbo's Walking Song",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Attach to a Hobbit or Minstrel character.\nAction: Exhaust attached character to place 1 progress on a location.",
    "summary": "Bilbo's Walking Song places progress on locations passively or actively, accelerating location clearance in decks without dedicated location control.",
    "tags": [
      "Location Control (Progress)"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307015.png",
    "ringsdb_code": "307015"
  },
  {
    "name": "Let Us Sing Together",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Song"
    ],
    "text": "Play only if you control a hero with the printed Minstrel trait.\nAttach to a character. Limit 1 per character. Attached character gets +1 [willpower] and gains the Minstrel trait.",
    "summary": "Let Us Sing Together gives +1 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307016.png",
    "ringsdb_code": "307016"
  },
  {
    "name": "Lamenter of the Lost",
    "sphere": "Tactics",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Ent",
      "Minstrel"
    ],
    "text": "Devoted. Enters play exhausted.\nCannot have restricted attachments.\nResponse: After Lamenter of the Lost enters play, discard an Ent or Song card from your hand to ready it.",
    "summary": "Lamenter of the Lost readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307017.png",
    "ringsdb_code": "307017"
  },
  {
    "name": "Bilbo's Spoons",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Mathom"
    ],
    "text": "Play only if you control a unique Hobbit character. Attach to a hero.\nAttached hero collects 1 additional resource during the resource phase.\nForced: At the beginning of the planning phase, either discard Bilbo’s Spoons from play or attach it to a hero with a higher threat cost than the attached hero.",
    "summary": "Bilbo's Spoons generates 1 resources per exhaust, serving as the primary income attachment in Tactics decks.",
    "tags": [
      "Resource Generation",
      "Unique Synergy",
      "Forced Effect"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/307018.png",
    "ringsdb_code": "307018"
  },
  {
    "name": "A Burglar Indeed!",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a hero. Limit 1 per hero.\nAction: Exhaust A Burglar Indeed! to choose a card with a guarded attachment. Deal 1 damage to that card if it is an enemy, or place 1 progress on that card if it is a location (deal 2 damage or place 2 progress instead if attached hero is Bilbo Baggins).",
    "summary": "A Burglar Indeed! is a support attachment that enhances the attached character's role in Tactics builds.",
    "tags": [
      "Direct Damage",
      "Guarded"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307019.png",
    "ringsdb_code": "307019"
  },
  {
    "name": "Golden Horn",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item",
      "Instrument"
    ],
    "text": "Attach to a [tactics] or Minstrel hero. Restricted.\nAction: Exhaust an Instrument attachment to give an enemy in the staging area –1 [threat] until the end of the phase. If this effect reduces the enemy’s [threat] to 0, deal 1 damage to it.",
    "summary": "Golden Horn grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing",
      "Threat Reduction",
      "Direct Damage",
      "Staging Area Control",
      "Restricted"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/307020.png",
    "ringsdb_code": "307020"
  },
  {
    "name": "Alatar",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Istari",
      "Easterling"
    ],
    "text": "While you control exactly 2 heroes, Alatar gains a [tactics] icon and: “Response: At the end of setup, search your collection for a copy of Blue Staff and attach it to Alatar.”\nAction: Exhaust an Istari hero to place 2 progress on a player side quest (bypassing any active location). (Limit twice per round.)",
    "summary": "Alatar triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Resource Smoothing",
      "Location Control (Travel/Bypass)",
      "Side Quest Synergy"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/308001.png",
    "ringsdb_code": "308001"
  },
  {
    "name": "Pallando",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Istari",
      "Easterling"
    ],
    "text": "While you control exactly 2 heroes, Pallando gains a [lore] icon and: “Response: At the end of setup, search your collection for a copy of Blue Staff and attach it to Pallando.”\nResponse: After you play a Spell event, ready an Istari hero. (Limit once per round.)",
    "summary": "Pallando readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Resource Smoothing",
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 3,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/308002.png",
    "ringsdb_code": "308002"
  },
  {
    "name": "Luin Cultist",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Easterling",
      "Rhûn"
    ],
    "text": "Action: Exhaust Luin Cultist to reduce the cost of the next Spell card played from your hand this round by 1.\nAction: Exhaust Luin Cultist to shuffle a Spell card from your discard pile into your deck.",
    "summary": "Luin Cultist retrieves cards from the discard pile, enabling recursion of key events or allies that were spent or discarded early.",
    "tags": [
      "Resource Discount",
      "Recursion"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308003.png",
    "ringsdb_code": "308003"
  },
  {
    "name": "Variag Recluse",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Easterling",
      "Khand"
    ],
    "text": "Action: Exhaust Variag Recluse to place 1 progress on the main quest (you may bypass any active location). You cannot trigger this ability if the main quest has only 1 quest point remaining.",
    "summary": "Variag Recluse provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Location Control (Travel/Bypass)"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308004.png",
    "ringsdb_code": "308004"
  },
  {
    "name": "Chariot Racer",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Easterling",
      "Balchoth"
    ],
    "text": "Chariot Racer cannot have more than 2 of the same attribute token.\nAction: Exhaust Chariot Racer to place 1 attribute token on it ([willpower], [attack], or [defense]).",
    "summary": "Chariot Racer provides niche utility to Spirit decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308005.png",
    "ringsdb_code": "308005"
  },
  {
    "name": "East-helper",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "1",
    "traits": [
      "Spell"
    ],
    "text": "Action: Exhaust an Istari hero to (choose 1): heal 5 damage among Easterling characters in play, ready up to 3 Easterling allies, or reduce the cost of the next Easterling ally you play this phase by 3.",
    "summary": "East-helper readies a character or hero to give them a second action, doubling their contribution for the round at a low resource cost.",
    "tags": [
      "Resource Discount",
      "Action Advantage (Readying)",
      "Healing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308006.png",
    "ringsdb_code": "308006"
  },
  {
    "name": "Blue Staff",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Staff"
    ],
    "text": "Attach to Alatar or Pallando. Restricted. Limit 1 per character.\nAction: Exhaust Blue Staff to (choose 1): search the top 10 cards of your deck for a side quest or Spell card and add it to your hand (shuffle your deck), reduce each player’s threat increase for questing unsuccessfully this round by 3, or add 1 resource to attached hero’s pool.",
    "summary": "Blue Staff generates 1 resources per exhaust, serving as the primary income attachment in Spirit decks.",
    "tags": [
      "Resource Generation",
      "Threat Reduction",
      "Player Deck Manipulation",
      "Side Quest Synergy",
      "Restricted",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308007.png",
    "ringsdb_code": "308007"
  },
  {
    "name": "Emissary of the East",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a hero. Reduce each player’s threat increase for questing unsuccessfully by 1 for each Easterling or Harad character you control that is not committed to the quest.\nResponse: After an Easterling or Harad character exhausts as part of a player card effect, place 1 progress on the current quest.",
    "summary": "Emissary of the East reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/308008.png",
    "ringsdb_code": "308008"
  },
  {
    "name": "You Cannot Pass!",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "0",
    "traits": [
      "Spell"
    ],
    "text": "Action: Spend 1 resource to give an Istari character you control +3 [defense] until the end of the phase. Then, you may place You Cannot Pass! on top of your deck.\nResponse: After You Cannot Pass! is discarded from your deck, give an Istari character you control +6 [attack] until the end of the phase.",
    "summary": "You Cannot Pass! grants +6 attack and +3 defense simultaneously, enabling both offense and defense in the same combat phase.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308009.png",
    "ringsdb_code": "308009"
  },
  {
    "name": "Word of Persuasion",
    "sphere": "Neutral",
    "type": "Event",
    "cost_threat": "X",
    "traits": [
      "Spell"
    ],
    "text": "Attached card gains turncoat. Limit 1 copy in play per Istari character in play.\nPlanning Action: Exhaust an Istari character to attach Word of Persuasion to a printed enemy engaged with you. X is that enemy’s highest printed attribute ([threat], [attack], [defense], or hit points).",
    "summary": "Word of Persuasion provides situational support, best deployed at a specific moment in the quest to maximize its impact.",
    "tags": [
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/308010.png",
    "ringsdb_code": "308010"
  },
  {
    "name": "Castellan Wilhelm",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Isengard",
      "Steward"
    ],
    "text": "Increase your threat elimination level by 2 for each ally you control with the word “doomed” in their text box.\nSetup: Search your collection for Ring Wall A and Ring Wall B and put them into play under your control (they are considered to be attached to your play area).",
    "summary": "Castellan Wilhelm offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Threat Payment"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 0,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309037.png",
    "ringsdb_code": "309037"
  },
  {
    "name": "Saruman",
    "sphere": "Neutral",
    "type": "Hero",
    "cost_threat": "13",
    "traits": [
      "Istari",
      "Isengard"
    ],
    "text": "While Saruman has an Artifact card attached, he is considered to have the printed [leadership], [lore], [spirit], and [tactics] icons. Artifact cards cannot be attached or unattached from him except by the effect below.\nAction: Attach an Artifact card from your hand to Saruman. Ignore eligibility and the guarded (X) keyword. At the end of the round, discard it.",
    "summary": "Saruman offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Smoothing",
      "Guarded"
    ],
    "willpower": 3,
    "attack": 4,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309038.png",
    "ringsdb_code": "309038"
  },
  {
    "name": "Dweller of Dunharrow",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Undead",
      "Oathbreaker"
    ],
    "text": "Cannot enter play unless Fulfil Your Oath is in the victory display.\nAction: Attach to an enemy. Counts as a Fear attachment with the text: “Attached enemy cannot be dealt shadow cards.”",
    "summary": "Dweller of Dunharrow provides niche utility to Leadership decks, best in builds that can trigger its specific condition reliably each round.",
    "tags": [
      "Victory Display Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/309039.png",
    "ringsdb_code": "309039"
  },
  {
    "name": "Man of the Mountain",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "1",
    "traits": [
      "Undead",
      "Oathbreaker"
    ],
    "text": "Cannot enter play unless Fulfil Your Oath is in the victory display.\nAction: Attach to an enemy. Counts as a Fear attachment with the text: “Treat all Forced effects in the attached enemy’s text box as blank.”",
    "summary": "Man of the Mountain controls engaged enemies by preventing their attacks or returning them to the staging area, protecting a player who can't defend this round.",
    "tags": [
      "Enemy Control",
      "Victory Display Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/309040.png",
    "ringsdb_code": "309040"
  },
  {
    "name": "King of the Dead",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Undead",
      "Oathbreaker"
    ],
    "text": "Cannot enter play unless Fulfil Your Oath is in the victory display.\nOathbreaker characters get +2 [attack] while attacking an enemy with a Fear attachment.",
    "summary": "King of the Dead provides +2 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Victory Display Synergy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309041.png",
    "ringsdb_code": "309041"
  },
  {
    "name": "Ring Wall Sentry",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Isengard",
      "Warrior"
    ],
    "text": "Combat Action: Trigger doomed 1 to have each copy of Ring Wall Sentry gain sentinel until the end of the phase. (Limit once per phase.)\nResponse: After Ring Wall Sentry defends an attack, ready it. (Limit once per phase.)",
    "summary": "Ring Wall Sentry readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Doomed",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/309042.png",
    "ringsdb_code": "309042"
  },
  {
    "name": "Edrik Ravenhelm",
    "sphere": "Leadership",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Isengard",
      "Warrior"
    ],
    "text": "Action: Trigger doomed 1 to give X Isengard characters +1 [attack] until the end of the phase. X is the tens digit of your threat. (Limit once per phase.)",
    "summary": "Edrik Ravenhelm provides +1 attack when activated, helping the team burst through high-defense enemies or score kills on large groups.",
    "tags": [
      "Attack Boost",
      "Doomed"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309043.png",
    "ringsdb_code": "309043"
  },
  {
    "name": "Army of the Dead",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Play only if Fulfil Your Oath is in the victory display.\nAction: Choose an enemy with a Fear attachment you control. Deal 2 damage to the enemy and return that attachment to your play area as an ally, if able. Repeat this effect any number of times. Remove Army of the Dead from the game.",
    "summary": "Army of the Dead deals 2 damage to enemies without entering standard combat, enabling targeted kills or softening large enemy groups.",
    "tags": [
      "Direct Damage",
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/309044.png",
    "ringsdb_code": "309044"
  },
  {
    "name": "Lord of Isengard",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to Saruman. He gains the Noble trait.\nAction: Exhaust Lord of Isengard to search the top 5 cards of your deck for 1 Artifact or Isengard card and add it to your hand. If Saruman has an exhausted Palantir attached, search your whole deck instead. Shuffle your deck.",
    "summary": "Lord of Isengard enables searching or tutoring from your deck, dramatically improving consistency in combo or synergy-dependent builds.",
    "tags": [
      "Player Deck Manipulation",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309045.png",
    "ringsdb_code": "309045"
  },
  {
    "name": "Ring Wall A",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "-",
    "traits": [
      "Wall",
      "Isengard"
    ],
    "text": "Cannot be included in a deck. Wall cards are immune to non-Wall card effects. You cannot control more than 2 Wall cards.\nPlanning Action: Arrange up to X allies you control into a row between your Wall attachments. X is the tens digit of your threat. Allies cannot be placed or rearranged between your Wall attachments except by this ability.",
    "summary": "Ring Wall A is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Immune"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309046.png",
    "ringsdb_code": "309046"
  },
  {
    "name": "Ring Wall B",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "-",
    "traits": [
      "Wall",
      "Isengard"
    ],
    "text": "Cannot be included in a deck.\nResponse: After an ally between your Wall attachments exhausts to defend an attack, exhaust a Wall attachment and trigger doomed 1 to exhaust any number of other eligible allies between your Wall attachments and declare them as defenders for that attack.",
    "summary": "Ring Wall B is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Doomed",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309047.png",
    "ringsdb_code": "309047"
  },
  {
    "name": "The White",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Doomed 1. Limit 1 per deck.\nAttach to an Istari character. Attached character cannot be discarded from play by card effects.\nAction: Exhaust a Staff attachment on the attached character to discard a Condition attachment from play.",
    "summary": "The White is a support attachment that enhances the attached character's role in Neutral builds.",
    "tags": [
      "Condition Removal",
      "Doomed"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309048.png",
    "ringsdb_code": "309048"
  },
  {
    "name": "Fulfil Your Oath",
    "sphere": "Leadership",
    "type": "Player Side Quest",
    "cost_threat": "0",
    "traits": [],
    "text": "Side A\nLimit 1 per deck. Cannot be included in your deck unless you also include at least 3 Oathbreaker cards in your deck. Cannot be included in your deck if another player has included this card in their deck.\nSetup: Put this quest into play from your deck, this side up, and shuffle your deck. If Aragorn is in play, place 3 progress on this quest.\nForced: After this card is added to the victory display, flip it over.\nSide B\nResponse: After this side is flipped faceup in the victory display, choose a player. That player searches their hand and deck for up to 3 Oathbreaker allies, puts those allies into play, and shuffles their deck.\nWhile this quest is in the victory display, any player can play Oathbreaker allies in their discard pile as if they were in their hand by also raising their own threat by 1 as an additional cost. (Limit 3 times per round for each player.)",
    "summary": "Fulfil Your Oath provides player side quest-level support with context-specific effects relevant to its scenario or campaign.",
    "tags": [
      "Ally Mustering",
      "Victory Display Synergy",
      "Forced Effect",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/309049.png",
    "ringsdb_code": "309049"
  },
  {
    "name": "Narvi's Belt",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Dwarf hero.\nAction: Exhaust Narvi's Belt to give attached hero a [leadership], [lore], [tactics] or [spirit] icon until the end of the phase.",
    "summary": "Narvi's Belt grants an off-sphere resource icon, enabling cross-sphere decks to meet resource-match requirements without dedicated sphere heroes.",
    "tags": [
      "Resource Smoothing"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/03003.png",
    "ringsdb_code": "03003"
  },
  {
    "name": "Erebor Guard",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "4",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: When you play Erebor Guard from you hand, discard the top 2 cards of your deck to reduce its cost by 2.",
    "summary": "Erebor Guard has Sentinel, allowing it to defend across player boundaries and absorb hits from enemies that would otherwise overwhelm a neighbor.",
    "tags": [
      "Resource Discount",
      "Sentinel",
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/16004.png",
    "ringsdb_code": "16004"
  },
  {
    "name": "Celeborn",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Silvan",
      "Noble"
    ],
    "text": "Response: After a Silvan ally enters play, that ally gets +1 [willpower] +1 [attack] and +1 [defense] until the end of the round.",
    "summary": "Celeborn can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 2,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08001.png",
    "ringsdb_code": "08001"
  },
  {
    "name": "Wingfoot",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Title"
    ],
    "text": "Attach to a Ranger hero.\nResponse: After attached hero commits to a quest. name enemy, location or treachery. If a card of the named type is revealed during this quest phase, exhaust Wingfoot to ready attached hero.",
    "summary": "Wingfoot allows the attached character to ready, effectively giving them two actions per round at the cost of an attachment slot.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08092.png",
    "ringsdb_code": "08092"
  },
  {
    "name": "Valiant Sword",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Item",
      "Weapon"
    ],
    "text": "Restricted.\nAttach to a Noble hero. Limit 1 per hero. Restricted. Attached hero gets +1 [attack] (+2 [attack] if your threat is 40 or higher).",
    "summary": "Valiant Sword grants +1 attack at the cost of a Restricted slot, directly improving kill potential against high-defense enemies.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Restricted",
      "Valour"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22083.png",
    "ringsdb_code": "22083"
  },
  {
    "name": "Pillars of the Kings",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "4",
    "traits": [],
    "text": "While your threat is less than 40, reduce the cost to play Pillars of the Kings by 4. Action: Set your threat to 40. If this effect raised your threat, draw a card (draw 4 cards instead if it raised your threat by 10 or more).",
    "summary": "Pillars of the Kings draws 4 cards immediately, refilling the hand after a heavy resource dump or card-intensive round.",
    "tags": [
      "Resource Discount",
      "Card Draw (Active)",
      "Threat Payment"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/22003.png",
    "ringsdb_code": "22003"
  },
  {
    "name": "Hirgon",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Gondor",
      "Scout"
    ],
    "text": "Response: After Hirgon quests successfully, play a [tactics] ally from your hand, reducing its cost by 1 (to a minimum of 1). Then, you may raise your threat by 1 to give that ally +1 [attack] and +1 [defense]  until the end of the round.",
    "summary": "Hirgon can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Threat Payment",
      "Attack Boost",
      "Defense Boost",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/17055.png",
    "ringsdb_code": "17055"
  },
  {
    "name": "Escort from Edoras",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan"
    ],
    "text": "While committed to a quest, Escort from Edoras gets +2 [willpower]\nForced: After resolving a quest to which Escort from Edoras was committed, discard Escort from Edoras from play.",
    "summary": "Escort from Edoras boosts each character's willpower by +2, temporarily inflating questing power for a critical push through a difficult quest stage.",
    "tags": [
      "Willpower Boost",
      "Forced Effect"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02055.png",
    "ringsdb_code": "02055"
  },
  {
    "name": "Westfold Horse-breaker",
    "sphere": "Spirit",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Rohan"
    ],
    "text": "Action: Discard Westfold Westfold Horse-breaker to choose and ready a hero.",
    "summary": "Westfold Horse-breaker readies characters after a triggered condition, granting an extra action to a hero or ally who already exhausted.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 1,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02006.png",
    "ringsdb_code": "02006"
  },
  {
    "name": "Astonishing Speed",
    "sphere": "Spirit",
    "type": "Event",
    "cost_threat": "3",
    "traits": [],
    "text": "Action: Until the end of the phase, all Rohan characters get +2 [willpower]",
    "summary": "Astonishing Speed gives +2 willpower to characters during questing, providing a burst push through a tough quest stage or threat-spike scenario.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/02122.png",
    "ringsdb_code": "02122"
  },
  {
    "name": "Wait no Longer",
    "sphere": "Tactics",
    "type": "Event",
    "cost_threat": "2",
    "traits": [],
    "text": "Response: At the beginning of the quest phase, search the top 5 cards of the encounter deck for an enemy and put it into play engaged with you. Then, reveal one less encounter card this phase (to a minimum of 0). Shuffle the encounter deck.",
    "summary": "Wait no Longer manipulates the encounter deck directly, removing or reordering dangerous cards before they can be revealed.",
    "tags": [
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/17005.png",
    "ringsdb_code": "17005"
  },
  {
    "name": "Frodo Baggins",
    "sphere": "Fellowship",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit"
    ],
    "text": "The first player gains control of Frodo Baggins.\nResponse: After Frodo Baggins is declared as a defender, spend 1 [fellowship] resource to reduce your threat by the attacking enemy’s [threat]. Until the end of the round, that enemy cannot take damage.\nIf Frodo Baggins leaves play, the players lose the game.",
    "summary": "Frodo Baggins reduces threat by X, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/500006.png",
    "ringsdb_code": "500006"
  },
  {
    "name": "Brand son of Bain",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Dale",
      "Noble",
      "Warrior"
    ],
    "text": "Ranged. Response: After Brand son of Bain attacks and destroys an enemy engaged with a player, ready one of that player’s characters. (Limit once per phase.)",
    "summary": "Brand son of Bain triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Ranged"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/502993.png",
    "ringsdb_code": "502993"
  },
  {
    "name": "Bilbo Baggins",
    "sphere": "Baggins",
    "type": "Hero",
    "cost_threat": "0",
    "traits": [
      "Hobbit"
    ],
    "text": "Cannot gain resources from player card effects. The first player gains control of Bilbo Baggins and can trigger Action and Response effects on cards in the boons area.\nAction: Spend 1 [baggins] resource. Then, each player may draw 1 card.\nIf Bilbo Baggins leaves play, the players lose the game.",
    "summary": "Bilbo Baggins exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Baggins.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/503007.png",
    "ringsdb_code": "503007"
  },
  {
    "name": "Master Burglar",
    "sphere": "Neutral",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Title"
    ],
    "text": "Limit 1 per deck. Attach to Bilbo Baggins. He gets +2 [willpower] and –1 threat cost.\nIf you have won The Hobbit ALeP community scenario with 10 or more boons in play, you may attach this card from your collection to an eligible printed hero when you put your starting heroes into play.",
    "summary": "Master Burglar gives +2 willpower to the attached hero, making them a dominant questing presence without needing event support.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/503071.png",
    "ringsdb_code": "503071"
  },
  {
    "name": "Silver Belt",
    "sphere": "Leadership",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Gift"
    ],
    "text": "Attach to a Silvan or Hobbit hero. Limit 1 per hero.\nResponse: After a character you control leaves play, exhaust Silver Belt to give attached hero +1 [attack] and +1 [defense] until the end of the round.",
    "summary": "Silver Belt provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/505001.png",
    "ringsdb_code": "505001"
  },
  {
    "name": "Phial of Galadriel",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Artifact",
      "Item",
      "Gift"
    ],
    "text": "Attach to a Hobbit hero.\nResponse: Discard Phial of Galadriel to cancel a shadow effect just triggered during an attack made by an enemy engaged with you. Give the attached hero +1 [attack] and +1 [defense] until the end of the phase.",
    "summary": "Phial of Galadriel provides +1 attack and +1 defense, making it a rare dual-stat booster that improves both offensive and defensive capabilities.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/505002.png",
    "ringsdb_code": "505002"
  },
  {
    "name": "Golden Hair",
    "sphere": "Spirit",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Gift"
    ],
    "text": "Attach to a Dwarf hero. Limit 3 copies of Golden Hair in the victory display.\nAction: Add Golden Hair to the victory display to reduce your threat by 3.",
    "summary": "Golden Hair reduces threat on a triggered condition, providing passive threat management attached to a hero rather than requiring event slots.",
    "tags": [
      "Threat Reduction",
      "Victory Display Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/505003.png",
    "ringsdb_code": "505003"
  },
  {
    "name": "Sword-sheath",
    "sphere": "Tactics",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Item",
      "Gift"
    ],
    "text": "Attach to a [tactics] hero. Limit 1 per hero.\nResponse: After attached hero destroys an enemy engaged with you, exhaust Sword-sheath and a Weapon attachment on the attached hero to draw 1 card.",
    "summary": "Sword-sheath draws 1 card on demand, providing card advantage while contributing stats or abilities.",
    "tags": [
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/505004.png",
    "ringsdb_code": "505004"
  },
  {
    "name": "Galadriel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Galadriel cannot quest, attack, or defend. Allies you control do not exhaust to commit to the quest during the round they enter play.\nAction: Exhaust Galadriel to choose a player. That player reduces their threat by 1 and draws 1 card. (Limit once per round.)",
    "summary": "Galadriel exhausts to draw 1 card and reduce threat simultaneously, doubling as both card advantage and threat management.",
    "tags": [
      "Card Draw (Active)",
      "Action Advantage (Non-Exhausting)",
      "Threat Reduction",
      "Multiplayer"
    ],
    "willpower": 4,
    "attack": 0,
    "defense": 0,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/505993.png",
    "ringsdb_code": "505993"
  },
  {
    "name": "(MotK) Faramir",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Noble",
      "Ranger"
    ],
    "text": "Action: Exhaust Faramir to choose a player. Each character controlled by that player gets +1 [willpower] until the end of the phase.",
    "summary": "(MotK) Faramir can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost",
      "Multiplayer"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9901014.png",
    "ringsdb_code": "9901014"
  },
  {
    "name": "(MotK) Brok Ironfist",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Response: After a Dwarf hero you control leaves play, put Brok Ironfist into play from your hand.",
    "summary": "(MotK) Brok Ironfist triggers ally mustering, flooding the board faster than normal resource income would allow.",
    "tags": [
      "Ally Mustering",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9901019.png",
    "ringsdb_code": "9901019"
  },
  {
    "name": "(MotK) Beorn",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "13",
    "traits": [
      "Beorning",
      "Warrior"
    ],
    "text": "Action: Beorn gains +5 [attack] until the end of the phase. At the end of the phase in which you trigger this effect, shuffle Beorn back into your deck. (Limit once per round.)",
    "summary": "(MotK) Beorn can gain +5 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 3,
    "health": 6,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9901031.png",
    "ringsdb_code": "9901031"
  },
  {
    "name": "(MotK) Henamarth Riversong",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "3",
    "traits": [
      "Silvan"
    ],
    "text": "Action: Exhaust Henamarth Riversong to look at the top card of the encounter deck.",
    "summary": "(MotK) Henamarth Riversong lets you look at (and often rearrange) the top of the encounter deck, giving you critical foreknowledge to plan each round.",
    "tags": [
      "Scrying"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9901060.png",
    "ringsdb_code": "9901060"
  },
  {
    "name": "(MotK) Gléowine",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "3",
    "traits": [
      "Minstrel",
      "Rohan"
    ],
    "text": "Action: Exhaust Gléowine to choose a player. That player draws 1 card.",
    "summary": "(MotK) Gléowine exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Lore.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9901062.png",
    "ringsdb_code": "9901062"
  },
  {
    "name": "(MotK) Éomund",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Rohan"
    ],
    "text": "Response: After Éomund leaves play, ready all Rohan characters in play.",
    "summary": "(MotK) Éomund readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9902030.png",
    "ringsdb_code": "9902030"
  },
  {
    "name": "(MotK) Landroval",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Sentinel.\nLandroval cannot have restricted attachments.\nResponse: After a hero card is destroyed, return Landroval to his owner's hand to put that hero back into play, with 1 damage token on it. (Limit once per game.)",
    "summary": "(MotK) Landroval has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9902053.png",
    "ringsdb_code": "9902053"
  },
  {
    "name": "(MotK) Haldir of Lórien",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Silvan"
    ],
    "text": "Ranged.ÿSentinel.",
    "summary": "(MotK) Haldir of Lórien offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Ranged"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9902057.png",
    "ringsdb_code": "9902057"
  },
  {
    "name": "(MotK) Gildor Inglorion",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Noldor"
    ],
    "text": "Action: Exhaust Gildor Inglorion to look at the top 3 cards of your deck. Switch one of those cards with a card from your hand. Then, return the 3 cards to the top of your deck, in any order.",
    "summary": "(MotK) Gildor Inglorion lets you look at (and often rearrange) the top of the encounter deck, giving you critical foreknowledge to plan each round.",
    "tags": [
      "Scrying",
      "Player Deck Manipulation"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9902079.png",
    "ringsdb_code": "9902079"
  },
  {
    "name": "(MotK) Elfhelm",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "While Elfhelm is ready, he gains:\n\"Response: After your threat is raised as the result of questing unsuccessfully, or by an encounter or quest card effect, reduce your threat by 1.\"",
    "summary": "(MotK) Elfhelm reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9902100.png",
    "ringsdb_code": "9902100"
  },
  {
    "name": "(MotK) Bofur",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "Quest Action: Spend 1 [spirit] resource to put Bofur into play from your hand, exhausted and committed to a quest. If you quest successfully this phase and Bofur is still in play, return him to your hand.",
    "summary": "(MotK) Bofur triggers ally mustering, flooding the board faster than normal resource income would allow.",
    "tags": [
      "Ally Mustering",
      "Sphere Synergy"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9904006.png",
    "ringsdb_code": "9904006"
  },
  {
    "name": "(MotK) Bombur",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Exhaust Bombur to choose a location. That location gets -1 [threat] until the end of the phase. (That location does not contribute its [threat] instead if it is an Underground location.)",
    "summary": "(MotK) Bombur offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Staging Area Control"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9904035.png",
    "ringsdb_code": "9904035"
  },
  {
    "name": "(MotK) Arwen Undómiel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Response: After Arwen Undómiel exhausts, choose a character. That character gains sentinel and gets +1 [defense] until the end of the round.",
    "summary": "(MotK) Arwen Undómiel has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9904058.png",
    "ringsdb_code": "9904058"
  },
  {
    "name": "(MotK) Erestor",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Noldor"
    ],
    "text": "Action: Choose and discard 1 card from your hand to draw 1 card. (Limit once per round.)",
    "summary": "(MotK) Erestor exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Leadership.",
    "tags": [
      "Card Draw (Active)"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9904077.png",
    "ringsdb_code": "9904077"
  },
  {
    "name": "(MotK) Damrod",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Action: Discard Damrod from play to lower your threat by 1 for each enemy in the staging area.",
    "summary": "(MotK) Damrod reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9905010.png",
    "ringsdb_code": "9905010"
  },
  {
    "name": "(MotK) Forlong",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Outlands"
    ],
    "text": "While you control Outlands allies that belong to 4 different spheres, ready Forlong at the beginning of each phase.",
    "summary": "(MotK) Forlong readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9906033.png",
    "ringsdb_code": "9906033"
  },
  {
    "name": "(MotK) Denethor",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "Denethor gets -1 [willpower] for each damaged hero you control.\nDiscard Denethor if his [willpower] is 0 or less.",
    "summary": "(MotK) Denethor offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [],
    "willpower": 3,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9906057.png",
    "ringsdb_code": "9906057"
  },
  {
    "name": "(MotK) Guthlaf",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Rohan"
    ],
    "text": "If there is at least 1 Rohan hero in play, lower the cost to play Guthlaf by 1.\nIf there is at least 1 Gondor hero in play, Guthlaf gains sentinel.",
    "summary": "(MotK) Guthlaf has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Resource Discount",
      "Sentinel"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9906110.png",
    "ringsdb_code": "9906110"
  },
  {
    "name": "(MotK) Emery",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Gondor"
    ],
    "text": "Action: Discard the top 3 card of your deck to put Emery into play from your hand, under any player's control. Then, if any of the discarded cards have the [tactics], [lore] or [leadership] sphere, discard Emery.",
    "summary": "(MotK) Emery triggers ally mustering, flooding the board faster than normal resource income would allow.",
    "tags": [
      "Resource Smoothing",
      "Ally Mustering"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9906112.png",
    "ringsdb_code": "9906112"
  },
  {
    "name": "(MotK) Anborn",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Action: Exhaust Anborn to return 1 Trap card from your discard pile to your hand.",
    "summary": "(MotK) Anborn synergizes with Trap attachments, reducing staging threat and readying or healing whenever a Trap snares an enemy.",
    "tags": [
      "Traps",
      "Recursion"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9906114.png",
    "ringsdb_code": "9906114"
  },
  {
    "name": "(MotK) Rúmil",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Ranged.\nResponse: After you play Rúmil from your hand, choose an enemy engaged with a player. Deal X damage to that enemy where X is the number of ranged characters you control.",
    "summary": "(MotK) Rúmil deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9908028.png",
    "ringsdb_code": "9908028"
  },
  {
    "name": "(MotK) Gwaihir",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nResponse: After Gwaihir enters play, search your discard pile for an Eagle ally and put it into play under your control. At the end of the round, if that ally is still in play, add it to your hand.",
    "summary": "(MotK) Gwaihir retrieves cards from the discard pile, enabling recursion loops or recovering key cards lost to treacheries.",
    "tags": [
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9908059.png",
    "ringsdb_code": "9908059"
  },
  {
    "name": "(MotK) Orophin",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Silvan",
      "Scout"
    ],
    "text": "Ranged.\nResponse: After Orophin enters play, return a Silvan ally from your discard pile to your hand.",
    "summary": "(MotK) Orophin retrieves cards from the discard pile, enabling recursion loops or recovering key cards lost to treacheries.",
    "tags": [
      "Ranged",
      "Recursion",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9908114.png",
    "ringsdb_code": "9908114"
  },
  {
    "name": "(MotK) Ingold",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Gondor"
    ],
    "text": "Ingold gets +1 [willpower] for each hero you control with at least 1 resource in its resource pool.",
    "summary": "(MotK) Ingold can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9910002.png",
    "ringsdb_code": "9910002"
  },
  {
    "name": "(MotK) Galdor of the Havens",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After 1 or more cards are discarded from your hand, draw 1 card. Limit once per round.",
    "summary": "(MotK) Galdor of the Havens exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Lore.",
    "tags": [
      "Card Draw (Active)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9910091.png",
    "ringsdb_code": "9910091"
  },
  {
    "name": "(MotK) Beechbone",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nResponse: After Beechbone is declared as an attacker, deal 1 damage to him to deal X damage to the defending enemy. X is the amount of damage on Beechbone.",
    "summary": "(MotK) Beechbone deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9910118.png",
    "ringsdb_code": "9910118"
  },
  {
    "name": "(MotK) Lindir",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Noldor"
    ],
    "text": "Response: After Lindir enters play, if you have less than 3 cards in your hand, draw until you have 3 cards in your hand.",
    "summary": "(MotK) Lindir triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9910120.png",
    "ringsdb_code": "9910120"
  },
  {
    "name": "(MotK) Éothain",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After a Rohan ally is discarded from play by a card effect, ready Éothain.",
    "summary": "(MotK) Éothain triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9910141.png",
    "ringsdb_code": "9910141"
  },
  {
    "name": "(MotK) Azain Silverbeard",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Response: After Azain Silverbeard participates in an attack that destroys an enemy, spend 1 [tactics] resource to deal 2 damage to another enemy that shares a Trait with the destroyed enemy. Any player may trigger this response.",
    "summary": "(MotK) Azain Silverbeard deals 2 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 3,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912004.png",
    "ringsdb_code": "9912004"
  },
  {
    "name": "(MotK) Glorfindel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Noldor",
      "Noble",
      "Warrior"
    ],
    "text": "Glorfindel can be played from your discard pile.\nAction: Discard a card from your hand to ready Glorfindel. (Limit once per phase.)",
    "summary": "(MotK) Glorfindel readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Recursion"
    ],
    "willpower": 3,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912006.png",
    "ringsdb_code": "9912006"
  },
  {
    "name": "(MotK) Eldahir",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Dúnedain",
      "Noble"
    ],
    "text": "Sentinel.\nAction: Spend 1 [lore] resource to look at a facedown shadow card dealt to an engaged enemy. If that card has a shadow effect, Eldahir gets +2 [defense] until the end of the phase. Any player may trigger this action. (Limit once per phase.)",
    "summary": "(MotK) Eldahir has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Engagement Control",
      "Sphere Synergy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912031.png",
    "ringsdb_code": "9912031"
  },
  {
    "name": "(MotK) Sam Gamgee",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Hobbit"
    ],
    "text": "Reduce the cost to play Sam Gamgee by 2 if you control Frodo Baggins.\nResponse: After a player raises his threat, that player may spend 1 [spirit] resource to ready Sam Gamgee. He gets +1 [willpower], +1 [attack] and +1 [defense] until the end of the round. (Limit once per round.)",
    "summary": "(MotK) Sam Gamgee raises threat as a cost to ready, delivering extra attacks or defenses each round at the price of accelerating your threat clock.",
    "tags": [
      "Resource Discount",
      "Action Advantage (Readying)",
      "Threat Payment",
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost",
      "Sphere Synergy"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912035.png",
    "ringsdb_code": "9912035"
  },
  {
    "name": "(MotK) Ceorl",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Rohan",
      "Scout"
    ],
    "text": "Spend 1 [spirit] resource to ready Ceorl. Then, you may give control of Ceorl to another player. Any player may trigger this action. (Limit once per phase).",
    "summary": "(MotK) Ceorl readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Sphere Synergy",
      "Multiplayer"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912058.png",
    "ringsdb_code": "9912058"
  },
  {
    "name": "(MotK) Déorwine",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Sentinel.\nAction: While Déorwine is defending, spend 1 [leadership] resource to cancel a shadow effect dealt to the attacking enemy. Any player may trigger this action.",
    "summary": "(MotK) Déorwine has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Sentinel",
      "Shadow Cancellation",
      "Sphere Synergy"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912060.png",
    "ringsdb_code": "9912060"
  },
  {
    "name": "(MotK) Robin Smallburrow",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Hobbit",
      "Shirriff"
    ],
    "text": "Response: After you travel to a location, spend 1 [spirit] resource to raise the engagement cost of each enemy in play by X until the end of the round, where X is that location's quest points. Any player may trigger this response.",
    "summary": "(MotK) Robin Smallburrow triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Engagement Control",
      "Location Control (Travel/Bypass)",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912089.png",
    "ringsdb_code": "9912089"
  },
  {
    "name": "(MotK) Ioreth",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "1",
    "traits": [
      "Gondor",
      "Healer"
    ],
    "text": "Cannot attack or defend.\nAction: Spend 1 [lore] resource and exhaust Ioreth. Then, heal 3 points of damage on a character. Any player may trigger this action.",
    "summary": "(MotK) Ioreth heals 1 damage per action, sustaining characters through repeated combat without dedicated healing allies.",
    "tags": [
      "Healing",
      "Enemy Control",
      "Sphere Synergy"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912117.png",
    "ringsdb_code": "9912117"
  },
  {
    "name": "(MotK) Súlien",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dúnedain",
      "Scout"
    ],
    "text": "Action: Spend 1 [lore] resource to exhaust Súlien. Then, each location in the staging area gets ?1 [threat] until the end of the phase. Any player may trigger this action.",
    "summary": "(MotK) Súlien offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Staging Area Control",
      "Sphere Synergy"
    ],
    "willpower": 3,
    "attack": 0,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9912142.png",
    "ringsdb_code": "9912142"
  },
  {
    "name": "(MotK) Fili",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After you play Fili from your hand during the planning phase, search your deck for Kili and put him into play under your control. Then, shuffle your deck.",
    "summary": "(MotK) Fili searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99131006.png",
    "ringsdb_code": "99131006"
  },
  {
    "name": "(MotK) Kili",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After you play Kili from your hand during the planning phase, search your deck for Fili and put him into play under your control. Then, shuffle your deck.",
    "summary": "(MotK) Kili searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99131007.png",
    "ringsdb_code": "99131007"
  },
  {
    "name": "(MotK) Bofur",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "Action: Exhaust Bofur to search the top 5 cards of your deck for 1 Weapon attachment. Add that card to your hand and shuffle the other cards back into your deck.",
    "summary": "(MotK) Bofur searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 0,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99131008.png",
    "ringsdb_code": "99131008"
  },
  {
    "name": "(MotK) Dori",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After a hero is assigned any amount of damage, exhaust Dori to place that damage on Dori instead.",
    "summary": "(MotK) Dori prevents or cancels incoming damage, enabling a hero to absorb punishment without losing hit points.",
    "tags": [
      "Damage Prevention",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99131009.png",
    "ringsdb_code": "99131009"
  },
  {
    "name": "(MotK) Glóin",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "While you control at least 5 Dwarf characters, Glóin gains: \"Response: After you play Glóin from your hand, choose a hero. Add 2 resources to that hero's resource pool.\"",
    "summary": "(MotK) Glóin generates 2 resources per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99132006.png",
    "ringsdb_code": "99132006"
  },
  {
    "name": "(MotK) Bifur",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "While you control at least 5 Dwarf characters, Bifur gains: \"Response: After you play Bifur from your hand, draw 2 cards.\"",
    "summary": "(MotK) Bifur triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Card Draw (Passive)"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99132007.png",
    "ringsdb_code": "99132007"
  },
  {
    "name": "(MotK) Dwalin",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "Sentinel.\nWhile you control at least 5 Dwarf characters, lower the cost to play Dwalin by 2.",
    "summary": "(MotK) Dwalin has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Resource Discount",
      "Sentinel"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99132008.png",
    "ringsdb_code": "99132008"
  },
  {
    "name": "(MotK) Bill the Pony",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Creature",
      "Pony"
    ],
    "text": "Cannot have attachments.\nLower the cost to play Bill the Pony by 2 if you control Sam Gamgee.\nEach Hobbit character gets +1 hit point.",
    "summary": "(MotK) Bill the Pony offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Discount",
      "Hit Point Boost",
      "Attachment Synergy"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99141006.png",
    "ringsdb_code": "99141006"
  },
  {
    "name": "(MotK) Barliman Butterbur",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Bree"
    ],
    "text": "If each hero you control has the Hobbit trait, damage from undefended attacks against you may be assigned to Barliman Butterbur.",
    "summary": "(MotK) Barliman Butterbur prevents or cancels incoming damage, enabling a hero to absorb punishment without losing hit points.",
    "tags": [
      "Damage Prevention"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99141007.png",
    "ringsdb_code": "99141007"
  },
  {
    "name": "(MotK) Farmer Maggot",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Farmer Maggot enters play, deal 1 damage to an enemy engaged with you. (Deal 2 damage instead if that enemy's engagement cost is higher than your threat.)",
    "summary": "(MotK) Farmer Maggot deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99141008.png",
    "ringsdb_code": "99141008"
  },
  {
    "name": "(MotK) Galadriel",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "At the end of the round, discard Galadriel from play.\nResponse: After you play Galadriel from your hand, search the top 5 cards of your deck for an attachment of cost 3 or less and put it into play. Put the remaining cards back in any order.",
    "summary": "(MotK) Galadriel searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 0,
    "defense": 0,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99142003.png",
    "ringsdb_code": "99142003"
  },
  {
    "name": "(MotK) Boromir",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Boromir gets +2 [defense] while defending against an enemy with an engagement cost higher than your threat.\nResponse: After Boromir takes any amount of damage, ready him.",
    "summary": "(MotK) Boromir readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99142004.png",
    "ringsdb_code": "99142004"
  },
  {
    "name": "(MotK) Elrond",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "11",
    "traits": [
      "Noldor",
      "Healer"
    ],
    "text": "At the end of the round, discard Elrond from play.\nResponse: After Elrond enters play, choose one: heal all damage on a hero, discard a Condition attachment, or each player draws 1 card.",
    "summary": "(MotK) Elrond exhausts to draw 1 card for any player, providing the most reliable on-demand card draw in Lore.",
    "tags": [
      "Card Draw (Active)",
      "Healing",
      "Condition Removal",
      "Response Trigger",
      "Multiplayer"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99142005.png",
    "ringsdb_code": "99142005"
  },
  {
    "name": "(MotK) Bilbo Baggins",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Bilbo Baggins enters play, search your deck for a Pipe attachment and add it to your hand. Shuffle your deck.",
    "summary": "(MotK) Bilbo Baggins searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99142006.png",
    "ringsdb_code": "99142006"
  },
  {
    "name": "(MotK) Gimli",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After an enemy is revealed from the encounter deck, ready Gimli.",
    "summary": "(MotK) Gimli readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Sentinel",
      "Encounter Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99143004.png",
    "ringsdb_code": "99143004"
  },
  {
    "name": "(MotK) Legolas",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Silvan",
      "Warrior"
    ],
    "text": "Ranged.\nResponse: After Legolas participates in an attack that destroys an enemy, draw 1 card.",
    "summary": "(MotK) Legolas triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Card Draw (Passive)",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99143005.png",
    "ringsdb_code": "99143005"
  },
  {
    "name": "(MotK) Quickbeam",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nResponse: After Quickbeam enters play, deal 1 damage to him to ready him.",
    "summary": "(MotK) Quickbeam readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Direct Damage",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99143006.png",
    "ringsdb_code": "99143006"
  },
  {
    "name": "(MotK) Háma",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Combat Action: Ready Háma. He gets +3 [defense] until the end of the phase. At the end of the phase, discard Háma. (Limit once per round.)",
    "summary": "(MotK) Háma readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99143007.png",
    "ringsdb_code": "99143007"
  },
  {
    "name": "(MotK) Anborn",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After an enemy is added to the staging area, exhaust Anborn to give that enemy +5 engagement cost until the end of the round. Then, deal 1 damage to that enemy.",
    "summary": "(MotK) Anborn deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99144004.png",
    "ringsdb_code": "99144004"
  },
  {
    "name": "(MotK) Mablung",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Gondor",
      "Ranger"
    ],
    "text": "Response: After Mablung enters play, choose an enemy to get +5 engagement cost until the end of the round. Then, you may engage that enemy, or return it to the staging area.",
    "summary": "(MotK) Mablung triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99144005.png",
    "ringsdb_code": "99144005"
  },
  {
    "name": "(MotK) Skinbark",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments. Enters play exhausted.\nWhile Skinbark is attacking alone against an Orc enemy, that enemy does not count its [defense].",
    "summary": "(MotK) Skinbark can gain +X attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 4,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99144006.png",
    "ringsdb_code": "99144006"
  },
  {
    "name": "(MotK) Gamling",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Response: After a Rohan ally you control is discarded from play, exhaust Gamling to return that ally to your hand.",
    "summary": "(MotK) Gamling generates a bonus each time a character leaves or enters play, creating value in Sneak Attack or Ally-sacrifice strategies.",
    "tags": [
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99144007.png",
    "ringsdb_code": "99144007"
  },
  {
    "name": "(MotK) Grimbold",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Combat Action: Discard Grimbold to choose an enemy engaged with a player. That enemy cannot attack that player this phase.",
    "summary": "(MotK) Grimbold offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Enemy Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99145004.png",
    "ringsdb_code": "99145004"
  },
  {
    "name": "(MotK) Prince Imrahil",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Gondor",
      "Noble"
    ],
    "text": "While there is a hero in your discard pile, Prince Imrahil loses the ally card type and gains the hero card type.",
    "summary": "(MotK) Prince Imrahil offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Response Trigger",
      "Bounce / Leaves Play Synergy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99145005.png",
    "ringsdb_code": "99145005"
  },
  {
    "name": "(MotK) Halbarad",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Reduce the cost to play Halbarad by 1 for each enemy engaged with you.\nEach enemy engaged with you gets +10 engagement cost.",
    "summary": "(MotK) Halbarad offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Resource Discount",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99145006.png",
    "ringsdb_code": "99145006"
  },
  {
    "name": "(MotK) Ghân-buri-Ghân",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Wose"
    ],
    "text": "X is the [threat] of the active location.\nTravel Action: Discard Ghân-buri-Ghân to travel to a location without resolving its Travel effect.",
    "summary": "(MotK) Ghân-buri-Ghân offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Location Control (Travel/Bypass)"
    ],
    "willpower": 0,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99145007.png",
    "ringsdb_code": "99145007"
  },
  {
    "name": "(MotK) Rosie Cotton",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Rosie Cotton to choose a Hobbit hero and an attribute ([willpower], [attack], [defense]). Add Rosie Cotton's [willpower] to that hero's chosen attribute until the end of the phase. (Limit once per phase.)",
    "summary": "(MotK) Rosie Cotton offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Attack Boost",
      "Defense Boost",
      "Willpower Boost"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99146005.png",
    "ringsdb_code": "99146005"
  },
  {
    "name": "(MotK) Elfhelm",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Rohan",
      "Warrior"
    ],
    "text": "Action: Spend 1 resource from a Rohan hero's resource pool to put Elfhelm into play from your hand under your control. At the end of the phase, discard Elfhelm if he is still in play.",
    "summary": "(MotK) Elfhelm triggers ally mustering, flooding the board faster than normal resource income would allow.",
    "tags": [
      "Ally Mustering"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99146006.png",
    "ringsdb_code": "99146006"
  },
  {
    "name": "(MotK) Elladan",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Noldor",
      "Ranger"
    ],
    "text": "While Elrohir is in play, Elladan gets +2 [attack].\nAfter you optionally engage an Orc enemy, ready Elladan.",
    "summary": "(MotK) Elladan readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99146007.png",
    "ringsdb_code": "99146007"
  },
  {
    "name": "(MotK) Elrohir",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Noldor",
      "Ranger"
    ],
    "text": "While Elladan is in play, Elrohir gets +2 [defense].\nAfter you optionally engage an Orc enemy, ready Elrohir.",
    "summary": "(MotK) Elrohir readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Defense Boost",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99146008.png",
    "ringsdb_code": "99146008"
  },
  {
    "name": "(MotK) Yazan",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Harad",
      "Ranger"
    ],
    "text": "Ranged.\nResponse: After Yazan is declared as an attacker, deal 1 damage to a non-unique enemy in play. (Limit once per phase.)",
    "summary": "(MotK) Yazan deals 1 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Ranged",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9917004.png",
    "ringsdb_code": "9917004"
  },
  {
    "name": "(MotK) Jubayr",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Harad",
      "Warrior"
    ],
    "text": "Sentinel.\nResponse: After Jubayr exhausts to defend an attack, discard 1 facedown shadow card from a non-unique enemy. (Limit once per phase.)",
    "summary": "(MotK) Jubayr has Sentinel, allowing them to defend attacks against any player and serve as a defensive anchor in multiplayer games.",
    "tags": [
      "Sentinel",
      "Shadow Cancellation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 3,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9917006.png",
    "ringsdb_code": "9917006"
  },
  {
    "name": "(MotK) Firyal",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Harad",
      "Scout"
    ],
    "text": "Response: After Firyal commits to the quest, look at the top card of the encounter deck. Then, you may discard the looked at card.",
    "summary": "(MotK) Firyal lets you look at (and often rearrange) the top of the encounter deck, giving you critical foreknowledge to plan each round.",
    "tags": [
      "Scrying",
      "Response Trigger"
    ],
    "willpower": 3,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9917008.png",
    "ringsdb_code": "9917008"
  },
  {
    "name": "(MotK) Leaflock",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Ent"
    ],
    "text": "Cannot have restricted attachments.\nEnters play exhausted.\nLeaflock gets +1 [willpower] for each damaged Ent character you control. (Limit +4 [willpower].)",
    "summary": "(MotK) Leaflock can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost",
      "Attachment Synergy"
    ],
    "willpower": 0,
    "attack": 2,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9917116.png",
    "ringsdb_code": "9917116"
  },
  {
    "name": "(MotK) Halfast Gamgee",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Hobbit"
    ],
    "text": "Reduce the cost to play Halfast Gamgee by 1 for each side quest in the victory display.\nResponse: After Halfast Gamgee enters play, add 1 resource to a hero's resource pool.",
    "summary": "(MotK) Halfast Gamgee generates 1 resource per activation, making them the premier economic engine for Leadership decks.",
    "tags": [
      "Resource Generation",
      "Victory Display Synergy",
      "Side Quest Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9917136.png",
    "ringsdb_code": "9917136"
  },
  {
    "name": "(MotK) Wiglaf",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Dale",
      "Scout",
      "Warrior"
    ],
    "text": "Response: After you play Wiglaf, play an Item attachment on him from your hand for no cost.\nAction: Exhaust an attachment on Wiglaf to ready him. (Limit once per phase.)",
    "summary": "(MotK) Wiglaf readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9919027.png",
    "ringsdb_code": "9919027"
  },
  {
    "name": "(MotK) Meneldor",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Creature",
      "Eagle"
    ],
    "text": "Cannot have restricted attachments.\nResponse: After Meneldor enters or leaves play, place 2 progress on a location.",
    "summary": "(MotK) Meneldor triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Location Control (Progress)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9919031.png",
    "ringsdb_code": "9919031"
  },
  {
    "name": "(MotK) Galion",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "1",
    "traits": [
      "Silvan"
    ],
    "text": "Cannot attack or defend.\nResponse: After Galion enters play, he gets +1 [willpower] until the end of the round.",
    "summary": "(MotK) Galion can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost",
      "Enemy Control",
      "Response Trigger"
    ],
    "willpower": 0,
    "attack": 0,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9919063.png",
    "ringsdb_code": "9919063"
  },
  {
    "name": "(MotK) Gaffer Gamgee",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "3",
    "traits": [
      "Hobbit"
    ],
    "text": "Combat Action: Return Gaffer Gamgee to your hand to choose an enemy with engagement cost higher than your threat. Until the end of the round, that enemy cannot attack you.",
    "summary": "(MotK) Gaffer Gamgee offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Enemy Control",
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9919115.png",
    "ringsdb_code": "9919115"
  },
  {
    "name": "(MotK) Merry",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Merry enters play, each unique ally you control gets +1 [willpower] until the end of the round.",
    "summary": "(MotK) Merry can boost willpower by +1, making them a questing powerhouse when conditions are met.",
    "tags": [
      "Willpower Boost",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9921003.png",
    "ringsdb_code": "9921003"
  },
  {
    "name": "(MotK) Pippin",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit"
    ],
    "text": "Pippin gets +2 [attack] while attacking an enemy with an engagement cost higher than your threat. Response: After you engage an enemy with an engagement cost higher than your threat, ready Pippin.",
    "summary": "(MotK) Pippin readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost",
      "Engagement Control"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9921004.png",
    "ringsdb_code": "9921004"
  },
  {
    "name": "(MotK) Faramir",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Gondor",
      "Noble",
      "Ranger"
    ],
    "text": "Response: After Faramir enters play, choose a non-unique enemy in the staging area. Engage that enemy and deal 2 damage to it (4 damage instead if it has an attachment on it).",
    "summary": "(MotK) Faramir deals 2 damage to enemies outside of combat, softening or finishing targets that slip through standard attack phases.",
    "tags": [
      "Direct Damage",
      "Engagement Control",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9921005.png",
    "ringsdb_code": "9921005"
  },
  {
    "name": "(MotK) Derufin",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "Ranged.\nRanged. Response: After Derufin participates in an attack which destroys an enemy engaged with a player, discard Derufin to reduce the engaged player's threat by X, where X is the destroyed enemy's printed [threat].",
    "summary": "(MotK) Derufin reduces threat by X, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Ranged"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9921006.png",
    "ringsdb_code": "9921006"
  },
  {
    "name": "(MotK) Angbor the Fearless",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Gondor",
      "Warrior"
    ],
    "text": "While your threat is 40 or higher, Angbor the Fearless gets +2 [attack] and does not exhaust to quest.",
    "summary": "(MotK) Angbor the Fearless quests without exhausting, leaving them free for combat while still contributing the full questing round.",
    "tags": [
      "Action Advantage (Non-Exhausting)",
      "Attack Boost",
      "Valour"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9922028.png",
    "ringsdb_code": "9922028"
  },
  {
    "name": "(MotK) Nori",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Dwarf"
    ],
    "text": "Response: After Nori participates in an attack that destroys an enemy, put the top card of your discard pile on the bottom of your deck.",
    "summary": "(MotK) Nori triggers a powerful bonus off a common game event, rewarding tight sequencing with consistent value each round.",
    "tags": [
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9922059.png",
    "ringsdb_code": "9922059"
  },
  {
    "name": "(MotK) Odo Proudfoot",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Hobbit"
    ],
    "text": "Response: After Odo Proudfoot enters play, search the top 5 cards of your deck for a Hobbit ally and add it to your hand. Shuffle the other cards back into your deck.",
    "summary": "(MotK) Odo Proudfoot searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9922088.png",
    "ringsdb_code": "9922088"
  },
  {
    "name": "(MotK) Haleth",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Woodman",
      "Scout"
    ],
    "text": "Response: After Haleth quests successfully, search the top 5 cards of your deck for an attachment and add it to your hand. Shuffle your deck.",
    "summary": "(MotK) Haleth searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/9922140.png",
    "ringsdb_code": "9922140"
  },
  {
    "name": "(MotK) Morwen Steelsheen",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Rohan",
      "Gondor",
      "Noble"
    ],
    "text": "Action: Put Morwen Steelsheen into play from your hand. Then, discard a Rohan or Gondor ally you control.\nResponse: After a Rohan or Gondor ally leaves play, exhaust Morwen Steelsheen to either heal 2 damage from a character or reduce your threat by 1.",
    "summary": "(MotK) Morwen Steelsheen reduces threat by 1, serving as a long-term safety valve for decks that would otherwise spiral out of control.",
    "tags": [
      "Threat Reduction",
      "Healing",
      "Ally Mustering",
      "Bounce / Leaves Play Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 2,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99300010.png",
    "ringsdb_code": "99300010"
  },
  {
    "name": "(MotK) Théodwyn",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Rohan",
      "Noble"
    ],
    "text": "Response: After Théodwyn enters play, either draw 1 card or add 1 resource to a Noble hero’s resource pool.",
    "summary": "(MotK) Théodwyn generates 1 resource per activation, making them the premier economic engine for Spirit decks.",
    "tags": [
      "Resource Generation",
      "Card Draw (Passive)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99300015.png",
    "ringsdb_code": "99300015"
  },
  {
    "name": "(MotK) Lily Cotton",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Lily Cotton to ready a different Hobbit ally and add Lily Cotton’s [willpower], [attack], and [defense] to that ally’s [willpower], [attack], and [defense] respectively until the end of the phase. At the end of the phase, if that ally is still in play, return it to its owner’s hand. (Limit once per phase.)",
    "summary": "(MotK) Lily Cotton readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Attack Boost"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99301003.png",
    "ringsdb_code": "99301003"
  },
  {
    "name": "(MotK) Young Tom",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "3",
    "traits": [
      "Hobbit"
    ],
    "text": "During the round that Young Tom enters play, enemies get +5 engagement cost.",
    "summary": "(MotK) Young Tom offers niche situational power tied to specific conditions, best in a deck built to trigger those conditions reliably.",
    "tags": [
      "Engagement Control"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99301010.png",
    "ringsdb_code": "99301010"
  },
  {
    "name": "(MotK) Gavin",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "3",
    "traits": [
      "Creature",
      "Scout"
    ],
    "text": "Cannot have attachments.\nResponse: After an encounter card without surge is revealed, exhaust Gavin to give that card surge and add 1 resource to the pool of a Scout hero you control. If the next encounter card revealed is not a location, discard it without resolving its effects.",
    "summary": "(MotK) Gavin generates 1 resource per activation, making them the premier economic engine for Spirit decks.",
    "tags": [
      "Resource Generation",
      "Surge",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99301011.png",
    "ringsdb_code": "99301011"
  },
  {
    "name": "(MotK) Grip",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Creature"
    ],
    "text": "Limit 1 per deck. Cannot have attachments. Each enemy in play gets +1 engagement cost.\nResponse: After Grip enters play, search your deck for a Creature ally and add it to your hand. Until the end of the phase, that ally does not require a resource match. Shuffle your deck.",
    "summary": "(MotK) Grip searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99302045.png",
    "ringsdb_code": "99302045"
  },
  {
    "name": "(MotK) Fang",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Creature"
    ],
    "text": "Limit 1 per deck. Cannot have attachments. Each enemy in play gets +1 engagement cost.\nResponse: After Fang enters play, search your deck for a Creature ally and add it to your hand. Until the end of the phase, that ally does not require a resource match. Shuffle your deck.",
    "summary": "(MotK) Fang searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 1,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99302046.png",
    "ringsdb_code": "99302046"
  },
  {
    "name": "(MotK) Wolf",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Creature"
    ],
    "text": "Limit 1 per deck. Cannot have attachments. Each enemy in play gets +1 engagement cost.\nResponse: After Wolf enters play, search your deck for a Creature ally and add it to your hand. Until the end of the phase, that ally does not require a resource match. Shuffle your deck.",
    "summary": "(MotK) Wolf searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Resource Smoothing",
      "Engagement Control",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99302047.png",
    "ringsdb_code": "99302047"
  },
  {
    "name": "(MotK) Bob",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit",
      "Bree",
      "Servant"
    ],
    "text": "Response: After Bob enters play, search your deck for a Mount or Pony card and add it to your hand. Shuffle your deck.",
    "summary": "(MotK) Bob searches or manipulates your deck, providing card consistency and setting up key combo pieces on demand.",
    "tags": [
      "Player Deck Manipulation",
      "Response Trigger"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99303074.png",
    "ringsdb_code": "99303074"
  },
  {
    "name": "(MotK) Balin",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "7",
    "traits": [
      "Dwarf"
    ],
    "text": "Devoted.\nResponse: After a card is discarded from the top of your deck, ready Balin. (Limit once per round.)",
    "summary": "(MotK) Balin readies after a triggered condition, effectively acting twice per round without needing Unexpected Courage.",
    "tags": [
      "Action Advantage (Readying)",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 2,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99304104.png",
    "ringsdb_code": "99304104"
  },
  {
    "name": "(MotK) Birna",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "6",
    "traits": [
      "Beorning"
    ],
    "text": "Action: Exhaust Birna and spend 1 [tactics] resource to put a Beorning ally from your discard pile into play. At the end of the phase, if that ally is still in play or in your discard pile, shuffle it into your deck.",
    "summary": "(MotK) Birna retrieves cards from the discard pile, enabling recursion loops or recovering key cards lost to treacheries.",
    "tags": [
      "Recursion",
      "Ally Mustering",
      "Sphere Synergy"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99305150.png",
    "ringsdb_code": "99305150"
  },
  {
    "name": "(MotK) Bilbo Baggins",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit",
      "Minstrel"
    ],
    "text": "Response: After Bilbo Baggins commits to the quest, look at the top card of your deck. If that card has flavor text, you may (choose 1): leave it there, discard it, or spend 1 [lore] resource to add it to your hand.",
    "summary": "(MotK) Bilbo Baggins lets you look at (and often rearrange) the top of the encounter deck, giving you critical foreknowledge to plan each round.",
    "tags": [
      "Scrying",
      "Player Deck Manipulation",
      "Sphere Synergy",
      "Response Trigger"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99307009.png",
    "ringsdb_code": "99307009"
  },
  {
    "name": "(MotK) Frodo Baggins",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "4",
    "traits": [
      "Hobbit"
    ],
    "text": "Action: Exhaust Frodo Baggins to return a card from your discard pile to your hand. (Limit once per game.)\nIf Frodo Baggins is destroyed, or if he is discarded from play by a card effect, the players lose the game.",
    "summary": "(MotK) Frodo Baggins retrieves cards from the discard pile, enabling recursion loops or recovering key cards lost to treacheries.",
    "tags": [
      "Recursion"
    ],
    "willpower": 2,
    "attack": 0,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99307014.png",
    "ringsdb_code": "99307014"
  },
  {
    "name": "(MotK) King of the Dead",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Undead",
      "Oathbreaker"
    ],
    "text": "Cannot enter play unless Fulfil Your Oath is in the victory display.\nOathbreaker characters get +2 [attack] while attacking an enemy with a Fear attachment.",
    "summary": "(MotK) King of the Dead can gain +2 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Attachment Synergy",
      "Victory Display Synergy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 1,
    "health": 1,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99309041.png",
    "ringsdb_code": "99309041"
  },
  {
    "name": "(MotK) Edrik Ravenhelm",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Isengard",
      "Warrior"
    ],
    "text": "Action: Trigger doomed 1 to give X Isengard characters +1 [attack] until the end of the phase. X is the tens digit of your threat. (Limit once per phase.)",
    "summary": "(MotK) Edrik Ravenhelm can gain +1 attack under the right conditions, enabling them to crack high-defense enemies single-handedly.",
    "tags": [
      "Attack Boost",
      "Doomed"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99309043.png",
    "ringsdb_code": "99309043"
  },
  {
    "name": "Grim Resolve",
    "sphere": "Leadership",
    "type": "Event",
    "cost_threat": "5",
    "traits": [],
    "text": "Action: Ready all character cards in play.",
    "summary": "Readies every character in play at once — a Leadership burst that doubles up questing or combat and scales hugely in multiplayer.",
    "tags": [
      "Action Advantage (Readying)",
      "Multiplayer"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/01025.png",
    "ringsdb_code": "01025"
  },
  {
    "name": "Galadriel",
    "sphere": "Spirit",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Galadriel cannot quest, attack, or defend. Allies you control do not exhaust to commit to the quest during the round they enter play.\nAction: Exhaust Galadriel to choose a player. That player reduces his threat by 1 and draws 1 card. (Limit once per round.)",
    "summary": "Each round draws a card and lowers a player's threat by 1, and lets newly-played allies quest without exhausting — a cornerstone Spirit value engine despite having no combat or quest stats.",
    "tags": [
      "Threat Reduction",
      "Card Draw (Active)",
      "Action Advantage (Non-Exhausting)",
      "Multiplayer"
    ],
    "willpower": 4,
    "attack": 0,
    "defense": 0,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/08112.png",
    "ringsdb_code": "08112"
  },
  {
    "name": "Thorin Stonehelm",
    "sphere": "Tactics",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Dwarf",
      "Noble",
      "Warrior"
    ],
    "text": "Response: After Thorin Stonehelm is declared as an attacker, discard the top card of your deck to deal 1 damage to an enemy engaged with you.",
    "summary": "Deals 1 damage to an engaged enemy whenever he attacks by discarding the top of your deck — repeatable ping damage that also feeds discard-recursion synergies.",
    "tags": [
      "Response Trigger",
      "Direct Damage",
      "Player Deck Manipulation"
    ],
    "willpower": 1,
    "attack": 3,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22001.png",
    "ringsdb_code": "22001"
  },
  {
    "name": "Gildor Inglorion",
    "sphere": "Leadership",
    "type": "Hero",
    "cost_threat": "9",
    "traits": [
      "Noldor",
      "Noble"
    ],
    "text": "Action: Pay 1 resource from Gildor Inglorion's resource pool to choose a player to draw 1 card (Limit once per round.)",
    "summary": "Converts a resource into a card for any player once per round — steady Leadership card draw that scales in multiplayer.",
    "tags": [
      "Card Draw (Active)",
      "Multiplayer"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/22081.png",
    "ringsdb_code": "22081"
  },
  {
    "name": "Aragorn",
    "sphere": "Neutral",
    "type": "Hero",
    "cost_threat": "12",
    "traits": [
      "Dúnedain",
      "Ranger"
    ],
    "text": "Aragorn gains a resource icon matching each Title attachment attached to him.\nSetup: Search your collection for a Title attachment with a printed cost of 1 and attach it to Aragorn.\nAction: Ready a Title attachment with a printed cost of 1 attached to Aragorn. (Limit once per round.)",
    "summary": "Gains a resource icon of any sphere for each Title attached and readies a cost-1 Title each round — a build-around Neutral hero enabling multi-sphere Title decks.",
    "tags": [
      "Attachment Synergy",
      "Sphere Synergy",
      "Action Advantage (Readying)",
      "Resource Generation"
    ],
    "willpower": 2,
    "attack": 3,
    "defense": 2,
    "health": 5,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/306183.png",
    "ringsdb_code": "306183"
  },
  {
    "name": "Ghân-buri-Ghân",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "10",
    "traits": [
      "Wose",
      "Scout"
    ],
    "text": "Planning Action: Search the top 10 cards of the encounter deck for a location, reveal it, and shuffle the encounter deck. Then, search the top 10 cards of your deck for a [lore] attachment, play it for no cost, and shuffle your deck. (Limit once per round.)",
    "summary": "Each planning phase pulls a location from the encounter deck and a free [lore] attachment from your own — the tutoring engine at the heart of the Wose attachment archetype.",
    "tags": [
      "Encounter Deck Manipulation",
      "Player Deck Manipulation",
      "Attachment Synergy",
      "Scrying"
    ],
    "willpower": 3,
    "attack": 2,
    "defense": 1,
    "health": 4,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/310074.png",
    "ringsdb_code": "310074"
  },
  {
    "name": "Ose-bori-Ose",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "8",
    "traits": [
      "Wose",
      "Ranger"
    ],
    "text": "Response: After you play a [lore] attachment, if it is not attached to a character, your threat is considered to be 20 until the end of the round.",
    "summary": "Playing an unattached [lore] attachment drops your effective threat to 20 for the round, switching on Secrecy and the deck's low-threat bonuses.",
    "tags": [
      "Response Trigger",
      "Threat Reduction",
      "Attachment Synergy",
      "Secrecy"
    ],
    "willpower": 2,
    "attack": 2,
    "defense": 1,
    "health": 3,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/310075.png",
    "ringsdb_code": "310075"
  },
  {
    "name": "Sharp-eyed Drû",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Wose",
      "Scout"
    ],
    "text": "Sharp-eyed Drû gets +1 [defense] while your threat is 20 or less, and +1 [defense] while the active location has at least 4 [threat]. If both are true, Sharp-eyed Drû also gains sentinel.",
    "summary": "Scales to 4 defense with sentinel when your threat is low and the active location is threatening — the defensive anchor of the low-threat Wose board.",
    "tags": [
      "Defense Boost",
      "Sentinel",
      "Secrecy"
    ],
    "willpower": 1,
    "attack": 0,
    "defense": 2,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/310076.png",
    "ringsdb_code": "310076"
  },
  {
    "name": "Mushroom Gatherer",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Wose",
      "Healer"
    ],
    "text": "Secrecy 1.\nRefresh Action: Exhaust Mushroom Gatherer to either deal 1 damage to any 1 enemy in play, or heal 1 damage from any 1 character in play.",
    "summary": "A cheap Secrecy body that flexibly heals 1 or pings 1 damage every refresh phase — repeatable reach and sustain for Wose decks.",
    "tags": [
      "Secrecy",
      "Healing",
      "Direct Damage"
    ],
    "willpower": 1,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/310077.png",
    "ringsdb_code": "310077"
  },
  {
    "name": "Drû-buri-Drû",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "2",
    "traits": [
      "Wose",
      "Warrior"
    ],
    "text": "Response: At the end of any phase, exhaust Drû-buri-Drû to move a [lore] card attached to an encounter card to another eligible encounter card.",
    "summary": "Relocates [lore] traps between encounter cards to re-trigger and re-aim them — the flexible payoff that stretches the Wose trap package across the board.",
    "tags": [
      "Response Trigger",
      "Attachment Synergy",
      "Traps",
      "Staging Area Control"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/310078.png",
    "ringsdb_code": "310078"
  },
  {
    "name": "Drúedain Seer",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Wose",
      "Scout"
    ],
    "text": "Secrecy 1.\nResponse: After Drúedain Seer commits to the quest, place 1 [threat] token on any 1 location in the staging area to ready any 1 Wose or Scout character.",
    "summary": "Readies a Wose or Scout after questing by loading threat onto a staging location — action advantage that deliberately arms the deck's location-threat triggers.",
    "tags": [
      "Secrecy",
      "Response Trigger",
      "Action Advantage (Readying)",
      "Staging Area Control"
    ],
    "willpower": 2,
    "attack": 1,
    "defense": 0,
    "health": 2,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/310079.png",
    "ringsdb_code": "310079"
  },
  {
    "name": "Gorgûn-hunter",
    "sphere": "Lore",
    "type": "Ally",
    "cost_threat": "3",
    "traits": [
      "Wose",
      "Ranger"
    ],
    "text": "Gorgûn-hunter gets +1 [attack] while your threat is 20 or less, and +1 [attack] while the active location has at least 4 [threat]. If both are true, Gorgûn-hunter also gains ranged.",
    "summary": "The offensive mirror of Sharp-eyed Drû — reaches 4 attack with ranged when your threat is low and the active location is threatening.",
    "tags": [
      "Attack Boost",
      "Ranged",
      "Secrecy"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 3,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/310080.png",
    "ringsdb_code": "310080"
  },
  {
    "name": "Poisoned Darts",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "0",
    "traits": [
      "Trap",
      "Wose"
    ],
    "text": "Play Poisoned Darts into the staging area unattached.\nIf unattached, attach Poisoned Darts to the next eligible enemy that enters the staging area.\nResponse: When the attached enemy would take any amount of damage, increase that amount by 1.",
    "summary": "A free trap that makes an enemy suffer +1 from every source of damage — cheap combat amplification and a trigger for the Wose trap synergies.",
    "tags": [
      "Traps",
      "Direct Damage",
      "Enemy Control",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/310081.png",
    "ringsdb_code": "310081"
  },
  {
    "name": "Púkel-man",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "1",
    "traits": [
      "Trap",
      "Wose"
    ],
    "text": "Attach to a location or enemy. Attached card gets +1 [threat].\nResponse: At the end of the round, place 1 progress on attached location or deal 1 damage to attached enemy.",
    "summary": "A trap that chips a progress token onto a location or a damage onto an enemy every round — slow attrition that clears the staging area on the Woses' terms.",
    "tags": [
      "Traps",
      "Location Control (Progress)",
      "Direct Damage",
      "Attachment Synergy"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": false,
    "imagesrc": "https://ringsdb.com/bundles/cards/310082.png",
    "ringsdb_code": "310082"
  },
  {
    "name": "Chieftain's Staff",
    "sphere": "Lore",
    "type": "Attachment",
    "cost_threat": "2",
    "traits": [
      "Item"
    ],
    "text": "Attach to a Wose hero.\nWhile the active location has at least 4 [threat], Wose characters you control get +1 [willpower].\nPlanning Action: Exhaust Chieftain’s Staff and place 1 [threat] token on any 1 location in the staging area to reduce the cost of the next [lore] card you play this phase by 1.",
    "summary": "Buffs Wose willpower when locations threaten and discounts your next [lore] card each planning phase — the signature engine attachment for a Wose hero.",
    "tags": [
      "Willpower Boost",
      "Resource Discount",
      "Attachment Synergy",
      "Staging Area Control"
    ],
    "willpower": null,
    "attack": null,
    "defense": null,
    "health": null,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/310083.png",
    "ringsdb_code": "310083"
  },
  {
    "name": "(MotK) Drû-buri-Drû",
    "sphere": "Lore",
    "type": "Hero",
    "cost_threat": "5",
    "traits": [
      "Wose",
      "Warrior"
    ],
    "text": "Response: At the end of any phase, exhaust Drû-buri-Drû to move a [lore] card attached to an encounter card to another eligible encounter card.",
    "summary": "Messenger-of-the-King Drû-buri-Drû anchors a solo Wose trap deck from the hero slot, relocating [lore] traps between encounter cards to keep them triggering.",
    "tags": [
      "Response Trigger",
      "Attachment Synergy",
      "Traps",
      "Staging Area Control"
    ],
    "willpower": 1,
    "attack": 2,
    "defense": 0,
    "health": 2,
    "is_unique": true,
    "imagesrc": "https://ringsdb.com/bundles/cards/99310078.png",
    "ringsdb_code": "99310078"
  }
];
