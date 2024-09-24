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
test.describe('*Sign-in* Form', () => {
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
  const signinFormUserNameInputPlaceholderText = 'Username';
  const signinFormPasswordInputPlaceholderText = 'Password';
  const signinFormSubmitButtonLabel = 'Login';
  const anyData = 'test';
  const expectedPOPURL = 'https://www.saucedemo.com/inventory.html';
  const signinFormErrorMsgText1 = '😥 Username is required';
  const signinFormErrorMsgText2 = '😥 Password is required';
  const signinFormErrorMsgText3 = '😥 Username and password do not match any user in this service';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("domcontentloaded");
    signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test('*Sign-in* Form is contained on the *Sign-in* Page ',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormContainer).toBeAttached();
  });

  test('*Sign-in* Form is not contained on the POP',
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
    await expect(POP.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form is not contained on any PDP',
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
    await expect(PDP.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form is not contained in the *Cart*',
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
    await expect(cart.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form is not contained in the *Checkout Step-1*',
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
    await expect(checkoutStep1.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form is not contained in the *Checkout Step-2*',
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
    await expect(checkoutStep2.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form is not contained on the *Success* Page',
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
    await expect(successPage.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form is not contained on the *404* Page',
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
    await expect(fourOFourPage.signinForm.signinFormContainer).not.toBeAttached();
  });

  test('*Sign-in* Form contains proper elements',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInput).toBeAttached();
    await expect(signinPage.signinForm.signinFormSubmitButton).toBeAttached();
  });

  test('*Sign-in* Form*s elements have proper values',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toHaveAttribute('placeholder', signinFormUserNameInputPlaceholderText);
    await expect(signinPage.signinForm.signinFormPasswordInput).toHaveAttribute('placeholder', signinFormPasswordInputPlaceholderText);
    await expect(signinPage.signinForm.signinFormSubmitButton).toHaveAttribute('value', signinFormSubmitButtonLabel);
  });

  test('*Title* is available & n/a for proper elements',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).not.toHaveAttribute('title');
    await expect(signinPage.signinForm.signinFormPasswordInput).not.toHaveAttribute('title');
    await expect(signinPage.signinForm.signinFormSubmitButton).not.toHaveAttribute('title');
  });

  test('*Alt* is available & n/a for proper elements',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).not.toHaveAttribute('alt');
    await expect(signinPage.signinForm.signinFormPasswordInput).not.toHaveAttribute('alt');
    await expect(signinPage.signinForm.signinFormSubmitButton).not.toHaveAttribute('alt');
  });

  test('*Username* Input is working properly',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormUserNameInput.fill(anyData);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toHaveAttribute('value', anyData);
  });

  test('*Password* Input is working properly',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormPasswordInput.fill(anyData);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormPasswordInput).toHaveAttribute('value', anyData);
  });

  test('*Submit* Button is working properly',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
  });

  test('*Sign-in* Form does not contain any Errors by default',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

  test('Submit the empty Form (failed result)',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormContainer).toBeAttached();
    await expect(page).not.toHaveURL(expectedPOPURL);
  });

  test('Errors appeared within the *Sign-in* Form if I tried to submit the empty Form',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test('*Error* Box contains proper value if I tried to submit the empty Form',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(signinFormErrorMsgText1);
  });

  test('*Title* is available & n/a for proper Errors if I tried to submit the empty Form',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toHaveAttribute('title');
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toHaveAttribute('title');
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toHaveAttribute('title');
    await expect(signinPage.signinForm.signinFormErrorMsgX).not.toHaveAttribute('title');
  });

  test('*Alt* is available & n/a for proper Errors if I tried to submit the empty Form',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toHaveAttribute('alt');
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toHaveAttribute('alt');
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toHaveAttribute('alt');
    await expect(signinPage.signinForm.signinFormErrorMsgX).not.toHaveAttribute('alt');
  });

  test('*Error* Icon from the *Error* Box is working properly',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    await signinPage.signinForm.signinFormSubmitButton.click();
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
    // ↓ Act
    await signinPage.signinForm.signinFormErrorMsgX.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

  test('Submit the incomplete Form with *Username* only (failed result)',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormUserNameInput.fill(anyData);
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormContainer).toBeAttached();
    await expect(page).not.toHaveURL(expectedPOPURL);
  });

  test('Errors appeared within the *Sign-in* Form if I tried to submit the incomplete Form with *Username* only',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signinForm.signinFormUserNameInput.fill(anyData);
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test('*Error* Box contains proper value if I tried to submit the incomplete Form with *Username* only',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormUserNameInput.fill(anyData);
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(signinFormErrorMsgText2);
  });

  test('Submit the incomplete Form with *Password* only (failed result)',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormPasswordInput.fill(anyData);
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormContainer).toBeAttached();
    await expect(page).not.toHaveURL(expectedPOPURL);
  });

  test('Errors appeared within the *Sign-in* Form if I tried to submit the incomplete Form with *Password* only',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signinForm.signinFormPasswordInput.fill(anyData);
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test('*Error* Box contains proper value if I tried to submit the incomplete Form with *Password* only',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormPasswordInput.fill(anyData);
    await signinPage.signinForm.signinFormSubmitButton.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(signinFormErrorMsgText1);
  });

  test('Submit the complete Form with wrong credentials (failed result)',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(anyData, anyData);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormContainer).toBeAttached();
    await expect(page).not.toHaveURL(expectedPOPURL);
  });

  test('Errors appeared within the *Sign-in* Form if I tried to submit the complete Form with wrong credentials',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(anyData, anyData);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test('*Error* Box contains proper value if I tried to submit the complete Form with wrong credentials',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(anyData, anyData);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(signinFormErrorMsgText3);
  });

  test('Submit the complete Form with proper credentials',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormContainer).not.toBeAttached();
    await expect(page).toHaveURL(expectedPOPURL);
  });

  test('No Errors appeared if I tried to submit the complete Form with proper credentials',
    {tag: ["@guest"],
      annotation: {
        type: '', 
        description: 'https://...'}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(userNameProper1, userPasswordProper);
    await page.waitForLoadState("domcontentloaded");
    POP = new POPage(page);
    // ↓ Assert
    await expect(POP.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(POP.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(POP.signinForm.signinFormErrorMsg).not.toBeAttached();
  });
});