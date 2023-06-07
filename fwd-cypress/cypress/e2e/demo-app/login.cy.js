describe('Login', () => {
    beforeEach(() => {
        cy.visit('/example-3');
    })

    // Writing the test
    it('should display the login page if login credentials inputted are correct', () => {
        cy.get('[data-cy=input-email]').type('test@fwd.com');
        cy.get('[data-cy=input-password]').type('123456789');
        cy.get('[data-cy=login-button]').click();

        cy.get('[data-cy=successful-login]').should('be.visible');
    });
});