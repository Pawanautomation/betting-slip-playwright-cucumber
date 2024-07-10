# betting-slip-playwright-cucumber
betting-slip-playwright-cucumber
Betting Slip Playwright-Cucumber Automation
This repository contains automated test cases for the betslip functionality on an iGaming website using Playwright, TypeScript, and Cucumber.

Prerequisites
Node.js (version 14.x or higher)
Git
Setup Instructions
1. Clone the Repository
sh
Copy code
git clone https://github.com/Pawanautomation/betting-slip-playwright-cucumber.git
cd betting-slip-playwright-cucumber
2. Install Dependencies
sh
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the root directory of the project and add the following environment variable:

env
Copy code
BASE_URL=http://127.0.0.1:5501/bet.html
Replace http://127.0.0.1:5501/bet.html with the actual URL of the local application if different.

4. Run the Tests
To execute the tests, use the following command:

sh
Copy code
npm test
This command will run the Cucumber tests and generate an HTML report.

5. View the Report
After running the tests, an HTML report will be generated in the cucumber_report.html file. You can open this file in a browser to view the test results.

Project Structure
pages: Contains the Page Object Model classes.
tests
features: Contains the Gherkin feature files.
stepDefinitions: Contains the step definition files.
world.js: Custom world for managing browser lifecycle.
Additional Notes
The project uses Playwright for browser automation and Cucumber for BDD.
Ensure that the local application is running and accessible at the URL specified in the .env file before running the tests.
If you encounter any issues, ensure that all dependencies are installed and the environment variables are correctly set.
Contact
For any issues or questions, please reach out to the repository owner.

File Content for Reference
package.json
json
Copy code
{
  "name": "bet-bdd",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "npx cucumber-js && node generate-report.js",
    "cucumber": "cucumber-js"
  },
  "keywords": [],
  "dependencies": {
    "@cucumber/cucumber": "^7.3.0",
    "@faker-js/faker": "^7.6.0",
    "dotenv": "^10.0.0",
    "playwright": "^1.15.0"
  }
}
playwright.config.ts
typescript
Copy code
import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    headless: false, // Ensure headless is set to false for headful mode
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});
generate-report.js
javascript
Copy code
const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  91.0.4472.101",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
};

reporter.generate(options);
cucumber.js
javascript
Copy code
const common = [
  'tests/features/**/*.feature',
  '--require-module ts-node/register',
  '--require tests/stepDefinitions/**/*.ts',
  '--require tests/world.js',
  '--format progress-bar',
  '--format json:cucumber_report.json'
].join(' ');

module.exports = {
  default: common
};
Example .env File
arduino
Copy code
BASE_URL=http://127.0.0.1:5501/bet.html
Running the Tests
After setting up, run the following command to execute the tests:

sh
Copy code
npm test
This will run the tests and generate a report in cucumber_report.html.
