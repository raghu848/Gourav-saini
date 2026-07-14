const XLSX = require('xlsx');
const workbook = XLSX.readFile('issues.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

console.log("Total records:", data.length);
console.log("First 5 records:");
console.log(JSON.stringify(data.slice(0, 5), null, 2));
