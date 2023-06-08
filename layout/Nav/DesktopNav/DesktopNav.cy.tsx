import React from 'react';
import DesktopNav from './DesktopNav';

describe('<DesktopNav />', () => {
  it('should render all navigation items', () => {
    cy.mount(<DesktopNav pathname="library" />);
    cy.get("a[href='/']").should('be.visible');
    cy.get("a[href='/library/playlists']").should('be.visible');
    cy.get("a[href='/search']").should('be.visible');
  });
});
