# First Contact Thailand — Rebuild Roadmap

**Live site (old):** https://firstcontactthailand.com (WordPress — kept running untouched as safety net)
**New site (this repo):** `web/` — Astro 6 + TypeScript + Tailwind CSS 4 + MDX
**Why this stack:** see `docs/ADR-001-stack-choice.md` (built to be edited by AI agents: Codex, Claude Code)

## Status — done ✅

1. Full backup of the WordPress site (database + files), verified, stored off-server.
2. Stack decision documented (ADR-001).
3. Astro foundation scaffolded in `web/` (TypeScript strict, Tailwind, MDX, React islands).
4. **All 100 pages + 1 post migrated** from WordPress to Markdown → `web/src/content/pages/` & `web/src/content/posts/`.
   Each file keeps its original slug, title, dates and `originalUrl` in frontmatter.
5. Content collections wired (`web/src/content.config.ts`), every page renders at `/{slug}`.
6. Build verified: 102 pages in ~2s (`npm run build`).

## How to work on it (Mat — from your laptop)

```bash
git clone https://github.com/Mattglynn123/firstcontactthailand.git
cd firstcontactthailand/web
npm install
npm run dev        # open http://localhost:4321
```

Then open Codex in the repo folder and ask it for what you want — it will read
`AGENTS.md` files automatically. Example first prompt:

> Read ROADMAP.md and web/AGENTS.md. Show me the current state of the site with
> `npm run dev`, then let's redesign the homepage: modern, mobile-first, using
> the content in web/src/content/pages/homepage.md as source material.

## Next steps — in order 🚧

1. **Content curation** — ~100 migrated pages include duplicates (`tours` vs `tours-2`
   vs `tours-clean`), test pages (`test-classroom`, `sample-page`, `37-2`) and empty
   shells (32 files have empty bodies). Decide keep/merge/delete per page.
   Mark rejects with `draft: true` in frontmatter (don't delete yet).
2. **Migrate media** — images still point at the old WordPress URLs. Download the
   needed ones into `web/src/assets/` and update the Markdown. (The full uploads
   folder exists in the off-server backup if the live site ever goes away.)
3. **Design system** — homepage + page templates in Tailwind: mobile-first, clean,
   "slick". Keep the teal accent or pick a new palette.
4. **Navigation** — build the real menu (city pages, categories: deals, tours,
   property, health, events, charity…) to replace the placeholder header.
5. **Events & community** — decide how events work on the new site (simple Markdown
   list first; calendar integration later).
6. **Deploy** — Cloudflare Pages, connected to this repo (build cmd `npm run build`,
   output `web/dist`, root dir `web`). Every push = automatic preview URL.
7. **Go live** — when the new site is validated: point the domain at Cloudflare
   Pages. Keep WordPress reachable internally as archive until fully confident.

## Rules

- Never commit secrets (tokens, passwords). `private/`, backups and credentials
  are gitignored — keep it that way.
- The old WordPress site stays untouched until final cutover.
- Small commits, clear messages. Push often so everyone stays in sync.
