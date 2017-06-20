package StepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.PageObjects;
import cucumber.api.java.en.*;

public class WeatherChecker {
	
	WebDriver driver;	
	PageObjects obj;	
	
	@Given("^Open browser and goto google.com$")
	public void Open_browser_and_goto_google_com() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("http://www.google.com");
	    
	}

	
	@When("^I type how is todays weather in \"([^\"]*)\" and enter$")
	public void I_type_how_is_todays_weather_in_and_enter(String location) throws Throwable {
	        
		obj = new PageObjects(driver);
	    obj.enterQuery(location);
	    System.out.println("Weather in "+ location);
	    
	}

	@Then("^It shows me the temperature$")
	public void It_shows_me_the_temperature() throws Throwable {
		obj = new PageObjects(driver);
		System.out.println(obj.getingStatus());
	}
	
	@Then("^Tells me \"([^\"]*)\" if temperature is between (\\d+) to (\\d+)$")
	public void Tells_me_if_temperature_is_between_to(String status, int temp1, int temp2) throws Throwable {
		obj = new PageObjects(driver);
		int actualTemp = Integer.parseInt(obj.getingTemp());
		if (actualTemp >= temp1 && actualTemp <= temp2) {
			System.out.println(status);
		}
	}
	
	@Then("^Close the application$")
	public void Close_the_application() throws Throwable {
		driver.close();
	}
}
