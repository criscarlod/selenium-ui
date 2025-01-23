const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('../pages/loginPage');
const assert = require('chai').assert;
const { captureScreenshot } = require('../utils/screenshotHelper');
const { addTimestamp } = require('../utils/addTimestamp');

describe('User Login', function () {
    this.timeout(20000);
    let driver;
    let loginPage;

    // Store test results
    const testResults = {
        passed: [],
        failed: [],
    };

    before(async function () {
        try {
            console.log('Starting WebDriver...');
            driver = await new Builder().forBrowser('chrome').build();
            console.log('WebDriver started successfully.');

            // Maximize the browser window
            await driver.manage().window().maximize();
            console.log('Browser window maximized.');

            loginPage = new LoginPage(driver);
            console.log('LoginPage object created.');

            await loginPage.open();
            console.log('Navigated to login page.');
        } catch (error) {
            console.error('Error during setup:', error);
            throw error;
        }
    });

    after(async function () {
        await driver.quit();
    });

    afterEach(async function () {
        const testName = this.currentTest.title;
        if (this.currentTest.state === 'failed') {
            console.log(`❌ Test Failed: ${testName}`);
            testResults.failed.push(testName);
            await captureScreenshot(driver, testName); // Capture screenshot for failed tests
        } else if (this.currentTest.state === 'passed') {
            console.log(`✅ Test Passed: ${testName}`);
            testResults.passed.push(testName);
        }
    });

    after(function () {
        // Output a summary of the test results
        console.log('\nTest Results Summary:');
        console.log(`✅ Passed: ${testResults.passed.length}`);
        testResults.passed.forEach((testName) => console.log(`   - ${testName}`));

        console.log(`❌ Failed: ${testResults.failed.length}`);
        testResults.failed.forEach((testName) => console.log(`   - ${testName}`));
    });

    it('should login successfully', async function () {
        await loginPage.open();
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.submit();

        const productsPage = await driver.wait(
            until.elementLocated(By.css('#header_container > div.header_secondary_container > span')),
            10000
        );
        const productsText = await productsPage.getText();
        assert.include(productsText, 'Products');
    });

    it('should add product item successfully', async function () {
        await loginPage.addProductItem();
    });

    it('should remove product item successfully', async function () {
        await loginPage.removeProductItem();
    });
});
