package appiumtests;
import io.appium.java_client.android.AndroidDriver;

import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;

public class VirtualDevice {
	
	private static final String APP = "https://github.com/cloudgrey-io/the-app/releases/download/v1.9.0/TheApp-v1.9.0.apk";
    private static final String APPIUM = "http://localhost:4723/wd/hub";
    
    private static AndroidDriver driver;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			openVirtualDevice();
		}catch (Exception exp) {
			System.out.println(exp.getCause());
			System.out.println(exp.getMessage());
			exp.printStackTrace();
			
		}

	}
	
	public static void openVirtualDevice () throws Exception {
		
		DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("platformName", "Android");
        caps.setCapability("platformVersion", "9");
        caps.setCapability("deviceName", "Android Emulator");
        caps.setCapability("automationName", "UiAutomator2");
        caps.setCapability("app", APP);
        
//        URL url = new URL("http://localhost:4723/wd/hub");
//        driver = new AndroidDriver(url, caps);
        
        driver = new AndroidDriver(new URL(APPIUM), caps);
        
        System.out.println("Application Started .....");
	}

}
