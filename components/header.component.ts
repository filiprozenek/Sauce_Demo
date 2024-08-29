import { Page } from "@playwright/test";

export class Header {
    constructor(private page: Page) {}

    signinHeaderContainer = this.page.locator('.login_logo');
    headerContainer = this.page.locator('.primary_header');

    headerBurgerMenuIcon = this.page.getByRole('button', { name: 'Open Menu' });
    headerBurgerMenuIconIMG = this.page.locator('//*[@id="menu_button_container"]/div[1]/div[1]/div[1]/img');
    headerLogo = this.page.getByText('Swag Labs');
    headerCartIcon = this.page.locator('id=shopping_cart_container');

    headerCartQtyBadge = this.page.locator('.shopping_cart_badge');
}