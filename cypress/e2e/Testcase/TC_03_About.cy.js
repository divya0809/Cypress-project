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

      //validation of the login page....

      cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
      
    cy.get('.aboutpage > img').click()})