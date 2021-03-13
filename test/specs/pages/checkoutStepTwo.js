import CheckoutStepTwoPage from '../../pageobjects/pages/checkoutStepTwo';
import CheckoutStepOnePage from '../../pageobjects/pages/checkoutStepOne';
import InventoryPage from '../../pageobjects/pages/inventory';
import ItemDetailPage from '../../pageobjects/pages/itemDetail';
import Cart from '../../pageobjects/pages/cart';
import Navigation from '../../pageobjects/shared/navigation';
import checkoutStepTwo from '../../pageobjects/pages/checkoutStepTwo';

describe('E2E Tests - Checkout Step Two - Functionality', () => {
    it('should load the checkout step two page', () => {
        CheckoutStepTwoPage.openCheckoutStepTwoPage();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });

    it('should have one (1) item after adding it from Inventory page', () => {
        const checkoutFormValues = {
            firstName: 'test',
            lastName: 'test',
            zipCode: 'test',
        };
        InventoryPage.openInventoryPage();
        InventoryPage.waitForInventoryToExist();
        const itemName = InventoryPage.getItemNameText(0);
        InventoryPage.toggleAddItemToCart(0);
        Navigation.clickShoppingCart();
        Cart.waitForCartListToExist();
        Cart.clickCheckoutButton();
        CheckoutStepOnePage.waitForCheckoutFormToExist();
        CheckoutStepOnePage.fillCheckoutForm(checkoutFormValues);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepTwoPage.waitForSummaryInfoToExist();

        expect(CheckoutStepTwoPage.getItemName(0)).toEqual(itemName);
    });

    it('should match subtotal price to Cart item price', () => {
        const checkoutFormValues = {
            firstName: 'test',
            lastName: 'test',
            zipCode: 'test',
        };
        Navigation.clickShoppingCart();
        Cart.pauseShort();
        Cart.waitForCartListToExist();
        const itemPrice = Cart.cartListItems[0].$('.inventory_item_price').getText();
        Cart.clickCheckoutButton();
        CheckoutStepOnePage.waitForCheckoutFormToExist();
        CheckoutStepOnePage.fillCheckoutForm(checkoutFormValues);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepTwoPage.waitForSummaryInfoToExist();

        expect(CheckoutStepTwoPage.itemTotal.getText()).toContain(itemPrice);
    });

    it('should navigate to Item Detail page after clicking item name', () => {
        const itemName = CheckoutStepTwoPage.getItemName(0);
        CheckoutStepTwoPage.clickItemName(0);
        ItemDetailPage.waitForItemDetailToExist();

        expect(itemName).toEqual(ItemDetailPage.itemName.getText());
    });

    it('should navigate to Inventory page after clicking Cancel button', () => {
        ItemDetailPage.clickBackButton();
        CheckoutStepTwoPage.waitForSummaryInfoToExist();
        CheckoutStepTwoPage.clickCancelButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should navigate to Checkout Complete page after clicking Finish button', () => {
        const checkoutFormValues = {
            firstName: 'test',
            lastName: 'test',
            zipCode: 'test',
        };
        Navigation.clickShoppingCart();
        Cart.waitForCartListToExist();
        const itemPrice = Cart.getCartItemPrice(0);
        Cart.clickCheckoutButton();
        CheckoutStepOnePage.waitForCheckoutFormToExist();
        CheckoutStepOnePage.fillCheckoutForm(checkoutFormValues);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepTwoPage.waitForSummaryInfoToExist();

        expect

        checkoutStepTwo.clickFinishButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });

    // checking out with no items in cart
    xit('should not be able to check out with an empty Cart', () => {
        const checkoutFormValues = {
            firstName: 'test',
            lastName: 'test',
            zipCode: 'test',
        };
        Navigation.clickShoppingCart();
        Cart.waitForCartListToExist();
        Cart.clickCheckoutButton();
        CheckoutStepOnePage.waitForCheckoutFormToExist();
        CheckoutStepOnePage.fillCheckoutForm(checkoutFormValues);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepTwoPage.waitForSummaryInfoToExist();
        checkoutStepTwo.clickFinishButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });
});

describe('E2E Tests - Checkout Step Two - Design', () => {
    xit('', () => {   
    });
});
