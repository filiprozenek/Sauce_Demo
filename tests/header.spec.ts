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
test.describe('*Header*', () => {
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
  const headerLogoText = 'Swag Labs';
  const headerBurgerMenuIconIMGExpectedAlt = 'Open Menu';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("domcontentloaded");
    signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test('*Header* is contained on the *Sign-in* Page',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.signinHeaderContainer).toBeAttached();
  });

  test('*Header* is contained on the POP',
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
    await expect(POP.header.headerContainer).toBeAttached();
  });

  test('*Header* is contained on any PDP',
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
    await expect(PDP.header.headerContainer).toBeAttached();
  });

  test('*Header* is contained in the *Cart*',
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
    await expect(cart.header.headerContainer).toBeAttached();
  });

  test('*Header* is contained in the *Checkout Step-1*',
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
    await expect(checkoutStep1.header.headerContainer).toBeAttached();
  });

  test('*Header* is contained in the *Checkout Step-2*',
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
    await expect(checkoutStep2.header.headerContainer).toBeAttached();
  });

  test('*Header* is contained on the *Success* Page',
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
    await expect(successPage.header.headerContainer).toBeAttached();
  });

  test('*Header* is contained on the *404* Page',
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
    await expect(fourOFourPage.header.headerContainer).toBeAttached();
  });

  test('(regular) *Header* contains proper elements',
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
    await expect(POP.header.headerBurgerMenuIcon).toBeAttached();
    await expect(POP.header.headerLogo).toBeAttached();
    await expect(POP.header.headerCartIcon).toBeAttached();
  });

  test('*Header* on the *Sign-in* Page differs from the regular *Header*',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.headerBurgerMenuIcon).not.toBeAttached();
    await expect(signinPage.header.headerLogo).toBeAttached();
    await expect(signinPage.header.headerCartIcon).not.toBeAttached();
  });

  test('*Header* Logo has proper value',
    {tag: ["@guest", "@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Guest
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.headerLogo).toHaveText(headerLogoText);
    // ↓ Signed-in
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerLogo).toHaveText(headerLogoText);
  });

  test('*Title* is available & n/a for proper elements',
    {tag: ["@guest", "@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Guest
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.headerLogo).not.toHaveAttribute('title');
    // ↓ Signed-in
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerBurgerMenuIcon).not.toHaveAttribute('title');
    await expect(POP.header.headerLogo).not.toHaveAttribute('title');
    await expect(POP.header.headerCartIcon).not.toHaveAttribute('title');
  });

  test('*Alt* is available & n/a for proper elements',
    {tag: ["@guest", "@signed-in"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Guest
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.headerLogo).not.toHaveAttribute('alt');
    // ↓ Signed-in
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerBurgerMenuIconIMG).toHaveAttribute('alt');
    await expect(POP.header.headerLogo).not.toHaveAttribute('alt');
    await expect(POP.header.headerCartIcon).not.toHaveAttribute('alt');
  });

  test('*Alt* elements have proper values',
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
    await expect(POP.header.headerBurgerMenuIconIMG).toHaveAttribute('alt', headerBurgerMenuIconIMGExpectedAlt);
  });

  test('*Burger-Menu* Icon is working properly',
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
    await expect(POP.burgerMenu.burgerMenuModal).not.toBeInViewport();
    await POP.header.headerBurgerMenuIcon.click();
    // ↓ Assert
    await expect(POP.burgerMenu.burgerMenuModal).toBeInViewport();
  });

  test('*Cart* Icon is working properly',
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
    await POP.header.headerCartIcon.click();
    // ↓ Assert
    await expect(page).toHaveURL(cartURL);
  });

  test('*Cart* Icon does not contain the *Qty* Badge if my *Cart* is empty',
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
    await expect(POP.header.headerCartQtyBadge).not.toBeAttached();
  });

  test('*Cart* Icon gets the *Qty* Badge if I added anything to the *Cart*',
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
    await expect(POP.header.headerCartQtyBadge).not.toBeAttached();
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).toBeAttached();
  });

  test('*Qty* Badge Counter increases properly',
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
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    await expect(POP.header.headerCartQtyBadge).toHaveText('1');
    await POP.popGrid.POPGrid2ndProductAdd2CartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).toHaveText('2');
  });

  test('*Qty* Badge Counter decreases properly',
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
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    await POP.popGrid.POPGrid2ndProductAdd2CartButton.click();
    await expect(POP.header.headerCartQtyBadge).toHaveText('2');
    await POP.popGrid.POPGrid2ndProductRemoveFromCartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).toHaveText('1');
  });

  test('*Cart* Icon loses the *Qty* Badge if I removed all the Product from the *Cart*',
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
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    await expect(POP.header.headerCartQtyBadge).toBeAttached();
    await POP.popGrid.POPGrid1stProductRemoveFromCartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).not.toBeAttached();
  });
});