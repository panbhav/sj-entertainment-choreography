import assert from 'node:assert/strict';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const base = new URL(process.argv[2] || 'http://127.0.0.1:3000');
const decode = (s) => s.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
const documents = new Map();
const assets = new Set();
const links = new Set();
const failures = [];
async function request(url, options = {}) {
  return fetch(new URL(url, base), { ...options, signal: AbortSignal.timeout(30000) });
}
const sitemap = await (await request('/sitemap.xml')).text();
const pending = ['/', ...[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(decode(m[1])).pathname)];
while (pending.length) {
  const route = pending.shift();
  if (documents.has(route)) continue;
  const response = await request(route);
  if (response.status !== 200) { failures.push(`${route}: HTTP ${response.status}`); continue; }
  const html = await response.text();
  documents.set(route, html);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) failures.push(`${route}: expected one main heading`);
  for (const [, raw] of html.matchAll(/href="([^"<>]+)"/g)) {
    const href = decode(raw);
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const url = new URL(href, new URL(route, base));
    if (url.origin !== base.origin) continue;
    if (/\.[a-z\d]+$/i.test(url.pathname) || url.pathname.startsWith('/_next/')) assets.add(url.pathname);
    else {
      links.add(url.pathname + url.search + url.hash);
      if (!documents.has(url.pathname)) pending.push(url.pathname);
    }
  }
  for (const [, raw] of html.matchAll(/(?:src|poster)="([^"<>]+)"/g)) if (raw.startsWith('/') && !raw.startsWith('//')) assets.add(decode(raw));
  for (const [, raw] of html.matchAll(/srcSet="([^"<>]+)"/gi)) {
    for (const entry of raw.split(',')) {
      const asset = entry.trim().split(/\s/)[0];
      if (asset.startsWith('/') && !asset.startsWith('//')) assets.add(decode(asset));
    }
  }
}
const contact = documents.get('/contact') || '';
const aliases = { choreography: 'sangeet-spectacular', 'couple-entry': 'grand-entry-experience', artists: 'artists-entertainment', 'artists-live-entertainment': 'artists-entertainment' };
for (const href of links) {
  const url = new URL(href, base);
  const html = documents.get(url.pathname);
  if (!html) { failures.push(`Missing link target: ${href}`); continue; }
  if (url.hash && !html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) failures.push(`Missing anchor: ${href}`);
  const service = url.searchParams.get('service');
  if (service && !contact.includes(`value="${aliases[service] || service}"`)) failures.push(`Unknown enquiry service: ${href}`);
}
async function scan(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await scan(file);
    else if (/\.(tsx?|css)$/.test(file)) {
      const source = await readFile(file, 'utf8');
      for (const [, asset] of source.matchAll(/['"`](\/(?:media|images)\/[^'"`]+)['"`]/g)) if (!asset.includes('${')) assets.add(asset);
    }
  }
}
await scan('src');
const assetQueue = [...assets];
await Promise.all(Array.from({ length: 5 }, async () => {
  while (assetQueue.length) {
    const asset = assetQueue.shift();
    const response = await request(asset, { method: 'HEAD' });
    if (response.status !== 200) failures.push(`Missing asset: ${asset} (HTTP ${response.status})`);
  }
}));
for (const route of ['/our-work/nonexistent-audit-project', '/wedding-choreography/not-a-category', '/does-not-exist']) {
  const response = await request(route);
  if (response.status !== 404) failures.push(`Missing-page handling: ${route} returned ${response.status}`);
}
const validFields = { name: 'Demo Visitor', phone: '0000000000', eventCity: 'Jaipur', serviceInterest: 'haldi-celebration' };
for (const body of ['{', 'null', '[]', '{"name":4,"phone":{},"eventCity":[]}', JSON.stringify({ ...validFields, serviceInterest: 'invented-service' }), JSON.stringify({ ...validFields, eventDate: '2026-02-31' }), JSON.stringify({ ...validFields, message: 'x'.repeat(5001) })]) {
  const response = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
  if (response.status !== 400) failures.push(`API accepted invalid payload (${response.status}): ${body}`);
}
const oversized = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'x'.repeat(66000) }) });
if (oversized.status !== 413) failures.push(`Oversized API payload returned ${oversized.status}, expected 413`);
const result = { pages: documents.size, linksAndAnchors: links.size, assets: assets.size, failures };
await mkdir('artifacts/site-audit', { recursive: true });
await writeFile('artifacts/site-audit/http-audit.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
assert.equal(failures.length, 0, 'Website audit found issues');
