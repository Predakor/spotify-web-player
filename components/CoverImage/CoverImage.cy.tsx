import React from 'react';
import CoverImage from './CoverImage';

describe('<CoverImage />', () => {
  const imgLink =
    'https://play-lh.googleusercontent.com/P2VMEenhpIsubG2oWbvuLGrs0GyyzLiDosGTg8bi8htRXg9Uf0eUtHiUjC28p1jgHzo';

  it('should render placeholder image if all links are empty', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CoverImage urls={[]} />);
    cy.get('div').contains('placeholder image');
  });
  it('should render an image', () => {
    cy.mount(
      <CoverImage
        urls={[
          {
            url: imgLink,
          },
        ]}
      />
    );
    cy.get('img').should('be.visible');
  });
  it('should render bigger or smaller image if desired one is not avaible', () => {
    cy.mount(
      <CoverImage
        urls={[
          {
            url: imgLink,
          },
          {
            url: imgLink,
          },
        ]}
        prefferdSize="big"
      />
    );
    cy.get('img').should('be.visible');
  });
});
