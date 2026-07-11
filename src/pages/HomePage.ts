import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  readonly header: Locator;

  readonly mainContent: Locator;


  constructor(page: Page) {
    super(page);

    this.header = page.getByTestId('header');

    this.mainContent = page.getByTestId('main-content');

  }

  async open(): Promise<void> {
    await this.goto('/');
    await this.waitForLoad();
  }
}
