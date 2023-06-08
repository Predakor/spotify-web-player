import React from 'react';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  it('shows items after click', () => {
    cy.mount(
      <Dropdown>
        <p>exampleContent</p>
      </Dropdown>
    );
    cy.get('summary').click().siblings().should('be.visible');
  });
});
