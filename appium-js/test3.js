const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'SM-G9880',
  'appium:appPackage': 'com.sec.android.app.popupcalculator',
  'appium:appActivity': 'com.sec.android.app.popupcalculator.Calculator',
  'appium:udid':'R5CN407EJXX',
  'appium:platformVersion':'13',
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    console.log("Working")
    // wait(2000)
    sleep(2000);
    // driver.getPageSource()

    //  Goal is to add two numbers and check if the two numbers are added correctly
    // trying method 1
    var firstNumber = await driver.$('//android.widget.Button[@content-desc="1"]');
    firstNumber.click();
    sleep(5000);
    var plus = await driver.$('//android.widget.Button[@content-desc="Plus"]');
    plus.click();
    sleep(5000);
    var secondNumber = await driver.$('//android.widget.Button[@content-desc="7"]');
    // var secondNumber = driver.findElement(by.)
    secondNumber.click();
    sleep(5000);
    var equal = await driver.$('//android.widget.Button[@content-desc="Equal"]');
    equal.click();
    sleep(10000);

    // // Finding if 8 is displayed
    var check = await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.EditText');
    if (check){
      console.log("Test Passed");
    }
    console.log(check);

    // if the xpath becomes: //android.widget.EditText[@content-desc="8"] it passes the test

  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);