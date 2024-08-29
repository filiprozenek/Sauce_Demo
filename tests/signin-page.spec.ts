import { test, expect } from '@playwright/test';
import { SigninPage } from '../pages/signin.page';
import { signinData } from '../test-data/signin.data';

// ↓ TEST Group
test.describe('*Sign-in* Page', () => {
  // TestCases Section URL → https://...
  // ↓ Arrange Global
  let signinPage: SigninPage;
  const userNameProper1 = signinData.userNameProper1;
  const userPasswordProper = signinData.userPasswordProper;
  const anyPageURL = '/test.html';
  const expectedPOPURL = 'https://www.saucedemo.com/inventory.html/';
  const expectedsigninPageURL = 'https://www.saucedemo.com/';
  const expectedsigninPageTitle = 'Swag Labs';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("domcontentloaded");
    signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test('*Sign-in* Page is accessible',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await page.goto(anyPageURL);
    await page.goto('/');
    await page.waitForLoadState("domcontentloaded");
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toBeAttached();
  });

  test('*Sign-in* Page is not accessible', 
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    await page.goto('/');
    await page.waitForLoadState("domcontentloaded");
    // ↓ Assert
    await expect(page).toHaveURL(expectedPOPURL);
  });

  test('URL is proper',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(page).toHaveURL(expectedsigninPageURL);
  });

  test('Page Title is proper',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(page).toHaveTitle(expectedsigninPageTitle);
  });
});