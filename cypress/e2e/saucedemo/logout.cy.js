import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import MenuPage from '../../pages/MenuPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const menuPage = new MenuPage()

describe('Logout Tests (POM)', () => {
  // Complete login then perform logout from menu
  it('Logs out successfully', () => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.verifyOnInventoryPage()
    menuPage.openMenu()
    menuPage.clickLogout()
    menuPage.verifyLoggedOut()
  });
});
