Swift Translator - Automated Testing

Student ID: IT23813502
Name: Dilshan A P N
Project: Singlish to Sinhala Translator Testing

# 📋 Project Overview

Automated testing for Singlish to Sinhala translator using Playwright.

# Quick Start

1. Install Dependencies

bash
npm install
2. Install Playwright Browsers

bash
npx playwright install
3. Run Tests

bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test singlishTranslator.spec.js

# Run with browser visible
npx playwright test --headed

# Run specific test case
npx playwright test -g "Pos_Fun_0001"
4. View Reports

bash
npx playwright show-report
📁 Project Structure

tests/singlishTranslator.spec.js - Main test file
pages/TranslatorPage.js - Page Object Model class
test-data/singlishTestData.json - Test cases (34+ test cases)
playwright.config.js - Configuration
package.json - Dependencies
📊 Test Coverage

34 Test Cases including:

24 Positive cases (S/M/L length)
10 Negative cases (errors, edge cases)
Real-time translation testing
UI functionality testing

# How Tests Work

Opens the translator application
Loads test data from JSON file
For each test case:

Enters Singlish text
Waits for translation
Compares with expected Sinhala
Generates detailed HTML report

# 📝 Notes

Tests require internet connection
Uses Chromium browser by default
Screenshots saved for failed tests
HTML report in reports/html-report/

