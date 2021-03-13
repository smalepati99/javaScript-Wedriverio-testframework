import App from '../app';

class LogIn extends App {
    get logInForm() {
        return $('form');
    }

    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get logInButton() {
        return $('#login-button');
    }

    get errorButton() {
        return $('.error-button');
    }

    get errorMessage() {
        return $('[data-test="error"]');
    }

    waitForFormToExist() {
        this.logInForm.waitForExist();
    }

    fillSignInForm(username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
    }

    clearSignInForm() {
        this.usernameInput.doubleClick();
        browser.keys('Delete');
        this.passwordInput.doubleClick();
        browser.keys('Delete');
    }

    submitForm() {
        this.logInButton.click();
    }

    waitForErrorToExist() {
        this.errorMessage.waitForExist();
    }
    
}

export default new LogIn();
