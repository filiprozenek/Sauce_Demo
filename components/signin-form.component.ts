import { Page } from "@playwright/test";

export class SigninForm {
    constructor(private page: Page) {}

    signinForm = this.page.locator('[data-test="login-container"] div');

    signinFormUserNameInput = this.page.locator('[data-test="username"]');
    signinFormPasswordInput = this.page.locator('[data-test="password"]');
    signinFormSubmitButton = this.page.locator('[data-test="login-button"]');

    signinFormUserNameInputErrorX = this.page.locator('svg').first();
    signinFormPasswordInputErrorX = this.page.locator('svg').nth(1);
    signinFormErrorMsg = this.page.locator('[data-test="error"]');
}