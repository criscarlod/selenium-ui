const { test, expect } = require('@playwright/test');
const { addTimestamp } = require('../../utils/addTimestamp');

test('Playwright Test with Timestamped Username', async ({ page }) => {
    const username = "TestUser";
    const uniqueUsername = addTimestamp(username);

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#username', uniqueUsername);
    await page.fill('#password', 'TestPassword123');
    await page.click('#login');

    console.log(`Used unique username: ${uniqueUsername}`);
    // Add assertions as needed
});
