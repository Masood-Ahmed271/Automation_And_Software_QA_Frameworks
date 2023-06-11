const { test, expect } = require('@playwright/test');

test.describe('Interactions Test Block', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/example-4');
    });

    test('sets the header text to the item\'s name when double clicked', async ({ page }) => {
        await page.getByText('Option Two').first().dblclick();
        expect(await page.locator('[data-cy="box-1-selected-name"]')).toHaveText('Option Two');
    });

    test('displays the correct count for the number of selected checkboxes', async ({ page }) => {
        await page.getByLabel('Option One').check();
        expect(await page.locator('[data-cy=box-2-selected-count]')).toHaveText('1');
    });

    test('displays the name of the currently selected item', async ({ page }) => {
        await page.getByRole('combobox').selectOption('Option Two');
        expect(await page.locator('[data-cy=box-3-selected-name]')).toHaveText('Option Two');
    });

    test('should display the name of the most recently hovered item', async ({ page }) => {
        // await page.getByText('Option Two').first().hover();
        // expect(await page.locator('[data-cy=box-4-selected-name]')).toHaveText('Option Two');
        const box4ItemsList = await page.waitForSelector('[data-cy=box-4-items-list]');
        const secondChild = await box4ItemsList.$(':nth-child(2)');
        await secondChild.hover();
      
        const box4SelectedName = await page.waitForSelector('[data-cy=box-4-selected-name]');
        const selectedNameText = await box4SelectedName.innerText();
        expect(selectedNameText).toEqual('Option Two');
    });
});