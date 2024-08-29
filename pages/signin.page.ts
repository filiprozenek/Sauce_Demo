import { Page } from "@playwright/test";
import { Header } from "../components/header.component";
import { SigninForm } from "../components/signin-form.component";
import { SigninInfoBox } from "../components/signin-infobox.component";
import { Footer } from "../components/footer.component";

export class SigninPage {
    constructor(private page: Page) {}

    header = new Header(this.page);

    signinForm = new SigninForm(this.page);
    async signin(
        userName: string, 
        userPassword: string
        ): Promise<void> {
        await this.signinForm.signinFormUserNameInput.fill(userName);
        await this.signinForm.signinFormPasswordInput.fill(userPassword);
        await this.signinForm.signinFormSubmitButton.click();
    }

    signinInfoBox = new SigninInfoBox(this.page);

    footer = new Footer(this.page);
}