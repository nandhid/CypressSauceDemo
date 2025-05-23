// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**
 * Custom command to log in to the SauceDemo application
 * @param {string} username - The username to log in with
 * @param {string} password - The password to log in with
 *
 * Input:
 *  - Valid credentials: 'standard_user', 'secret_sauce'
 *  - Invalid credentials: e.g., 'wrong_user', 'wrong_pass'
 *
 * Output:
 *  - Successful login: Redirects to /inventory.html
 *  - Failed login: Displays error message
 */
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/') // Navigate to login page
  cy.get('#user-name').type(username)     // Enter username
  cy.get('#password').type(password)      // Enter password
  cy.get('#login-button').click()         // Submit login form
})
