const config = {
    baseUrl: 'https://nl.tommy.com',
    specs: [
        './tests/**/*.spec.js'
    ],
    runner: 'local',
    maxInstances: 1,
    acceptInsecureCerts: true,
    bail: 0,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--window-size=1280,800'
            ]}
    }],
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
