package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByName;
import org.openqa.selenium.WebDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.hooks;

public class stepdefination {
	
	
	WebDriver driver = hooks.driver;
	
	@Given("^user should be on the main page$")
	public void user_should_be_on_the_main_page()  {
	    driver.get("https://www.google.com/");
	}

	@When("^User search facebook$")
	public void user_search_facebook() throws Throwable {
		
		Thread.sleep(3000);
	    driver.findElement(By.name("q")).sendKeys("facebook");
	    driver.findElement(By.xpath("(//input[@class='gNO89b'])[2]")).click();
	    
	}

	@When("^clicks on Search button$")
	public void clicks_on_Search_button() throws Throwable {
		System.out.println("step 3");
	}

	@Then("^Results will be populated$")
	public void results_will_be_populated() throws Throwable {
		System.out.println("step 4");
	}
	
	@When("^User search \"([^\"]*)\"$")
	public void user_search(String searchvalue) throws Throwable {
		
		driver.findElement(By.name("q")).sendKeys(searchvalue);
		driver.findElement(By.xpath("(//input[@class='gNO89b'])[2]")).click();
		Thread.sleep(3000);
		

	   System.out.println(searchvalue);
	}

	@Given("^login the application$")
	public void login_the_application() throws Throwable {
	    System.out.println("executing before my test cases");
	}
	
	

}
