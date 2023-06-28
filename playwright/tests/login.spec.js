const { test, expect } = require('@playwright/test');
const data = require('./data.json');

test.describe('Login Test Block', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/example-3');
    });

    for (const {email, password} of data) {
        test(`should display the login page if login credentials with email: ${email} and password: ${password}`, async ({ page }) => {
            await page.locator('[data-cy=input-email]').fill(email);
            await page.locator('[data-cy=input-password]').fill(password);
            await page.locator('[data-cy=login-button]').click();
            
            // Assert that the successful login message is visible
            expect(await page.locator('[data-cy=successful-login]').isVisible()).toBe(true);
            console.log(`DONE - value ${email}`);
        });
    }

    // Originally return for one data set
    // test('should display the login page if login credentials inputted are correct', async ({ page }) => {
    //     await page.locator('[data-cy=input-email]').fill('test@gmail.com');
    //     await page.locator('[data-cy=input-password]').fill('123456789');
    //     await page.locator('[data-cy=login-button]').click();
        
    //     // Assert that the successful login message is visible
    //     expect(await page.locator('[data-cy=successful-login]').isVisible()).toBe(true);
    // });
});