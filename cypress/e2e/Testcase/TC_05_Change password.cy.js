/*/// <referance types="cypress"/>
import 'cypress-xpath';
import Login from"..//PageObject/loginpage.js";
describe("Login page", () => {
    it.only("should log in using credentials from config", () => {
      
      cy.visit("http://10.1.0.83/#/login"); // Visit your login page
      cy.viewport(1920, 1080); // Full HD resolution
      cy.get('#acceptBtn').click()
      
      // Fetch email & password from Cypress config
      cy.get('#email').type(`${Cypress.env("email")}{Enter}`);
      cy.get('#exampleInputPassword1').type(`${Cypress.env("password")}{Enter}`);
      cy.wait(1000);
      
      cy.xpath("//div/input[1]").type(`${Cypress.env("OTP")}{Enter}`);
      
      
      cy.wait(3000);


      cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
      cy.get('.user > img').click();
      cy.get('#exampleModalLabel').should("contain.text", "Change Password");
      cy.get('#oldpassword').type('Neilsoft@104{enter}');
      cy.get('#newpassword').type('Neilsoft@105{enter}');
      cy.get('#reenterpassword').type('Neilsoft@105{enter}');
      //cy.get('.mb-1').click();

    });
  });
  */