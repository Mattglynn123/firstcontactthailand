# First Contact Thailand Migration Workspace

This workspace is used to audit the current WordPress site, coordinate the takeover work, and prepare a clean rebuild outside WordPress.

## Structure

- `AGENTS.md`: operating rules for Codex and other agents.
- `CLAUDE.md`: Claude-specific coordination notes.
- `scripts/`: local automation scripts for IONOS/WordPress access workflows.
- `shared-codex-opus/notes/`: durable project notes, inventories, diagnostics, and decisions.
- `shared-codex-opus/handoffs/`: short handoff notes between agents.
- `shared-codex-opus/artifacts/`: generated outputs, audits, histories, screenshots, and exports.

## Security

Do not commit credentials, WordPress login files, SSH/SFTP passwords, database dumps, `.env` files, or raw backups.

Local sensitive files are intentionally ignored by Git.

## Current Direction

The current WordPress site should be treated as the source of content and media, not as the future development platform.

Recommended path:

1. Freeze risky production edits.
2. Back up the existing WordPress site.
3. Inventory pages, media, menus, plugins, forms, and SEO data.
4. Select canonical pages and remove ambiguity from the migration plan.
5. Rebuild the public site as a code-based project.
6. Deploy with preview environments before switching production DNS.

