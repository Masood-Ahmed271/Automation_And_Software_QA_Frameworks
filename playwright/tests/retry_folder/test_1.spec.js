const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('/example-4');
});


test('displays the correct count for the number of selected checkboxes', async ({ page }) => {
    await page.getByLabel('Option One').check();
    expect(await page.locator('[data-cy=box-2-selected-count]')).toHaveText('1');
});