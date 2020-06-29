describe('Portfolio interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3003');
      cy.get('#header').should('contain', 'My Portfolio');
      cy.get('#footer').should('contain', 'React, thank you.');
      cy.get('#hello').should('contain', 'Alex_Bellamy.junior.fullStack.developer');
    })
  })