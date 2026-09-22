import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly removeButtons: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.removeButtons = page.locator('[data-test^="remove-"]');
    this.continueShoppingButton =
      page.locator('[data-test="continue-shopping"]');
    this.checkoutButton =
      page.locator('[data-test="checkout"]');
  }

  async getProductNames() {
    return await this.page
      .locator('.cart_item .inventory_item_name')
      .allTextContents();
  }
}