# SauceDemo Playwright Test Suite

This repository contains end-to-end UI tests for [saucedemo.com](https://www.saucedemo.com), built using [Playwright](https://playwright.dev) with TypeScript.

## Features

- Login using credentials from `.env`
- Add a specific product to cart by product name
- Capture screenshot of cart page
- Logout through menu
- Page Object Model (POM) structure
- Environment variable support via `.env`

## Folder Structure
saucedemo-playwright/
├── pages/ # Page object classes (LoginPage, InventoryPage, CartPage)
├── tests/ # Test specs (e.g., cart-flow.spec.ts)
├── .env # Stores BASE_URL, USERNAME, PASSWORD
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json


## Setup Instructions

```bash
npm install

## Run Tests
npx playwright test

