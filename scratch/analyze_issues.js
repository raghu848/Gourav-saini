const XLSX = require('xlsx');
const workbook = XLSX.readFile('issues.xlsx');

console.log("Sheet names:", workbook.SheetNames);

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(`\n--- Sheet: ${sheetName} (Total rows: ${data.length}) ---`);
  
  if (data.length === 0) return;
  
  // Show columns
  const cols = Object.keys(data[0]);
  console.log("Columns:", cols);
  
  // Group by Resource Type
  const resourceTypes = {};
  data.forEach(row => {
    const type = row['Resource Type'] || 'Unknown';
    resourceTypes[type] = (resourceTypes[type] || 0) + 1;
  });
  console.log("Resource Types Breakdown:", resourceTypes);
  
  // Check unique Page URLs
  const uniquePages = [...new Set(data.map(row => row['Page URL']))];
  console.log("Number of unique pages with issues:", uniquePages.length);
  console.log("Unique pages with issues (up to 10):", uniquePages.slice(0, 10));
  
  // Check types of issues/resources
  const issues = {};
  data.forEach(row => {
    // If there is an 'Issue' or 'Status' column
    const issueCol = Object.keys(row).find(k => k.toLowerCase().includes('issue') || k.toLowerCase().includes('status') || k.toLowerCase().includes('error'));
    if (issueCol) {
      const issueVal = row[issueCol];
      issues[issueVal] = (issues[issueVal] || 0) + 1;
    }
  });
  if (Object.keys(issues).length > 0) {
    console.log("Issues Breakdown:", issues);
  }
});
