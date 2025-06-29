// playwright.config.ts
import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
