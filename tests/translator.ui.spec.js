const { test, expect } = require('@playwright/test');
const { TranslatorPage } = require('../pages/TranslatorPage');

test.describe('SwiftTranslator UI Tests', () => {


  test('Pos_UI_0001 - Real-time Sinhala output updates while typing', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

    await translator.enterSinglish('api kaeram gahamu');

    await expect(translator.sinhalaOutput).toHaveText(/.+/, { timeout: 5000 });

    const output = await translator.getSinhalaOutput();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_UI_0002 - Clearing Singlish input clears Sinhala output', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();
    await translator.enterSinglish('api kaeram gahamu');

    await expect(translator.sinhalaOutput).toHaveText(/.+/, { timeout: 5000 });

    let outputBeforeClear = await translator.getSinhalaOutput();
    expect(outputBeforeClear.length).toBeGreaterThan(0);

    await translator.clearInput();

    await expect(translator.sinhalaOutput).toHaveText('', { timeout: 5000 });

    const outputAfterClear = await translator.getSinhalaOutput();
    expect(outputAfterClear.trim()).toBe('');
  });

 

  test('Neg_UI_0001 - Rapid consecutive clearing', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();
    await translator.enterSinglish('mata aye onaa');

    await expect(translator.sinhalaOutput).toHaveText(/.+/, { timeout: 5000 });

    for (let i = 0; i < 5; i++) {
      await translator.clearInput();
      await page.waitForTimeout(100); 
    }

    await expect(translator.sinhalaOutput).toHaveText('', { timeout: 5000 });
    const finalOutput = await translator.getSinhalaOutput();
    expect(finalOutput.trim()).toBe('');
  });

  test('Neg_UI_0002 - Copy-paste extremely large text (expected fail)', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

    const largeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(20);

    await translator.singlishInput.fill(largeText);

    await page.waitForTimeout(2000);

    const output = await translator.getSinhalaOutput();

    expect(output.length).toBeGreaterThan(10000);
  });

  test('Neg_UI_0003 - Empty input does not crash UI', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();
    await translator.clearInput();

    const singlishValue = await translator.getSinglishValue();
    expect(singlishValue).toBe('');

    await expect(translator.sinhalaOutput).toHaveText('', { timeout: 5000 });
    const output = await translator.getSinhalaOutput();
    expect(output).toBe('');
  });

});
