---
name: kelviq-docs
description: Use for any Kelviq docs or changelog work - editing Mintlify pages, adding changelog entries, taking screenshots, verifying claims against the live app and SDKs, and filing Linear tickets.
---

# Kelviq docs and changelog

## Branches and git
- Never push to `main`. Ujjwal reviews and merges.
- When two docs branches are stacked (a base branch and one built on top of it), fix files that are identical on both branches on the base branch first. Commit, push, then rebase the stacked branch onto it (`git rebase -X theirs <base>`) and `git push --force-with-lease`.
- After a rebase with `-X theirs`, re-run the same edit on the stacked branch, because conflicting hunks keep the stacked branch's version.
- Make edits with small scripts that assert the exact old text appears once, or with precise Edit calls. Don't retype whole files.
- Renaming a page or folder needs a redirect in `docs.json` (`"redirects"`).

## House style
Read [copy-style.md](copy-style.md) for voice, words to avoid, structure and changelog style. Product facts live in `~/kelviq-social/memories/wiki/product-facts.md`.

- Short, plain copy. No marketing filler, no emojis, no bold callouts for things a table already shows.
- Kelviq with capital K. Boolean / Meter feature / Customizable. "Features & limits". "Usage-based pricing". In the API and SDKs it's an entitlement.
- App paths as `**Product catalog → Products**`. Button names exactly as in the app (Get Link, Set up payouts, New customer, Publish / Publish updates).
- Mention Stripe only on payments, payouts, security and legal pages.
- Escape dollar amounts in prose and tables as `\$` (or `&#36;`).
- A page that repeats its sidebar group name gets `sidebarTitle: 'Overview'`.

## Facts to keep consistent
- Fees: 2.9% + $0.40 up to $5,000 total sales, then 3.5% + $0.40. +0.7% recurring, +1.5% for cards issued outside the US. The fee is charged on the full amount the customer pays, including tax.
- Refunds: the fee isn't returned; the tax part goes back to the customer; partial refunds split tax proportionally; a refund larger than the balance takes it negative.
- No payout fee. Only currency conversion when the bank account uses another currency.
- Sellers don't need a Stripe account. Payouts go through a Stripe Connect payout account, which works in countries like India.
- SDKs: entitlements use `hasAccess`; billing periods use `YEARLY`, not `ANNUALLY`.

## Verify before writing
- Check every UI claim in the live app (app.kelviq.com) with Claude in Chrome. Don't rely on Figma or old docs.
- Check SDK claims against the published packages (`npm pack @kelviq/node-sdk`, `@kelviq/js-sdk`, `@kelviq/react-sdk`; `pip download kelviq-sdk`) and `api-reference/openapi.json`.
- Don't invent behaviour. If it's unknown, ask Alok or file a question ticket for Geo.

## Changelog (`changelog.mdx`)
- Entries are dated on Fridays only.
- Say what users can do now, in plain words, and link the docs page.
- Don't rewrite old entries without asking.

## Screenshots
- Always 3x. Zoom the page or element with CSS (`document.documentElement.style.zoom`), capture tiles, and stitch them.
- Replace real customer data with fake data via DOM JS before capturing, or blur it.
- Crop to the relevant panel with even margins and nothing cut off.
- Save to `images/<section>/` as `.webp`.

## Before finishing
- `npx mint broken-links` (one known broken image: `monetization/targeting-rules.mdx`).
- Spot-check changed pages at localhost:3000.
- Update the wiki in `~/kelviq-social` when product facts change.
- Summarise what changed per branch and list open questions.

## Linear tickets
- Team: Kelviq. App/UI → Ujjwal. SDK, API, backend and behaviour questions → Geo. Docs fixes → Alok.
- Each ticket: Where, What happens, Why it matters, Fix (with exact copy), To reproduce, live link, Figma link if any.
- Attach a screenshot with the problem boxed in red.
- List the created tickets back to Alok in a table.
