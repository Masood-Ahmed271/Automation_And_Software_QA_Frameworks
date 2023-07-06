const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'vivo 1920',
  'appium:appPackage': 'com.android.bbkcalculator',
  'appium:appActivity': 'com.android.bbkcalculator.Calculator',
  'appium:udid':'37003db0',
  'appium:platformVersion':'12',
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
    var firstNumber = await driver.$('//android.widget.TextView[@text="1"]');
    firstNumber.click();
    sleep(5000);
    var plus = await driver.$('//android.widget.TextView[@text="+"]');
    plus.click();
    sleep(5000);
    var secondNumber = await driver.$('//android.widget.TextView[@text="7"]');
    // var secondNumber = driver.findElement(by.)
    secondNumber.click();
    sleep(5000);
    var equal = await driver.$('//android.widget.ImageButton[@content-desc="等于"]');
    equal.click();
    sleep(10000);

    // Finding if 8 is displayed
    var check = await driver.$('//android.widget.EditText[@text="8"]');
    if (check){
      console.log("Test Passed");
    }
    // console.log(check);

    // if the xpath becomes: //android.widget.EditText[@content-desc="8"] it passes the test

  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);