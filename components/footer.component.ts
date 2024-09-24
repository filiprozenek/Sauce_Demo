import { Page } from "@playwright/test";

export class Footer {
    constructor(private page: Page) {}

    footerContainer = this.page.locator('.footer');

    footerTwitterIcon = this.page.locator('[data-test="social-twitter"]');
    footerFacebookIcon = this.page.locator('[data-test="social-facebook"]');
    footerLinkedInIcon = this.page.locator('[data-test="social-linkedin"]');

    footerCopyrightInfo = this.page.locator('.footer_copy');
    footerCopyrightSign = this.page.getByText('©');
    footerCopyrightYear = this.page.getByText('2024');
    footerCopyrightText = this.page.getByText('Sauce Labs. All Rights Reserved.');
    footerCopyrightToSLink = this.page.getByText('Terms of Service');
    footerCopyrightSeparator = this.page.getByText('|');
    footerCopyrightPPLink = this.page.getByText('Privacy Policy');
}