class AddressModalPO {
    get context () { return $('.address-new');}

    get billingAddressRadioButton () { return this.context.$('#billingAddress_new'); }
    get firstNameField () { return this.context.$('#firstName');}
    get lastNameField () { return this.context.$('#lastName');}
    get streetField () { return this.context.$('#address1'); }
    get houseNumberField () { return this.context.$('#address2'); }
    get cityField () { return this.context.$('#city'); }
    get stateField () { return this.context.$('#state'); }
    get zipCodeField () { return this.context.$('#zipCode'); }
    get countryDropdown () { return this.context.$('#country'); }

    get submitNewAddressButton () { return this.context.$('[data-testid="address-save-button"]'); }
}

module.exports = AddressModalPO;
