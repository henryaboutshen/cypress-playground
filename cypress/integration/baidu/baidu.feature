Feature: The Facebook
    I want to open a social network page

    @focus
    Scenario: Opening a social network page
        When I open baidu page
        Then I see "百度一下，你就知道" in the title
    