# Full website audit — 25 October 2026

## Verdict

The tested local website passes the page, link, responsive-layout, media-playback and form-validation checks described below. Several verified issues were corrected. It is **not ready for live automated enquiries yet**: notification provider credentials, an approved WhatsApp template/sender and server hosting remain to be configured. No real enquiry or recruitment notification was sent during this audit.

## Corrections made

1. Contact feedback now receives keyboard focus, scrolls into view and exposes status/alert semantics. Visitors should not miss the unavailable-delivery message above the form.
2. Both forms have a 30-second request timeout. Recruitment now sends its hidden spam-trap field to the existing server check.
3. Form copy distinguishes preparing details from actually submitting them while delivery is unavailable. Client and recruitment journeys remain separate.
4. Contact and recruitment pages read delivery configuration at request time on server hosting. They no longer retain a disabled state baked into a build. Static export still intentionally disables submissions.
5. Same-origin checks use the configured public website origin when supplied, supporting HTTPS deployments behind an internal HTTP proxy.
6. Our Work now has its own search title, description and canonical URL. Canonicals were added to the remaining main pages; future published project pages have individual canonicals too.
7. Draft privacy and terms pages are marked noindex and excluded from the sitemap until finalised.
8. Small gold and grey labels were darkened on light backgrounds, including gallery categories, durations, optional-field labels, service descriptions and homepage secondary copy. Gold decorative accents remain.
9. The Bhaat / Mayra dance-entry reference no longer uses a gift/ritual photograph. The reception dance opener now shows a relevant AI dance ensemble instead of a band. Captions for the daytime and welcome-dance references were made more precise.
10. The skip link now has a focusable main target. The video close control has a larger touch target.

## Verification

| Area | Result and evidence |
| --- | --- |
| Pages and navigation | 19 pages, 172 internal links/anchors and 114 asset paths: zero failures. Missing-route checks return 404. |
| Responsive layouts | 57 checks: all 19 pages at 320, 768 and 1280 px. No horizontal overflow, duplicate IDs, missing image alt attributes or unnamed buttons detected; one H1 and a canonical on each page. Separate 390 px hero and feature checks also completed. |
| Celebration details | Seven category pages and 28 clickable subtypes passed definition, anchor, enquiry-context and sitemap checks. |
| Gallery | All four filters return the expected counts: 6 total, 4 choreography, 1 entry and 1 rehearsal. All six films loaded with no media errors; durations match displayed labels: 40, 18, 31, 14, 38 and 32 seconds. |
| Video accessibility | Dialog close and Escape work; keyboard focus returns to the film trigger. Mobile hero uses its 1080×810 source, muted inline playback and working pause/play controls. |
| Client form | Required-field validation focuses the first invalid input. Searching and combining wedding-content and background-artist services works. Unavailable delivery preserves details and focuses an explicit “not sent” alert. |
| Recruitment | Required details, review, send-unavailable feedback and edit retention verified. No application is represented as delivered without a configured backend. |
| Content creators | Four compact expandable formats; only one opens at a time. Keyboard activation, enquiry preselection and mobile navigation were tested. |
| FAQ and maps | All seven choreography FAQ controls expose their answer panels. Both Alwar and Mumbai maps load on request; addresses and encoded map/directions destinations match the supplied addresses. |
| API guards | 46 checks passed: malformed JSON, wrong shapes, unknown options, invalid date/email/portfolio, oversized payloads, foreign origin, content type, spam traps, rate limiting and disabled delivery. Valid-payload checks run only when delivery is confirmed disabled. |
| Notification transport | Mocked tests cover email/WhatsApp request formats, fixed recipients, partial failure, timeout, malformed acknowledgements and recruitment. No provider network calls were made. |
| Runtime configuration | An isolated server using fake credentials detected configuration without rebuilding. Invalid requests from the configured HTTPS origin reached validation; other origins were rejected. No valid submission was made to that test server. |
| Security | Live CSP, anti-framing, nosniff, referrer and permissions headers checked. No X-Powered-By header. 21 built browser bundles contained none of the checked private provider identifiers/endpoints. Environment files are ignored except the example. |
| Dependencies | `npm audit` and `npm audit --omit=dev` both reported zero known vulnerabilities at audit time. This is not a guarantee against undiscovered vulnerabilities. |
| Builds | ESLint with zero warnings, TypeScript and production build passed. GitHub Pages export passed 1,028 target checks. Exported canonical URLs retain the GitHub Pages subdirectory. |

## Media and content assessment

The gallery and hero use existing supplied wedding footage. Celebration and artist imagery is used as planning/reference material; the new background-artist images are explicitly labelled AI concepts. Reference photographs do not establish that the pictured event was a specific function or that a particular artist is booked. The content-creator service uses a compact text accordion rather than adding another heavy media gallery.

The contact phone, email, Alwar address, Mumbai address and 15+ years experience match the supplied instructions. The founder portrait remains free of the award overlay. National-award references elsewhere and the existing “500+” celebration claim have been preserved; their factual accuracy still requires owner confirmation. No independent verification of client identities, permissions, awards or business statistics was performed.

A limited computed-colour check and visual review informed the contrast refinements. Image overlays and translucent backgrounds cannot be certified by that simple check. This was not a formal WCAG audit or a real-device Safari/iOS test.

## Remaining launch requirements

- **Automatic email and WhatsApp:** configure provider accounts, verified email sender, WhatsApp API sender/template and credentials on server hosting; then authorise real inbox/device delivery tests. A WhatsApp Business mobile account alone does not provide the API sender needed by the current implementation. See `AUTOMATIC_NOTIFICATIONS_SETUP.md`.
- **Delivery reliability:** provider acceptance is not proof of inbox/device delivery. The current endpoint acknowledges a submission if at least one channel accepts it and logs channel failures. There is no durable outbox, automatic retry worker or provider-delivery callback tracking. Those are needed if guaranteed retry of both channels is a launch requirement.
- **Hosting controls:** the rate limiter is per process and depends on a trusted ingress overwriting forwarded IP headers. Configure host-level abuse protection and delivery-failure monitoring. Static GitHub Pages cannot execute the form API routes.
- **Security scope:** the current CSP permits inline scripts/styles for compatibility with this Next.js rendering setup. No authenticated administration surface or penetration test was part of this review; dependency and source checks do not certify the site against every attack.
- **Production identity:** set the final `NEXT_PUBLIC_SITE_URL` and verify production HTTPS, canonical URLs, robots and headers on the actual host. Staging remains noindex without that setting.
- **Intentional placeholders:** real Instagram/YouTube/Spotify destinations and approved brand/property names are still pending. Current generic social links and fictional brand names are visibly identified as previews.
- **Owner content:** confirm business claims and finalise the draft privacy/terms content before launch.

## Evidence files

Local evidence is in `artifacts/site-audit/`: `http-audit.json`, `deep-responsive-final.json`, `deep-api-audit.json`, `deep-video-audit.json`, `runtime-config-audit.json`, `deep-security-check.json`, `static-export-audit.json`, `deep-mobile-home.png`, `deep-contact-feedback.png` and `deep-audit-final.png`.

The work was reviewed in the source tree and local browser preview. No deployment, purchase, account creation or real client communication was performed.
