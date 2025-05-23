import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import MenuPage from '../../pages/MenuPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const menuPage = new MenuPage()

describe('Logout Functionality Test (POM)', () => {

  it('Logs out successfully and redirects to login', () => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()

    menuPage.openMenu()
    menuPage.clickLogout()
    menuPage.verifyLoggedOut()
  })

})
