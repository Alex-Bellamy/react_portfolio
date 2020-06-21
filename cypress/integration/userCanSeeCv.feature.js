describe('User can see my CV', () => {
   beforeEach(() => {
       cy.visit('http://localhost:3003');
       cy.get('#cv-tab').click();
})

it ('displays my first job', () => {
    cy.get('#cv-1').within(() => {
        cy.get('.image').should('exist');
        cy.get('.ui.header').should('contain', 'My First Job');
        cy.get('.description').should('contain', 'This was my first job');
    })
}),

it ('displays my qualifications', () => {
    cy.get('#cv-2').within(() => {
        cy.get('.image').should('exist');
        cy.get('.ui.header').should('contain', 'My Qualifications');
        cy.get('.description').should('contain', 'I have done quite a bit of learning over my lifetime...');
    })
});
});
