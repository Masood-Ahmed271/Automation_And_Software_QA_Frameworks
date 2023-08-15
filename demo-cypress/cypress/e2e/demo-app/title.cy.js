describe('title', () => {
    beforeEach(() => {
        cy.visit('/example-1');
    })

    it('should have the correct title', () => {
        cy.get('h1').invoke('text').should('equal', 'Welcome to Demo')
    })
})