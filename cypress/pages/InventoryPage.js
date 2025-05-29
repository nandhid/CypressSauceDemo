class InventoryPage {
  // Confirm user is on inventory page
  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get('.title', { timeout: 6000 }).should('have.text', 'Products')
  }

  // Click 'Add to cart' for a product by ID
  addToCart(productId) {
    cy.get(`[data-test="add-to-cart-${productId}"]`).should('be.visible').click()
  }

  // Navigate to cart from top right
  openCart() {
    cy.get('.shopping_cart_link').should('be.visible').click()
  }

  // Return all product price elements
  getPrices() {
    return cy.get('.inventory_item_price')
  }

  // Verify total number of products shown
  verifyProductCount(expectedCount) {
    cy.get('.inventory_item').should('have.length', expectedCount)
  }

  // Confirm all products have names and prices
  verifyProductDetails() {
    cy.get('.inventory_item').each(($el) => {
      cy.wrap($el).find('.inventory_item_name').should('be.visible')
      cy.wrap($el).find('.inventory_item_price').should('be.visible')
    })
  }
}

export default InventoryPage
