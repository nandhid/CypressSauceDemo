class CartPage {
  verifyCartHasItems(count) {
    cy.get('.cart_item').should('have.length', count)
  }

  verifyItemName(name) {
    cy.get('.inventory_item_name').should('have.text', name)
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click()
  }
}

export default CartPage
