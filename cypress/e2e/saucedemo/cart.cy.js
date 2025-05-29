import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CartPage from '../../pages/CartPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

describe('Cart Page Tests (POM)', () => {
  // Add product to cart and validate cart state
  it('Adds item to cart and verifies cart count', () => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.addToCart('sauce-labs-backpack')
    inventoryPage.openCart()
    cartPage.verifyCartPageVisible()
    cartPage.verifyCartHasItems(1)
    cartPage.verifyItemName('Sauce Labs Backpack')
  })
})
