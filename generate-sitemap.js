const fs = require('fs');
const path = require('path');

// Define all pages with their priorities and change frequencies
const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/knee-replacement-surgery/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/hip-replacement-surgery/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/robotic-surgery/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/sports-injury-treatment/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/fracture-trauma-care/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/spine-surgery/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/arthroscopic-surgery/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/joint-replacement-center/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/robotic-joint-replacement/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/sports-injury-arthroscopy/', priority: '0.8', changefreq: 'monthly' },
  { path: '/testimonials/', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact/', priority: '0.8', changefreq: 'yearly' },
  { path: '/book-appointment/', priority: '0.9', changefreq: 'yearly' },
  { path: '/faqs/', priority: '0.6', changefreq: 'monthly' },
  { path: '/search/', priority: '0.5', changefreq: 'yearly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://drgauravsainiortho.com';
  const lastMod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${page.path}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += '</urlset>';
  
  // Write to public directory
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  
  console.log('Sitemap generated successfully!');
}

generateSitemap();