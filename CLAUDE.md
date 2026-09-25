# Radhika Goel PM portfolio

Astro static site. Live: https://radhika-goel-portfolio.vercel.app (Vercel project `radhika-goel-portfolio`, scope `radhika04`, deploy with `vercel deploy --prod --yes`).
Branch: `claude/eager-archimedes-00gdqw`.

## Working rules
- Reply in very short, plain words. User is a beginner.
- Ask clarifying questions; never guess design. User leads design, Claude leads structure and content.
- Numbers must match `content/facts.md` (from her resume). Projections stay labelled as projections.
- Placeholder copy for now. Email is a placeholder.
- Clean up redundant code at least every two iterations. Keep it light.
- Verify with Playwright screenshots (Chromium at /opt/pw-browsers/chromium-1194/chrome-linux/chrome) before deploying.
- No em dashes in copy.

## Structure
- Home (`src/pages/index.astro`): hero (placeholder, photo to add), Work (3 cards), the lab (side projects as dropdown rows), contact footer.
- Case studies (`src/pages/work/[slug].astro`): TCPL, JP Morgan Chase, Country Delight. Snapshot box then problem, research, insight, options, solution, results, learnings.
- Side projects: Novartis, Forus Health, AI Build Lab, MakeMyTrip, Paytm. Elective Planner is removed.
- Data: `src/data/projects.js`. Menu: home, work, lab, contact.

## Design reference
aucadian.com.au, especially its Lab section. Copied behaviours: sticky blend bar with layered blur on scroll-up, frosted full-screen menu, burger wipe, rotating stamp that speeds up on hover, pixel cursor in lab, arrow orb over work cards, row fill on hover. Lab background plain light (no pixel video).

## Open items
- Photo of Radhika for hero (needs to arrive as a file).
- Stamp ring text (placeholder: EXPLORATIONS / PRODUCT-LED).
- Real email. Resume link in menu (ask before publishing PDF).
- Header bug report from user: awaiting browser + description.
- Research report: `reports/PM portfolio structure principles.md`.
