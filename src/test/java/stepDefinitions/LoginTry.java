package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTry {

    @Given("^I am on login  page$")
    public void i_am_on_login_page() {

    }

    @When("^I login with (.+) and (.+)$")
    public void i_login_with_and(String uname, String pword) {

        System.out.println(uname);
        System.out.println(pword);
    }

    @And("^I click on Login  button$")
    public void i_click_on_login_button() {

    }

    @Then("^I should be able to log in successfully$")
    public void i_should_be_able_to_log_in_successfully() {

    }
}
