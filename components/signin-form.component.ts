import { Page } from "@playwright/test";

export class SigninForm {
    constructor(private page: Page) {}

    signinFormContainer = this.page.locator('.login_wrapper-inner');

    signinFormUserNameInput = this.page.locator('#user-name');
    signinFormPasswordInput = this.page.locator('#password');
    signinFormSubmitButton = this.page.locator('#login-button');

    signinFormUserNameInputErrorX = this.page.locator('svg').first();
    signinFormPasswordInputErrorX = this.page.locator('svg').nth(1);
    signinFormErrorMsg = this.page.locator('[data-test="error"]');
    signinFormErrorMsgX = this.page.locator('[data-test="error-button"]');
}