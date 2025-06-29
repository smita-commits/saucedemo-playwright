import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Login, add product to cart by name, capture cart screenshot, and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  const productName = 'Sauce Labs Bolt T-Shirt';
  //Go to the login page and login with valid credentials
  await loginPage.goto();
  await loginPage.login();

  // Assert navigation to inventory.html
  await expect(page).toHaveURL(/.*inventory\.html/);

  //Add product by name
  await inventoryPage.addProductToCart(productName);

  //Go to cart
  await inventoryPage.goToCart();

  //Verify Product in cart
  await cartPage.verifyProductInCart(productName);

  //Take screenshot of the cart page
  await cartPage.takeScreenshot('cart-screenshot.png');

  //Logout from menu
  await cartPage.logout();

  //Confirm logout
  await expect(page).toHaveURL('/');
});
