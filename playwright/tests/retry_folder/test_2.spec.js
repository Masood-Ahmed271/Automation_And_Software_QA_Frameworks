const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('/example-4');
});


test('displays the name of the currently selected item', async ({ page }) => {
    await page.getByRole('combobox').selectOption('Option Two');
    expect(await page.locator('[data-cy=box-3-selected-name]')).toHaveText('Option Two');
});