const fs = require('fs');
const source = "C:\\Users\\sakti\\.gemini\\antigravity\\brain\\754b5898-f1d4-4229-8c80-db0a8ccda85b\\media__1777197121499.png";
const dest = "c:\\figma\\send-enquiry\\frontend\\public\\skyline.png";

try {
    fs.copyFileSync(source, dest);
    console.log("Successfully copied", source, "to", dest);
} catch (err) {
    console.error("Error copying file:", err);
    process.exit(1);
}
