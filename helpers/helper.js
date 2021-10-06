module.exports = {
    getRandomString (stringLength) {
        const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];
        return [...Array(stringLength)].map(i=>chars[Math.random()*chars.length|0]).join('');
    },
    async waitForUrl (path) {
        await browser.waitUntil(async () => {
            const url = await browser.getUrl();
            return url.includes(path);
        });
    }
};
