import { test, expect, errors } from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

async function getFulFilledResponse(page) {
  return page.waitForResponse
}
test('test', async ({ page }) => {

    const Main = new MainPage(page)

    Main.openFashionHub()

    const responsePromise = getFulFilledResponse(page)
    
    Main.goAccountPage()

    const response = await responsePromise
    const responseBody = await response.json()
    console.log(responseBody)
});