import App from '../app';

class CheckoutStepTwoPage extends App {
    get summaryInfo() {
        return $('.summary_info');
    }

    get cartList() {
        return $('.cart_list');
    }

    get itemTotal() {
        return $('.summary_subtotal_label');
    }

    get cancelButton() {
        return $('.cart_cancel_link');
    }

    get finishButton() {
        return $('.cart_button');
    }

    waitForSummaryInfoToExist() {
        this.summaryInfo.waitForExist();
    }

    getItemFromCartList(itemNumber) {
        return this.cartList.$$('.cart_item')[itemNumber];
    }
    
    getItemName(itemNumber) {
        return this.getItemFromCartList(itemNumber).$('.cart_item_label a div').getText();
    }

    clickItemName(itemNumber) {
        this.getItemFromCartList(itemNumber).$('.cart_item_label a').click();
    }

    clickCancelButton() {
        this.cancelButton.click();
    }

    clickFinishButton() {
        this.finishButton.click();
    }
}

export default new CheckoutStepTwoPage();
