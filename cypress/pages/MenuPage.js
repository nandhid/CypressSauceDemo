class MenuPage {
  openMenu() {
    cy.get('#react-burger-menu-btn').click()
    cy.wait(500)
  }

  clickLogout() {
    cy.get('#logout_sidebar_link').click()
  }

  verifyLoggedOut() {
    cy.url().should('include', '/')
    cy.get('#login-button').should('be.visible')
  }
}

export default MenuPage
