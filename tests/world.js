// tests/world.js
const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.page = null;
  }

  async openBrowser() {
    this.browser = await chromium.launch({ headless: false }); // Ensure headless is false here
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
