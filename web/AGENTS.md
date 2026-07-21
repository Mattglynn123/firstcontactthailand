# First Contact Thailand - Astro Application Rules

This directory is the standalone Astro application that replaces WordPress.
The approved baseline is `https://firstcontactthailand.com/staging/` on branch
`codex/standalone-rebuild`.

## Structure

- `src/pages/`: canonical and dynamic routes.
- `src/components/`: shared site and domain components.
- `src/data/`: navigation, event, charity, property, and page data.
- `src/styles/`: shared responsive styling.
- `public/`: static assets and property listing snapshots.
- `scripts/`: build, staging preparation, data sync, and QA automation.

## Commands

```sh
npm ci
npm run dev
npm run build
npm run qa
npm run build:staging
```

Do not run `npm run qa` until a local preview server is available at the
`QA_BASE_URL` value. GitHub Actions performs the complete build and QA on every
push to `codex/standalone-rebuild`.

## Implementation Rules

- Preserve current routes, content, navigation destinations, and responsive behavior unless Mat explicitly requests a change.
- Use the existing components and data structures; avoid page-specific patches when a shared component owns the behavior.
- Keep first-party assets local. Property listing images may be external, but must fall back cleanly when a provider image is unavailable.
- Verify desktop and mobile rendering, links, images, horizontal overflow, and browser console errors.
- Do not add WordPress runtime dependencies, PHP, generated mirror HTML, or secrets.
