# Tommy Hilfiger's End2End Tests

In this repository can be found the end-2-end tests for the [Tommy Hilfiger's](https://nl.tommy.com/) site.

## Getting Started

### Overview WedbriverIO for FE Apps

[webdriverIO](https://webdriver.io/) allows to automate any application written with modern web frameworks such as React, Angular, Polymer or Vue.js as well as native mobile applications for Android and iOS.

### Overview mocha for E2E API tests
[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

### Project Setup
First you should clone the project

```bash
git clone git@github.com:mrjbcb/tommyhilfiger.git
```

Then all the following commands should be run on the project's root.

#### Prerequisites

- Have chrome browser v94 and [Node v14.18.0](https://nodejs.org/en/download/).

Dependencies are installed by running the following command:

```bash
npm install
```

### Run tests in webdriverio

Following command will run all the tests:

```bash
npm run test
```

### Run eslint

```bash
npm run eslint
```
#### Run eslint and fix

```bash
npm run esfix
```
