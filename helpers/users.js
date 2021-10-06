const defaultLength = require('./constants').DEFAULT_RANDOM_STRINGS_LENGTH;
const getRandomString = require('./helper').getRandomString;

module.exports = {
    RANDOM_USER: {
        USERNAME: `${getRandomString(defaultLength)}@${getRandomString(defaultLength)}.com`,
        PASSWORD: '12345',
        FIRST_NAME: 'Michaëlla',
        LAST_NAME: 'Capitão',
        STREET: 'Calçada de Arroios',
        HOUSENUMBER: '123',
        STATE: 'Lisboa',
        CITY: 'Lisboa',
        ZIP_CODE: '1000-025',
        COUNTRY: 'PT'
    }
};
