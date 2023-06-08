describe('API Testing for Post', () => {

    let randomText = "";
    let testEmail = "";

    it('POST - create Users', () => {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        }
        testEmail = randomText + "@gmail.com";


        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + Cypress.env('accessToken')
            },
            body: {
                "name": 'FWD Insurance',
                'gender': "male",
                "email": testEmail,
                "status": "active"
            }
        }).then((response) => {
            // to log the response
            cy.log(JSON.stringify(response.body));
            expect(response).to.have.property('status', 201);
            expect(response.body.data).has.property('name', 'FWD Insurance');
            expect(response.body.data).has.property('email', testEmail);
            expect(response.body.data).has.property('status', 'active')
            expect(response.body.data).has.property('gender', 'male')
        });
    });
});