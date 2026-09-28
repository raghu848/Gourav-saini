import { sitemapEntries } from './sitemap-entries'

// A route handler rather than app/sitemap.ts, which would clash with the
// human-readable /sitemap/ page. Generated inside the Next build because
// Vercel deploys the build output: files written into out/ afterwards never ship.
export const dynamic = 'force-static'

export function GET() {
  const urls = sitemapEntries()
    .map(
      (e) =>
        `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${(e.lastModified as Date).toISOString()}</lastmod>\n` +
        `    <changefreq>${e.changeFrequency}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
