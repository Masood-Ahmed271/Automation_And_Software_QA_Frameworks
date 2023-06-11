const { test, expect } = require('@playwright/test');

test.describe('Max Character Block Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/example-2');
    });

    test('displaying remaining characters count', async ({ page }) => {
        const charsLeftSpan = await page.locator('[data-cy="chars-left-count"]');
        expect(await charsLeftSpan.innerText()).toEqual('15');

        await page.locator('[data-cy="max-char-input"]').fill('hello');

        expect(await charsLeftSpan.innerText()).toEqual('10');

        await page.locator('[data-cy="max-char-input"]').fill(' my friend');

        expect(await charsLeftSpan.innerText()).toEqual('5');
    });

    test('prevents the user from typing more characters once max is exceeded', async ({ page }) => {
        await page.locator('[data-cy="max-char-input"]').fill('abcdefghijklmnopqrstuvwxyz');

        expect(await page.locator('[data-cy="max-char-input"]').getAttribute('value')).toEqual('abcdefghijklmno');
    });

});