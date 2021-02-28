package steps;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
//import static org.hamcrest.Matchers.*;

public class SearchApi {

	String url;
	WebDriver driver;
	Boolean R;
	
	@Given("^access the Api$")
	public void acess_the_Api()  {
	    
		url = "https://jsonplaceholder.typicode.com/";
       	System.setProperty("webdriver.chrome.driver", "C:\\Tools\\Chromedrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30000, TimeUnit.MILLISECONDS);
		
		driver.get(url);
	}

	@When("^search for user$")
	public void search_for_user() {

		Response response =

				given().

						when().get("https://jsonplaceholder.typicode.com/users");

		response.then()

				.statusCode(200).log().all();

		List<String> names = new ArrayList<String>();
		String name = response.jsonPath().getString("name");
		names.add(name);
		String group1 = ("Os nomes sao: " + names);
		System.out.println(group1);
		
		int T = names.size();
		if(T > 0) {
			     R= true;
		}

		List<String> usernames = new ArrayList<String>();
		String username = response.jsonPath().getString("username");
		usernames.add(username);
		String group2 = ("Os usernames sao: " + usernames);
		System.out.println(group2);

		List<String> emails = new ArrayList<String>();
		String email = response.jsonPath().getString("email");
		emails.add(email);
		String group3 = ("Os emails sao: " + emails);
		System.out.println(group3);

		List<String> catchPrases = new ArrayList<String>();
		for (int i = 0; i <= 9; i++) {
			List<Map<String, String>> ccatchprases = response.jsonPath().getList("company");
			String ccatchPhrase = ccatchprases.get(i).get("catchPhrase");
			catchPrases.add(ccatchPhrase);
		}
		String group4 = ("As CatchPrases sao: " + catchPrases);
		System.out.println(group4);

		for (int i = 0; i <= 9; i++) {

			String str = catchPrases.get(i);
			int lenght = str.length();

			if (lenght <= 50) {
				System.out.println("Element with less than 50 characters");

			} else {
				System.out.println("Element with more than 50 characters");
			}
		}

	}

	@Then("^validate user$")
	public void validate_user() {
				
		assertEquals(true, R);
	}

	@When("^send request for id$")
	public void send_request_for_id() {

		        given()
		           .contentType("application/json")
		           .body("{\"userId\": \"11\"},\"title\": \" \",")

				.when().post("https://jsonplaceholder.typicode.com/posts")

				.then().log().all();

	}

	@Then("^returns an error$")
	public void returns_an_error() {

		Response response =

				given().

						when().post("https://jsonplaceholder.typicode.com/posts");

		response.then()
                .statusCode(500)
				.log().all();

	}
	
}
