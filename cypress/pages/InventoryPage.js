class InventoryPage {
  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_item').should('exist')
  }

  addToCart(productName) {
    cy.get(`[data-test="add-to-cart-${productName}"]`).click()
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  sortBy(value) {
    cy.get('[data-test="product_sort_container"]').select(value)
  }

  getPrices() {
    return cy.get('.inventory_item_price')
  }
}

export default InventoryPage
