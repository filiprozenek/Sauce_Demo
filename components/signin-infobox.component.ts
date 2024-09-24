import { Page } from "@playwright/test";

export class SigninInfoBox {
    constructor(private page: Page) {}

    signinInfoBoxUserNameTitle = this.page.getByRole('heading', { name: 'Accepted usernames are:' });
}