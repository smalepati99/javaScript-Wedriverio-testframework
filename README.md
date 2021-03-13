* `Author: Srikanth Malepati` 

This test automation framework is developed for executing automation tests using WebdriverIO, Mocha & JavaScript implementing Page Object Model, WebDriverIO is a custom implementation of Selenium's WebDriver API, provides easy to manage API and a lot of syntactical sugar on top of the WebDriver specification. WebdriverIO can be used as a standalone package or via a testrunner using @wdio/cli. WebdriverIO allows to run tests locally using the WebDriver or Chrome DevTools protocol.

`##Framework structure:`
========================

This framework based on WebdriverIO & Mocha

    ├──javaScript-Wedriverio-testframework
            ├                  
            ├── allure-report                                   // folder contains Allure test execution reports     
            ├── allure-results                                  // folder contains Allure test execution results          
            ├── test
            │       ├── lib                                     // folder includes common funcions/ultilities that can used in all project
            │               ├── deviceDimensions.js
            │               ├── timeouts.js
            │       ├── pageobjects                      
            │               ├── pages
            │               │       ├── login.js                // file contains all page objects for using automate login page
            │               │       ├── inventory.js            // file contains all page objects for using automate inventory page
            │               │       ├── itemDetail.js           // file contains all page objects for using automate item details page
            │               │       ├── cart.js                 // file contains all page objects for using automate cart page
            │               │       ├── checkoutStepOne.js      // file contains all page objects for using automate checkoutStepOne details page
            │               │       └── checkoutStepTwo.js      // file contains all page objects for using automate checkoutStepTwo details page
            │               ├── shared                      
            │                       ├── navigation.js
            │               ├── app.js                          // file contains all page objects for using automate login page
            │               ├── base.js                         // file contains common funcions/ultilities that can used in all project
            │       ├── pageobjects                      
            │               ├── specs/pages                      // folder contains all the automated tests
            │               │        ├── login.js                // file contains all the automated tests for the login page
            │               │        ├── inventory.js            // file contains all the automated tests for the inventory page
            │               │        ├── itemDetail.js           // file contains all the automated tests for the item details page
            │               │        ├── cart.js                 // file contains all the automated tests for the cart page
            │               │        ├── checkoutStepOne.js      // file contains all the automated tests for the checkoutStepOne details page
            │               │        └── checkoutStepTwo.js      // file contains all the automated tests for the checkoutStepTwo details page
            │── babel.config.js                                  // Babel config file 
            │── Dockerfile                                       // Dockerfile with all the commands that can be called on the command line to assemble an image
            │── docker-compose.yaml                              // docker-compose
            │── jenkins_allure_permission_commands               // support for Allure in Jenkins
            │── Jenkinsfile                                      // Jenkinsfile that stores the entire workflow as code and can be checked into a SCM on the local machine
            │── jsconfig.json                                    // jsconfig. json file in a directory indicates that the directory is the root of a JavaScript Project
            │── package.json                                     // file to manage all dependencies to using in this project
            │── settings.json                                    // VS Code settings stored in a JSON file 

`##Tech Stack used to develop this test automation framework:`
==============================================================

* `WebdriverIO` 
* `Chromedriver` for local development
* `Selenium Standalone` server for CI usage
* `Mocha` as test runner
* `Allure Dashboard` integration for raporting
* `chromedriver` for local development
* `JavaScript`
* `POM - Page Object Model pattern`
* `nodejs`
* `npm`
* `Junit Reports`
* `Docker` - fully dockerized and communicates with also dockerized `selenium-standalone`
* `Jenkins` - Jenkins pipeline for running automation tests
* `VSCode` (Visual Studio Code)


`##Installation`
================

npm install
selenium-standalone install
If you get a command not found error on the selenium install, you might need to install it globally npm install -g selenium-standalone

`##Run Tests`
=============
Run the selenium server selenium-standalone start (runs on port 4444) and then run npm test in a new terminal.
note: npm test, runs all test within the test directory.
To kill/stop all selenium instances use: npm run kill-selenium.

command to run the tests:   `npm run test` 
use npm run help to see webdriverio's testrunner commands.


`##Allure Reports:`
==================
Go to the terminal and run the following commands:
npm install -g allure-commandline --save-dev
`npm run test` 
allure generate && allure open  
