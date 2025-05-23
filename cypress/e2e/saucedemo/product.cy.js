import LoginPage from '../../pageObjects/LoginPage'
import InventoryPage from '../../pageObjects/InventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('Product Page Tests (POM)', () => {

  beforeEach(() => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()
  })

  it('Displays all products correctly', () => {
    cy.get('.inventory_item').should('have.length', 6)
    cy.get('.inventory_item').each(($el) => {
      cy.wrap($el).find('.inventory_item_name').should('be.visible')
      cy.wrap($el).find('.inventory_item_price').should('be.visible')
    })
  })

  it('Sorts products by price - low to high', () => {
    inventoryPage.sortBy('lohi')

    let prices = []
    inventoryPage.getPrices().each(($el) => {
      prices.push(parseFloat($el.text().replace('$', '')))
    }).then(() => {
      const sorted = [...prices].sort((a, b) => a - b)
      expect(prices).to.deep.equal(sorted)
    })
  })

})
