import { Page } from "@playwright/test";
import { Header } from "../components/header.component";
import { CheckoutStep1InfoBox } from "../components/checkoutstep1-infobox.component";
import { CheckoutStep1Buttons } from "../components/checkoutstep1-buttons.component";
import { BurgerMenu } from "../components/burger-menu.component";
import { Footer } from "../components/footer.component";

export class CheckoutStep1 {
    constructor(private page: Page) {}

    header = new Header(this.page);

    checkoutStep1InfoBox = new CheckoutStep1InfoBox(this.page);
    async fillCheckoutStep1InfoBox(
        firstName: string, 
        lastName: string,
        ZIP: string
        ): Promise<void> {
        await this.checkoutStep1InfoBox.checkoutStep1InfoBox1stNameInput.fill(firstName);
        await this.checkoutStep1InfoBox.checkoutStep1InfoBoxLastNameInput.fill(lastName);
        await this.checkoutStep1InfoBox.checkoutStep1InfoBoxZIPInput.fill(ZIP);
    }

    checkoutStep1Buttons = new CheckoutStep1Buttons(this.page);

    burgerMenu = new BurgerMenu(this.page);

    footer = new Footer(this.page);
}