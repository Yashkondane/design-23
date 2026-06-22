const fs = require('fs');
const path = require('path');

const blocksDir = 'e:/design/agri-insights/src/components/report/blocks';
const files = fs.readdirSync(blocksDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(blocksDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change h2 titles from brand-900 to brand-600
  content = content.replace(/<h2 className="([^"]*)text-brand-900([^"]*)">/g, '<h2 className="$1text-brand-600$2">');
  
  // Also fix specific cases where text-gray-900 or brand-700 might have been left on h2 tags
  content = content.replace(/<h2 className="([^"]*)text-brand-700([^"]*)">/g, '<h2 className="$1text-brand-600$2">');
  content = content.replace(/<h2 className="([^"]*)text-gray-900([^"]*)">/g, '<h2 className="$1text-brand-600$2">');

  fs.writeFileSync(filePath, content);
}

// Update ReportContent.tsx
const reportContentPath = 'e:/design/agri-insights/src/components/report/ReportContent.tsx';
let reportContent = fs.readFileSync(reportContentPath, 'utf8');
reportContent = reportContent.replace(/<h2 className="([^"]*)text-brand-900([^"]*)">/g, '<h2 className="$1text-brand-600$2">');
fs.writeFileSync(reportContentPath, reportContent);
