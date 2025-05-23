class CheckoutPage {
  enterInformation(first, last, zip) {
    cy.get('[data-test="firstName"]').type(first)
    cy.get('[data-test="lastName"]').type(last)
    cy.get('[data-test="postalCode"]').type(zip)
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click()
  }

  verifySummaryPage() {
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.summary_total_label').should('contain.text', 'Total')
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click()
  }

  verifyConfirmation() {
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  }

  verifyError() {
    cy.get('[data-test="error"]').should('be.visible')
  }
}

export default CheckoutPage
