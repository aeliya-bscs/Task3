import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productPage';
import { ProductDetailsPage } from '../pages/productDetailPage';
import { CartPage } from '../pages/cartPage';

import { testData } from '../testData/testData';

test('User can add two products and view cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const productDetailsPage = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);

  //  Login
  await page.goto('https://www.saucedemo.com/');

  await loginPage.login(
    testData.username,
    testData.password
  );

  await expect(page).toHaveURL(/inventory.html/);

  //  Open first product
  await productsPage.openProduct(testData.products.first);

  await expect(
    page.getByText(testData.products.first, { exact: true })
  ).toBeVisible();

  //  Add first product
  await productDetailsPage.addToCart();

  // verify first product is in cart
  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');

  //  Go back to products
  await productDetailsPage.backToProducts();

  await expect(page).toHaveURL(/inventory.html/);

  //  Open second product
  await productsPage.openProduct(testData.products.second);

  await expect(
    page.getByText(testData.products.second, { exact: true })
  ).toBeVisible();

  //  Add second product
  await productDetailsPage.addToCart();

  //  verify two products are in cart
  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('2');

  //  Open cart
  await productsPage.openCart();

  await expect(page).toHaveURL(/cart.html/);

  //  Verify both products
  const products = await cartPage.getProductNames();

  expect(products).toContain(testData.products.first);
  expect(products).toContain(testData.products.second);

  // a. Verify Remove buttons for both products
  await expect(cartPage.removeButtons).toHaveCount(2);

  // b. Verify Continue Shopping
  await expect(cartPage.continueShoppingButton).toBeVisible();
  await expect(cartPage.continueShoppingButton).toBeEnabled();

  // c. Verify Checkout
  await expect(cartPage.checkoutButton).toBeVisible();
  await expect(cartPage.checkoutButton).toBeEnabled();
});