package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class WDXloginStepdefinitions {


    @Given("^validate the Browser$")
    public void validate_the_Browser()  {
        System.out.println("validate login");
    }

    @When("^Browser is triggered$")
    public void browser_is_triggered()  {
        System.out.println("Validate the trigger");
    }

    @Then("^Check the browser is started$")
    public void check_the_browser_is_started(){
        System.out.println("browser opened");
    }
    @Given("^I am on login page$")
    public void i_am_on_login_page() {
        System.out.println("I am On login page");
    }

    @When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_and(String arg1, String arg2) {
        System.out.println(arg1);
        System.out.println(arg2);
    }

    @When("^I click on Login button$")
    public void i_click_on_Login_button() {

        System.out.println("I click on the login button");
    }

    @Then("^I should be on the Home Page$")
    public void i_should_be_on_the_Home_Page() {
        System.out.println("I verify the home page");

    }

    @Then("^I Verify the header text$")
    public void i_Verify_the_header_text() {
        System.out.println("I verify the header text");
    }


    @Given("^I am on sign in page$")
    public void i_am_on_sign_in_page() {

        System.out.println("I am on sign in page");
    }
    @When("^I click in the Sign In Button$")
    public void i_click_in_the_Sign_In_Button() {

    }
    @When("^I fill in all the details$")
    public void i_fill_in_all_the_details(DataTable table) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<List<String>> tableList = table.raw();
        System.out.println(tableList.get(0).get(0));
        System.out.println(tableList.get(0).get(1));
        System.out.println(tableList.get(0).get(2));
        System.out.println(tableList.get(0).get(3));
    }

    @When("^I Click on the submit button$")
    public void i_Click_on_the_submit_button() {
        System.out.println("Submitted");
    }

    @Then("^I should be able to complete the sign up$")
    public void i_should_be_able_to_complete_the_sign_up() {
        System.out.println("sign up completed");

    }

}
