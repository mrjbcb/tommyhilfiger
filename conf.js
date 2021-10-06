require('dotenv').config({path: '.env'});

let config = {
    baseUrl: process.env.LAUNCH_URL,
    specs: [
        './tests/**/*.spec.js'
    ],
    runner: 'local',
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--window-size=1280,800',
            ]}
    }],
    beforeSession: function (config, caps, specs) {
        if (specs[0].includes('mobile')) {
            caps['goog:chromeOptions'].mobileEmulation = {deviceName: 'Pixel 2'};
        } else {
            caps['goog:chromeOptions'].mobileEmulation = {};
        }
    },
    before: async function (capabilities, specs, browser) {
        await browser.url('');
        await $('body[class]').waitForExist();
        await browser.setCookies([
            {name: 'PVH_COOKIES_GDPR', value: 'Accept'},
            {name: 'PVH_COOKIES_GDPR_ANALYTICS', value: 'Accept'},
            {name: 'PVH_COOKIES_GDPR_SOCIALMEDIA', value: 'Accept'},
            {name: 'newsletterSeen', value: 'true'}
        ]);
    },
    logLevel: 'warn',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: [
        ['chromedriver'],
    ]
};

module.exports = {
    config: config
};
