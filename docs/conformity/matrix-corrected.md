# First Contact Thailand - Corrected Conformity Matrix

Updated: 2026-07-20

## Source policy

The public WordPress site is not a reliable DOM source because its current render contains duplicated, collapsed and injected sections. Conformity is therefore evaluated in this order: Mat's latest requirements, recovered Mat/server history, exported WordPress content, then stable public visual identity.

| Scope | Required state | Astro implementation | Verification | Status |
| --- | --- | --- | --- | --- |
| Property menu | Exactly two entries | Property Overview; Property Sales | Mobile and desktop menu inspection | passed |
| Property Overview | Exactly four service cards | Sales; Management; Building Contractors; Buyers Agent | DOM count, links, desktop/mobile screenshots | passed |
| Property Sales | Exactly six area cards | Koh Samui; Koh Phangan; Bangkok; Pattaya; Phuket; Krabi | DOM count, six route checks, screenshots | passed |
| Homepage events | Three recovered actions | Koh Samui Events; Previous Events; List a Community Event | DOM text/link assertions | passed |
| Homepage testimonials | Three recovered testimonial images | Local repository assets | Image load and mobile visual check | passed |
| Homepage categories | Six cards at page bottom | Food & Beverage; Tours & Entertainment; Business Networking; Marketing & Design; Property & Vehicle Rental; Legal Services | DOM count and route validation | passed |
| Community Events | Structured event cards and regional pages | Dedicated event data/components and event detail routes | Visual check, links, images | passed |
| Charity extra information | Internal summary pages | Six Koh Samui internal summary routes plus regional charity data | Link-origin and route checks | passed |
| Move to Thailand | One consolidated page | Single guide component at `/move-to-thailand-guide/` | Copy and responsive check | passed |
| Better Tour Guide | Restore complete information | Commissions; pre-bookings; Gold Membership | Export comparison and responsive check | passed |
| Local Deals | One claim CTA at page bottom | Single CTA to the First Contact enquiry route | DOM count and destination check | passed |

## Whole-site gate

- Generated routes: 175
- Broken internal links: 0
- Broken local media: 0
- Missing or duplicate page H1s: 0
- WordPress runtime references: 0
- Priority route console errors: 0
- Priority route horizontal overflow at 1440 x 900 and 390 x 844: 0

## Remaining approval

No automated staging blocker remains. Mat must visually approve the public staging URL before any production cutover.
