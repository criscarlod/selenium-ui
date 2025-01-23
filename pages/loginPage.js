const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://www.saucedemo.com/'; // Login URL
    }

    // Open the login page
    async open() {
        await this.driver.get(this.url);
        // Wait for the username field to be visible (ensures the page has loaded)
        await this.driver.wait(until.elementLocated(By.id('user-name')), 5000);
    }

    // Set username
    async setUsername(username) {
        const usernameField = await this.driver.wait(
            until.elementLocated(By.id('user-name')), // Wait for the username field to exist in the DOM
            5000 // Timeout in milliseconds
        );
        await this.driver.wait(until.elementIsVisible(usernameField), 5000); // Ensure it's visible
        await usernameField.sendKeys(username);
    }

    // Set password
    async setPassword(password) {
        const passwordField = await this.driver.wait(
            until.elementLocated(By.id('password')), // Wait for the password field to exist in the DOM
            5000
        );
        await this.driver.wait(until.elementIsVisible(passwordField), 5000); // Ensure it's visible
        await passwordField.sendKeys(password);
    }

    // Submit the login form
    async submit() {
        const loginButton = await this.driver.wait(
            until.elementLocated(By.id('login-button')), // Wait for the login button to exist in the DOM
            5000
        );
        await this.driver.wait(until.elementIsEnabled(loginButton), 5000); // Ensure it's clickable
        await loginButton.click();
    }

    // Add product item
    async addProductItem() {
        const cartMenu = await this.driver.wait(
            until.elementLocated(By.css('button[id="add-to-cart-sauce-labs-backpack"]')), // Wait for the "Add to Cart" button
            5000
        );
        await this.driver.wait(until.elementIsVisible(cartMenu), 5000); // Ensure it's visible
        await this.driver.wait(until.elementIsEnabled(cartMenu), 5000); // Ensure it's enabled
        await cartMenu.click();
    }

    // Remove product item
    async removeProductItem() {
        const removeItem = await this.driver.wait(
            until.elementLocated(By.css('button[id="remove-sauce-labs-backpackxxx"]')), // Wait for the "Remove" button
            5000
        );
        await this.driver.wait(until.elementIsVisible(removeItem), 5000); // Ensure it's visible
        await this.driver.wait(until.elementIsEnabled(removeItem), 5000); // Ensure it's enabled
        await removeItem.click();
    }
}

module.exports = LoginPage;
