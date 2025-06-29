import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Login, add product to cart by name, capture cart screenshot, and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  const productName = 'Sauce Labs Bolt T-Shirt';

  await loginPage.goto();
  await loginPage.login();

  await inventoryPage.addProductToCart(productName);
  await inventoryPage.goToCart();

  await cartPage.verifyProductInCart(productName);
  await cartPage.takeScreenshot('cart-screenshot.png');
  await cartPage.logout();

  await expect(page).toHaveURL('/');
});
