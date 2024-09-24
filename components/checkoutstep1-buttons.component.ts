import { Page } from "@playwright/test";

export class CheckoutStep1Buttons {
    constructor(private page: Page) {}

    checkoutStep1Buttons = this.page.locator('.checkout_buttons');

    checkoutStep1ButtonsCancel = this.page.getByRole('button', { name: 'cancel' });
    checkoutStep1ButtonsContinue = this.page.getByRole('button', { name: 'continue' });
}