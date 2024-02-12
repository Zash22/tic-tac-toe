const {test, expect} = require('@playwright/test');

test.describe('Tic Tac Toe Gameplay', () => {
    // test.beforeEach(async ({ page }) => {
    //   // Go to the starting url before each test.
    //   await page.goto('https://playwright.dev/');
    // });

    test('X wins', async ({page}) => {
        await page.goto('/');

        await page.waitForLoadState('networkidle');

        // Click on the cells to play the game
        await page.click('#cell-0');
        await page.click('#cell-1');
        await page.click('#cell-3');
        await page.click('#cell-4');
        await page.click('#cell-6');

        // Check if X wins
        const xWinsText = await page.textContent('.winning-message');
        expect(xWinsText).toContain('X wins!');
        // Reset the game
        await page.click('#reset-btn2');
        // Assert that all cells are empty after resetting
        const cellContents = await page.$$eval('.cell', cells => cells.map(cell => cell.textContent));
        expect(cellContents.every(content => content === '')).toBeTruthy();
    });
});



