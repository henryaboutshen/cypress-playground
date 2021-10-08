Feature: Overflow page
    As a user, I would like to use overflow page

    Scenario: header
        When I open overflow page
        Then I see element ".header"

    Scenario: nav
        When I open overflow page
        Then I see element ".nav"

    Scenario: profile
        When I open overflow page
        Then I see element ".profile"

    Scenario: chart
        When I open overflow page
        Then I see element ".chart"

    Scenario: calendar
        When I open overflow page
        Then I see element ".calendar"

    Scenario: footer
        When I open overflow page
        Then I see element ".footer"

    Scenario: scroll to footer
        When I open overflow page
        When I scroll to element ".footer"
        Then I see element ".footer"            
