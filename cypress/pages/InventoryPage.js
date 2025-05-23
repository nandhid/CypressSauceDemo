class InventoryPage {

  // ✅ Assert we're on the inventory page
  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get('.title', { timeout: 6000 }).should('have.text', 'Products')
  }

  // ✅ Select sorting option from dropdown
  sortBy(value) {
    // Available options: 'az', 'za', 'lohi', 'hilo'
    cy.get('[data-test="product_sort_container"]', { timeout: 6000 })
      .should('be.visible')
      .select(value)
  }

  // ✅ Click "Add to cart" for a given product
  addToCart(productId) {
    // productId example: 'sauce-labs-backpack'
    cy.get(`[data-test="add-to-cart-${productId}"]`).should('be.visible').click()
  }

  // ✅ Navigate to cart via icon
  openCart() {
    cy.get('.shopping_cart_link').should('be.visible').click()
  }

  // ✅ Get list of prices (for sorting check)
  getPrices() {
    return cy.get('.inventory_item_price')
  }

  // ✅ Verify number of products loaded
  verifyProductCount(expectedCount) {
    cy.get('.inventory_item').should('have.length', expectedCount)
  }

  // ✅ Ensure each product has name and price (sanity check)
  verifyProductDetails() {
    cy.get('.inventory_item').each(($el) => {
      cy.wrap($el).find('.inventory_item_name').should('be.visible')
      cy.wrap($el).find('.inventory_item_price').should('be.visible')
    })
  }
}

export default InventoryPage
