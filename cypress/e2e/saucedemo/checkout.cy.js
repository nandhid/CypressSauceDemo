import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

describe('Checkout Tests (POM)', () => {
  // Prepare cart and start checkout before each test
  beforeEach(() => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.addToCart('sauce-labs-backpack')
    inventoryPage.openCart()
    cartPage.clickCheckout()
  })

  // Full successful checkout flow
  it('Completes checkout with valid data', () => {
    checkoutPage.enterInformation('John', 'Doe', '12345')
    checkoutPage.clickContinue()
    checkoutPage.verifySummaryPage()
    checkoutPage.clickFinish()
    checkoutPage.verifyConfirmation()
  })

  // Attempt checkout with missing fields
  it('Shows error for missing checkout info', () => {
    checkoutPage.clickContinue()
    checkoutPage.verifyError()
  })
})
