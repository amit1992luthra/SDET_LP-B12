$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup1.feature");
formatter.feature({
  "line": 2,
  "name": "google search functioanlity",
  "description": "",
  "id": "google-search-functioanlity",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "verify the google search with different values",
  "description": "",
  "id": "google-search-functioanlity;verify-the-google-search-with-different-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    },
    {
      "line": 7,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User search \"\u003cvalue1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Results will be populated",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "google-search-functioanlity;verify-the-google-search-with-different-values;",
  "rows": [
    {
      "cells": [
        "value1"
      ],
      "line": 15,
      "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;1"
    },
    {
      "cells": [
        "facebook"
      ],
      "line": 16,
      "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;2"
    },
    {
      "cells": [
        "ibm"
      ],
      "line": 17,
      "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;3"
    },
    {
      "cells": [
        "DXC"
      ],
      "line": 18,
      "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "login the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.login_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "verify the google search with different values",
  "description": "",
  "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 7,
      "name": "@Sanity"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User search \"facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Results will be populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_on_the_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 13
    }
  ],
  "location": "stepdefination.user_search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.clicks_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.results_will_be_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "login the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.login_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "verify the google search with different values",
  "description": "",
  "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 7,
      "name": "@Sanity"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User search \"ibm\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Results will be populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_on_the_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ibm",
      "offset": 13
    }
  ],
  "location": "stepdefination.user_search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.clicks_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.results_will_be_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "login the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.login_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "verify the google search with different values",
  "description": "",
  "id": "google-search-functioanlity;verify-the-google-search-with-different-values;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 7,
      "name": "@Sanity"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User search \"DXC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Results will be populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_on_the_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DXC",
      "offset": 13
    }
  ],
  "location": "stepdefination.user_search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.clicks_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.results_will_be_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "login the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.login_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify the google search with different values",
  "description": "",
  "id": "google-search-functioanlity;verify-the-google-search-with-different-values",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    },
    {
      "line": 20,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User search facebook",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Results will be populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_on_the_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.user_search_facebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.clicks_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefination.results_will_be_populated()"
});
formatter.result({
  "status": "skipped"
});
});