
Feature: Search

As user wich enter into website
For search a product 
 
@search
Scenario: Search for a valid product using search bar
    Given acess the principal page
    And enter in the search bar with T-Shirt
    When press in search button
    Then returns the product searched

Scenario: Search for a invalid product using search bar
    Given acess the principal page
    And enter in the search bar with Pants
    When press in search button
    Then returns no results for product search
