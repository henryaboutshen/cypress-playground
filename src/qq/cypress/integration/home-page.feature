Feature: Home page
    I want to open home page

    @focus
    Scenario: Opening a home page
        When I open home page
        Then I see "腾讯" in the title
    