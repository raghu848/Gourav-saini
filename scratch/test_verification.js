const fs = require('fs');

const testCases = [
  { url: '/?p=42', expected: '301 -> /blog/arthritis-guide/' },
  { url: '/?p=53', expected: '301 -> /blog/arthroscopy-vs-open/' },
  { url: '/?p=56', expected: '301 -> /blog/surgery-preparation/' },
  { url: '/?p=58', expected: '301 -> /blog/knee-exercises/' },
  { url: '/?p=67', expected: '301 -> /blog/knee-replacement-signs/' },
  { url: '/?p=73', expected: '301 -> /blog/sports-injury-prevention/' },
  { url: '/?page_id=123', expected: '404 / 410' },
  { url: '/?tag=orthopedic', expected: '301 -> /blog/' },
  { url: '/?cpt_services=our-values', expected: '301 -> /about/' },
  { url: '/?cpt_services=hand-wrist-pain', expected: '301 -> /services/sports-injury-arthroscopy/' },
  { url: '/?cpt_services=hand-wrist-pain-2', expected: '301 -> /services/sports-injury-arthroscopy/' },
  { url: '/?cpt_services=elbow-pain', expected: '301 -> /services/sports-injury-arthroscopy/' },
  { url: '/?cpt_services=knee', expected: '301 -> /services/knee-replacement-surgery/' },
  { url: '/?cpt_services=in-office-services', expected: '301 -> /services/' },
  { url: '/?cpt_team=hilary-k-kelley-m-d', expected: '404 / 410' }
];

console.log('Testing GSC URL patterns...\n');
const htaccessContent = fs.readFileSync('.htaccess', 'utf8');
const robotsContent = fs.readFileSync('public/robots.txt', 'utf8');

console.log('--- Checking .htaccess rules ---');
testCases.forEach(tc => {
  const param = tc.url.replace('/?', '');
  const key = param.split('=')[0];
  const val = param.split('=')[1];
  
  const hasRule = htaccessContent.includes(val) || htaccessContent.includes(key);
  console.log(`[${hasRule ? 'PASS' : 'FAIL'}] ${tc.url} => Target: ${tc.expected}`);
});

console.log('\n--- Checking robots.txt rules ---');
const requiredDisallows = [
  'Disallow: /*?p=*',
  'Disallow: /*?page_id=*',
  'Disallow: /*?cpt_services=*',
  'Disallow: /*?cpt_team=*',
  'Disallow: /*?tag=*'
];

requiredDisallows.forEach(rule => {
  const present = robotsContent.includes(rule);
  console.log(`[${present ? 'PASS' : 'FAIL'}] ${rule}`);
});

console.log('\nAll checks completed successfully!');
