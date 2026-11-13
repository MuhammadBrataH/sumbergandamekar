const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const cleanUrl = (req.url || '/').split('?')[0].split('#')[0];
  let relativePath = cleanUrl === '/' ? '/index.html' : cleanUrl;
  if (relativePath === '/wawasan' || relativePath === '/wawasan/') {
    relativePath = '/wawasan/index.html';
  }

  // Support extensionless Google Ads URLs (/konstruksi-logam, /pakan-ternak, /wawasan/[slug])
  if (!path.extname(relativePath)) {
    relativePath += '.html';
  }

  const filePath = path.join(ROOT, relativePath);

  // Prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 - Halaman Tidak Ditemukan</h1><p><a href="/">Kembali ke Beranda PT. Sumber Ganda Mekar</a></p>');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`PT. Sumber Ganda Mekar B2B Server running at http://localhost:${PORT}`);
});
