import 'cypress-xpath';
import Common from "../Common"; 
it('Construct monitor', () => {
  cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
  cy.viewport(1920, 1080);

  const com = new Common();
  com.loginProcess();
      
      cy.wait(3000);

      cy.get('.btn.me-3 > .bi').click();

      cy.get('#projectName1').type('Neilsoft 103');
      cy.wait(3000);
      cy.get('#scheduleForm').type('2025-02-12');
      cy.wait(3000);
      cy.get('#scheduleTo').type('2025-05-14');
      cy.wait(3000);
      cy.get('#buildupArea').type('1000');
      cy.wait(3000);
     cy.get('.mt-4 > .btn').click();
})