import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const base = process.argv[2] || 'http://127.0.0.1:3001';
const results = [];
let requestId = 0;
async function check(route, body, expected, headers = {}) {
  const response = await fetch(`${base}/api/${route}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Forwarded-For': `audit-${++requestId}`, ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body), signal: AbortSignal.timeout(10000),
  });
  results.push({ route, expected, actual: response.status });
  assert.equal(response.status, expected, `${route}: expected ${expected}, got ${response.status}`);
  return response;
}
const team = { name: 'Audit Visitor', phone: '0000000000', city: 'Jaipur', area: 'Choreographer', experience: 'Just starting out', availability: 'Project-based / freelance', skills: 'Website audit only. Do not send.', portfolio: '' };
const enquiry = { name: 'Audit Visitor', phone: '0000000000', eventCity: 'Jaipur', serviceInterests: ['wedding-content', 'background-artists'] };
for (const route of ['enquire', 'team']) {
  for (const invalid of ['{', 'null', '[]', '{}']) await check(route, invalid, 400);
  await check(route, {}, 403, { Origin: 'https://unrelated.example' });
  await check(route, '{}', 415, { 'Content-Type': 'text/plain' });
  await check(route, { message: 'x'.repeat(66000) }, 413);
  // Filled spam traps never invoke delivery, even on configured hosts.
  await check(route, { honeypot: 'audit-bot' }, 200);
}
await check('enquire', { ...enquiry, serviceInterests: ['invented'] }, 400);
await check('enquire', { ...enquiry, serviceInterests: [4] }, 400);
await check('enquire', { ...enquiry, email: 'test@example.com\r\nBcc: invalid' }, 400);
await check('enquire', { ...enquiry, eventDate: '2026-02-31' }, 400);
await check('team', { ...team, portfolio: 'javascript:alert(1)' }, 400);
await check('team', { ...team, area: 'Invented role' }, 400);
await check('team', { ...team, skills: 'x'.repeat(1201) }, 400);
const rateBucket = `audit-rate-${Date.now()}`;
for (let count = 0; count < 21; count++) await check('team', '{}', count < 20 ? 400 : 429, { 'X-Forwarded-For': rateBucket });
// Only test valid submissions after confirming delivery is disabled. Never send a real message.
const contactHtml = await (await fetch(`${base}/contact`)).text();
if (contactHtml.includes('Online submissions are not connected yet.')) {
  const response = await check('enquire', enquiry, 503);
  assert.equal((await response.json()).backendConfigured, false);
  await check('team', team, 503);
} else results.push({ validSubmissions: 'Skipped: delivery may be enabled' });
await writeFile('artifacts/site-audit/deep-api-audit.json', JSON.stringify(results, null, 2));
console.log(`${results.length} API checks passed. No notification provider requests made.`);
