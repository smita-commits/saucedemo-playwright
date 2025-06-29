import { Page } from '@playwright/test';

export class LoginPage {
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login() {
    await this.page.fill(this.usernameInput, process.env.USERNAME!);
    await this.page.fill(this.passwordInput, process.env.PASSWORD!);
    await this.page.click(this.loginButton);
  }
}  
