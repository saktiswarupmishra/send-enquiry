const { execSync } = require('child_process');
try {
  console.log('Running npm install --legacy-peer-deps in frontend');
  execSync('npm install --legacy-peer-deps', { cwd: 'c:/figma/send-enquiry/frontend', stdio: 'inherit' });
  console.log('Done installing');
} catch (e) {
  console.error('Error installing:', e.message);
}
