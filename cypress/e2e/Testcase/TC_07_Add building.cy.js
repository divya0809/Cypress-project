import 'cypress-xpath';
it('Construct monitor', () => {
    cy.visit('http://10.1.0.83/#/login')

    cy.viewport(1920, 1080); // Full HD resolution


    cy.get('#acceptBtn').click()

      // Fetch email & password from Cypress config
      cy.get('#email').type(`${Cypress.env("email")}{Enter}`);
      cy.get('#exampleInputPassword1').type(`${Cypress.env("password")}{Enter}`);
      cy.wait(1000);
      
      cy.xpath("//div/input[1]").type(`${Cypress.env("OTP")}{Enter}`);
      
      
      cy.wait(3000);

      cy.get('.col-md-9 > .btn').click()
})