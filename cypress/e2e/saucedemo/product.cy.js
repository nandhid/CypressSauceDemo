import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('Product Page Tests (POM)', () => {

  beforeEach(() => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()
  })

  it('Displays all products correctly', () => {
    inventoryPage.verifyProductCount(6)
    inventoryPage.verifyProductDetails()
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
