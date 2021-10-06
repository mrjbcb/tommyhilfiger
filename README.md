# Tommy Hilfiger's End2End Tests

In this repository can be found the end-2-end tests for the [Tommy Hilfiger](https://nl.tommy.com/) site.

## Getting Started

### Overview WedbriverIO for FE Apps

[webdriverIO](https://webdriver.io/) allows to automate any application written with modern web frameworks such as React, Angular, Polymer or Vue.js as well as native mobile applications for Android and iOS.

### Overview mocha for E2E API tests
[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

### Project Setup

- Before installing, [download and install Node.js](https://nodejs.org/en/download/). Note that only releases that are or will become an LTS release are officially supported by webdriverIO. However for this setup the version of node that should be install is v14.17.1.

Installation is done using the command:

```bash
npm install
```

- After installing all the required dependencies is also required to define the environment variables for both frameworks. To do that please follow the steps below:

    1. Create a file named `.env` based on `.env.example`
    2. Set `LAUNCH_URL` on .env file

### Run tests in webdriverio

Following command will run all the tests:

```bash
npm run test
```

#### Prerequisite

Have chrome browser installed.

// TODO: Docker!????
