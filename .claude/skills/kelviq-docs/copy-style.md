# Kelviq docs: copy and tone

Read this before writing or rewriting any docs page or changelog entry.

## Voice
- Plain and direct, like a helpful engineer explaining it to a colleague.
- Talk to the reader as "you". Use "Kelviq" for the product; "we" only sparingly.
- Lead with what the reader can do or needs to know. Background comes after, if at all.
- One idea per paragraph. Short sentences. Cut any sentence that repeats the one before it.
- Neutral, not salesy. Fees, limits and trade-offs are stated plainly, usually in a table, without bold warnings.

## Words to avoid
seamless, seamlessly, unlock, leverage, robust, powerful, effortless, simply, just, easily, game-changer, unprecedented, modern way, "Perfect for…", "Stop doing X…", "always accurate, always real-time", "in today's landscape", "let's dive in", rhetorical questions as openers, a closing sentence that summarises the section.

## Claims
- Only state what you've checked in the live app, the published SDKs, `api-reference/openapi.json`, or the product facts in `~/kelviq-social/memories/wiki/product-facts.md`.
- No absolute or competitive claims you can't back up ("no webhooks required", "sub-100ms", "99.99%"). Present options neutrally: "Webhooks are optional."
- No "usually" or "typically" where a rule exists. Find the rule or ask.

## Structure
- Sentence-case headings. Task headings start with a verb: "Create a plan", "Pause a subscription".
- Steps as numbered lists, one action per step, UI labels in bold exactly as they appear: **Get Link**, **Set up payouts**.
- Paths with arrows: **Product catalog → Products**.
- Use tables for comparisons, options and worked examples. Avoid bullet walls.
- Use Note, Tip and Warning callouts sparingly: one per section at most, only for something the reader would otherwise miss.
- Put an FAQ under a "questions" heading at the end of a page, phrased as the reader would ask it ("Do I need a Stripe account?").

## Numbers and examples
- Worked examples use one consistent scenario across a page, with math that adds up. Check the arithmetic.
- Escape dollar amounts as `\$` (or `&#36;`).
- Use fake but realistic data: Acme Analytics, Priya Patel, `pro`, `api-calls`. Use real API values (`YEARLY`, `hasAccess`, `BOOLEAN`).

## Code samples
- Minimal and runnable. Show the real package names and method names from the published SDK.
- Handle `null` / missing data where the SDK can return it.
- No internal or contributor notes in customer-facing pages.

## Changelog
- Dated on Fridays only.
- Title says what changed for the user. Body: what you can do now, in 1–3 short sentences, then a link to the docs page.
- No marketing tone, no emojis.

## Punctuation
- Prefer periods and commas over em dashes in new copy.
- Use "canceled" (US spelling) and "MoR" for Merchant of Record.
