const fs = require('fs');
const path = require('path');

const blocksDir = 'e:/design/agri-insights/src/components/report/blocks';
const files = fs.readdirSync(blocksDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(blocksDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the underlines
  content = content.replace(/\s*<div className="w-12 h-1 bg-brand-600 rounded-full mb-[0-9]+"><\/div>\s*/g, '\n      ');
  content = content.replace(/\s*<div className="w-16 h-1 bg-brand-[0-9]+ rounded-full mb-[0-9]+"><\/div>\s*/g, '\n      ');

  // Also remove it from anywhere else with different spacing
  content = content.replace(/<div className="w-12 h-1 bg-brand-600 rounded-full mb-[0-9]+"><\/div>/g, '');

  fs.writeFileSync(filePath, content);
}

// Also update ReportContent.tsx
const reportContentPath = 'e:/design/agri-insights/src/components/report/ReportContent.tsx';
let reportContent = fs.readFileSync(reportContentPath, 'utf8');
reportContent = reportContent.replace(/\s*<div className="w-12 h-1 bg-brand-600 rounded-full mb-[0-9]+"><\/div>\s*/g, '\n          ');
fs.writeFileSync(reportContentPath, reportContent);
