import {Given} from "cypress-cucumber-preprocessor/steps";

const url = 'https://baidu.com'
Given('I open Google page', () => {
    cy.visit(url)
})