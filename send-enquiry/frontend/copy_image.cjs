const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\sakti\\.gemini\\antigravity\\brain\\1367e1e4-393f-4dcd-8490-ff5c7b45d1db\\media__1776914558394.png';
const destDir = 'c:\\figma\\send-enquiry\\frontend\\public';
const destPath = path.join(destDir, 'bus.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(srcPath, destPath);
console.log('Image copied successfully!');
