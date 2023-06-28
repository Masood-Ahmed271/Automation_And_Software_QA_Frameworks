const { test, expect } = require('@playwright/test');

test.describe('Title Test Block', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/example-1');
    });

    test('has title', async ({ page }) => {
        const h1Locator = page.locator('h1');
        const h1Text = await page.textContent('h1');
        // Assert that the H1 text contains the expected value
        expect(h1Text).toContain('Welcome to Demo');
    });
});