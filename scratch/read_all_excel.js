const XLSX = require('xlsx');
const workbook = XLSX.readFile('issues.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

console.log("Searching for parameter URLs in issues.xlsx...");
const targets = ['?p=', '?page_id=', '?cpt_services=', '?tag='];

const matches = data.filter(row => {
  const pageUrl = row['Page URL'] || '';
  const resourceUrl = row['Resource URL'] || '';
  return targets.some(t => pageUrl.includes(t) || resourceUrl.includes(t));
});

console.log("Found matches:", matches.length);
console.log(JSON.stringify(matches, null, 2));
