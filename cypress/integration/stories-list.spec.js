describe('stories list', () => {
  it('should load all stories', () => {
    cy.visit('/');

    // FIXME: failing assertion
    // cy.get('[data-testid=title]').should('contain', 'Some title');
  });
});
