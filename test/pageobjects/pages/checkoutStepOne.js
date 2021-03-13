import App from '../app';

class CheckoutStepOnePage extends App {
    get checkoutForm() {
        return $('.checkout_info_wrapper form');
    }

    get firstNameField() {
        return $('#first-name');
    }

    get lastNameField() {
        return $('#last-name');
    }

    get zipCodeField() {
        return $('#postal-code');
    }

    get cancelButton() {
        return $('.cart_cancel_link');
    }

    get continueButton() {
        return $('.cart_button');
    }

    get cartList() {
        return $('.cart_list');
    }

    get cartListItems() {
        return this.cartList.$$('.cart_item');
    }

    get itemName() {
        return $('.cart_item_label a');
    }

    get errorLabel() {
        return $('h3[data-test="error"]');
    }

    waitForCheckoutFormToExist() {
        this.checkoutForm.waitForExist();
    }

    waitForErrorToExist() {
        this.errorLabel.waitForExist();
    }

    fillCheckoutForm(formObj) {
        if (formObj.firstName) { this.firstNameField.setValue(formObj.firstName); }
        if (formObj.lastName) { this.lastNameField.setValue(formObj.lastName); }
        if (formObj.zipCode) { this.zipCodeField.setValue(formObj.zipCode); }
    }

    clearSignInForm() {
        this.clearInputField(this.firstNameField);
        this.clearInputField(this.lastNameField);
        this.clearInputField(this.zipCodeField);
        this.pauseShort();
    }

    clickCancelButton() {
        this.cancelButton.click();
    }

    clickContinueButton() {
        this.continueButton.click();
    }

    navigateToItem(itemNumber) {
        this.cartListItems[itemNumber].itemName.click();
    }
}

export default new CheckoutStepOnePage();
