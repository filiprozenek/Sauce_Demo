import { Page } from "@playwright/test";

export class POPGrid {
    constructor(private page: Page) {}

    // ↓ 1st Product: Sauce Labs Backpack
    POPGrid1stProductAdd2CartButton = this.page.locator('#add-to-cart-sauce-labs-backpack');
    POPGrid1stProductRemoveFromCartButton = this.page.locator('#remove-sauce-labs-backpack');

    // ↓ 2nd Product: Sauce Labs Bike Light
    POPGrid2ndProductAdd2CartButton = this.page.locator('#add-to-cart-sauce-labs-bike-light');
    POPGrid2ndProductRemoveFromCartButton = this.page.locator('#remove-sauce-labs-bike-light');
}