const { test, expect } = require('@playwright/test');

test.describe('Login Test Block', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/example-3');
    });

    test('should display the login page if login credentials inputted are correct', async ({ page }) => {
        await page.locator('[data-cy=input-email]').fill('test@fwd.com');
        await page.locator('[data-cy=input-password]').fill('123456789');
        await page.locator('[data-cy=input-password]').fill('123456789');
        await page.locator('[data-cy=login-button]').click();
        
        // Assert that the successful login message is visible
        expect(await page.locator('[data-cy=successful-login]').isVisible()).toBe(true);
    });
});