import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title);
});

Then('I see element {string}', (elem) => {
    cy.get(elem).should('be.visible');
});
