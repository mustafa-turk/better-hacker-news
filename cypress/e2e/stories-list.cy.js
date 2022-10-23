describe('stories list', () => {
  it('should load all stories', () => {
    cy.visit('/');

    const title = cy.contains('Some title');
    title.should('be.visible');
  });

  it('should redirect to details page', () => {
    cy.visit('/');

    const title = cy.contains('Some title');
    title.click();

    cy.location('pathname').should('eq', '/1');
  });
});
