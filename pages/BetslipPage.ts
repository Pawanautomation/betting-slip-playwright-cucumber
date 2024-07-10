import { Page } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export class BetslipPage {
  private page: Page;
  private baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5500/bet.html';
  }

  async navigate() {
    await this.page.goto(this.baseUrl);
  }

  async addBet() {
    const addButton = this.page.locator('#add-labour-majority');
    await addButton.waitFor({ state: 'visible' });
    await addButton.click();
  }

  async getBetName() {
    await this.page.waitForSelector('.bet-name', { timeout: 10000 });
    return await this.page.$('.bet-name');
  }

  async getOddsAndStake() {
    const oddsInput = await this.page.$('#odds-input');
    const stakeInput = await this.page.$('#stake-input');
    if (!oddsInput || !stakeInput) {
      throw new Error('Odds input or stake input element not found');
    }
    const odds = parseFloat(await oddsInput.inputValue());
    const stake = parseFloat(await stakeInput.inputValue());
    return { odds, stake };
  }

  async changeOdds(newOdds: string) {
    await this.page.fill('#odds-input', newOdds);
    await this.page.waitForTimeout(1000);
  }

  async changeStake(newStake: number) {
    await this.page.fill('#stake-input', newStake.toString());
    await this.page.waitForTimeout(1000);
  }

  async placeBet() {
    const placeButton = this.page.locator('.place-btn');
    await placeButton.waitFor({ state: 'visible' });
    await placeButton.click();
  }

  async cancelAllSelections() {
    const cancelButton = this.page.locator('.cancel-btn');
    await cancelButton.waitFor({ state: 'visible' });
    await cancelButton.click();
    await this.page.waitForTimeout(1000);
  }

  async getBetslipContents() {
    const betslipContents = await this.page.$('#betslip-contents');
    return await betslipContents?.textContent();
  }

  async getProfitText() {
    return await this.page.textContent('.bet-profit');
  }

  async getLiabilityText() {
    return await this.page.textContent('#liability-amount');
  }
}
