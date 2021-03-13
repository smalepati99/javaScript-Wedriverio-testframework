import App from '../app';

// Navigate to item detail
// Remove item
// Continue shopping button
// Checkout button

class CartPage extends App {
    get cartList() {
        return $('.cart_list');
    }

    get cartListItems() {
        return this.cartList.$$('.cart_item');
    }

    get cartItemTitle() {
        return $('.cart_item_label a');
    }

    get removeItemButton() {
        return $('.cart_button');
    }

    get continueShoppingButton() {
        return $('.cart_footer .btn_secondary');
    }

    get checkoutButton() {
        return $('.checkout_button');
    }

    waitForCartListToExist() {
        this.cartList.waitForExist();
    }

    countCartItems() {
        return this.cartListItems.length;
    }

    clickItemTitle(itemNumber) {
        this.cartListItems[itemNumber].$('.cart_item_label a').click();
    }

    removeAnItem(itemNumber) {
        this.cartListItems[itemNumber].$('.cart_button').click();
    }

    getCartItemPrice(itemNumber) {
        this.cartListItems[itemNumber].$('.inventory_item_price');
    }

    clickContinueShoppingButton() {
        this.continueShoppingButton.click();
    }

    clickCheckoutButton() {
        this.checkoutButton.click();
    }
}

export default new CartPage();