/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('login');
    cy.get('button').click();
    cy.origin(
      'https://accounts.spotify.com/',
      { args: [email, password] },
      ([email, password]) => {
        cy.get('#login-username').type(email);
        cy.get('#login-password').type(password);
        cy.get('#login-button').click();
      }
    );
    cy.getCookie('next-auth');
    cy.getAllCookies();
  });
});
