const { test, expect } = require('@playwright/test');

async function testFunction() {

    await test.beforeEach(async ({ page }) => {
        await page.goto('/example-4');
    });
    
    
    await test('should display the name of the most recently hovered item', async ({ page }, testInfo) => {
        const box4ItemsList = await page.waitForSelector('[data-cy=box-4-items-list]');
        const secondChild = await box4ItemsList.$(':nth-child(2)');
        await secondChild.hover();
        
        const box4SelectedName = await page.waitForSelector('[data-cy=box-4-selected-name]');
        const selectedNameText = await box4SelectedName.innerText();
        expect(selectedNameText).toEqual('Option Two'); // Two

    });
}


testFunction() 
