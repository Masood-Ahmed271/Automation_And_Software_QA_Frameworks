package appiumtests;

import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;

//import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

//import io.appium.java_client

public class CalculatorTest {

	
//	AppiumDriver<MobileElement> driver;
//	static AppiumDriver driver;
//	AppiumDriver<WebElement> driver;
	static AndroidDriver driver;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			openCalculator();
		}catch (Exception exp) {
			System.out.println(exp.getCause());
			System.out.println(exp.getMessage());
			exp.printStackTrace();
			
		}

	}
	
	public static void openCalculator () throws Exception {
		DesiredCapabilities cap = new DesiredCapabilities();
		
		cap.setCapability("deviceName", "vivo 1920");
		cap.setCapability("udid", "37003db0");
		cap.setCapability("platformName", "Android");
		cap.setCapability("platformVersion", "12");
		
		cap.setCapability("appPackage", "com.android.bbkcalculator");
		cap.setCapability("appActivity", "com.android.bbkcalculator.Calculator");
		
		URL url = new URL("http://localhost:4723/wd/hub");
		
//		driver = new AppiumDriver(url, cap);
		
		driver = new AndroidDriver(url, cap);
		
		System.out.println("Application Started .....");
	}

}
