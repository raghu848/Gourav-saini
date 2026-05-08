const XLSX = require('xlsx');
const workbook = XLSX.readFile('issues.xlsx');
const sheet_name_list = workbook.SheetNames;
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(JSON.stringify(data, null, 2));
