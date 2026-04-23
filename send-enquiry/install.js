const { execSync } = require('child_process');
try {
  console.log('Installing frontend...');
  execSync('npm install', { cwd: 'c:/figma/send-enquiry/frontend', stdio: 'inherit' });
  console.log('Installing backend...');
  execSync('npm install', { cwd: 'c:/figma/send-enquiry/backend', stdio: 'inherit' });
  console.log('Pushing Prisma DB...');
  execSync('npx prisma db push', { cwd: 'c:/figma/send-enquiry/backend', stdio: 'inherit' });
  console.log('All installs and DB pushes finished.');
} catch (e) {
  console.error('Operation failed', e);
}
