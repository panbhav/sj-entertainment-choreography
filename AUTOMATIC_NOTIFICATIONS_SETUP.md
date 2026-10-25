# Automatic email + WhatsApp notifications

## Current status

The code is prepared for both Contact enquiries and Join Our Team introductions to submit in-page. It is **not live**: no API credentials, verified email sender, WhatsApp Business sender/template or server hosting have been configured. No real notification was sent and no provider account was created.

The former FormSubmit native POST and recruitment mailto/WhatsApp draft actions were removed from submission flows. Direct contact links elsewhere remain available for visitors who intentionally choose them. Missing configuration produces a clear not-sent notice rather than a false success.

## Flow

1. The visitor fills Contact or reviews a team introduction and presses Send.
2. The browser sends JSON to the website’s own `/api/enquire` or `/api/team` endpoint.
3. The server validates the request and attempts both notifications in parallel: Resend email and a Twilio WhatsApp approved template.
4. Email contains the full validated details. WhatsApp contains a concise summary of up to 600 characters of the details, plus the kind, name, phone and city. The visitor stays on the website.

The server fixes the recipients to **sjentertainmentch@gmail.com** and **+918233277258**. A visitor cannot change the recipients or cause automatic messages to be sent to arbitrary numbers. These are notifications to Sajid, not automatic replies to applicants/customers.

## Required setup

### 1. Server hosting

Deploy the site as a normal Next.js application on a server-capable host, such as Vercel, with `GITHUB_PAGES` unset. GitHub Pages serves static files and cannot run the two notification APIs. Static previews intentionally keep submission unavailable. No deployment has been performed.

### 2. Email provider

Create or use a Resend account, verify a sending domain, and create a sending API key. Set `RESEND_API_KEY` and `NOTIFICATIONS_EMAIL_FROM` on the server. The From address must belong to the verified sending domain; the Gmail address is the recipient. Account ownership, DNS verification and an actual inbox test remain required.

Official API: https://resend.com/docs/api-reference/emails/send-email

### 3. WhatsApp provider

The prepared adapter uses Twilio. Set up an approved WhatsApp Business sender and a messaging service containing that sender. Sajid’s recipient number must be eligible/opted in to receive the notifications. A normal WhatsApp number or a wa.me link alone does not supply this capability.

Set `TWILIO_ACCOUNT_SID`, a Twilio `TWILIO_API_KEY` / `TWILIO_API_SECRET`, `TWILIO_MESSAGING_SERVICE_SID` and an approved `TWILIO_CONTENT_SID`. Do not publish these values or put them in NEXT_PUBLIC_ variables.

Suggested template, subject to provider approval:

> New SJ {{1}} from {{2}}. Phone: {{3}}. City: {{4}}. Details: {{5}}. This is a short website submission summary.

Variables are: notification kind, name, phone, city, short details. Register matching sample values in the provider console. WhatsApp notifications outside its customer-service window require approved templates. An API sender is distinct from the destination that receives notifications; configuring an API sender may involve a separate business number. Follow the provider’s supported setup for existing numbers.

Official setup: https://www.twilio.com/docs/whatsapp/tutorial/send-whatsapp-notification-messages-templates

If an existing Meta Cloud API or another provider is preferred, its adapter must be connected before activation. The present implemented adapter is Twilio.

### 4. Enable and verify

Configure trusted ingress IP forwarding and hosting/provider-level abuse limits. Add all private environment variables from `.env.example`, then set `NOTIFICATIONS_ENABLED=true` and rebuild/redeploy. The site only enables submission when both provider configurations are present and structurally valid. Run real delivery tests for both forms and verify the inbox and WhatsApp handset before launching. Real account/template access and messaging tests have not been provided in this session.

## Failure behaviour and operational limits

Provider acceptance is different from confirmed inbox/handset delivery. The APIs return each channel’s acceptance state. Both accepted returns HTTP 200; one accepted returns HTTP 202; neither accepted returns HTTP 502. A partial submission is acknowledged to the visitor so they do not resend and duplicate a notification that was already accepted. Partial/failed attempts emit a reference and channel states to server logs, without applicant details or credentials.

There is **no durable outbox, automatic retry worker, provider delivery-status callback or cross-instance deduplication** in this implementation. Monitor the sanitized failure events and use provider dashboards for delivery status. If guaranteed retries or a central enquiry archive are required, add a durable queue/store and delivery callbacks before launch. Email requests carry an idempotency key for their generated reference; that does not deduplicate a fresh visitor submission.

The in-process request limit is 20 attempts per forwarded IP per ten minutes, with bounded memory. It supplements hosting-level protection; it is not a distributed limit. Ingress must overwrite untrusted forwarded-IP headers. Secrets are server-only and provider requests use fixed HTTPS hosts, timeouts and redirect rejection. The browser only calls same-origin APIs.

## Verification completed

- Production build, TypeScript and ESLint with zero allowed warnings: passed.
- Static export builds and checks 890 targets without missing paths. This confirms rendering/paths, not static hosting’s ability to send notifications.
- Existing HTTP crawl: 19 canonical pages, 154 links/anchors, 110 referenced assets; no failures.
- `scripts/test-notification-delivery.mjs`: both channels, payloads, template variables/length/whitespace, full email text, Reply-To, email idempotency header, individual provider rejection, partial success, timeout, malformed JSON/acknowledgements and recruitment notification tests passed. HTTP is injected/mocked; no external requests occur.
- API checks: invalid shapes, missing fields, unknown team areas, unsafe portfolio protocols, oversized skills, bad phones, unrelated origins, wrong content type, 64 KB size limit and request throttling all passed.
- Valid requests to both endpoints return honest HTTP 503 while configuration is missing. No provider is contacted in that state.
- Provider secret environment names and email delivery API implementation are absent from browser JavaScript.
- Browser checks: neither submission flow opens WhatsApp/email. Contact retains its values on an unconfigured submission; team review has Send introduction and Edit buttons with no manual draft links. It displays a clear not-sent error when unavailable.
- Team review fits 320, 390, 768 and 1440px without document overflow. No real messages were sent.

Evidence is in `artifacts/site-audit/automatic-api-tests.json`, `automatic-form-layouts.json`, `automatic-team-form.png` and existing HTTP/export reports.
