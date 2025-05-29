#!/bin/bash

echo "🧹 Cleaning previous reports..."
rm -rf mochawesome-report allure-report allure-results cypress/reports/mochawesome mochawesome.json

echo "🚀 Running Cypress tests..."
npx cypress run --spec "cypress/e2e/saucedemo/*.cy.js"

echo "📊 Generating Mochawesome report..."
# Step 1: Merge JSON files to a single file
npx mochawesome-merge cypress/reports/mochawesome/*.json > mochawesome.json

# Step 2: Generate HTML report from merged file
npx mochawesome-report-generator mochawesome.json --reportDir mochawesome-report --reportFilename mochawesome

echo "📈 Generating Allure report..."
npx allure generate allure-results --clean -o allure-report

echo "✅ Reports ready in:"
echo "➡️  mochawesome-report/mochawesome.html"
echo "➡️  allure-report/index.html"
