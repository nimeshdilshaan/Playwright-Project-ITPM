# Swift Translator – Automated Testing Project

**Student ID:** IT23813502  
**Student Name:** Dilshan A P N  
**Project Title:** Singlish to Sinhala Translator Testing
**Testing Framework:** Playwright  
**Test Type:** Automation Testing  

---

## Project Overview

This project focuses on **automated UI testing** for the **Swift Translator** web application, which converts **Singlish input into Sinhala output**.

The automation suite is developed using **Playwright** with the **Page Object Model (POM)** architecture to ensure high maintainability, scalability and readability.  
Tests are data-driven and validate **real-time translation behavior**, **UI responsiveness** and **input validation** across multiple scenarios.

---

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

### Install Dependencies
```bash
npm install
```
```bash
Install Playwright Browsers
```
### Run Tests
```bash
npx playwright test
```
## Run a specific test file
```bash
npx playwright test tests/singlishTranslator.spec.js
```
## Run tests with browser UI
```bash
npx playwright test --headed
```
## Run a specific test case
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