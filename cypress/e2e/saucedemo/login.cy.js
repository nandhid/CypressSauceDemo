import LoginPage from '../../pageObjects/LoginPage'
import InventoryPage from '../../pageObjects/InventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('Login Tests (POM)', () => {

  it('Logs in successfully with valid credentials', () => {
    // Input: Valid credentials
    // Output: Redirects to inventory page
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()
  })

  it('Fails to login with invalid credentials', () => {
    // Input: Invalid credentials
    // Output: Error message displayed
    loginPage.visit()
    loginPage.enterUsername('invalid_user')
    loginPage.enterPassword('invalid_pass')
    loginPage.submit()
    loginPage.verifyLoginError()
  })

})
