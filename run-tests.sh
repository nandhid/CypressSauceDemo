#!/bin/bash

echo "🧹 Cleaning previous reports..."
rm -rf mochawesome-report allure-report allure-results cypress/reports/mochawesome

echo "🚀 Running Cypress tests..."
npx cypress run --spec "cypress/e2e/saucedemo/*.cy.js"

echo "📊 Generating Mochawesome report..."
npx mochawesome-merge cypress/reports/mochawesome/*.json | npx mochawesome-report-generator --reportDir mochawesome-report

echo "📈 Generating Allure report..."
allure generate allure-results --clean -o allure-report

echo "✅ Reports ready in:"
echo "➡️  mochawesome-report/mochawesome.html"
echo "➡️  allure-report/index.html"
