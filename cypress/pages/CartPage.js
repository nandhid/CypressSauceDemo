class CartPage {
  // Check number of items in cart
  verifyCartHasItems(count) {
    cy.get('.cart_item').should('have.length', count)
  }

  // Verify a specific item name is present
  verifyItemName(name) {
    cy.get('.inventory_item_name').should('have.text', name)
  }

  // Confirm user is on the cart page
  verifyCartPageVisible() {
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('exist')
  }

  // Proceed to checkout step
  clickCheckout() {
    cy.get('[data-test="checkout"]').click()
  }
}

export default CartPage
