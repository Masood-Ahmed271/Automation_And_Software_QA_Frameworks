const { test, expect } = require('@playwright/test');


test ("get users api test", async ({ request }) => {
    const _response = await request.get( 'https://gorest.co.in/public/v2/users');
    await expect(_response.status()).toBe(200);
    console.log(await _response.json())
});