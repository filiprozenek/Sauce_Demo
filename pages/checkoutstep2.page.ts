import { Page } from "@playwright/test";
import { Header } from "../components/header.component";
import { BurgerMenu } from "../components/burger-menu.component";
import { Footer } from "../components/footer.component";
import { SigninForm } from "../components/signin-form.component";

export class CheckoutStep2 {
    constructor(private page: Page) {}

    header = new Header(this.page);
    burgerMenu = new BurgerMenu(this.page);

    footer = new Footer(this.page);

    signinForm = new SigninForm(this.page);
}