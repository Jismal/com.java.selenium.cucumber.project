Feature: As a user I want to check the log in functionality for WDX
  Background:
    Given validate the Browser
    When Browser is triggered
    Then Check the browser is started
  @Regression
  Scenario: As a userI want to login to WDX
    Given I am on login page
    When I enter "User Name" and "Password"
    And I click on Login button
    Then I should be on the Home Page
    And I Verify the header text
@Regression
  Scenario: As a userI want to login to WDX
    Given I am on login page
    When I enter "Jismal" and "Password1"
    And I click on Login button
    Then I should be on the Home Page
    And I Verify the header text
  @smoke
    Scenario: As a userI want to Sign in to WDX
      Given I am on sign in page
      When I click in the Sign In Button
      And I fill in all the details
      |Name|Age|Sex|email|Mobile number|
      And I Click on the submit button
      Then I should be able to complete the sign up