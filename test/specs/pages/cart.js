import CartPage from '../../pageobjects/pages/cart';
import InventoryPage from '../../pageobjects/pages/inventory';
import ItemDetailPage from '../../pageobjects/pages/itemDetail';
import Navigation from '../../pageobjects/shared/navigation';

describe('E2E Tests - Cart Page - Functionality', () => {
    it('should load the Cart page', () => {
        CartPage.openCartPage();
        CartPage.waitForCartListToExist();

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });

    it('should have one (1) item after adding it from Inventory page', () => {
        InventoryPage.openInventoryPage();
        InventoryPage.waitForInventoryToExist();
        InventoryPage.toggleAddItemToCart(0);
        Navigation.clickShoppingCart();
        CartPage.waitForCartListToExist();

        expect(CartPage.countCartItems()).toBe(1);
    });

    it('should have two (2) items after adding another from Inventory page', () => {
        InventoryPage.openInventoryPage();
        InventoryPage.waitForInventoryToExist();
        InventoryPage.toggleAddItemToCart(1);
        Navigation.clickShoppingCart();
        CartPage.waitForCartListToExist();

        expect(CartPage.countCartItems()).toBe(2);
    });

    it('should have one (1) item after clicking Remove button', () => {
        CartPage.removeAnItem(1);

        expect(CartPage.countCartItems()).toBe(1);
    });

    it('should navigate to Item Detail page after clicking item name', () => {
        const itemName = CartPage.cartListItems[0].$('.inventory_item_name').getText();
        CartPage.clickItemTitle(0);
        ItemDetailPage.waitForItemDetailToExist();

        expect(browser).toHaveUrlContaining('https://www.saucedemo.com/inventory-item.html?');
        expect(itemName).toEqual(ItemDetailPage.itemName.getText());
    });

    it('should navigate to Inventory page after clicking Continue Shopping button', () => {
        Navigation.clickShoppingCart();
        CartPage.waitForCartListToExist();
        CartPage.clickContinueShoppingButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should navigate to Checkout page after clicking Checkout button with one (1) item', () => {
        Navigation.clickShoppingCart();
        CartPage.waitForCartListToExist();
        CartPage.clickCheckoutButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('should navigate to Checkout page after clicking Checkout button with zero (0) items', () => {
        Navigation.clickShoppingCart();
        CartPage.waitForCartListToExist();
        CartPage.removeAnItem(0);
        CartPage.clickCheckoutButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });
});

describe('E2E Tests - Cart Page - Design', () => {
    xit('', () => {
        
    });
});
