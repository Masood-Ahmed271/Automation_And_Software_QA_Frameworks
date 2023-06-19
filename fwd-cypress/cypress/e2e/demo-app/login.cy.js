const data = require('./data.json');

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/example-3');
    })


    for (const {email, password} of data) {
        it(`should display the login page if login credentials with email: ${email} and password: ${password}`, () => {
            cy.get('[data-cy=input-email]').type(email);
            cy.get('[data-cy=input-password]').type(password);
            cy.get('[data-cy=login-button]').click();

            cy.get('[data-cy=successful-login]').should('be.visible');
        });
    }
    // Writing the test for a single static input
    // it('should display the login page if login credentials inputted are correct', () => {
    //     cy.get('[data-cy=input-email]').type('test@fwd.com');
    //     cy.get('[data-cy=input-password]').type('123456789');
    //     cy.get('[data-cy=login-button]').click();

    //     cy.get('[data-cy=successful-login]').should('be.visible');
    // });
});