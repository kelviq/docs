# Kelviq docs

Mintlify docs for Kelviq (docs.kelviq.com). Navigation lives in `docs.json`. Preview with `npx mint dev` (localhost:3000).

For any docs or changelog task, follow the `kelviq-docs` skill in `.claude/skills/kelviq-docs/SKILL.md`.

Copy and tone: `.claude/skills/kelviq-docs/copy-style.md`. Product facts: `~/kelviq-social/memories/wiki/product-facts.md`.

## Must-follow rules
- Never push to `main`. Work on a branch; Ujjwal reviews and merges.
- Kelviq with a capital K. Feature types: Boolean, Meter feature, Customizable. "Features & limits" in the dashboard, "entitlement" in the API and SDKs.
- Mention Stripe only on payments, payouts, security and legal pages.
- Escape dollar amounts in prose and tables as `\$`. Two unescaped `$` on one line render as math.
- Changelog entries are dated on Fridays only.
- Check UI claims in the live app and SDK claims in the published packages before writing them.
- Use fake data in screenshots (e.g. Acme Analytics, Priya Patel). Never show real customer emails or keys.
- Run `npx mint broken-links` before you finish.
