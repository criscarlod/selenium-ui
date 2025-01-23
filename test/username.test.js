const { Builder, By } = require('selenium-webdriver');
const { addTimestamp } = require('../utils/addTimestamp'); // Assuming utility function is saved in utils.js

(async function seleniumTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        const username = "TestUser";
        const uniqueUsername = addTimestamp(username);

        await driver.get('https://www.saucedemo.com/');

        await driver.findElement(By.id('username')).sendKeys(uniqueUsername);
        await driver.findElement(By.id('password')).sendKeys('TestPassword123');
        await driver.findElement(By.id('login')).click();

        console.log(`Used unique username: ${uniqueUsername}`);
    } finally {
        await driver.quit();
    }
})();
