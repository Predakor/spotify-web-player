import React from 'react';
import { SpotifyUser } from 'types/spotifyUser';
import User from './User';

describe('<User />', () => {
  const user = { name: 'Patryk', image: undefined };
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<User user={user as SpotifyUser} />);
    cy.get('p').contains(user.name);
  });
});
