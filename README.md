# selenium and playwright set-up

## Instructions in the Repository

* **Clone the Repository**
  First, ensure that Git is installed on your system. Then clone the repository to your local machine.
  Run the following command in your terminal:

  `git clone https://github.com/criscarlod/selenium-ui.git`
* **Navigate to the Project Directory**
  After cloning, move into the project folder:

  `cd <project path directory>`
  </code></div></div></pre>
* **Install Dependencies**
  Ensure Node.js and npm are installed. Then, run the following command to install the required dependencies:

  `npm install`

### **Selenium WebDriver**

#### **Prerequisites:**

* Install Node.js on your machine.
* Ensure you have Selenium WebDriver installed (`npm install selenium-webdriver`).
* Set up a code editor, such as Visual Studio Code.

### Set up a New Node.js Project

#### Initialize a Node.js project:

`npm init -y`

#### Install necessary dependencies:

`npm install selenium-webdriver `

`npm install mocha chai --save-dev`

#### Project Structure

project/
├── tests/
│   ├── login.test.js
├── pages/
│   ├── loginPage.js
├── utils/
│   ├── screenshotHelper.js
├── package.json

#### Explanation of Folders

1. **`tests/`**
   Contains test scripts where test cases are defined. These scripts use the page objects for interacting with the application.
2. **`pages/`**
   Contains the Page Object Model files. Each file corresponds to a page of the application, encapsulating the page's elements and actions.
3. **`utils/`**
   Contains utility files, such as a factory for creating and managing the WebDriver instance

#### Run the test suite:

`npx mocha test/login.test.js`

### Playwright

#### Install Playwright:

`npx playwright install`

#### Run the test suite

`npx playwright test`
