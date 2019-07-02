Feature: To search keywords in google

@OutlineScenario
Scenario Outline: Searching on google
  
  Given I am on "<search>" search page
  When I type "<search keyword>"
  Then I hit enter in the search input
  Then I clear the search text

  Examples:
    | search | search keyword | 
    |  google   | cucumber |
    |  cucumber | protractor |
    |  protractor | typescript | 
  