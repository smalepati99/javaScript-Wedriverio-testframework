import LogIn from '../../pageobjects/pages/loginPage';

describe('E2E Tests - Login Page - Functionality', () => {
    it('should load Login Page', () => {
        LogIn.openLogInPage();

        expect(browser).toHaveUrl('https://www.saucedemo.com/index.html');
    });

    it('should have a login form', () => {
        LogIn.waitForFormToExist();

        expect(LogIn.logInForm).toBeVisible();
    });

    it('should not show error message when first loading', () => {
        expect(LogIn.errorButton).not.toBeVisible();
    });

    it('should show error message when empty form is submitted', () => {
        LogIn.fillSignInForm('', '');
        LogIn.submitForm();
        LogIn.waitForErrorToExist();

        expect(LogIn.errorButton).toBeVisible();
        expect(LogIn.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('should remove the error after refreshing', () => {
        browser.refresh();

        expect(LogIn.errorButton).not.toBeVisible();
    });

    it('should show error when leaving password blank', () => {
        LogIn.fillSignInForm('test', '');
        LogIn.submitForm();
        LogIn.waitForErrorToExist();

        expect(LogIn.errorButton).toBeVisible();
        expect(LogIn.errorMessage).toHaveText('Epic sadface: Password is required');
    });

    it('should show error when leaving username blank', () => {
        LogIn.clearSignInForm();
        LogIn.fillSignInForm('', 'test');
        LogIn.submitForm();
        LogIn.waitForErrorToExist();

        expect(LogIn.errorButton).toBeVisible();
        expect(LogIn.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('should show error when using wrong values', () => {
        LogIn.clearSignInForm();
        LogIn.fillSignInForm('test', 'test');
        LogIn.submitForm();
        LogIn.waitForErrorToExist();

        expect(LogIn.errorButton).toBeVisible();
        expect(LogIn.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should show error when using blank spaces', () => {
        LogIn.clearSignInForm();
        LogIn.fillSignInForm(' ', ' ');
        LogIn.submitForm();
        LogIn.waitForErrorToExist();

        expect(LogIn.errorButton).toBeVisible();
        expect(LogIn.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should show error when user is locked out', () => {
        LogIn.clearSignInForm();
        LogIn.fillSignInForm('locked_out_user', 'secret_sauce');
        LogIn.submitForm();
        LogIn.waitForErrorToExist();

        expect(LogIn.errorButton).toBeVisible();
        expect(LogIn.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    xit('should not allow navigation before logging in', () => {
        // not implemented
    });

    it('should navigate to inventory when using correct credentials', () => {
        LogIn.clearSignInForm();
        LogIn.fillSignInForm('standard_user', 'secret_sauce');
        LogIn.submitForm();

        expect(LogIn.errorButton).not.toBeVisible();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});

describe('E2E Tests - Login Page - Design', () => {
    xit('should have the login form and bot image horizontally alligned in desktop view', () => {
    });
    xit('should have the login form above the bot image in mobile view', () => {
    });
    xit('username and password inputs should be same length', () => {
    });
    xit('should list four (4) usernames', () => {
    });
    xit('should list one (1) password', () => {
    });
});
