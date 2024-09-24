import { Page } from "@playwright/test";

export class CheckoutStep1InfoBox {
    constructor(private page: Page) {}

    checkoutStep1InfoBox = this.page.locator('.checkout_info');

    checkoutStep1InfoBox1stNameInput = this.page.locator('[data-test="firstName"]');
    checkoutStep1InfoBoxLastNameInput = this.page.locator('[data-test="lastName"]');
    checkoutStep1InfoBoxZIPInput = this.page.locator('[data-test="postalCode"]');
}