class CheckoutPage {
  // Fill in checkout form fields
  enterInformation(first, last, zip) {
    cy.get('[data-test="firstName"]').type(first)
    cy.get('[data-test="lastName"]').type(last)
    cy.get('[data-test="postalCode"]').type(zip)
  }

  // Continue to order summary
  clickContinue() {
    cy.get('[data-test="continue"]').click()
  }

  // Validate total summary and page
  verifySummaryPage() {
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.summary_total_label').should('contain.text', 'Total')
  }

  // Finalize the purchase
  clickFinish() {
    cy.get('[data-test="finish"]').click()
  }

  // Confirm checkout complete message
  verifyConfirmation() {
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  }

  // Show form errors if submission incomplete
  verifyError() {
    cy.get('[data-test="error"]').should('be.visible')
  }
}

export default CheckoutPage
