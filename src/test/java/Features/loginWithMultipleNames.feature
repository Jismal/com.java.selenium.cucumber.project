Feature: As a user I want try multiple User names and passwords to loigin
@Sanity
  Scenario Outline: I want login using multiple user names and pass words

    Given I am on login  page
    When I login with <Uname> and <Pword>
    And I click on Login  button
    Then  I should be able to log in successfully
    Examples:
    |Uname      |Pword      |
    | Jismal    |  Joseph   |
    | Jismal1   |  Joseph1  |
    |Jismal2    |Joseph2    |
