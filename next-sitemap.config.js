/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://drgauravsaini.com',
  generateRobotsTxt: true,
  // Add trailing slashes to all URLs
  trailingSlash: true,
  // Exclude specific paths
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/static/*',
  ],
  // Define routes to include in sitemap
  additionalPaths: async (config) => [
    // Homepage
    { loc: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() },
    
    // Main pages
    { loc: '/about/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/testimonials/', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
    { loc: '/blog/', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
    { loc: '/contact/', changefreq: 'yearly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/book-appointment/', changefreq: 'yearly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/faqs/', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
    { loc: '/search/', changefreq: 'yearly', priority: 0.5, lastmod: new Date().toISOString() },
    
    // Service pages
    { loc: '/services/knee-replacement-surgery/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/hip-replacement-surgery/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/robotic-surgery/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/sports-injury-treatment/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/fracture-trauma-care/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/spine-surgery/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/arthroscopic-surgery/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/joint-replacement-center/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/robotic-joint-replacement/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/services/sports-injury-arthroscopy/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
  ],
  // robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://drgauravsaini.com'}/sitemap.xml`,
    ],
  },
}