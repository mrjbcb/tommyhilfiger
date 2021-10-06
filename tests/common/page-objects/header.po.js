class HeaderPO {
    get context () { return $('.app>.header');}

    get myAccountHeader () { return this.context.$('.header-my-account-wrapper'); }
    get signInButton () { return this.context.$('[data-testid="sign-in-button"]'); }
}

module.exports = HeaderPO;
