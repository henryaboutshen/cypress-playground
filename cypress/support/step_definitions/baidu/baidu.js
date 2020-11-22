import { When } from "cypress-cucumber-preprocessor/steps";

When(`I open baidu page`, () => {
    cy.visit('/')
})
