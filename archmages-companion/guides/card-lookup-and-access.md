# Card Lookup and Responsible Access

These links support the collection-only coaching method. They do not configure an integration, imply ownership of any card found, or authorize purchases. Use only capabilities actually available to the configured bot.

## Reference Links

| Resource | Intended use | Boundary |
| --- | --- | --- |
| [EDHREC Combos](https://edhrec.com/combos) | Discover or inspect candidate interactions involving supplied cards | A combo entry needs independent verification; popularity and inclusion rates do not determine fit |
| [Scryfall](https://scryfall.com/) | Find exact cards, current Oracle text, and associated rulings | Check the actual card and ruling source; a convenient database is not the rules publisher |
| [Scryfall API documentation](https://scryfall.com/docs/api) | Verify permitted API use before implementing access | Do not assume current quotas, headers, or permission from an old example |
| [Scryfall rulings documentation](https://scryfall.com/docs/api/rulings) | Understand ruling records and their source metadata | Distinguish Wizards rulings from database commentary |
| [Wizards rules hub](https://magic.wizards.com/en/rules) | Resolve timing, costs, zones, replacement effects, and other rules questions | Use the current rules and Oracle text, not a historical printing alone |

## EDHREC Access Boundary

The [EDHREC terms](https://edhrec.com/terms), inspected on 1 October 2026, restrict automated searches, requests, and queries. Therefore this starter pack treats EDHREC as a human-facing reference link, not a scraping target or assumed public API. Before enabling automated access, obtain appropriate provider permission and verify the permitted interface and use. Free publication of this bot does not itself grant access rights.

Do not reverse-engineer private endpoints, mirror the combo database, or circumvent a block. A user can supply the relevant small excerpt or card names for analysis when automated lookup is unavailable. Keep explanation grounded in that supplied evidence and current rules; do not claim to have read an inaccessible entry.

## Scryfall Access Boundary

Before enabling API calls, check the current official API documentation, terms, required request headers, usage limits, and caching or bulk-data guidance. Record the verified policy in the implementation, not a guessed rate in conversational instructions. Prefer documented APIs to scraping when automated access is permitted.

Use a small number of targeted requests, deduplicate lookups, and cache only as permitted. For a rate-limit response, honor any retry instructions and use bounded backoff; do not retry in a tight loop. Stop on access-denied responses rather than changing identities, hosts, or routes to evade them. Use provider-supported bulk access only when its current rules permit the intended workload; it is not needed for a narrow interaction question.

This pack does not establish current numeric limits or required headers. Verify them from the provider's documentation before making API calls. A reference link does not establish that a lookup tool is available or authorized.

## Combo Verification Workflow

1. Start with the user's supplied pool and requested goal. A discovered outside card stays outside the proposal unless the user explicitly authorizes that search.
2. Use a permitted lookup or user-supplied combo description to identify candidate pieces and prerequisites.
3. Check each card's current text and relevant rulings, then trace the actual sequence against current rules.
4. Account for the commander, required zones, setup, mana colors, timing, and any extra outlet using the [combo-structure primer](../primers/05-combo-structure.md).
5. Explain the result, costs, and interruption points. Link the specific entry or card pages when actually inspected; do not cite a search homepage as evidence for an unverified interaction.

A database's failure to list an interaction does not establish that it cannot work. Conversely, inclusion does not establish fit, current legality, a correct piece count for this board state, or an automatic win. Verify the proposed line rather than borrowing a label.

## Failure and Privacy

If browsing, an API, or a ruling cannot be accessed, state the narrow limitation. Ask for relevant text or offer a clearly conditional explanation. Never claim a live lookup, current ruling, or complete collection scan that did not occur.

Do not send an entire private collection to a third party for a question about two cards. Minimize submitted data, follow platform permissions, and obtain appropriate authorization before any broader upload. No external collection upload or API integration is created by this guide.
