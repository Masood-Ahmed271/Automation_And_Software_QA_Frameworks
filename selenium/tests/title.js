const {Builder} = require('selenium-webdriver');
const assert = require('assert');

//  Wrting the function for writing the tests

async function title() {
    // Declaring the driver
    let driver = await new Builder().forBrowser('firefox').build();

    // navigating to the website
    await driver.get('http://localhost:3000/example-1');

    // locating the element
    // let title = await driver.find_element_by_xpath("/html/body/div/div/h1");
    let title = await driver.findElement({xpath: "/html/body/div/div/h1"}).getText();
    let expected_title = "Welcome to FWD Insurance Demo";
    // console.log(title);
    assert.equal(title, expected_title);

    await driver.quit();
}

title();

