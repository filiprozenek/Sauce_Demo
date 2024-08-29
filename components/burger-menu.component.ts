import { Page } from "@playwright/test";

export class BurgerMenu {
    constructor(private page: Page) {}

    burgerMenuModal = this.page.locator('.bm-menu-wrap');

    burgerMenuXIcon = this.page.locator('#react-burger-cross-btn');
}