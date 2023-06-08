import React from 'react';
import ThemeButton from './ThemeButton';

describe('<ThemeButton />', () => {
  it('renders', () => {
    cy.mount(<ThemeButton />);
  });
  it('Changes theme', () => {
    cy.mount(<ThemeButton />);

    cy.get('label')
      .click()
      .get('html')
      .invoke('attr', 'data-theme')
      .should('eq', 'emerald');

    cy.get('label')
      .click()
      .get('html')
      .invoke('attr', 'data-theme')
      .should('eq', 'forest');
  });
});
