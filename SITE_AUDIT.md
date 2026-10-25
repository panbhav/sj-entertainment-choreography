# Website review — 25 October 2026

This records the initial audit. See [the subsequent update review](SITE_UPDATE_REVIEW.md) for Sajid’s supplied contact details, the 15+ experience update, Hire Us and the new home sections.

The local website was reviewed for navigation, responsive layouts, media relevance, enquiry behaviour, accessibility, code quality, and application security. The issues listed below have been corrected. This is an application review and local browser audit, not a penetration-test certification or a live hosting audit.

## Findings and corrections

| Finding | Correction |
| --- | --- |
| Some concept images described a different performance: an award photo for emcees, a solo performer for a couple entry, and generic stage images for specific functions. | Added an explicit curated visual registry in `src/content/conceptVisuals.ts`. Sixteen of the 28 celebration formats retain a relevant reference; twelve use their choreography description until an appropriate photo is available. Replaced the groom-squad reference with friends performing together. Removed the Bhaat/Mayra posing photo and the emcee award image from these service descriptions. |
| Related performance references could be mistaken for coverage of that exact wedding function. | Added clear reference captions and planning notes. Entry and artist imagery is distinguished from the real event films in Our Work. |
| The enquiry API lacked explicit request-origin and media-type checks. | Rejects unrelated origins with 403 and non-JSON requests with 415. The origin comparison uses the incoming public Host address because Next.js can normalize its internal hostname. A same-origin regression check covers this case. |
| Browser security headers were absent. | Added a Content Security Policy, MIME-sniffing and framing protection, referrer and device-permission policies, and disabled the framework identification header for Next.js server hosting. API responses use no-store. |
| The build job had deployment permissions it did not need. | Restricted Pages write and OIDC permissions to the deployment job in `.github/workflows/deploy.yml`. The dependency-install/build job retains read access. |

Earlier responsive and functional fixes were rechecked: the mobile hero uses the 1080×810 rendition that keeps both performers visible, shorter screens have usable actions, the tablet CTA fits, navigation closes correctly, keyboard focus returns after dialogs close, and the enquiry form uses an honest local demo flow. Existing WebP optimization reduces the 55 converted images by approximately 64% compared with their originals; unused originals are retained.

## Verification

- Production Next.js build and TypeScript compilation: passed.
- ESLint with zero allowed warnings: passed.
- 18 public pages at 360×640, 390×844, 768×1024, and 1440×900: 72 layout checks, no horizontal overflow, missing main headings, or completed-but-broken images.
- HTTP crawl: 18 pages, 151 links/anchors and 93 referenced assets, with no failures. Invalid routes return 404.
- GitHub Pages export: 768 local targets checked, no missing targets or base-path failures.
- Enquiry negative tests cover malformed JSON, invalid shapes, unknown services, invalid calendar dates, oversized messages, requests above 64 KB, unrelated origins, and non-JSON bodies. Same-origin requests reach validation.
- Gallery filters, all six local showcase films, modal close/focus behaviour, FAQ toggles, mobile navigation, hero playback, certificate enlargement, award tabs, and demo enquiry validation were exercised in the browser.
- Production browser checks reported no console errors from the audited production origin. The mobile hero reached readyState 4 and played at 1080×810.
- `npm audit`: zero reported vulnerabilities at the time of the check. A heuristic scan of application source, scripts and workflow files found no credential patterns. No unsafe HTML-injection or dynamic-code execution sinks were found in application source.
- Production response checks confirmed the security headers, no unsafe-eval permission, no X-Powered-By header, and no-store API responses.

Machine-readable evidence and screenshots are saved locally in `artifacts/site-audit/`, including `http-audit.json`, `responsive-final.json`, `security-headers.json`, `dependency-audit.json`, `source-security.json`, and the photo contact sheets.

## Remaining setup and limits

- Enquiries intentionally remain in demo mode, as requested. They do not send messages or reserve dates. Add the real contact details and configure/test an HTTPS delivery endpoint before opening enquiries. A valid direct API request returns 503 while delivery is unconfigured.
- GitHub Pages serves static files: it cannot run the enquiry API or apply Next.js response headers. Use a server-capable host for those features, or configure equivalent headers and a separate enquiry service at the hosting layer. The current static build keeps the form in demo mode.
- The CSP allows inline scripts/styles required by the current Next.js rendering and styling setup. It is useful defence in depth, not a guarantee against all script injection. Public production enquiry delivery should have hosting/provider-level abuse limits when it is enabled; origin checks do not stop direct scripted clients.
- Twelve celebration formats still need suitable visual references. Their full descriptions, quick links and enquiry actions remain available.
- Browser testing used Chromium at representative viewport sizes. Physical iPhone/Safari and live CDN/TLS configuration were not available for this local review.
- Domain configuration and the existing draft privacy/terms pages still need the owner's final launch information. Business claims and performer availability were not independently verified.
