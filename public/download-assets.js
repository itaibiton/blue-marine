// Script to download Figma assets
// Run this with: node public/download-assets.js

const fs = require('fs');
const https = require('https');
const path = require('path');

const assets = {
  'logo.png': 'https://www.figma.com/api/mcp/asset/9e719a4b-b07e-469e-809e-0ac76988bdb7',
  'hero-image.jpg': 'https://www.figma.com/api/mcp/asset/9e10a36a-bb40-462c-98a3-b0642882026e',
  'map.jpg': 'https://www.figma.com/api/mcp/asset/b0d8d8b4-a67f-4c74-9eb1-9fe0694362ef',
  'gallery/img1.jpg': 'https://www.figma.com/api/mcp/asset/1a9eda60-8cff-4e72-b016-2e755c5e1ebc',
  'gallery/img2.jpg': 'https://www.figma.com/api/mcp/asset/455b37bd-3732-436f-bc26-86b02a1f835c',
  'gallery/img3.jpg': 'https://www.figma.com/api/mcp/asset/f6b1db51-feba-498f-9c5d-5f5d9ede9432',
  'gallery/img4.jpg': 'https://www.figma.com/api/mcp/asset/c8579437-7bbb-4104-9d9d-2cdf0514f2c6',
  'gallery/img5.jpg': 'https://www.figma.com/api/mcp/asset/76df4208-1a1a-4355-acd6-93030ac2d54b',
  'gallery/img6.jpg': 'https://www.figma.com/api/mcp/asset/f85371c7-2b6f-441e-9383-c13d886f1a82',
  'gallery/img7.jpg': 'https://www.figma.com/api/mcp/asset/0a6819ec-94d3-4b95-b3e4-21540d1f70f1'
};

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`✗ Failed to download ${filename}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting asset download from Figma...\n');

  for (const [filename, url] of Object.entries(assets)) {
    try {
      await downloadFile(url, filename);
    } catch (err) {
      console.error(`Error downloading ${filename}`);
    }
  }

  console.log('\n✓ Asset download complete!');
}

downloadAll();
