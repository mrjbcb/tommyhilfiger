const HeaderPO = require('../../common/page-objects/header.po');
const ModalPO = require('../../common/page-objects/register.modal.po');
const MyAccountPO = require('../page-objects/myaccount.po');

const users = require('../../../helpers/users');
const helper = require('../../../helpers/helper');

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

        it('should not display my account wrapper', async () => {
            expect(await headerPO.myAccountHeader).not.toBeExisting();
        });

        describe('Then fills the form with valid users', () => {
            const myAccountPO = new MyAccountPO();
            const user = users.RANDOM_USER;

            before(async () => {
                await modalPO.inputEmail.addValue(user.USERNAME);
                await modalPO.inputPassword.addValue(user.PASSWORD);
                await modalPO.agreeTermsCheckbox.click();
                await modalPO.createAccountButton.click();
                await helper.waitForUrl('myaccount');
            });

            it('should show my account wrapper', async () => {
                expect(await headerPO.myAccountHeader).toBeDisplayed();
            });

            it('should hide sign in button', async () => {
                expect(await headerPO.signInButton).not.toBeExisting();
            });

            describe('Then adds a new address', () => {
                before(async () => {
                    await myAccountPO.addressbookNavElement.waitForClickable();
                    await myAccountPO.addressbookNavElement.click();
                    await helper.waitForUrl('myaccount/addressbook');
                    await myAccountPO.addAddressButton.click();
                });

                it('should not display any address', async () => {
                    expect(await myAccountPO.addressForm).not.toBeExisting();
                });

                it('should be possible to change address', async () => {
                    const addressModal = myAccountPO.getAddressModalPO();

                    await addressModal.billingAddressRadioButton.click();
                    await addressModal.countryDropdown.selectByAttribute('value', user.COUNTRY);

                    await addressModal.firstNameField.addValue(user.FIRST_NAME);
                    await addressModal.lastNameField.addValue(user.LAST_NAME);
                    await addressModal.streetField.addValue(user.STREET);
                    await addressModal.houseNumberField.addValue(user.HOUSENUMBER);
                    await addressModal.cityField.addValue(user.CITY);
                    await addressModal.stateField.addValue(user.STATE);
                    await addressModal.zipCodeField.addValue(user.ZIP_CODE);

                    await addressModal.submitNewAddressButton.click();

                    expect(await myAccountPO.addressForm).toBeDisplayed();
                });
            });
        });
    });
});
