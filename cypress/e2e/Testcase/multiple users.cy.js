import 'cypress-xpath';

describe('Login Test with Multiple Users', () => {
  // Access users array from Cypress environment
  const users = Cypress.env('users');
  
  // Loop through each user and run the test
  users.forEach((user) => {
    it(`should log in as ${user.username}`, () => {
      // Ensure document is fully loaded
      
      cy.window().then((win) => {
        cy.wrap(win).its('document.readyState').should('eq', 'complete');
      });

      cy.visit('/'); // Use baseUrl from config
      cy.viewport(1920, 1080); // Full HD resolution
      
      // Accept cookies or terms (if applicable)
      cy.get('#acceptBtn').should('be.visible').click();
      
      //cy.pause(); // Debugging Pause

      // Use user-specific credentials
      cy.get('#email').should('be.visible').type(`${user.username}{Enter}`);
      cy.get('#exampleInputPassword1').should('be.visible').type(`${user.password}{Enter}`);
      cy.wait(1000); // Consider replacing with a more robust wait if needed
    
      cy.xpath("//div/input[1]").should('be.visible').type(`${Cypress.env("OTP")}{Enter}`);
  
      // Assert successful login
      //cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
      
      // Optional: Logout to reset for the next user
      cy.get('.power > img').should('be.visible').click();
      //cy.xpath("//button[normalize-space()='Yes']").should('be.visible').click();
      cy.get('.modal-backdrop').should('not.exist'), { force: true };
      
      // Confirm document state is complete before ending test
      cy.window().then((win) => {
        cy.wrap(win).its('document.readyState').should('eq', 'complete');
      });
    });
  });
});

