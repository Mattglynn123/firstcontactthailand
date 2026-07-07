# Codex — Start Here (First Contact Thailand rebuild)

Paste the prompt below into Codex, in the cloned `firstcontactthailand` folder.
It picks up exactly where the handoff left off.

---

You are working on the First Contact Thailand website rebuild. The old site is
WordPress; we are rebuilding it WordPress-free. Everything you need is in this repo.

BEFORE DOING ANYTHING, read these files:
1. ROADMAP.md            (full status + next steps + known defects)
2. docs/ADR-001-stack-choice.md   (why Astro, the target stack)
3. web/AGENTS.md         (conventions, commands, layout of the Astro project)

CONTEXT (already done, do not redo):
- Full verified backup of the live WordPress site exists off-server.
- A faithful static replica is live at https://firstcontactthailand.com/staging/
  (noindex). Regenerate with the scripts in web/scripts/ if needed.
- The new Astro site lives in web/ : Astro 6 + TypeScript + Tailwind 4 + MDX.
- All 100 WordPress pages + 1 post are migrated to Markdown in
  web/src/content/pages/ and web/src/content/posts/ (frontmatter keeps the
  original slug, title, dates, originalUrl).

GROUND RULES:
- Never touch the live WordPress site. Work only in this repo.
- Keep page slugs stable (SEO) until go-live.
- Retire pages by setting `draft: true` in frontmatter — do not delete during curation.
- Run `npm run build` (in web/) before every commit; it must stay green.
- Small commits, clear messages, push often. Never commit secrets.

FIRST TASK — start the dev server and do content curation:
1. `cd web && npm install && npm run dev`, open http://localhost:4321/pages to see all pages.
2. There are duplicates and junk to resolve. Group and recommend keep/merge/delete for:
   - Tours: `tours`, `tours-2`, `tours-clean`, `other-tours`
   - Contact: `contact-2`, `contact-3`, `contact-link`
   - Business network: `local-business-network`, `local-business-network-clean`,
     `business-networking`, `business-directory`, `business-directory-2`
   - Real estate / property: `property`, `property-clean`, `real-estate`, `charities`
   - Car/bike hire: `car-bike-hire`, `carbikehire`
   - Test/empty pages: `test-classroom`, `sample-page`, `37-2`, `blog`, `hello-world`
     and the ~32 files whose body is empty.
3. Propose a final page list (canonical slug per topic) and a redirect map for the
   dropped duplicates. Mark all rejects `draft: true`. Show me the plan before mass edits.

THEN (later tasks, in ROADMAP.md order): re-add the broken images, build the real
navigation menu, design the homepage + page template in Tailwind (mobile-first),
and set up Cloudflare Pages deploy (build `npm run build`, output `web/dist`, root `web`).

Ask me to confirm anything ambiguous. Begin by reading the three files above and
giving me the curation plan.
