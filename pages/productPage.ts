import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async openProduct(productName: string) {
    await this.page.getByText(productName, { exact: true }).click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}