const fs = require('fs');
const path = require('path');

const blocksDir = 'e:/design/agri-insights/src/components/report/blocks';
const files = fs.readdirSync(blocksDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(blocksDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Enforce standard spacing and navy text + underline
  content = content.replace(/<h2 className="text-2xl font-bold text-brand-600 mb-6">(.*?)<\/h2>/g, 
    '<h2 className="text-[22px] font-bold text-brand-900 mb-2">$1</h2>\n      <div className="w-12 h-1 bg-brand-600 rounded-full mb-10"></div>');

  fs.writeFileSync(filePath, content);
}

// Also update ReportContent.tsx
const reportContentPath = 'e:/design/agri-insights/src/components/report/ReportContent.tsx';
let reportContent = fs.readFileSync(reportContentPath, 'utf8');
reportContent = reportContent.replace(/<h2 className="text-2xl font-bold tracking-tight text-brand-600 mb-6">(.*?)<\/h2>/g, 
  '<h2 className="text-[22px] font-bold tracking-tight text-brand-900 mb-2">$1</h2>\n          <div className="w-12 h-1 bg-brand-600 rounded-full mb-10"></div>');
fs.writeFileSync(reportContentPath, reportContent);
