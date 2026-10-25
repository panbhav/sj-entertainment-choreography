# Contact email delivery and multiple services

## What changed

The Contact form now uses a native HTTPS POST to `https://formsubmit.co/sjentertainmentch@gmail.com`. It is no longer a demo form or an email-app draft. FormSubmit handles its security check and email delivery, so this works on the existing static GitHub Pages host without an SMTP/API secret.

Service Interests supports multiple selections, search, visible selected-service labels, and individual removal. At least one service is required. All selected labels are included in the submitted `Service interests` field. Links from choreography pages still preselect their service; the associated concept is included only while that service remains selected.

Name, phone, optional email, city, proposed date/date status, selected services, concept and message are named form fields. The visitor email field lets the provider use Reply-To when supplied. The standard provider CAPTCHA remains enabled; the honeypot is retained. The browser security policy permits native form posting to this provider, while its other restrictions remain intact. The privacy draft discloses the provider and its documented 30-day submission archive.

## One required inbox activation

1. Submit one enquiry from the Contact page and complete the provider’s security check.
2. Open **sjentertainmentch@gmail.com** and approve the FormSubmit activation email. Check Spam if needed.
3. Submit another test enquiry and confirm it arrives in the inbox.

Provider setup instructions: https://formsubmit.co/ . Provider documentation: https://formsubmit.co/documentation .

**Inbox delivery is not yet verified.** No external test/activation submission was sent during this code update, and no mailbox was accessed. The recipient must complete the provider’s confirmation. No claim is made that an activation email is already waiting.

On the published GitHub Pages build, successful provider completion returns to `/sj-entertainment-choreography/contact/thank-you`. Set `NEXT_PUBLIC_SITE_URL` to the actual site base URL for other hosts. In a local build without a public URL, the provider uses its own default completion page.

## Verification

- Production build/TypeScript and ESLint with zero allowed warnings: passed.
- GitHub Pages export built with its real base URL: 876 exported targets checked, no missing targets/base-path failures.
- The exported site was served locally with the GitHub Pages prefix. Its hydrated Contact form has the correct recipient action, POST method, Send Celebration Enquiry button, all named fields and the configured return URL. No demo notice appears and CAPTCHA is not disabled.
- Multi-select search, no-results state, checking two services, selected count, deselection, and removal chips: passed on production/server and exported/static builds.
- Query preselection and conditional concept inclusion: passed. Adding another service retains the original concept; removing the original service removes it.
- Empty-form validation prevents navigation and focuses the first invalid field. A missing service gives the group error.
- Open multi-select with two selected services at 320, 390, 768 and 1440px: no document overflow.
- HTTP audit: 19 canonical pages, 154 links/anchors and 96 referenced assets, no failures. The non-indexed thank-you page is built separately.
- Optional server webhook API now accepts and validates a service array while retaining legacy single-service compatibility. Invalid array shapes, unknown selections, malformed JSON, oversized requests and unrelated origins are rejected in regression checks. Valid multiple selections reach its intentional unconfigured-provider response without contacting an external webhook.
- No browser console errors from the tested static export origin. No dependency was added.

Evidence is saved in `artifacts/site-audit/email-form-layouts.json`, `email-form-static.json`, `contact-email-multiple.png`, `http-audit.json` and `static-export-audit.json`.

## Optional server-hosted delivery

The existing private HTTPS webhook remains an optional override when `ENQUIRY_DELIVERY_ENABLED=true` and `ENQUIRY_WEBHOOK_URL` are configured on server hosting. GitHub Pages cannot run that API; leave it disabled there so the hosted mail form remains selected. Webhook payloads include both `serviceInterests` (all selected IDs) and the legacy `serviceInterest` (first selected ID).

The Join Our Team form retains its separate review-and-open-WhatsApp/email introduction flow. This update concerns customer enquiries on Contact.
