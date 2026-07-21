# First Contact Thailand - Current Roadmap

## Current State

- WordPress-free Astro source is maintained on `codex/standalone-rebuild`.
- Public review URL: `https://firstcontactthailand.com/staging/`.
- Mat confirmed this staging version is the best current baseline on 21 July 2026.
- Production WordPress remains unchanged as a rollback source until cutover.
- GitHub Actions builds all generated routes, checks internal links and layout,
  captures priority pages at desktop/tablet/mobile, and packages staging output.

## Immediate Work

1. Mat performs final content and visual adjustments one controlled change at a time.
2. Every approved change is committed and pushed only to `codex/standalone-rebuild`.
3. GitHub Actions must pass before a controlled staging update.
4. Mat reviews the updated public staging URL.

## Production Cutover

Production replacement is not automatic. It requires Mat's written approval, a
fresh backup, a maintenance window, a complete route/media/responsive check, and
a tested rollback. Until then, all work remains on the standalone branch and
public staging URL.
