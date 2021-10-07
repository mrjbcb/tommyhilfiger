module.exports = {
    getRandomString (stringLength) {
        const chars = [...'abcdefghijklmnopqrstuvwxyz0123456789'];
        const randomArray = [];
        for (let i = 0; i<stringLength; i ++) {
            randomArray.push(chars[Math.random()*chars.length|0]);
        }
        return randomArray.join('');
    },
    async waitForUrl (path) {
        await browser.waitUntil(async () => {
            const url = await browser.getUrl();
            return url.includes(path);
        });
    }
};
