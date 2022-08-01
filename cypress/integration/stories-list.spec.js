describe('stories list', () => {
  it('should load all stories', () => {
    cy.visit('/');

    cy.get('[data-testid=title]').should('contain', 'Some title');
    cy.get('[data-testid=comments-count]').should('contain', '3 comments');
  });
});
