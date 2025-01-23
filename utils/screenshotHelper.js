const fs = require('fs');

async function captureScreenshot(driver, testName) {
    const screenshot = await driver.takeScreenshot();
    const sanitizedTestName = testName.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Sanitize filename

    // Generate a timestamp string (e.g., "2025-01-24_15-30-45")
    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
    const directory = 'screenshots';
    const filename = `${directory}/${sanitizedTestName}_${timestamp}.png`;

    // Ensure the directory exists
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    // Remove previous screenshot for the same test name
    const files = fs.readdirSync(directory);
    const previousScreenshot = files.find(file => file.startsWith(sanitizedTestName) && file.endsWith('.png'));
    if (previousScreenshot) {
        fs.unlinkSync(`${directory}/${previousScreenshot}`);
        console.log(`Previous screenshot removed: ${previousScreenshot}`);
    }

    // Save the new screenshot
    fs.writeFileSync(filename, screenshot, 'base64');
    console.log(`Screenshot saved: ${filename}`);
}

module.exports = { captureScreenshot };
