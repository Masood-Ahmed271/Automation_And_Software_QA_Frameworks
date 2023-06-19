const { test, expect, chromium, firefox } = require('@playwright/test');

test.describe('Login Test Block', async () => {

    // const browser = await firefox.launch({ 
    //     executablePath: '/Users/masoodahmed/Desktop/Chromium_versions/Firefox-v99.0b7.app',
    //     headless: false });

    // const page = await browser.newPage();

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('/example-3'); 
    // });

    test('should display the login page if login credentials inputted are correct', async () => {

        // working for chromium
        // const browser = await chromium.launch({ 
        //     executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        //     headless: false,
        //  });

        // closes unexpectedly
        const browser = await firefox.launch({ 
            executablePath: '/Applications/Firefox.app/Contents/MacOS/Firefox',
            channel: 'firefox',
            headless: false,
         });

        // const browser = await firefox.launch({ 
        //     executablePath: '/Applications/Firefox-v99.0b7.app/Contents/MacOS/Firefox-v990b7',
        //     // channel: 'firefox', 
        //     // executablePath: '../../../../Chromium_versions/Firefox-v99.0b7.app',
        //     // executablePath: '/Applications/Firefox.app/Contents/MacOS/firefox',
        //     // executablePath: '/Users/masoodahmed/Desktop/Chromium_versions/Firefox-v99.0b7.app',
        //     headless: false,
        //  });

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