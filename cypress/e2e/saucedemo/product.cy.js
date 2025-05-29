import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('Product Page Tests (POM)', () => {
  // Setup before each test case
  beforeEach(() => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()
  })

  // Ensure all products are displayed with correct details
  it('Displays all products correctly', () => {
    inventoryPage.verifyProductDetails()
    inventoryPage.verifyProductCount(6)
  })

})
