import LoginPage from '../../pageObjects/LoginPage'
import InventoryPage from '../../pageObjects/InventoryPage'
import CartPage from '../../pageObjects/CartPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

describe('Cart Functionality Tests (POM)', () => {

  beforeEach(() => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.addToCart('sauce-labs-backpack')
    inventoryPage.openCart()
  })

  it('Verifies cart contains 1 item', () => {
    cartPage.verifyCartHasItems(1)
    cartPage.verifyItemName('Sauce Labs Backpack')
  })

})
