const HeaderPO = require('../../common/page-objects/header.po');
const ModalPO = require('../../common/page-objects/register.modal.po');
const getRandomString = require('../../../helpers/helper').getRandomString;

describe('Given a logged out user', () => {
    const headerPO = new HeaderPO();
    const modalPO = new ModalPO();

    before(async () => {
        await browser.url('');
    });

    describe('When reaching register form modal', () => {
        before(async () => {
            await headerPO.signInButton.click();
            await modalPO.createAccountLink.click();
        });

        it('should show error message when mandatory fields are missing', async () => {
            await modalPO.createAccountButton.click();
            expect(await modalPO.inputEmailErrorMessage.getText()).toBe('Vul het veld in');
            expect(await modalPO.inputPasswordErrorMessage.getText()).toBe('Vul het veld in');
            expect(await modalPO.termsConfirmationErrorMessage.getText()).toBe('Bevestig dat je akkoord gaat met de algemene voorwaarden');
        });

        it('should show error message for invalid email address', async () => {
            const invalidEmail = getRandomString(5);
            await modalPO.inputEmail.addValue(invalidEmail);
            await modalPO.createAccountButton.click();
            expect(await modalPO.inputEmailErrorMessage.getText()).toBe('Sorry, dit is geen geldig e-mailadres');
        });

        it('should show error message when password does not have enough length', async () => {
            const invalidPassord = getRandomString(4);
            await modalPO.inputPassword.addValue(invalidPassord);
            await modalPO.createAccountButton.click();
            expect(await modalPO.inputPasswordErrorMessage.getText()).toBe('Je wachtwoord moet tussen 5 en 20 tekens lang zijn');
        });
    });
});