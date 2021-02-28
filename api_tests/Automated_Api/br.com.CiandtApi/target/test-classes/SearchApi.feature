

Feature: Api jsonplaceholder

  Scenario: Get User Api
    Given access the Api
    When search for user
    Then validate user

  Scenario: Post with invalid id
    Given access the Api
    When send request for id
    Then returns an error
