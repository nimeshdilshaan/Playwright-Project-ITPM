# Swift Translator – Automated Testing Project

**Student ID:** IT23813502  
**Student Name:** Dilshan A P N  
**Project Title:** Singlish to Sinhala Translator Testing
**Testing Framework:** Playwright  
**Test Type:** Automation Testing  

---

## Project Overview

This project contains automated tests for the SwiftTranslator web application (https://swifttranslator.com), which converts Singlish text to Sinhala.


This test suite automates the testing of SwiftTranslator's core functionality. Instead of manually typing test cases and checking outputs, these automated tests can run through 35 different scenarios in minutes.

The tests check:
- Whether translations are accurate
- How the system handles different sentence types
- Edge cases like typos, extra spaces, and special characters
- UI behavior and real-time updates

---

## Test Coverage

**Functional Tests (33 cases)**
- 24 positive scenarios - things that should work correctly
- 10 negative scenarios - testing error handling and edge cases

**UI Tests (2 cases)**
- Real-time output updates


## Project Objectives

- Verify Singlish to Sinhala translation accuracy  
- Validate real-time translation updates while typing  
- Ensure UI stability for different input lengths  
- Detect incorrect handling of invalid inputs  
- Generate professional HTML test reports  

---

## Technologies Used

- **Playwright (JavaScript)**
- **Node.js**
- **Chromium Browser**
- **JSON** 
- **HTML Test Reports**

---
##  Quick Start Guide

Check if it's installed:
```bash
node -v
npm -v
```

## Installation
1. Clone this repository
```bash
git https://github.com/nimeshdilshaan/Playwright-Project-ITPM.git
cd Playwright-project
```

2. Install Dependencies
```bash
npm install
```
```bash
Install Playwright Browsers
```
## Run Tests
```bash
npx playwright test
```
### Run a specific test file
```bash
npx playwright test tests/singlishTranslator.spec.js
```
### Run tests with browser UI
```bash
npx playwright test --headed
```
### Run a specific test case
```bash
npx playwright test -g "Pos_Fun_0001"
```
### 📁 View Test Reports
```bash
npx playwright show-report
```
### 📁 Report Location:
reports/html-report/


### 📁 Project Structure
```
playwright-project/
│
├── tests/
│ └── singlishTranslator.spec.js         # Main test suite
│
├── pages/
│ └── TranslatorPage.js                  # Page Object Model class
│
├── test-data/
│ └── singlishTestData.json              # 34+ data-driven test cases
│
├── reports/
│ └── html-report/                       # Playwright HTML test reports
│
├── playwright.config.js                 # Playwright configuration
│
├── package.json                         # Project dependencies
│
└── README.md                            # Project documentation

```
## How It Works

All test cases are stored in `test-data/cases.js`. Each test case has:
- A unique ID (like Pos_Fun_0004)
- Input text in Singlish
- Expected output in Sinhala
- Test description

The main test file (`translator.spec.js`) loops through these cases, enters the input, waits for the output, and compares it with the expected result.

## Notes

- Need an internet connection to run these tests
- Tests use Chromium browser for consistency
- Don't close the browser manually while tests are running
- Some outputs might vary slightly due to how the translation system works

## Technologies Used

- **Playwright** - Browser automation framework
- **Node.js** - JavaScript runtime
- **Chromium** - Testing browser
- **JavaScript** - Programming language