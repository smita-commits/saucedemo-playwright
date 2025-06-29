import { Page, expect } from '@playwright/test';
import path from 'path';

export class CartPage {
  private itemName = '.inventory_item_name';
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  constructor(private page: Page) {}

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator(this.itemName)).toHaveText(productName);
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({ path: path.join('screenshots', fileName), fullPage: true });
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.waitForSelector(this.logoutLink, { state: 'visible' });
    await this.page.click(this.logoutLink);
  }
}
