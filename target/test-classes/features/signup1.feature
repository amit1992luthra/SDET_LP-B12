@featuretag
Feature: google search functioanlity

  Background: This step will always execute before my test case
    Given login the application

  @Regression @Sanity
  Scenario Outline: verify the google search with different values
    Given user should be on the main page
    When User search "<value1>"
    And clicks on Search button
    Then Results will be populated

    Examples: 
      | value1   |
      | facebook |
      | ibm      |
      | DXC      |

  @Regression @Smoke
  Scenario: verify the google search with different values
    Given user should be on the main page
    When User search facebook
    And clicks on Search button
    Then Results will be populated
