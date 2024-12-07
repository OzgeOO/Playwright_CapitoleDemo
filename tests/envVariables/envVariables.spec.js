import { test, expect } from '@playwright/test';

test('Handle Multiple Environments', async ({ page }) => {
  
  const urlVal = process.env.URL
  await page.goto(urlVal)
  console.log(urlVal)
  
  });