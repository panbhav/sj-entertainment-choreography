# Live form submission tests — 25 October 2026

The owner confirmed FormSubmit activation and authorised sample submissions. Exactly two live sample submissions were made through the website UI at http://127.0.0.1:3001, addressed by the fixed FormSubmit endpoint to sjentertainmentch@gmail.com. Both were explicitly labelled TEST / PLEASE IGNORE and used dummy contact details and reserved example.com email/portfolio URLs.

| Form | Email subject | Reference in message | Result |
| --- | --- | --- | --- |
| Contact | SJ Website — New celebration enquiry | SJ-TEST-20261025-ENQUIRY-01 | Provider acceptance shown by website success feedback |
| Join Our Team | SJ Website — New team introduction | SJ-TEST-20261025-TEAM-01 | Provider acceptance shown by website success feedback |

Contact test included Cousins Dance and Complete Multi-Day Celebration Curation together, the not-finalised date checkbox, optional email, city, phone and a full test message. Recruitment included Dance Troop, 1–3 years, project-based/freelance availability, a portfolio link, skills text and travel preference. Review → Edit → Review retained the recruitment values. Send/edit buttons were disabled during sending; after success the Send control disappeared. Neither workflow opened an email or WhatsApp application.

Mocked tests were rerun using scripts/test-form-email.mjs and scripts/test-notification-delivery.mjs. They passed response/string-boolean handling, activation errors, HTTP failures, honeypot, transport failures, payload/recipient isolation and optional backend regressions without sending any extra messages. Required-field validation and responsive layouts were checked in the preceding integration turn; the recruitment success view was also checked at 390 px without horizontal overflow.

## Remaining confirmation

Provider acceptance is not proof of inbox receipt or exact email rendering. The owner has been asked to confirm both references and field contents in Inbox/Spam. That confirmation is pending. Production-host origin, real-device browsers, mail-client Reply-To behaviour and WhatsApp API delivery are outside these local tests. No WhatsApp notification was attempted.

## Screenshots

- artifacts/site-audit/formsubmit-enquiry-live-success.png
- artifacts/site-audit/formsubmit-team-live-success.png
