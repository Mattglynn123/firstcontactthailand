# First Contact Thailand — Agent Guide (web/)

Astro 6 site for firstcontactthailand.com — business network community for expats
and locals on Koh Samui & Koh Phangan. This replaces the old WordPress site.
Owner: Mat (non-technical, works through Codex). Read `../ROADMAP.md` for status
and next steps.

## Stack

- Astro 6 + TypeScript (strict) — static output
- Tailwind CSS 4 (via `@tailwindcss/vite`) — import chain: `src/styles/global.css`
- MDX + React islands (only where interactivity is needed)
- Content: Markdown files in `src/content/pages/` and `src/content/posts/`,
  schema in `src/content.config.ts`

## Layout

- `src/layouts/Layout.astro` — base layout (header/nav/footer)
- `src/pages/index.astro` — homepage
- `src/pages/[...slug].astro` — renders every content page at `/{slug}`
- `src/pages/pages/index.astro` — index of all migrated pages
- `scripts/wp-export-to-markdown.mjs` — re-runs the WordPress → Markdown migration
  (read-only against the live site; overwrites files in `src/content/`)

## Conventions

- Content frontmatter carries WordPress provenance (`wpId`, `originalUrl`,
  `sourceType`). Keep it — it's the migration audit trail.
- To retire a page, set `draft: true` in its frontmatter. Do not delete files
  during the curation phase.
- Slugs are inherited from WordPress and must stay stable until go-live
  (SEO). New pages: kebab-case slugs.
- Mobile-first Tailwind. No CSS files besides `global.css`.
- Never commit secrets. Never reference server credentials in code or docs.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

```bash
npm run dev      # dev server on :4321
npm run build    # static build to dist/ (must stay green)
npm run preview  # serve the build locally
```

Always run `npm run build` before committing structural changes.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
