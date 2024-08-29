import { Page } from "@playwright/test";
import { Header } from "../components/header.component";
import { BurgerMenu } from "../components/burger-menu.component";
import { POPGrid } from "../components/pop-grid.component";
import { Footer } from "../components/footer.component";

export class POPage {
    constructor(private page: Page) {}

    header = new Header(this.page);
    burgerMenu = new BurgerMenu(this.page);

    popGrid = new POPGrid(this.page);

    footer = new Footer(this.page);
}