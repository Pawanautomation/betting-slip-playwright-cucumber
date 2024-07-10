Feature: Betslip Functionality

  Scenario: Verify default bet and profit
    Given I navigate to the betslip page
    When I add a Labour Majority bet
    Then the bet should be present in the betslip
    And the default odds should be 1.02 and the default stake should be 100
    And the profit should be correctly calculated for the default values

  Scenario: Verify profit calculation after changing odds
    Given I navigate to the betslip page
    When I add a Labour Majority bet
    And I change the odds to a random value between 1.01 and 1.99
    Then the profit should be correctly updated

  Scenario: Verify profit calculation after changing stake
    Given I navigate to the betslip page
    When I add a Labour Majority bet
    And I change the stake to a random value between 10 and 1000
    Then the profit should be correctly updated

  Scenario: Verify profit calculation after changing odds and stake
    Given I navigate to the betslip page
    When I add a Labour Majority bet
    And I change the odds to a random value between 1.01 and 1.99
    And I change the stake to a random value between 10 and 1000
    Then the profit should be correctly updated

  Scenario: Cancel bets and verify empty betslip
    Given I navigate to the betslip page
    When I add a Labour Majority bet
    And I cancel all selections
    Then the betslip should be empty
    And the calculated profit and liability should be zero
