# First Contact Thailand - Agent Rules

This project is a WordPress site takeover workflow, not yet a full local codebase.

## Shared Coordination

- Use `shared-codex-opus/notes/` for durable context.
- Use `shared-codex-opus/handoffs/` for short task passoffs.
- Record any live-site actions immediately after they happen.

## WordPress Operating Rules

- Prefer `wp-admin` for Elementor, menus, forms, events, and plugin-specific settings.
- Prefer REST plus Application Passwords for repeatable inventories and automation.
- Prefer SSH or WP-CLI for server-level operations once access is confirmed.
- Do not make production updates before backup and rollback are confirmed.

## Collaboration Rules

- One agent owns a given write scope at a time.
- Do not let multiple agents edit the same files concurrently.
- Keep secrets out of shared markdown docs.
- If host-level or destructive actions are required, document the exact action in the shared notes.

## Current Priorities

1. Confirm hosting access and recovery path.
2. Create a dedicated WordPress Application Password.
3. Capture inventories of pages, plugins, themes, and settings.
4. Decide whether the durable path is child theme, custom plugin, or both.

## Model Preference

- Codex side: use `GPT-5.4`, not `GPT-5.4 mini`
- Codex reasoning preference: `extra high`
- Claude side: use `Claude Opus 4.6` for the hardest reasoning and takeover tasks
