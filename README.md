# 🧪 Cypress Test Automation Suite for SauceDemo

This repository contains a complete end-to-end test suite using Cypress (JavaScript) for automating key user flows on [https://www.saucedemo.com](https://www.saucedemo.com), a sample e-commerce website used for testing.

---

## 🚀 Features

- Cypress + JavaScript based test framework
- Page Object Model (POM) for scalable test design
- Covers full e-commerce flow:
  - Login
  - Product listing & sorting
  - Add to cart
  - Checkout
  - Logout
- CI/CD integration via GitHub Actions
- Modular custom commands for reusability

---

## 📁 Project Structure
cypress/
├── e2e/
│ └── saucedemo/
│ ├── login.cy.js
│ ├── product.cy.js
│ ├── cart.cy.js
│ ├── checkout.cy.js
│ └── logout.cy.js
├── pageObjects/
│ ├── LoginPage.js
│ ├── InventoryPage.js
│ ├── CartPage.js
│ ├── CheckoutPage.js
│ └── MenuPage.js
└── support/
├── commands.js
└── e2e.js
