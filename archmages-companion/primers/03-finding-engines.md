# Finding Engines in an Owned Pool

The aim is not to maximize the number of cards that mention each other. Find interactions that help the deck do useful work repeatedly at times and costs it can support.

## Start With an Action

Identify something the deck can actually do: create creatures, discard, cast from a graveyard, attack, sacrifice, return a permanent, or play lands. Then find supplied cards that reward or reuse the action.

Describe the relationship as **action -> reward -> next useful action**. Recurring token production can support creature-entry draw, which can provide resources to continue developing the board. Whether it works depends on the actual wording and available actions.

## Engine Families

| Supplied pattern | Potential conversion | Important check |
| --- | --- | --- |
| Tokens and entry rewards | Board development into card access | Token eligibility, power restrictions, trigger limits |
| Discard and graveyard access | Selection into usable graveyard resources | Whether the discarded card can be used there; exile and timing |
| Small creatures and counters or anthems | Cheap development into relevant combat | Setup cost, evasion, what survives removal |
| Large creatures and alternative deployment | Reduced deployment cost into pressure | Cast versus put into play, delays, selection limits |
| Expensive spells and free-casting permissions | A repeatable enabling action into substantial spell effects | Eligible cards, access window, additional costs, setup |
| Blink and entry abilities | Repeated effects from one permanent | Targets, return timing, cost per cycle |
| Artifacts and copy or untap effects | Existing tools into mana, bodies, or interaction | Copy exceptions, creature status, tap restrictions |
| Enchantments and draw rewards | Useful permanent deployment into replenishment | Cast versus entry triggers and continued supply |
| Sacrifice and replenishment | Expendable material into cards, mana, or pressure | Outlet costs, replacement supply, death restrictions |
| Lands and entry rewards | Mana development into another resource | Extra-play permissions or recursion; actual land drops |
| Pillow-fort and complementary defensive permanents | Restricted attacks into time for draw and a protected clock | Which threats bypass the defense; how the deck wins behind it |
| Prison effects and a sustainable resource base | Restricted actions into an advantage the deck can maintain | Upkeep costs, symmetry, recovery, an actual closing route |

These families can serve several shells. An artifact pool is not automatically combo; tokens do not automatically mean aggro. A theme can support several different engines.

## Decipher the Actual Engine

1. Identify what the supplied cards let the deck do more than once, deploy at an unusual cost, or keep restricting.
2. Identify the benefit: cards, usable mana, bodies, attacks, recurring removal, or a protected position.
3. Explain what sustains it: fresh material, an activation, another combat, an upkeep, or a complementary permanent.
4. Account for timing, costs, dependencies, and what happens if a piece is removed.
5. Connect the benefit to the supplied finishing route. If that connection is missing, say so.

Return a plain description such as "recurring tokens feed both sacrifice rewards and replacement cards" or "a defensive soft lock buys time for an evasive attacking force." Do not just label a pile of cards "value." Multiple useful plays can perform the engine's work without following the identical sequence each turn.

## Alternative Deployment Examples

These are vocabulary examples, not assumed inventory or default additions. **Narset, Enlightened Master** provides access to free noncreature spell casting through her attack ability; **Esika, God of the Tree's reverse face, The Prismatic Bridge**, repeatedly puts a revealed creature or planeswalker onto the battlefield at its controller's upkeep. Both can bypass a payoff's normal mana payment, but only the former casts the payoff. [Narset design explanation](https://magic.wizards.com/en/news/making-magic/prose-and-khans-part-2-2014-09-22), [Kaldheim release notes](https://media.wizards.com/2021/downloads/KHM_Release_Notes/EN_MTGKHM_ReleaseNotes_20210113.pdf).

For coaching, name the enabling action and eligible payoffs. Check exact current text before promising a cast trigger, immediate attack, timing exception, or particular reveal outcome. Paying for the enabler and reaching its trigger are real costs even when the payoff avoids its normal mana cost.

## Soft Locks as Engines

A soft lock makes relevant opposing actions difficult or repeatedly ineffective without guaranteeing that every possible response is stopped. Pillow-fort effects often discourage attacks; prison packages can constrain resources or other actions. Neither term means all opponents are unable to act.

In this framework, a sustained defensive package becomes part of the engine when it lets the deck keep drawing, deploying threats, or attacking toward victory. Name what sustains the restriction and what advances the game behind it. A lone attack tax with no continuation is protection, not a complete engine. A stronger restriction can also be a finisher when it secures an already established clock.

The [Enchantress reference](../archetypes/15-enchantress.md#historical-reference) illustrates draw supporting a defensive package and a token finish. It is a historical example, not a requirement to use those cards.

## Three Different Strengths

- **Overlap:** one card contributes to several jobs.
- **Redundancy:** different cards can perform an important job independently enough to cover one another.
- **Complementarity:** different cards perform different jobs that work well together.

A draw payoff and its only enabler are complementary, not two independent draw engines. Multiple payoffs dependent on the same commander still share a point of failure.

## Resource Accounting

Track starting cards and mana, costs paid, usable output, timing, and the next repetition. Separate selection from net card advantage. A token is material for some actions, not automatically another card in hand. Stored resources may require later payments.

Consider the whole turn: can the player develop, activate the engine, and still take the interaction they intend? Spending every mana can be efficient; preserving mana for a relevant response can also be efficient.

## Reliability

An engine needs inputs, but those inputs need not all be more mana rocks. Ask which scarce resource each interaction consumes, replaces, or bypasses. Independence from one restriction does not mean independence from all resources.

| Resource under pressure | Possible continuation to look for in the supplied pool | Dependency still to check |
| --- | --- | --- |
| Land untaps or land availability | Established producers, affordable activations, permitted alternative deployment | Activation mana, colors, taxes, which permanents remain |
| Artifact mana or artifact abilities | Lands, creatures, enchantments, or a cheaper operating curve | Whether those sources also face the restriction |
| Number of spells cast | Repeatable permanent abilities, attack or upkeep triggers | Deployment first, legal activations, maintenance and mana |
| Graveyard access | Fresh tokens, normal casting, a non-graveyard draw route | Supply of cards and ability to deploy them |
| Creature combat or creature survival | Noncombat conversion, recursion if available, other permanent engines | Which outputs still reach an ending |
| Cards in hand | An established draw engine or another legally usable resource zone | Trigger conditions, access windows, and a way to restart |

These are search questions, not guaranteed escapes. Check the actual restriction and current text before claiming an interaction works underneath it. Compare partial-engine performance and recovery across several ordinary draws, not just a fully assembled board.

Ask what works alone, which partners are available, and what happens if a key piece disappears. Does a second supplied card keep the plan moving, or does everything rely on the same fragile connection?

Do not translate one ideal sequence into a success rate. Numerical probability claims require the actual list and explicit assumptions about draws, mulligans, and dependencies.

Laboratory Drudge and jump-start provide a specific example of graveyard spell access supporting delayed card draw. The draw is an end-step interaction, not a trigger for each spell cast. See the [worked example](../examples/coaching-examples.md).

When a relationship becomes a combo, use [two-, three-, and four-card combo accounting](05-combo-structure.md) to separate the repeatable core, setup, and winning outlet. Multiple combinations that share the same fragile enabler are different lines, not necessarily independent recovery plans.
