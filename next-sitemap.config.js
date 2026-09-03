/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://drgauravsainiortho.com',
  generateRobotsTxt: true,
  // Static export: `next build` already copied public/ into out/ before this
  // postbuild step runs, so writing to the default `public` dir would leave
  // out/sitemap.xml one build stale. Write straight into the deployed folder.
  outDir: 'out',
  // Add trailing slashes to all URLs
  trailingSlash: true,
  // Generate a single sitemap.xml instead of a sitemap index + sitemap-0.xml
  generateIndexSitemap: false,
  // Exclude specific paths
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/static/*',
    '/404/',
    '/search/', // exclude search from crawl indexing
  ],
  // Customize page priorities and frequencies
  transform: async (config, path) => {
    // Normalize path by removing trailing slash for easy matching
    const normPath = path === '/' ? '/' : path.replace(/\/$/, '');
    
    let priority = 0.7;
    let changefreq = 'monthly';

    // Homepage
    if (normPath === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } 
    // Contact & Booking (High conversion value)
    else if (normPath === '/book-appointment' || normPath === '/contact') {
      priority = 0.9;
      changefreq = 'monthly';
    } 
    // Main landing pages
    else if (normPath === '/services' || normPath === '/about') {
      priority = 0.9;
      changefreq = 'weekly';
    } 
    // Blog listing and FAQs
    else if (normPath === '/blog' || normPath === '/faqs' || normPath === '/testimonials') {
      priority = 0.8;
      changefreq = 'weekly';
    } 
    // Treatment / Service details
    else if (normPath.startsWith('/services/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Blog articles
    else if (normPath.startsWith('/blog/')) {
      priority = 0.7;
      changefreq = 'monthly';
    } 
    // Utility pages
    else if (normPath === '/privacy' || normPath === '/terms' || normPath === '/sitemap') {
      priority = 0.4;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  // robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // Do NOT disallow the legacy WordPress query strings (?p=, ?page_id=,
        // ?cpt_services=, ?cpt_team=, ?tag=). .htaccess now answers every one
        // of them with a 301 or a 410, and Googlebot can only act on those if
        // it is allowed to crawl the URL. Blocking them here would freeze the
        // old URLs in the index as "indexed, though blocked by robots.txt"
        // and the redirects would never be seen.
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://drgauravsainiortho.com'}/sitemap.xml`,
    ],
  },
}