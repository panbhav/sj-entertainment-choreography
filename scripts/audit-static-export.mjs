import { readdir, readFile, access, writeFile } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const prefix = '/sj-entertainment-choreography';
const failures = [];
let checked = 0;
async function exists(file) { try { await access(file); return true; } catch { return false; } }
async function scan(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { await scan(file); continue; }
    if (!file.endsWith('.html')) continue;
    const html = await readFile(file, 'utf8');
    const targets = new Set([...html.matchAll(/(?:href|src|poster)="([^"<>]+)"/g)].map((m) => m[1].replaceAll('&amp;', '&')));
    for (const href of targets) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const url = new URL(href, 'https://example.com');
      if (!url.pathname.startsWith(prefix + '/') && url.pathname !== prefix) { failures.push(`${file}: missing base path on ${href}`); continue; }
      const relative = decodeURIComponent(url.pathname.slice(prefix.length)).replace(/^\//, '');
      const target = path.join('out', relative);
      const found = await exists(target) || await exists(target + '.html') || await exists(path.join(target, 'index.html'));
      checked++;
      if (!found) failures.push(`${file}: missing exported target ${href}`);
    }
  }
}
await scan('out');
const report = { checked, failures };
await writeFile('artifacts/site-audit/static-export-audit.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
assert.equal(failures.length, 0, 'Static export contains broken paths');
