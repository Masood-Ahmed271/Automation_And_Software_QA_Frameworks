const { test, expect, firefox } = require('@playwright/test');

test.describe('Login Test Block', async () => {

    // const browser = await firefox.launch({ 
    //     executablePath: '/Users/masoodahmed/Desktop/Chromium_versions/Firefox-v99.0b7.app',
    //     headless: false });

    // const page = await browser.newPage();

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('/example-3'); 
    // });

    test('should display the login page if login credentials inputted are correct', async () => {
        const browser = await firefox.launch({ 
            // channel: 'firefox', 
            // executablePath: '../../../../Chromium_versions/Firefox-v99.0b7.app',
            // executablePath: '/Applications/Firefox.app/Contents/MacOS/firefox',
            // executablePath: '/Users/masoodahmed/Desktop/Chromium_versions/Firefox-v99.0b7.app',
            headless: false,
         });

        const page = await browser.newPage();

        await page.goto('/example-3'); 
        await page.locator('[data-cy=input-email]').fill('test@fwd.com');
        await page.locator('[data-cy=input-password]').fill('123456789');
        await page.locator('[data-cy=input-password]').fill('123456789');
        await page.locator('[data-cy=login-button]').click();
        
        // Assert that the successful login message is visible
        expect(await page.locator('[data-cy=successful-login]').isVisible()).toBe(true);
    });
});