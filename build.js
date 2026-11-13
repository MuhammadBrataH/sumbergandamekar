const fs = require('fs');
const path = require('path');

const pages = {
  'index.html': require('./src/home'),
  'konstruksi-logam.html': require('./src/logam'),
  'pakan-ternak.html': require('./src/pakan')
};

for (const [file, html] of Object.entries(pages)) {
  fs.writeFileSync(path.join(__dirname, file), html, 'utf8');
  console.log('built', file, html.length, 'bytes');
}
