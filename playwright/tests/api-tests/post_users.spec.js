const { test, expect } = require('@playwright/test');


let randomText = "";
let testEmail = "";

test("post api testing playwright", async ({request}) => {


    //  A function to generate random emails for use:

    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++) {
        randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    testEmail = randomText + "@gmail.com";


    const _response = await request.post('https://gorest.co.in/public/v1/users', {
        data: {
            "name": 'FWD Insurance',
            'gender': "male",
            "email": testEmail,
            "status": "active"
        },
    });

    expect(_response.status()).toBe(201)
    console.log(await _response.json())
});