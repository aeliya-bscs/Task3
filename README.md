Task 3 (Playwright Test Automation Assignment)
Purpose: This document provides step-by-step instructions for setting up the environment, installing dependencies, and executing the Playwright automated test suite associated with the Task 3 assignment.

Step 1: Clone the Repository
Step 2: Install Project Dependencies by using command;

npm install

Note: If this is the first time running Playwright on your system, it may also be necessary to install the required browser binaries:
npx playwright install

Step 3: Run the Test Suite

Execute the full Playwright test suite using the following command:

npx playwright test tests/testscript.spec.ts --headed

This will run all configured test cases and generate the corresponding results.

Step 4: Generate and View the Test Report

Upon completion of the test run, view the results via the Playwright HTML report by executing:

npx playwright show-report
 
