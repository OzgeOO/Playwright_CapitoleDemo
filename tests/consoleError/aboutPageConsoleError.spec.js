import { test, expect, errors } from '@playwright/test';
import { AboutPage } from '../../pages/about';

test('test', async ({ page }) => {
  
  const About = new AboutPage()
  About.verifyConsoleError()

});