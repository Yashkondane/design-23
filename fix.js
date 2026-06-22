const fs = require('fs');
const path = require('path');

const blocksDir = 'e:/design/agri-insights/src/components/report/blocks';
const files = fs.readdirSync(blocksDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(blocksDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix borders
  content = content.replace(/className="mt-12 mb-12 border-t border-gray-200 pt-8"/g, 'className="mt-12 mb-12 pt-8"');

  // Remove underlines
  content = content.replace(/\s*<div className="w-12 h-1 bg-brand-600 rounded-full mb-[0-9]+"><\/div>\s*/g, '\n');

  // Fix h2 headings
  content = content.replace(/<h2 className="text-\[22px\] font-bold text-brand-900 mb-2">/g, '<h2 className="text-2xl font-bold text-brand-600 mb-6">');
  
  // Competitive Landscape specific h2
  content = content.replace(/<h2 className="text-2xl font-bold text-brand-900 mb-2">Competitive Landscape<\/h2>/g, '<h2 className="text-2xl font-bold text-brand-600 mb-6">Competitive Landscape</h2>');

  // Expert Insights specific
  content = content.replace(/<h2 className="text-2xl font-bold text-brand-900 mb-2">Expert Insights<\/h2>/g, '<h2 className="text-2xl font-bold text-brand-600 mb-6">Expert Insights</h2>');

  fs.writeFileSync(filePath, content);
}

// Also update ReportContent.tsx
const reportContentPath = 'e:/design/agri-insights/src/components/report/ReportContent.tsx';
let reportContent = fs.readFileSync(reportContentPath, 'utf8');
reportContent = reportContent.replace(/<h2 className="text-\[22px\] font-bold tracking-tight text-brand-900 mb-2">/g, '<h2 className="text-2xl font-bold tracking-tight text-brand-600 mb-6">');
reportContent = reportContent.replace(/\s*<div className="w-12 h-1 bg-brand-600 rounded-full mb-[0-9]+"><\/div>\s*/g, '\n          ');
fs.writeFileSync(reportContentPath, reportContent);
