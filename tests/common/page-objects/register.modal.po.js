class ModalPO {
    get context () { return $('[data-testid="modal-backdrop"]');}

    // Modal elements
    get agreeTermsCheckbox () { return this.context.$('[data-testid="checkbox-label"]'); }
    get inputEmail () { return this.context.$('#create-account-email'); }
    get inputPassword () { return this.context.$('#create-account-password'); }
    get createAccountLink () { return this.context.$('[data-testid="register"]'); }
    get createAccountButton () { return this.context.$('[data-testid="Button-primary-new"]'); }

    // Error messages
    get inputEmailErrorMessage () { return this.context.$('#create-account-email-helper-text'); }
    get inputPasswordErrorMessage () { return this.context.$('#create-account-password-helper-text'); }
    get termsConfirmationErrorMessage () { return this.context.$('.error-text'); }
}

module.exports = ModalPO;
