```markdown
# Automated Betslip Testing with Playwright, TypeScript & Cucumber

This repository holds automated tests for a Gaming website's bet slip functionality. It utilizes Playwright for browser automation and Cucumber for Behavior Driven Development (BDD).

## What's Included

- Test cases are written in TypeScript for the bet slip functionality.
- Page Object Model (POM) for efficient test organization.

## Prerequisites

- [Node.js (version 14.x or higher)](https://nodejs.org/en)
- [Git](https://git-scm.com/)

## Getting Started

### Clone the Repository:

```bash
git clone https://github.com/Pawanautomation/betting-slip-playwright-cucumber.git
cd betting-slip-playwright-cucumber
```

### Install Dependencies:

```bash
npm install
```

### Configure Environment:

Create a `.env` file in the project root and add:

```env
BASE_URL=http://127.0.0.1:5501/bet.html
```

Replace the URL with your local application's address if it differs.

### Run the Tests:

```bash
npm test
```

This command executes the tests and generates a detailed report.

### View the Report:

An HTML report (`cucumber_report.html`) will be created after running the tests. Open it in your browser to view the results.

## Project Structure

- **pages**: Contains Page Object Model classes for interacting with the webpages.
- **tests/**
  - **features**: Holds the Gherkin feature files describing test scenarios.
  - **stepDefinitions**: Contains code implementing the steps defined in features.
  - **world.js**: Custom configuration for managing the browser lifecycle.

## Additional Notes

- Ensure your local application runs at the URL specified in the `.env` file.
- If you encounter issues, verify that dependencies are installed and environment variables are set correctly.

## Contact

Feel free to reach out to the repository owner for any questions or assistance.

## For Your Reference

- **package.json**: Lists project dependencies and scripts.
- **playwright.config.ts**: Playwright configuration for browser setup and reporting.
- **generate-report.js**: Generates the HTML report from the test results.
- **cucumber.js**: Configuration for running Cucumber tests.
```

