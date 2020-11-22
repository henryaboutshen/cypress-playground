import { When } from "cypress-cucumber-preprocessor/steps";

When(`I open home page`, () => {
    cy.visit('/')
})
