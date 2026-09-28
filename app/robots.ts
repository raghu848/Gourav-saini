import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Do NOT disallow the legacy WordPress query strings (?p=, ?page_id=, ...).
// vercel.json redirects them, and Googlebot can only see a redirect on a URL
// it is allowed to crawl.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] },
    sitemap: 'https://drgauravsainiortho.com/sitemap.xml',
    host: 'https://drgauravsainiortho.com',
  }
}
