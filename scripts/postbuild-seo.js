/**
 * Runs after `next-sitemap` (see package.json "postbuild").
 *
 * 1. Deletes out/404/index.html. `trailingSlash: true` makes Next emit the
 *    not-found page at BOTH out/404.html and out/404/index.html. Apache serves
 *    the latter directly, so https://…/404/ answered HTTP 200 — a soft 404 that
 *    Google will happily index. Only out/404.html is needed; .htaccess points
 *    ErrorDocument at it.
 * 2. Fails the build if robots.txt or sitemap.xml is missing from out/, since
 *    both are now generated (they are no longer committed under public/).
 */
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'out');
const softNotFound = path.join(out, '404');

if (fs.existsSync(softNotFound)) {
  fs.rmSync(softNotFound, { recursive: true, force: true });
  console.log('[postbuild-seo] removed out/404/ (soft-404 duplicate of 404.html)');
}

const required = ['404.html', 'robots.txt', 'sitemap.xml'];
const missing = required.filter((f) => !fs.existsSync(path.join(out, f)));
if (missing.length) {
  console.error(`[postbuild-seo] MISSING from out/: ${missing.join(', ')}`);
  process.exit(1);
}
console.log('[postbuild-seo] ok:', required.join(', '));
