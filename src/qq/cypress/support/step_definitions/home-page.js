import { When } from "cypress-cucumber-preprocessor/steps";

When(`I open home page`, () => {
    cy.visit('/')
})

When(`I open qq page`, () => {
    cy.visit('https://qq.com')
})
