package Test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", 
				glue = "StepDefination",
				plugin = {"pretty","html:target/cucumber-report"})
public class TestRunner {
	
	
}
