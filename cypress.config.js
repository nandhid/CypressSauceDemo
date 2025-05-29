// Import Cypress config utility
const { defineConfig } = require("cypress");

// Import the Allure plugin writer to enable Allure reporting
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    // ✅ Register Cypress plugins and reporters
    setupNodeEvents(on, config) {
      // Register the Allure plugin to capture test metadata/results
      allureWriter(on, config);
      return config;
    },

    // ✅ Base URL for visiting in tests
    // This allows you to use `cy.visit('/')` instead of full URL
    baseUrl: 'https://www.saucedemo.com',

    // ✅ Pattern for Cypress to discover test files
    specPattern: 'cypress/e2e/**/*.cy.js',

    // ✅ Support file path: used for custom commands and hooks
    supportFile: 'cypress/support/e2e.js'
  },

  env: {
  allure: true
},

  // ✅ Primary test reporter
  reporter: 'mochawesome',

  // ✅ Reporter configuration
  reporterOptions: {
    // Directory to output JSON reports from Mochawesome
    reportDir: 'cypress/reports/mochawesome',

    // Prevent overwriting previous reports
    overwrite: false,

    // Don't auto-generate HTML (you’ll use report scripts separately)
    html: false,

    // Generate raw JSON output (used for merging and HTML generation later)
    json: true
  }
});
