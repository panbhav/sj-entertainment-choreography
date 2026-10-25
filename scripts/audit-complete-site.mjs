import assert from 'node:assert/strict';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const rawBase = process.argv[2] || 'http://127.0.0.1:3000';
const base = new URL(rawBase.endsWith('/') ? rawBase : rawBase + '/');
const basePath = base.pathname.replace(/\/$/, '');
const isStaticHost = base.hostname.endsWith('github.io');

const decode = (s) => s.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
const documents = new Map();
const assets = new Set();
const links = new Set();
const failures = [];

async function request(urlPath, options = {}) {
  const targetPath = urlPath.startsWith(basePath) ? urlPath : `${basePath}${urlPath.startsWith('/') ? urlPath : '/' + urlPath}`;
  return fetch(new URL(targetPath, base.origin), { ...options, signal: AbortSignal.timeout(30000) });
}
const sitemap = await (await request('/sitemap.xml')).text();
const pending = ['/', ...[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => {
  const path = new URL(decode(m[1])).pathname;
  return basePath && path.startsWith(basePath) ? path.slice(basePath.length) || '/' : path;
})];
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
    const url = new URL(href, new URL(basePath + route, base.origin));
    if (url.origin !== base.origin) continue;
    const cleanPath = basePath && url.pathname.startsWith(basePath) ? url.pathname.slice(basePath.length) || '/' : url.pathname;
    if (/\.[a-z\d]+$/i.test(url.pathname) || url.pathname.includes('/_next/')) assets.add(cleanPath);
    else {
      links.add(cleanPath + url.search + url.hash);
      if (!documents.has(cleanPath)) pending.push(cleanPath);
    }
  }
  for (const [, raw] of html.matchAll(/(?:src|poster)="([^"<>]+)"/g)) {
    if (raw.startsWith('/') && !raw.startsWith('//')) {
      const decoded = decode(raw);
      assets.add(basePath && decoded.startsWith(basePath) ? decoded.slice(basePath.length) : decoded);
    }
  }
  for (const [, raw] of html.matchAll(/srcSet="([^"<>]+)"/gi)) {
    for (const entry of raw.split(',')) {
      const asset = entry.trim().split(/\s/)[0];
      if (asset.startsWith('/') && !asset.startsWith('//')) {
        const decoded = decode(asset);
        assets.add(basePath && decoded.startsWith(basePath) ? decoded.slice(basePath.length) : decoded);
      }
    }
  }
}
const enquiryFiles = ['src/content/enquiryOptions.ts', 'src/content/services.ts', 'src/content/entriesAndArtists.ts', 'src/content/packages.ts'];
const knownServices = new Set(['choreography', 'couple-entry', 'artists', 'artists-live-entertainment']);
for (const file of enquiryFiles) {
  try {
    const code = await readFile(file, 'utf8');
    for (const [, val] of code.matchAll(/(?:value|queryParam):\s*['"]([^'"]+)['"]/g)) {
      knownServices.add(val);
    }
  } catch {}
}

const aliases = { choreography: 'sangeet-spectacular', 'couple-entry': 'grand-entry-experience', artists: 'artists-entertainment', 'artists-live-entertainment': 'artists-entertainment' };
for (const href of links) {
  const url = new URL(href, 'http://localhost');
  const html = documents.get(url.pathname);
  if (!html) { failures.push(`Missing link target: ${href}`); continue; }
  if (url.hash && !html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) failures.push(`Missing anchor: ${href}`);
  const service = url.searchParams.get('service');
  if (service) {
    const target = aliases[service] || service;
    if (!knownServices.has(target)) failures.push(`Unknown enquiry service: ${href}`);
  }
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
  if (response.status !== 404) failures.push(`Missing-page handling: ${route} returned ${response.status}, expected 404`);
}
if (!isStaticHost) {
  const validFields = { name: 'Demo Visitor', phone: '0000000000', eventCity: 'Jaipur', serviceInterest: 'haldi-celebration' };
  for (const body of ['{', 'null', '[]', '{"name":4,"phone":{},"eventCity":[]}', JSON.stringify({ ...validFields, serviceInterest: 'invented-service' }), JSON.stringify({ ...validFields, serviceInterests: [] }), JSON.stringify({ ...validFields, serviceInterests: ['haldi-celebration', 'invented-service'] }), JSON.stringify({ ...validFields, serviceInterests: 'not-an-array' }), JSON.stringify({ ...validFields, serviceInterests: [4] }), JSON.stringify({ ...validFields, eventDate: '2026-02-31' }), JSON.stringify({ ...validFields, message: 'x'.repeat(5001) })]) {
    const response = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
    if (response.status !== 400) failures.push(`API accepted invalid payload (${response.status}): ${body}`);
  }
  const oversized = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'x'.repeat(66000) }) });
  if (oversized.status !== 413) failures.push(`Oversized API payload returned ${oversized.status}, expected 413`);
  const unsupported = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: '{}' });
  if (unsupported.status !== 415) failures.push(`Non-JSON API payload returned ${unsupported.status}`);
  const crossOrigin = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://unrelated.example' }, body: JSON.stringify(validFields) });
  if (crossOrigin.status !== 403) failures.push(`Cross-origin API payload returned ${crossOrigin.status}`);
  const sameOrigin = await request('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: base.origin }, body: 'null' });
  if (sameOrigin.status !== 400) failures.push(`Same-origin submission rejected before validation (${sameOrigin.status})`);
}
const result = { pages: documents.size, linksAndAnchors: links.size, assets: assets.size, failures };
await mkdir('artifacts/site-audit', { recursive: true });
await writeFile('artifacts/site-audit/http-audit.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
assert.equal(failures.length, 0, 'Website audit found issues');
