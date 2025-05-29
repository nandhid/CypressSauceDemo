import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('Login Page Tests (POM)', () => {
  // Positive login scenario
  it('should login successfully with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()
  })

  // Negative login scenario with invalid credentials
  it('should display error for invalid login', () => {
    loginPage.visit()
    loginPage.enterUsername('invalid_user')
    loginPage.enterPassword('invalid_pass')
    loginPage.submit()
    loginPage.verifyLoginError()
  })
})
