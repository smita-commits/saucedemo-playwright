import { Page } from '@playwright/test';

export class InventoryPage {
  private inventoryItem = '.inventory_item';
  private itemName = '.inventory_item_name';
  private addToCartButton = 'button:has-text("Add to cart")';
  private cartIcon = '.shopping_cart_link';

  constructor(private page: Page) {}

  async addProductToCart(productName: string) {
    const product = this.page.locator(this.inventoryItem).filter({
      has: this.page.locator(this.itemName).filter({ hasText: productName }),
    });

    await product.locator(this.addToCartButton).click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
