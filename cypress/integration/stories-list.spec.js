describe('stories list', () => {
  it('should load all stories', () => {
    cy.visit('/');

    cy.get('[data-testid=title]').should('contain', 'Some title');
  });
});
