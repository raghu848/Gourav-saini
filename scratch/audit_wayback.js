const http = require('https');

const urls = [
  'https://drgauravsainiortho.com/?p=67',
  'https://drgauravsainiortho.com/?p=58',
  'https://drgauravsainiortho.com/?p=73',
  'https://drgauravsainiortho.com/?p=53',
  'https://drgauravsainiortho.com/?p=56',
  'https://drgauravsainiortho.com/?p=1',
  'https://drgauravsainiortho.com/?p=42',
  'https://drgauravsainiortho.com/?page_id=119',
  'https://drgauravsainiortho.com/?tag=orthopedic',
  'https://drgauravsainiortho.com/?cpt_services=request-an-appointment'
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function audit() {
  console.log("Auditing URLs via Wayback Machine Availability API...");
  for (const url of urls) {
    const apiUrl = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
    try {
      const res = await fetchJson(apiUrl);
      const snapshot = res.archived_snapshots.closest;
      if (snapshot && snapshot.available) {
        console.log(`URL: ${url}`);
        console.log(`  Available: Yes`);
        console.log(`  Timestamp: ${snapshot.timestamp}`);
        console.log(`  Wayback URL: ${snapshot.url}`);
      } else {
        console.log(`URL: ${url}`);
        console.log(`  Available: No`);
      }
    } catch (err) {
      console.error(`Error auditing ${url}:`, err.message);
    }
  }
}

audit();
