import { test, expect } from '@playwright/test';
import { AccountPage } from '../../pages/account';
import { MainPage } from '../../pages/mainPage';

test('test', async ({ page }) => {

  const Account = new AccountPage(page) 
  const Main = new MainPage(page)
  
  Main.openFashionHub()
  Main.goAccountPage()
  Account.login('demouser','fashion123')
  Account.verifyLogoutButtonVisible()

});