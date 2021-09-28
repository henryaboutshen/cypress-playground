import { When } from 'cypress-cucumber-preprocessor/steps';

When('I open overflow page', () => {
    cy.visit('/overflow.html');
});
