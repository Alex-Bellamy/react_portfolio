describe('Portfolio interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3003');
      cy.get('#header').should('contain', 'My Portfolio');
      cy.get('#footer').should('contain', 'Made with React 16.12.0');
      cy.get('#hello').should('contain', 'Alex_Bellamy.junior.fullStack.developer');
    })
  })