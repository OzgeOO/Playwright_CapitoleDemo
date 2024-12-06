import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://github.com/appwrite/appwrite/pulls')

    const pullReqNameList = await page.$$("//div[contains(@id, 'issue_')]/div/div[2]/a");
    const pullReqDateList = await page.$$("//div[contains(@id, 'issue_')]/div/div[2]/div/span/relative-time");
    const pullReqAuthorList = await page.$$("//div[contains(@id, 'issue_')]/div/div[2]/div/span/a");
    const nextButton = await page.locator(".pagination span");
    
    let hasNext = true
    let pageCount = 1

    while(hasNext){
      const items = await page.locator("//div[contains(@id, 'issue_')]/div/div[2]/a").allTextContents
      console.log('Page items', items)
      expect(items.length).toBeGreaterThan(0)

      for(const pullReq of pullReqNameList)

        {
            const pullReqName = await pullReq.textContent();
            console.log(pullReqName);
        }
    
    
        for(const pullReq of pullReqDateList)
    
          {
              const pullReqDate = await pullReq.textContent();
              console.log(pullReqDate);
          }
        
        for(const pullReq of pullReqAuthorList)
    
          {
              const pullReqAuthor = await pullReq.textContent();
              console.log(pullReqAuthor);
          }
    
      pageCount++;

      if(await nextButton.isVisible()) {
        if(await nextButton.isEnabled()) {
          await nextButton.click()
        }
      }
    }

});