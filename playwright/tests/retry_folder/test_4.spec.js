const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('/example-4');
});

test('sets the header text to the item\'s name when double clicked', async ({ page }) => {
    await page.getByText('Option Two').first().dblclick();
    expect(await page.locator('[data-cy="box-1-selected-name"]')).toHaveText('Option Two');
});