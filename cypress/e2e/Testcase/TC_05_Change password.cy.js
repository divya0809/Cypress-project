/// <referance types="cypress"/>
import 'cypress-xpath';
import Common from "../Common"; 
//import Login from"..//PageObject/loginpage.js";
import newpassword from "../PageObject/changepassword.js";

    it("should log in using credentials from config", () => {
        cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
        cy.viewport(1920, 1080);

        const com = new Common();
        com.loginProcess();
        cy.wait(3000);
      cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

      //changepassword
      cy.get('.user > img').click();
      cy.get('#exampleModalLabel').should("contain.text", "Change Password");

      cy.get('#oldpassword').type(`${Cypress.env("Password")}{Enter}`);

      const npassword = new newpassword(); 
      const opassword = new oldpassword(); 
      
      cy.get('.mb-1').click();

       cy.url().should('include', '/login');

    });

  