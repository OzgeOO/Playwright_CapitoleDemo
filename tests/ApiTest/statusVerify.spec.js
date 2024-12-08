import { test, expect} from '@playwright/test';
import { MainPage } from '../../pages/mainPage';


test('Verify Status Code', async ({ request }) => {

  const responseForHome = await request.get('https://pocketaces2.github.io/fashionhub/')
  
  expect(responseForHome.status()).toBe(200 || 300)
  expect(responseForHome.status()).not.toBe(400)  

  const responseForAccount = await request.get('https://pocketaces2.github.io/fashionhub/account.html')
  
  expect(responseForAccount.status()).toBe(200 || 300)
  expect(responseForAccount.status()).not.toBe(400)  

  const responseForClothing = await request.get('https://pocketaces2.github.io/fashionhub/products.html')
  
  expect(responseForClothing.status()).toBe(200 || 300)
  expect(responseForClothing.status()).not.toBe(400) 

  const responseForShoppingBag = await request.get('https://pocketaces2.github.io/fashionhub/cart.html')
  
  expect(responseForShoppingBag.status()).toBe(200 || 300)
  expect(responseForShoppingBag.status()).not.toBe(400) 

  const responseForAbout = await request.get('https://pocketaces2.github.io/fashionhub/about.html')
  
  expect(responseForAbout.status()).toBe(200 || 300)
  expect(responseForAbout.status()).not.toBe(400) 
});