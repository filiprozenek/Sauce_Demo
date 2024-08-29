import { test, expect } from '@playwright/test';
import { SigninPage } from '../pages/signin.page';
import { signinData } from '../test-data/signin.data';
import { POPage } from '../pages/pop.page';
import { PDPage } from '../pages/pdp.page';
import { Cart } from '../pages/cart.page';
import { CheckoutStep1 } from '../pages/checkoutstep1.page';
import { orderData } from '../test-data/order.data';
import { CheckoutStep2 } from '../pages/checkoutstep2.page';
import { SuccessPage } from '../pages/success.page';
import { FourOFour } from '../pages/404.page';

// ↓ TEST Group
test.describe('*Footer*', () => {
  // TestCases Section URL → https://...
  // ↓ Arrange Global
  let signinPage: SigninPage;
  const userNameProper1 = signinData.userNameProper1;
  const userPasswordProper = signinData.userPasswordProper;
  let POP: POPage;
  const anyPDPURL = '/inventory-item.html?id=4';
  let PDP: PDPage;
  const cartURL = '/cart.html';
  let cart: Cart;
  const checkoutStep1URL = '/checkout-step-one.html';
  let checkoutStep1: CheckoutStep1;
  const ship1Name = orderData.ship1Name;
  const shipLastName = orderData.shipLastName;
  const shipZIP = orderData.shipZIP;
  const checkoutStep2URL = '/checkout-step-two.html';
  let checkoutStep2: CheckoutStep2;
  const successPageURL = '/checkout-complete.html';
  let successPage: SuccessPage;
  let fourOFourPage: FourOFour;
  const fourOFourPageURL = '/test.html';
  const twitterURL = 'https://x.com/saucelabs';
  const facebookURL = 'https://www.facebook.com/saucelabs';
  const linkedInURL = 'https://www.linkedin.com/company/sauce-labs/';
  const footerCopyrightInfoText = '© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy';
  const POPURL = 'https://www.saucedemo.com/inventory.html';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("domcontentloaded");
    signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test('*Footer* is not contained on the *Sign-in* Page',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.footer.footerContainer).not.toBeAttached();
  });

  test('*Footer* is contained on the POP',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerContainer).toBeAttached();
  });

  test('*Footer* is contained on any PDP',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await page.goto(anyPDPURL);
    await page.waitForLoadState("domcontentloaded");
    PDP = new PDPage(page);
    // ↓ Assert
    await expect(PDP.footer.footerContainer).toBeAttached();
  });

  test('*Footer* is contained in the *Cart*',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await page.goto(cartURL);
    await page.waitForLoadState("domcontentloaded");
    cart = new Cart(page);
    // ↓ Assert
    await expect(cart.footer.footerContainer).toBeAttached();
  });

  test('*Footer* is contained in the *Checkout Step-1*',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await page.goto(checkoutStep1URL);
    await page.waitForLoadState("domcontentloaded");
    checkoutStep1 = new CheckoutStep1(page);
    // ↓ Assert
    await expect(checkoutStep1.footer.footerContainer).toBeAttached();
  });

  test('*Footer* is contained in the *Checkout Step-2*',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await page.goto(checkoutStep1URL);
    await page.waitForLoadState("domcontentloaded");
    checkoutStep1 = new CheckoutStep1(page);
    await checkoutStep1.fillCheckoutStep1InfoBox(ship1Name, shipLastName, shipZIP);
    await page.goto(checkoutStep2URL);
    await page.waitForLoadState("domcontentloaded");
    checkoutStep2 = new CheckoutStep2(page);
    // ↓ Assert
    await expect(checkoutStep2.footer.footerContainer).toBeAttached();
  });

  test('*Footer* is contained on the *Success* Page',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await page.goto(checkoutStep1URL);
    await page.waitForLoadState("domcontentloaded");
    checkoutStep1 = new CheckoutStep1(page);
    await checkoutStep1.fillCheckoutStep1InfoBox(ship1Name, shipLastName, shipZIP);
    await page.goto(checkoutStep2URL);
    await page.waitForLoadState("domcontentloaded");
    checkoutStep2 = new CheckoutStep2(page);
    await page.goto(successPageURL);
    await page.waitForLoadState("domcontentloaded");
    successPage = new SuccessPage(page);
    // ↓ Assert
    await expect(successPage.footer.footerContainer).toBeAttached();
  });

  test('*Footer* is contained on the *404* Page',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await page.goto(fourOFourPageURL);
    await page.waitForLoadState("domcontentloaded");
    fourOFourPage = new FourOFour(page);
    // ↓ Assert
    await expect(fourOFourPage.footer.footerContainer).toBeAttached();
  });

  test('*Footer* contains proper elements',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerTwitterIcon).toBeAttached();
    await expect(POP.footer.footerFacebookIcon).toBeAttached();
    await expect(POP.footer.footerLinkedInIcon).toBeAttached();
    await expect(POP.footer.footerCopyrightInfo).toBeAttached();
  });

  test('*Title* is available & n/a for proper elements',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerTwitterIcon).not.toHaveAttribute('title');
    await expect(POP.footer.footerFacebookIcon).not.toHaveAttribute('title');
    await expect(POP.footer.footerLinkedInIcon).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightInfo).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightSign).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightYear).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightText).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightToSLink).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightSeparator).not.toHaveAttribute('title');
    await expect(POP.footer.footerCopyrightPPLink).not.toHaveAttribute('title');
  });

  test('*Alt* is available & n/a for proper elements',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerTwitterIcon).not.toHaveAttribute('alt');
    await expect(POP.footer.footerFacebookIcon).not.toHaveAttribute('alt');
    await expect(POP.footer.footerLinkedInIcon).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightInfo).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightSign).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightYear).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightText).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightToSLink).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightSeparator).not.toHaveAttribute('alt');
    await expect(POP.footer.footerCopyrightPPLink).not.toHaveAttribute('alt');
  });

  test('*Twitter* Icon is working properly',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    const [twitterPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('[data-test="social-twitter"]').click()
    ]) 
    await twitterPage.waitForLoadState();
    // ↓ Assert
    await expect(twitterPage).toHaveURL(twitterURL);
  });

  test('*Facebook* Icon is working properly',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    const [facebookPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('[data-test="social-facebook"]').click()
    ]) 
    await facebookPage.waitForLoadState();
    // ↓ Assert
    await expect(facebookPage).toHaveURL(facebookURL);
  });

  test('*LinekIn* Icon is working properly',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    const [linekInPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('[data-test="social-linkedin"]').click()
    ]) 
    await linekInPage.waitForLoadState();
    // ↓ Assert
    await expect(linekInPage).toHaveURL(linkedInURL);
  });

  test('*Copyright* Info has proper value',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerCopyrightInfo).toHaveText(footerCopyrightInfoText);
  });

  test('*Terms of Service* Link is working properly',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await POP.footer.footerCopyrightToSLink.click();
    await page.waitForLoadState("domcontentloaded");
    // ↓ Assert
    await expect(page).not.toHaveURL(POPURL);
  });

  test('*Privacy Policy* Link is working properly',
    {tag: ["@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    await POP.footer.footerCopyrightPPLink.click();
    await page.waitForLoadState("domcontentloaded");
    // ↓ Assert
    await expect(page).not.toHaveURL(POPURL);
  });
});