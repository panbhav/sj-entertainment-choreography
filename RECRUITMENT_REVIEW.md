# Recruitment correction — 25 October 2026

> Later Contact update: real hosted email submission and multiple service selection are documented in [EMAIL_FORM_SETUP.md](EMAIL_FORM_SETUP.md). Earlier demo-form descriptions below are historical.

The user confirmed this page is for recruitment. This correction supersedes the Hire Us descriptions in SITE_UPDATE_REVIEW.md.

## Current behaviour

- Navigation and footer say **Join Our Team** and open `/join-our-team`.
- The page headline is **Join the SJ crew.** Its introduction invites dancers, choreographers and creatives to express their interest.
- The recruitment form collects area of interest, name, phone, current city, experience, availability, optional portfolio/showreel URL, skills and openness to travel. Portfolio links accept only HTTP(S) URLs and are displayed as text in the review.
- Applicants review and edit their introduction before choosing WhatsApp or email. Drafts address Sajid at 918233277258 / sjentertainmentch@gmail.com. The visitor finishes sending in their app; the website does not automatically submit or store applications.
- Areas of interest are not presented as confirmed vacancies; no salary, employment offer or availability has been invented.
- Customer-facing celebration actions on Home and the brand/property wall lead to `/contact`. Contact provides a direct WhatsApp link for customer enquiries. The recruitment page also links customers back to Contact.
- Previously shared `/hire-us` URLs still render the recruitment page on server and static hosting. Their canonical URL is `/join-our-team`; only the canonical page appears in the sitemap.
- Privacy copy describes team introductions. The former client brief component was removed.

## Checks completed

- ESLint with zero allowed warnings: passed.
- Next.js production build and TypeScript: passed.
- GitHub Pages export: passed; 849 exported targets checked with no failures.
- HTTP crawl: 19 canonical pages, 154 internal links/anchors and 96 assets; no failures. The old `/hire-us` alias was checked separately and returns the current recruitment page.
- Responsive checks: 20 routes including the compatibility alias at 360×640, 390×844, 768×1024 and 1440×900: 80 checks with no document overflow, missing H1 or completed-but-broken images.
- Additional recruitment form checks at 320×568 and 900×900: no overflow. A small 320px overflow in the three planning steps was fixed by stacking those steps vertically on phones.
- Required-field validation, invalid phone rejection, unsupported portfolio protocol rejection, valid portfolio handling and beginner/no-portfolio flow: passed.
- Review includes the chosen area, experience, availability, travel preference, portfolio and skills. Draft recipients and URL encoding verified without sending messages.
- Script-like test content renders as text. Editing preserves values and restores focus to the name field.
- No errors from the audited production origin were present in the browser console.

Evidence: `artifacts/site-audit/recruitment-layouts.json`, `team-form-tests.json`, `join-our-team-desktop.png`, HTTP and static-export audit reports. The initial team-form JSON records the pre-fix 320px overflow; final browser verification confirmed 305px client and scroll widths for both edit and review at a 320px viewport.

Testing used Chromium viewport sizes. Real messaging-app delivery, physical iPhone/Safari behaviour and live deployment were not tested. No application or test message was sent.
