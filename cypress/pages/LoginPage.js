class LoginPage {
  // Navigate to login page
  visit() {
    cy.visit('/')
  }

  // Type username into login form
  enterUsername(username) {
    cy.get('#user-name').should('be.visible').type(username)
  }

  // Type password into login form
  enterPassword(password) {
    cy.get('#password').should('be.visible').type(password)
  }

  // Submit login form
  submit() {
    cy.get('#login-button').should('be.visible').click()
  }

  // Complete login flow
  login(username, password) {
    this.visit()
    this.enterUsername(username)
    this.enterPassword(password)
    this.submit()
  }

  // Verify login error is shown for invalid credentials
  verifyLoginError() {
    cy.get('[data-test="error"]').should('be.visible')
  }
}

export default LoginPage
