/*import 'cypress-xpath';
import { readExcel } from '../../support/readExcel.js';
describe('Login Test for Multiple Users', () => {
  before(() => {
    cy.readExcel('cypress/fixtures/users.xlsx', 'Users').then((users) => {
      cy.wrap(users).as('userData');
    });
  });

  it('should login with multiple users', function() {
    cy.get('@userData').then((users) => {
      users.forEach((user) => {
        cy.visit('http://10.1.0.83/#/login');
        
        cy.get('#email').type(`${Cypress.env("email")}{Enter}`);
        cy.get('#exampleInputPassword1').type(`${Cypress.env("password")}{Enter}`);
        cy.wait(1000);
        cy.xpath("//div/input[1]").type(`${Cypress.env("OTP")}{Enter}`);
        cy.wait(3000);

        // Add assertions as needed
        cy.url().should('include', '/dashboard');
        
        // Logout before the next iteration
        cy.get('#logoutButton').click();
      });
    });
  });
});
*/
import 'cypress-xpath';
import { readExcel } from '../../support/readExcel.js';

describe('Login Test for Multiple Users', () => {
  let users;  // Declare a variable to store users data

  before(() => {
    // Read the Excel file before the test begins
    cy.fixture('users01.xlsx').then((fileData) => {
      users = readExcel(fileData); // Parse the Excel file data here

        
      //users = readExcel('../../fixtures/users01.xlsx')
   });

  });

  it('should login with multiple users', () => {
    users.forEach((user) => {
      cy.visit('http://10.1.0.83/#/login');
      
      // Use user data instead of environment variables
      cy.get('#email').type(user.email);  // Use email from Excel data
      cy.get('#exampleInputPassword1').type(user.password);  // Use password from Excel data
      cy.wait(1000);
      cy.xpath("//div/input[1]").type(user.otp);  // Use OTP from Excel data
      cy.wait(3000);

      // Add assertions as needed
      cy.url().should('include', '/dashboard');
      
      // Logout before the next iteration
      cy.get('#logoutButton').click();
    });
  });
});
