import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://127.0.0.1:3000';
const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
const read = async (path) => {
  const targetUrl = path.startsWith('http') ? path : `${cleanBase}${path.startsWith('/') ? path : '/' + path}`;
  const response = await fetch(targetUrl, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${targetUrl} should render`);
  return response.text();
};

const index = await read('/wedding-choreography');
const subtypeLinks = [...index.matchAll(/href="((?:\/sj-entertainment-choreography)?\/wedding-choreography\/[^"#?]+)#([^"#?]+)"/g)];
const chapters = new Map();
for (const [, path, id] of subtypeLinks) {
  // Strip basePath for normalized internal testing
  const normalizedPath = path.replace('/sj-entertainment-choreography', '');
  if (!chapters.has(normalizedPath)) chapters.set(normalizedPath, new Set());
  chapters.get(normalizedPath).add(id);
}
assert.equal(chapters.size, 7, 'All seven celebration categories need clickable subtypes');
let total = 0;
for (const [path, ids] of chapters) {
  assert.equal(ids.size, 4, `${path} needs four distinct subtype links`);
  const html = await read(path);
  assert.match(html, /<h1[\s>]/, `${path} needs a main heading`);
  assert.match(html, /What the choreography includes/);
  assert.match(html, /Best suited to/);
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `Missing definition for ${path}#${id}`);
    assert.ok(html.includes(`concept=${id}`), `Missing enquiry context for ${id}`);
    total++;
  }
  assert.ok(!html.includes('/media/celebration-concepts/'), 'Concept imagery is deferred');
}
const sitemap = await read('/sitemap.xml');
for (const path of chapters.keys()) assert.ok(sitemap.includes(path), `${path} missing from sitemap`);
const missing = await fetch(`${cleanBase}/wedding-choreography/unknown-celebration`);
assert.equal(missing.status, 404, 'Unknown categories should return 404');
console.log(`Passed: ${chapters.size} category pages, ${total} clickable subtypes, definitions, enquiry context, sitemap entries and unknown-category 404.`);
