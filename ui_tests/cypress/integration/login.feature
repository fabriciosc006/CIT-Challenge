
Feature: Login

As user wich enter into website
For make a login
 

Scenario: Valid account sign in
    Given acess the principal page
    And click in Sign in
    And enter email and password
    When press in sign in
    Then user can acess account

Scenario: Create a valid account
    Given acess the principal page
    And click in Sign in
    And enter email adress
    When press in create an account
    And provide personal infomations
    And click in Register 
    Then go to user dashboard

Scenario: Valid account history
    Given acess the principal page
    And click in Sign in
    And enter email and password
    When press in sign in
    And click in order history and details
    Then user can check order history


