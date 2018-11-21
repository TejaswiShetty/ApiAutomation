@api
Feature: The API feature/functionality

  Background: Getting the time
    Given That I make a POST call to an endPoint

  Scenario: Recording API response time
    Then That I capture the POST response time

  Scenario: Getting the status code
    Then For the request I expect status code of '201'

  Scenario: Display the API content
    Then I return the content of the Post API
