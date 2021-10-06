const AddressModalPO = require('./address.modal.po');

class MyAccountPO {
    get context () { return $('.my-account#root');}

    get addressbookNavElement () { return this.context.$('[data-testid^="/myaccount/addressbook"]'); }
    get addAddressButton () { return this.context.$('[data-testid="address-add-button"]'); }

    get addressForm () { return this.context.$('[data-testid="address-book-form"]'); }

    getAddressModalPO () { return new AddressModalPO(); }
}

module.exports = MyAccountPO;
