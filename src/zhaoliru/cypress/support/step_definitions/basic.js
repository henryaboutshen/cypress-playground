import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I scroll to element {string}', (elem) => {
    cy.get(elem).scrollIntoView();
});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title);
});

Then('I see element {string}', (elem) => {
    cy.get(elem).should('be.visible');
});
