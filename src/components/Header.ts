import { Page, Locator } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly logo: Locator;
  readonly navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByTestId('logo');
    this.navigation = page.getByRole('navigation');
  }

  async clickNavItem(name: string): Promise<void> {
    await this.navigation.getByRole('link', { name }).click();
  }
}
