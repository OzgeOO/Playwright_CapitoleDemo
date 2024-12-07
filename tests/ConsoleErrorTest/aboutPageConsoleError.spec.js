import { test, expect, errors } from '@playwright/test';
import { AboutPage } from '../../pages/about';

test('Verify Console Error', async ({ page }) => {
  
  const About = new AboutPage()
  About.verifyConsoleError()

});