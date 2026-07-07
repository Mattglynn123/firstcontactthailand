# ADR-001 — Stack de reconstruction : Astro (agent-first)

- **Statut** : Proposé (2026-07-03)
- **Contexte** : First Contact Thailand — migration hors WordPress vers un site code-first,
  optimisé pour un développement piloté par agents CLI (Claude Code, Codex CLI, Codex app).
- **Décideurs** : Daniel (dir. technique/opérationnel), Mat (propriétaire, travaille via Codex).

## Décision

Reconstruire le site en **Astro 6 + TypeScript + Tailwind CSS**, contenu en **Markdown/MDX
via Content Collections**, hébergé sur **Cloudflare Pages**, versionné dans un **repo git**
que les agents éditent, commitent et déploient en continu.

## Pourquoi (critère n°1 : compatibilité agents CLI)

1. **Contenu = source Markdown, pas HTML généré.** Les Content Collections d'Astro stockent
   le contenu en `.md`/`.mdx` typé. Les agents éditent directement la source — aucune
   conversion lossy HTML↔Markdown. Les agents parsent le Markdown bien plus fiablement.
2. **Fichiers + git.** Tout est fichier texte diffable → PR, review, rollback triviaux pour
   Claude Code / Codex. Pas de base de données opaque, pas d'admin cliquable, pas d'Elementor.
3. **Framework très représenté dans les LLM** → génération de code fiable, peu d'hallucinations.
4. **Agent-friendly natif 2026** : endpoints `.md`, `llms.txt`, content negotiation — le site
   devient lisible par les agents autant que par les humains.
5. **Robustesse & perf** : sortie statique (island architecture), rapide, sécurisée (pas de
   surface d'attaque WordPress/PHP/DB), hébergement quasi gratuit.
6. **Cloudflare a racheté Astro (janv. 2026)** → intégration deploy/CDN/edge de premier ordre.

## Stack retenue

| Couche | Choix | Rôle |
|---|---|---|
| Framework | **Astro 6** | site statique + islands |
| Langage | **TypeScript** | typage, fiabilité agents |
| Contenu | **Markdown/MDX + Content Collections** | pages, deals, events, annuaire |
| Style | **Tailwind CSS** | design system moderne, très fluent pour les LLM |
| Interactivité | **islands React/Preact** (au besoin) | formulaires, filtres, chatbot |
| Hébergement | **Cloudflare Pages** | deploy git-driven, CDN, edge functions |
| Versionnage | **git repo** (GitHub) | source de vérité éditée par les agents |
| Doc agents | `AGENTS.md` / `CLAUDE.md` + `llms.txt` | contexte pour Codex/Claude Code |

## Migration depuis WordPress (source = notre backup vérifié)

1. **Extraction** du contenu via WP REST API (`/wp-json/wp/v2/pages|posts`) + le dump BDD
   déjà sauvegardé → titres, HTML rendu, slugs, dates, catégories.
2. **Conversion** HTML → Markdown propre (frontmatter : title, slug, date, cover, tags).
   Outils de référence : `wordpress-export-to-markdown`, WP→MDX scripts, WP-Astro-MCP.
3. **Médias** : rapatriés depuis le backup `wp-content/uploads` → `src/assets` / `public`.
4. **Design** : reconstruction mobile-first en Tailwind (pas de portage Elementor).
5. **SEO** : conservation des slugs/URLs + redirections pour ne rien perdre.
6. **Cutover** : deploy Cloudflare Pages → bascule DNS quand validé (prod WP gardée en secours).

## Ce qu'on abandonne

WordPress, Elementor, la base MySQL, les 15 plugins, l'admin PHP. Le backup complet
(BDD + fichiers) reste archivé comme filet de sécurité et **source de la migration**.

## Alternatives écartées

- **WordPress modernisé** : rejeté — Mat ne veut plus de WordPress.
- **Next.js** : excellent mais plus lourd/config qu'un site de contenu ne l'exige ; Astro est
  plus simple et plus agent-friendly pour ce cas.
- **Headless WP + Astro** : garde une dépendance WordPress qu'on veut éliminer.
- **Webflow/Framer** : pas code-first → inadapté à un workflow agents CLI.

## Sources

- Astro Docs — Content Collections, Migrate from WordPress
- « Making your Astro site agent-friendly » (jimmy.codes, 2026)
- « Astro 6.4 : the fastest content stack in 2026 » (Cosmic)
- Reflex — « Best Web Frameworks for AI Generated Code 2026 »
