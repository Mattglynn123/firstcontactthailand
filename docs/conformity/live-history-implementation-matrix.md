# Live / Mat History / Astro Conformity Matrix

Reference date: 2026-07-19

The public WordPress site is the visual and content reference. Mat's recovered July 7-15 work supplies the corrections that must be preserved when the public render is visibly broken. The Astro implementation must not load WordPress CSS, JavaScript, APIs, media, or runtime code.

| Surface | Public reference | Mat history to preserve | Astro target |
| --- | --- | --- | --- |
| Global header | Ocean-wave image, white logo, compact white navigation, mobile drawer | Stable navigation; no duplicated sticky header | One responsive Astro header using local assets only |
| Global footer | Dark navy band, logo and description, Quick Links, contact details and social links | Keep the public wording and destinations | One reusable Astro footer, no repeated render |
| Home | Beach image, About Us copy, How It Works copy, generous white spacing | Do not reintroduce the rejected generic landing-page sections | Faithful three-section page followed by the public footer |
| Local Business Network | Public card titles, images and order | Clean three-column cards; no collapsed columns; no duplicate CTA | 3/2/1 responsive grid with one CTA per card and one final contact CTA |
| Community Events | Current area-specific event content and images | Area-specific imagery; consistent two-button CTA; no stale flyers | Structured event grid and event routes from local data |
| Hire | Public 2026-07-02 title, intro, three cards and final CTA | Correct images; teal headings; equal cards; one CTA | 3/2/1 responsive grid using local copies of current public media |
| Local Deals | Public 2026-07-02 title, intro, three cards and card CTAs | Remove duplicate page CTA; equal clean cards | Three responsive cards with the exact public copy and local images |
| Property | Public property purpose and destinations | Keep service and sales-area paths; remove duplicated sales buttons and collapsed cards | Accessible service cards plus two clean disclosure groups for sales areas |
| Tours | Public 2026-07-02 four-card content and destinations | Tour guide appears once; equal headings and CTAs | 4/2/1 responsive card grid with exact copy and local images |
| Contact | Public contact intent, email, Facebook and WhatsApp | Preserve direct contact paths | Standalone local form UI plus direct email/social links |
| Imported routes | Public route inventory and meaningful imported content | No mirror, injector, visibility locks or delayed DOM changes | Clean Astro content rendering with local media and fallback only where source content is unusable |

## Acceptance rules

1. Production WordPress remains unchanged until explicit approval.
2. Staging contains no `wp-content`, `wp-includes`, WordPress REST, mirror runtime or injector dependency.
3. All visible media are served from `/assets/fct/`.
4. Navigation, card links, contact links and event routes resolve locally on staging.
5. Desktop, tablet and mobile layouts have no horizontal overflow or overlapping text.
6. Visual QA compares the public reference and Astro output at matching viewports before staging publication.
