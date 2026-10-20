import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:3000';
const routes = ['/', '/wedding-choreography', '/couple-entries-entertainment', '/our-work', '/packages', '/about', '/contact', '/privacy', '/terms'];
const documents = new Map();
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route} should render`);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${route} needs a main heading`);
  documents.set(route, html);
}
const targets = new Set();
const assets = new Set();
for (const [route, html] of documents) {
  for (const match of html.matchAll(/href="([^"<>]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (href.startsWith('/') || href.startsWith('#')) {
      const url = new URL(href, new URL(route, base));
      if (!url.pathname.startsWith('/_next/') && !/\.[a-z\d]+$/i.test(url.pathname)) targets.add(url.href);
    }
  }
  for (const match of html.matchAll(/(?:src|href)="(\/(?:_next\/static\/|icon\.svg|favicon\.ico)[^"<>]*)"/g)) assets.add(match[1].replaceAll('&amp;', '&'));
}
const serviceAliases = { choreography: 'sangeet-spectacular', 'couple-entry': 'grand-entry-experience', artists: 'artists-entertainment' };
const contactHtml = documents.get('/contact');
for (const target of targets) {
  const service = new URL(target).searchParams.get('service');
  if (service) assert.ok(contactHtml.includes(`value="${serviceAliases[service] || service}"`), `Enquiry link has no matching service option: ${target}`);
  const url = new URL(target);
  const response = await fetch(url);
  assert.equal(response.status, 200, `Broken internal link: ${target}`);
  const html = await response.text();
  if (url.hash) assert.ok(html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor: ${target}`);
}
for (const path of assets) {
  const response = await fetch(new URL(path, base), { method: 'HEAD' });
  assert.equal(response.status, 200, `Missing asset: ${path}`);
}
const missing = await fetch(new URL('/our-work/nonexistent-audit-project', base));
assert.equal(missing.status, 404, 'Unknown projects should return 404');
for (const body of ['{', 'null', '[]', '{"name":4,"phone":{},"eventCity":[]}']) {
  const response = await fetch(new URL('/api/enquire', base), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
  assert.equal(response.status, 400, `Invalid enquiry should return 400: ${body}`);
}
console.log(`Passed: ${routes.length} pages, ${targets.size} internal links and anchors, ${assets.size} local assets, project 404, and 4 invalid enquiry payloads.`);

