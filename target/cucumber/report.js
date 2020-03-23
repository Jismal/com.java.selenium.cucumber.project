$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginWithMultipleNames.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want try multiple User names and passwords to loigin",
  "description": "",
  "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "I want login using multiple user names and pass words",
  "description": "",
  "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on login  page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with \u003cUname\u003e and \u003cPword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login  button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to log in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;",
  "rows": [
    {
      "cells": [
        "Uname",
        "Pword"
      ],
      "line": 10,
      "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;1"
    },
    {
      "cells": [
        "Jismal",
        "Joseph"
      ],
      "line": 11,
      "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;2"
    },
    {
      "cells": [
        "Jismal1",
        "Joseph1"
      ],
      "line": 12,
      "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;3"
    },
    {
      "cells": [
        "Jismal2",
        "Joseph2"
      ],
      "line": 13,
      "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "I want login using multiple user names and pass words",
  "description": "",
  "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on login  page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with Jismal and Joseph",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login  button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTry.i_am_on_login_page()"
});
formatter.result({
  "duration": 184980800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jismal",
      "offset": 13
    },
    {
      "val": "Joseph",
      "offset": 24
    }
  ],
  "location": "LoginTry.i_login_with_and(String,String)"
});
formatter.result({
  "duration": 3869600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTry.i_click_on_login_button()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTry.i_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I want login using multiple user names and pass words",
  "description": "",
  "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on login  page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with Jismal1 and Joseph1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login  button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTry.i_am_on_login_page()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jismal1",
      "offset": 13
    },
    {
      "val": "Joseph1",
      "offset": 25
    }
  ],
  "location": "LoginTry.i_login_with_and(String,String)"
});
formatter.result({
  "duration": 135700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTry.i_click_on_login_button()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTry.i_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I want login using multiple user names and pass words",
  "description": "",
  "id": "as-a-user-i-want-try-multiple-user-names-and-passwords-to-loigin;i-want-login-using-multiple-user-names-and-pass-words;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on login  page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with Jismal2 and Joseph2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login  button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTry.i_am_on_login_page()"
});
formatter.result({
  "duration": 47800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jismal2",
      "offset": 13
    },
    {
      "val": "Joseph2",
      "offset": 25
    }
  ],
  "location": "LoginTry.i_login_with_and(String,String)"
});
formatter.result({
  "duration": 120400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTry.i_click_on_login_button()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTry.i_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.uri("wdx_Login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to check the log in functionality for WDX",
  "description": "",
  "id": "as-a-user-i-want-to-check-the-log-in-functionality-for-wdx",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "validate the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Check the browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "WDXloginStepdefinitions.validate_the_Browser()"
});
formatter.result({
  "duration": 132900,
  "status": "passed"
});
formatter.match({
  "location": "WDXloginStepdefinitions.browser_is_triggered()"
});
formatter.result({
  "duration": 64300,
  "status": "passed"
});
formatter.match({
  "location": "WDXloginStepdefinitions.check_the_browser_is_started()"
});
formatter.result({
  "duration": 107400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "As a userI want to Sign in to WDX",
  "description": "",
  "id": "as-a-user-i-want-to-check-the-log-in-functionality-for-wdx;as-a-useri-want-to-sign-in-to-wdx",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click in the Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill in all the details",
  "rows": [
    {
      "cells": [
        "Name",
        "Age",
        "Sex",
        "email",
        "Mobile number"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should be able to complete the sign up",
  "keyword": "Then "
});
formatter.match({
  "location": "WDXloginStepdefinitions.i_am_on_sign_in_page()"
});
formatter.result({
  "duration": 166900,
  "status": "passed"
});
formatter.match({
  "location": "WDXloginStepdefinitions.i_click_in_the_Sign_In_Button()"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "location": "WDXloginStepdefinitions.i_fill_in_all_the_details(DataTable)"
});
formatter.result({
  "duration": 1341800,
  "status": "passed"
});
formatter.match({
  "location": "WDXloginStepdefinitions.i_Click_on_the_submit_button()"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "location": "WDXloginStepdefinitions.i_should_be_able_to_complete_the_sign_up()"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
});