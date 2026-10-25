# Contact, Hire Us and home update — 25 October 2026

> Later Contact update: real hosted email submission and multiple service selection are documented in [EMAIL_FORM_SETUP.md](EMAIL_FORM_SETUP.md). Earlier demo-form descriptions below are historical.

> Superseded recruitment wording: the owner clarified that Hire Us means Join Our Team. See [RECRUITMENT_REVIEW.md](RECRUITMENT_REVIEW.md) for the current form, routes and verification.

## Completed changes

- Sajid’s business phone is **+91 82332 77258**, WhatsApp destination **918233277258**, and email **sjentertainmentch@gmail.com**. The shared configuration supplies contact links in the footer, Contact page and new Hire Us page.
- Experience copy, statistics, image descriptions and FAQs now use **15+ years** throughout. Checked Home, About, Wedding Choreography, Contact and Hire Us for obsolete 10-year/decade copy.
- New **/hire-us** page: wedding, event/brand, and venue/planner enquiry choices; service selection; validated contact details; optional date and creative brief; a review step; and WhatsApp/email drafts addressed to Sajid. Editing preserves the entries. No message is sent automatically and no booking is implied.
- Main header and mobile navigation, Home hero action, Home final action, footer and Contact page connect visitors to Hire Us. The page is included in the sitemap and static export. A mobile-friendly anchor lets visitors jump directly to the brief.
- Home and Hire Us feature three editorial social cards for Instagram, YouTube and Spotify. Footer and Contact offer compact icon links. All are clearly marked platform previews pending real profile/playlist URLs; no fictitious account URL is used.
- Home has a continuous horizontal brands-and-properties wall with a pause/resume button, hover pause, decorative edge fades and a second visual copy hidden from assistive technology. Reduced-motion CSS stops the animation, hides the duplicate and wraps the original names into a static layout.
- Brand/property names are visibly marked as fictional placeholders. Replace these with confirmed names or approved logo artwork later.
- Privacy draft explains that Hire Us prepares details locally and hands them to the visitor’s chosen messaging/email app.

## Detailed verification

| Area | Result |
| --- | --- |
| Production build and TypeScript | Passed |
| ESLint, zero allowed warnings | Passed |
| Responsive regression | 19 pages × 4 sizes = 76 checks; no document overflow, missing H1 or completed-but-broken images |
| Standard sizes | 360×640, 390×844, 768×1024 and 1440×900 |
| Extra narrow-screen form check | Brief review and edit at 320×568: no overflow |
| Link and asset crawl | 19 public pages, 154 internal links/anchors, 96 referenced assets; no failures |
| Static export | Build passed; 819 exported targets checked with no missing paths/base-path failures |
| Contact destinations | Correct tel/mailto links on all five key pages; WhatsApp brief destination verified without sending a message |
| Hire form required fields | Empty form stays in edit mode and focuses the name field |
| Hire form validation | Invalid phone rejected with a visible error; valid country-code number accepted |
| Hire brief variants | Brand/event and venue/planner selections, chosen service, date and text all appear correctly in the review and encoded drafts |
| Hire brief editing | Values retained, review hidden and focus returned to the name field |
| Text safety | Script-like sample text is displayed as plain text, never executed; draft query values are URL-encoded |
| Mobile form | 16px input text; review/actions fit narrow screens; jump target is reachable below the sticky header |
| Partner animation | Pause and resume update both control state and computed animation state; only the original list is exposed to assistive technology |
| Social links | Three correct generic HTTPS platform destinations with explicit placeholder labels and noopener/noreferrer on new tabs |
| Gallery filters | All=6, choreography=4, couple entries=1, rehearsal/BTS=1 |
| Showcase films | All six local films loaded at 1920×1080 and reached playing/readyState 4; two were rechecked after initial buffering |
| Certificate viewer | Keyboard Enter opens; Escape closes and returns focus to the trigger |
| FAQ | Expanded and collapsed states verified |
| Mobile navigation | Escape closes, restores trigger focus and unlocks body scrolling; Hire Us appears in the menu |
| Mobile hero | Playing/readyState 4 at 1080×810; primary action leads to Hire Us |
| Production browser console | No errors from the audited production origin |
| API/security regression | Invalid enquiry payload tests, same-origin/foreign-origin checks, JSON-only and size-limit tests all pass; production security headers remain present |

Evidence is saved under `artifacts/site-audit/`: `http-audit.json`, `responsive-update.json`, `contact-content-update.json`, `feature-update.json`, `static-export-audit.json`, `hire-us-desktop.png`, `hire-mobile-brief.png` and `home-partners-socials.png`.

## Current delivery behaviour and remaining owner inputs

Hire Us works with static hosting because it prepares a WhatsApp or email draft in the visitor’s app. The visitor must press Send there. Availability and booking are confirmed through a conversation. Test messages were not sent.

The older service-specific Contact form intentionally remains a preview while its automated webhook is unconfigured; it links to the working Hire Us draft flow. Real contact details alone do not configure a server-side email delivery provider.

Still needed: real Instagram/YouTube profile URLs, a Spotify playlist URL, and approved brand/property names or logos. No live deployment was performed. Chromium viewport testing was used; physical Safari/iPhone behaviour and external messaging-app delivery were not tested.

The prior audit’s dependency result remains zero reported vulnerabilities. No dependencies were added by this update. Next.js security headers apply on server hosting; GitHub Pages static hosting requires separate hosting-layer security controls, as recorded in the earlier audit.
