class MenuPage {
  // Open burger menu
  openMenu() {
    cy.get('#react-burger-menu-btn').should('be.visible').click()
  }

  // Click logout link
  clickLogout() {
    cy.get('#logout_sidebar_link').click()
  }

  // Confirm user is redirected to login page
  verifyLoggedOut() {
    cy.url().should('include', '/')
    cy.get('#login-button').should('be.visible')
  }
}

export default MenuPage
