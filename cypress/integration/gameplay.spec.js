describe('GamePlay', function(){
    it('should take two names and present them', function(){
        cy.visit('/')
        cy.get('#player1Name').type('Ben')
        cy.get('#player2Name').type('Bridget')
        cy.get('#submitButton').click()
        cy.get('#namesEntered').should('contain', 'Player 1: Ben')
        cy.get('#namesEntered').should('contain', 'Player 2: Bridget')
    })
})