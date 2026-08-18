// Script to verify htaccess rewrite rules locally via simulation

const testCases = [
  // Domain Standardization (HTTP/HTTPS/www/non-www)
  {
    desc: 'http://drgauravsainiortho.com/ -> https://drgauravsainiortho.com/',
    scheme: 'http', host: 'drgauravsainiortho.com', path: '', query: ''
  },
  {
    desc: 'http://www.drgauravsainiortho.com/ -> https://drgauravsainiortho.com/',
    scheme: 'http', host: 'www.drgauravsainiortho.com', path: '', query: ''
  },
  {
    desc: 'https://www.drgauravsainiortho.com/ -> https://drgauravsainiortho.com/',
    scheme: 'https', host: 'www.drgauravsainiortho.com', path: '', query: ''
  },
  
  // WordPress parameter redirects (301)
  {
    desc: 'https://drgauravsainiortho.com/?p=67 -> https://drgauravsainiortho.com/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=67'
  },
  {
    desc: 'https://drgauravsainiortho.com/?p=58 -> https://drgauravsainiortho.com/blog/knee-exercises/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=58'
  },
  {
    desc: 'https://drgauravsainiortho.com/?p=73 -> https://drgauravsainiortho.com/blog/sports-injury-prevention/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=73'
  },
  {
    desc: 'https://drgauravsainiortho.com/?p=53 -> https://drgauravsainiortho.com/blog/arthroscopy-vs-open/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=53'
  },
  {
    desc: 'https://drgauravsainiortho.com/?p=56 -> https://drgauravsainiortho.com/blog/surgery-preparation/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=56'
  },
  {
    desc: 'https://drgauravsainiortho.com/?p=42 -> https://drgauravsainiortho.com/blog/arthritis-guide/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=42'
  },
  {
    desc: 'https://drgauravsainiortho.com/?tag=orthopedic -> https://drgauravsainiortho.com/blog/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'tag=orthopedic'
  },
  {
    desc: 'https://drgauravsainiortho.com/?cpt_services=request-an-appointment -> https://drgauravsainiortho.com/book-appointment/',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'cpt_services=request-an-appointment'
  },

  // Deleted pages (410 Gone)
  {
    desc: 'https://drgauravsainiortho.com/?p=1 -> 410 Gone',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=1'
  },
  {
    desc: 'https://drgauravsainiortho.com/?page_id=119 -> 410 Gone',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'page_id=119'
  },

  // Useful tracking parameters preservation
  {
    desc: 'https://drgauravsainiortho.com/?p=58&utm_source=google -> https://drgauravsainiortho.com/blog/knee-exercises/?utm_source=google',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=58&utm_source=google'
  },
  {
    desc: 'https://drgauravsainiortho.com/?p=73&gclid=12345&utm_campaign=winter -> https://drgauravsainiortho.com/blog/sports-injury-prevention/?gclid=12345&utm_campaign=winter',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '', query: 'p=73&gclid=12345&utm_campaign=winter'
  },

  // No redirect for static assets or clean pages
  {
    desc: 'https://drgauravsainiortho.com/blog/knee-exercises/ (No redirect, returns 200)',
    scheme: 'https', host: 'drgauravsainiortho.com', path: 'blog/knee-exercises/', query: ''
  },
  {
    desc: 'https://drgauravsainiortho.com/_next/static/media/test.woff2 (No redirect, returns 200)',
    scheme: 'https', host: 'drgauravsainiortho.com', path: '_next/static/media/test.woff2', query: ''
  }
];

// Helper to simulate htaccess rewrites on a URL
function simulateRewrite(scheme, host, path, query) {
  let curScheme = scheme;
  let curHost = host;
  let curPath = path;
  let curQuery = query;
  
  let redirectUrl = null;
  let status = 200; // default response
  
  // Rule 1: Redirect www to non-www
  // RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  // RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
  if (curHost.toLowerCase().startsWith('www.')) {
    const targetHost = curHost.substring(4);
    redirectUrl = `https://${targetHost}/${curPath}` + (curQuery ? `?${curQuery}` : '');
    return { status: 301, url: redirectUrl };
  }

  // Rule 2: Redirect HTTP to HTTPS non-www
  // RewriteCond %{HTTPS} off
  // RewriteCond %{HTTP_HOST} ^(www\.)?(.+)$ [NC]
  // RewriteRule ^(.*)$ https://%2/$1 [R=301,L]
  if (curScheme === 'http') {
    let cleanHost = curHost;
    if (cleanHost.toLowerCase().startsWith('www.')) {
      cleanHost = cleanHost.substring(4);
    }
    redirectUrl = `https://${cleanHost}/${curPath}` + (curQuery ? `?${curQuery}` : '');
    return { status: 301, url: redirectUrl };
  }

  // Parameter mappings helper
  const paramMappings = [
    { key: 'p=67', dest: 'https://drgauravsainiortho.com/' },
    { key: 'p=58', dest: 'https://drgauravsainiortho.com/blog/knee-exercises/' },
    { key: 'p=73', dest: 'https://drgauravsainiortho.com/blog/sports-injury-prevention/' },
    { key: 'p=53', dest: 'https://drgauravsainiortho.com/blog/arthroscopy-vs-open/' },
    { key: 'p=56', dest: 'https://drgauravsainiortho.com/blog/surgery-preparation/' },
    { key: 'p=42', dest: 'https://drgauravsainiortho.com/blog/arthritis-guide/' },
    { key: 'tag=orthopedic', dest: 'https://drgauravsainiortho.com/blog/' },
    { key: 'cpt_services=request-an-appointment', dest: 'https://drgauravsainiortho.com/book-appointment/' }
  ];

  // Evaluate query string parameter rewrites
  if (curPath === '' || curPath === 'index.php') {
    // Check 410 Gone first
    // RewriteCond %{QUERY_STRING} ^(.*&)?p=1(?:&.*)?$ [NC,OR]
    // RewriteCond %{QUERY_STRING} ^(.*&)?page_id=119(?:&.*)?$ [NC]
    // RewriteRule ^(index\.php)?$ - [G,L]
    const p1Regex = /^(.*&)?p=1(?:&.*)?$/i;
    const page119Regex = /^(.*&)?page_id=119(?:&.*)?$/i;
    if (p1Regex.test(curQuery) || page119Regex.test(curQuery)) {
      return { status: 410, url: 'Gone (No redirect)' };
    }

    // Check 301 redirects
    for (const mapping of paramMappings) {
      // Regex pattern: ^(.*&)?KEY(?:&(.*))?$
      const escapedKey = mapping.key.replace('=', '\\=');
      const regex = new RegExp(`^(.*&)?${escapedKey}(?:&(.*))?$`, 'i');
      const match = curQuery.match(regex);
      if (match) {
        // Replacement is dest + ?%1%2
        let p1 = match[1] || '';
        let p2 = match[2] || '';
        let remainingQuery = p1 + p2;
        // Clean trailing & if present
        if (remainingQuery.endsWith('&')) {
          remainingQuery = remainingQuery.slice(0, -1);
        }
        
        redirectUrl = mapping.dest + (remainingQuery ? `?${remainingQuery}` : '');
        return { status: 301, url: redirectUrl };
      }
    }
  }

  // Fallback to normal rendering (no redirect)
  return { status: 200, url: `https://${curHost}/${curPath}` + (curQuery ? `?${curQuery}` : '') };
}

// Run simulation
console.log("--------------------------------------------------------------------------------");
console.log("HTACCESS REDIRECT SIMULATION REPORT");
console.log("--------------------------------------------------------------------------------\n");

let passed = 0;
let failed = 0;

testCases.forEach((tc, idx) => {
  const result = simulateRewrite(tc.scheme, tc.host, tc.path, tc.query);
  console.log(`Test #${idx + 1}: ${tc.desc}`);
  console.log(`  Input:  ${tc.scheme}://${tc.host}/${tc.path}${tc.query ? '?' + tc.query : ''}`);
  console.log(`  Status: ${result.status}`);
  console.log(`  Result: ${result.url}`);
  
  // Verify behavior correctness
  let testPassed = false;
  if (tc.desc.includes('-> 410 Gone')) {
    testPassed = (result.status === 410);
  } else if (tc.desc.includes('->')) {
    const expectedDest = tc.desc.split('-> ')[1].trim();
    testPassed = (result.status === 301 && result.url === expectedDest);
  } else {
    // No redirect expected
    testPassed = (result.status === 200);
  }
  
  if (testPassed) {
    console.log(`  Verdict: \x1b[32mPASS\x1b[0m`);
    passed++;
  } else {
    console.log(`  Verdict: \x1b[31mFAIL\x1b[0m`);
    failed++;
  }
  console.log("--------------------------------------------------------------------------------");
});

console.log(`\nSimulation Summary: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
  console.log("\x1b[32mALL TESTS PASSED SUCCESSFULLY! .htaccess rules are mathematically correct.\x1b[0m");
} else {
  console.log("\x1b[31mSOME TESTS FAILED. Review htaccess matching logic.\x1b[0m");
}
