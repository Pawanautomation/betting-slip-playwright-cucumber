import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BetslipPage } from '../../pages/BetslipPage';
const { faker } = require('@faker-js/faker');

function calculateProfit(stake: number, odds: number): string {
  return (stake * (odds - 1)).toFixed(2);
}

let betslipPage: BetslipPage;

Given('I navigate to the betslip page', async function () {
  await this.openBrowser();
  const page = this.page;
  betslipPage = new BetslipPage(page);
  await betslipPage.navigate();
});

When('I add a Labour Majority bet', async function () {
  await betslipPage.addBet();
});

Then('the bet should be present in the betslip', async function () {
  const betNameElement = await betslipPage.getBetName();
  expect(betNameElement).not.toBeNull();
});

Then('the default odds should be 1.02 and the default stake should be 100', async function () {
  const { odds, stake } = await betslipPage.getOddsAndStake();
  expect(odds).toBe(1.02);
  expect(stake).toBe(100);
});

Then('the profit should be correctly calculated for the default values', async function () {
  const { odds, stake } = await betslipPage.getOddsAndStake();
  const expectedProfit = calculateProfit(stake, odds);
  const profitText = await betslipPage.getProfitText();
  expect(profitText).toBe(`£${expectedProfit}`);
});

When('I change the odds to a random value between 1.01 and 1.99', async function () {
  const newOdds = (Math.random() * (1.99 - 1.01) + 1.01).toFixed(2);
  await betslipPage.changeOdds(newOdds);
});

Then('the profit should be correctly updated', async function () {
  const { odds, stake } = await betslipPage.getOddsAndStake();
  const expectedProfit = calculateProfit(stake, odds);
  const profitText = await betslipPage.getProfitText();
  expect(profitText).toBe(`£${expectedProfit}`);
});

When('I change the stake to a random value between 10 and 1000', async function () {
  const newStake = faker.datatype.number({ min: 10, max: 1000 });
  await betslipPage.changeStake(newStake);
});

When('I place the bet', async function () {
  await betslipPage.placeBet();
});

Then('I should see a confirmation dialog', async function () {
  const page = this.page;
  page.once('dialog', async (dialog: any) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss().catch(() => {});
  });
});

When('I cancel all selections', async function () {
  await betslipPage.cancelAllSelections();
});

Then('the betslip should be empty', async function () {
  const betslipText = await betslipPage.getBetslipContents();
  expect(betslipText).toContain('You have no bets on this market.');
});

Then('the calculated profit and liability should be zero', async function () {
  const liabilityText = await betslipPage.getLiabilityText();
  expect(liabilityText).toBe('£0.00');
});

After(async function () {
  await this.closeBrowser();
});
