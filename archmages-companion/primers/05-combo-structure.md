# Two-, Three-, and Four-Card Combos

Help the player make their idea work with supplied cards. Combo recognition is a way to discover connections, not a demand to use an infinite finish or minimize the number of pieces. Read alongside [Finding engines](03-finding-engines.md) and the [combo archetype](../archetypes/12-combo.md).

## Different Kinds of Connection

- **Synergy:** cards improve one another without necessarily sustaining a sequence.
- **Repeatable engine:** useful actions recur while their costs and conditions are met, possibly over several turns.
- **Finite combo:** a specific sequence creates a substantial result but consumes a limited resource or ends after a bounded chain.
- **Repeatable loop:** a legal sequence renews the resources needed to perform it again. Establish its net output before calling it useful.
- **Winning line:** the available sequence converts its output into a verified ending. Mana, draw, or creatures alone may not immediately win.

Not every engine is combo, and not every combo is infinite. Once-per-turn value is not unrestricted repetition. A repeatable optional loop is described with a chosen finite number of iterations, not by literally performing infinitely many game actions. Consult the [rules-verification guide](../guides/rules-and-competitive-context.md) for exact card text and loop rules before promising a line.

## Piece Counts

The following are hypothetical role diagrams, not verified combinations of interchangeable cards. Every actual line must be checked against its specific text, costs, and starting state.

| Core size | Illustrative structure | Question before calling it a win |
| --- | --- | --- |
| Two cards | Resource producer + reset or cost-changing effect | Does each cycle renew its costs and create usable surplus? Is a separate outlet required? |
| Three cards | Reusable body + sacrifice outlet + return enabler | Can the body return without consuming an unreplenished resource? What does the loop actually produce? |
| Four cards | The three-piece body / sacrifice / return loop + a compatible payoff | Does that payoff reach the opponents or another actual win condition, and is it active in the required zone? |

A two-card mana loop plus a required winning outlet is a three-card winning line. A four-card interaction need not be a three-card loop with a payoff; four interdependent pieces can form the resource-producing core itself. Describe the actual arrangement rather than squeezing it into these examples.

## Count What the Line Needs

Count required physical card pieces, not just unique names or cards fetched from the library. Include the commander: "three cards total, including the commander; two from the library" is clearer than calling that a two-card combo.

Count a particular land, cost reducer, additional mana-producing permanent, or haste enabler when its specific function is necessary to the claimed repetition or immediate win. Ordinary starting mana is stated separately when the identity of its sources does not matter. If a named source supplies indispensable ongoing mana, it is a piece rather than incidental setup.

State required tokens, counters, cards to discard, life, tapped status, and starting zones separately. If creating that state needs another specific card, disclose that dependency. Do not hide the setup merely because that card need not remain on the battlefield. Distinguish a core that works once established from an end-to-end line that creates its own starting state.

Tutors and protection are normally support, not part of the core count, unless the sequence itself requires them. They still cost cards, mana, and time. Availability from the command zone improves access, not immunity to removal or commander tax.

## Verify the Sequence

[EDHREC Combos](https://edhrec.com/combos) can provide candidate interactions; [Scryfall](https://scryfall.com/) provides card text and rulings for verification. Follow the [lookup and access guide](../guides/card-lookup-and-access.md): do not assume automated access is permitted or that a database entry establishes a legal win. These references do not authorize unowned additions.

1. List every required piece, zone, starting resource, and timing condition.
2. Trace costs, targets, casts, entries, deaths, replacements, triggers, and returns in order.
3. Show the state after one cycle and the exact net change in usable resources.
4. Check whether the next iteration is legal without a finite resource quietly running out.
5. Identify the outlet, its additional cost, affected opponents, and whether it wins now or needs another turn.
6. Name realistic interruption points and what useful play remains after interruption.

Do not treat a library as unlimited fuel, colorless mana as colored mana, or a creature with a tap ability as immediately usable without checking summoning sickness. Check trigger limits, legend rules, and copied-object details where relevant. Explain only the checks material to the proposed line in a player-facing answer.

## Fit Before Compactness

Two-card combinations may be easier to assemble but can contain pieces that do little elsewhere. Three- and four-card engines can fit a collection well when their components also draw cards, create bodies, interact, or advance combat. Extra pieces still add real assembly and disruption costs; synergy does not erase those costs.

Compare ordinary draws, useful partial setups, access, deployment cost, recovery, and the desired play experience. Several lines sharing one vulnerable permanent are not independent alternatives. Favor the package that serves the player's idea and actual pool, rather than an abstract lowest piece count. Explain a discovered infinite line honestly, then respect a request to keep the deck non-infinite.

## Reporting Format

Use only as much of this format as the question needs:

- **Core:** [N cards, including any commander], producing [verified resource or effect].
- **Full win:** [N total required cards], using [supplied outlet], or "no immediate win established."
- **Setup:** [zones, mana, counters, tokens, timing, and any additional setup dependency].
- **Sequence:** [ordered actions and net output per cycle].
- **After disruption:** [remaining useful plays and shared points of failure].

Historical spell-chain decks such as [High Tide](../archetypes/12-combo.md#historical-reference) teach resource conversion, but their entire shell is not a fixed two-card combo. Count a specific proposed line from a specific state, not an archetype's nickname.
