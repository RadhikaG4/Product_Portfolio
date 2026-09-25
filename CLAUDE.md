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
- Home (`src/pages/index.astro`): hero (photo, glass intro, draggable resume folder), bento, Work, the lab (side projects as dropdown rows), contact footer.
- Work (`src/components/Work.astro`): full-width retro desktop from a 1672x941 reference. Art (`src/assets/work-bg.webp`) covers the stage, PROJECT.EXE is aligned to the art (`--a`), chrome is pinned to edges (`--u`). Height is capped at the viewport; page snaps to it once it fills 40% on the way down. Folders open an in-desktop window (scrollable, expandable); wheel inside it never scrolls the page. Header hides while the desktop fills the top.
- Case studies (`src/pages/work/[slug].astro`): TCPL, JP Morgan Chase, Country Delight. Snapshot box then problem, research, insight, options, solution, results, learnings.
- Side projects: Novartis, Forus Health, AI Build Lab, MakeMyTrip, Paytm. Elective Planner is removed.
- Single pager: header = logo + tagline left, pill nav right (Home, Work, Lab, Contact) that scrolls to sections; always visible (with layered blur once scrolled) except over the desktop.

## Where to edit content
- `src/data/projects.js`: project names, dates, each Work window (`window`: lede, tags, overview, role, highlights, tools, results, learnings, image paths) and Lab rows (`text`). Contact details.
- `src/data/highlights.js`: bento tiles.
- `src/components/Folder.astro` (frontmatter): resume folder in the hero.
- Images: put files in `public/` and reference them as `/name.jpg`.
- Below hero: achievements bento. Footer: halftone panel (black dots fading to lab bg) with flowers and name.

## Design reference
aucadian.com.au, especially its Lab section. Copied behaviours: layered blur on scroll-up, rotating stamp that speeds up on hover, pixel cursor in lab, row fill on hover. Lab background plain light (no pixel video).

## Open items
- Stamp ring text (placeholder: EXPLORATIONS / PRODUCT-LED).
- Real email. Resume link in menu (ask before publishing PDF).
- Shared icon paths: `src/data/icons.js`.
- Research report: `reports/PM portfolio structure principles.md`.
