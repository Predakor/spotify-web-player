/// <reference types="cypress" />

describe('authentication test', () => {
  beforeEach(() => {
    cy.login('discofytest@interia.pl', 'DiscofyTestAccount');
  });

  it('logs in', () => {
    cy.visit('/');
    cy.get('button').click();
  });
});
