Feature: Home page
    I want to open home page

    @focus
    Scenario: Opening a home page
        When I open home page
        When I open qq page
        Then I see "百度一下" in the title
    