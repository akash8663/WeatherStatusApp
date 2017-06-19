package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageObjects {
	
	WebDriver driver;
	
	public PageObjects(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name = "q")
	WebElement searchBox;
	public void enterQuery(String location) throws InterruptedException {
		//searchBox.clear();
	    searchBox.sendKeys("How is the weather in "+ location);
	    searchBox.submit();
	    Thread.sleep(2000);
	}
	
	@FindBy(id = "wob_tm")
	WebElement temp;
	@FindBy(xpath = "//div[@class='vk_bk wob-unit']//span[@class='wob_t'][1]")
	WebElement unit;
	@FindBy(xpath = "//*[@id='wob_dc']")
	WebElement status;

	public String getingTemp() {
		
	    return temp.getText();
	}
	
	public String getingStatus() {

		return "It's " + temp.getText() + "" + unit.getText() + " and " + status.getText();
	}

}
