describe('Max Characters', () => {

    // It is before each hook which runs before each test
    beforeEach(() => {
        cy.visit('/example-2');

        // cretaing an alias for data-cy
        cy.get('[data-cy="chars-left-count"]')
        .as('charsLeftSpan')

        // cretaing an alias for data-cy
        cy.get('[data-cy="max-char-input"]')
        .as('charsInput')

        
    })

    it('displaying remaining characters count', () => {


        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@charsInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charsInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more characters once max is exceeded', () => {
        
        cy.get('@charsInput').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('@charsInput')
            .should('have.attr', 'value', 'abcdefghijklmno');
    });
});