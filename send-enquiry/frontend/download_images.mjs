import fs from 'fs'
import https from 'https'
import path from 'path'

const urls = [
  { name: 'jaipur.jpg', url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=400' },
  { name: 'agra.jpg', url: 'https://images.unsplash.com/photo-1564507592208-027041cb5699?auto=format&fit=crop&q=80&w=400' },
  { name: 'chandigarh.jpg', url: 'https://images.unsplash.com/photo-1588636171542-fbbc1a1e3a47?auto=format&fit=crop&q=80&w=400' },
  { name: 'manali.jpg', url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=400' }
];

const destDir = path.join(process.cwd(), 'public', 'images', 'destinations');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

urls.forEach(item => {
  const destPath = path.join(destDir, item.name);
  const file = fs.createWriteStream(destPath);
  https.get(item.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${item.name}`);
    });
  }).on('error', err => {
    fs.unlink(destPath, () => {});
    console.error(`Error downloading ${item.name}: ${err.message}`);
  });
});
