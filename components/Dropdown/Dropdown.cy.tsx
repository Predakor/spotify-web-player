import React from 'react';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  it('shows items after click', () => {
    cy.mount(
      <Dropdown>
        <p>exampleContent</p>
      </Dropdown>
    );
    cy.get('summary').click();
    cy.get('details').children().eq(1).should('be.visible');
    cy.get('summary').click().click();
    cy.get('details').children().eq(1).should('be.hidden');
  });
});
