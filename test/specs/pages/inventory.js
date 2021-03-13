import InventoryPage from '../../pageobjects/pages/inventory';
import ItemDetailPage from '../../pageobjects/pages/itemDetail';
import Navigation from '../../pageobjects/shared/navigation';

describe('E2E Tests - Inventory Page - Functionality', () => {
    it('should load Inventory page', () => {
        InventoryPage.openInventoryPage();
        
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should have six (6) items', () => {
        InventoryPage.waitForInventoryToExist();

        expect(InventoryPage.countProducts()).toEqual(6);
    });

    it('should change button text after clicking Add to Cart button', () => {
        expect(InventoryPage.itemAddToCartButton(0)).toHaveText('ADD TO CART');
        InventoryPage.toggleAddItemToCart(0);

        expect(InventoryPage.itemAddToCartButton(0)).toHaveText('REMOVE');
    });
    
    it('should increase cart item count after clicking Add to Cart button', () => {
        expect(Navigation.shoppingCartCount).toHaveText('1');
        InventoryPage.toggleAddItemToCart(1);

        expect(Navigation.shoppingCartCount).toHaveText('2');
    });
    
    it('should decrease cart item count after clicking Remove button', () => {
        expect(Navigation.shoppingCartCount).toHaveText('2');
        InventoryPage.toggleAddItemToCart(1);

        expect(Navigation.shoppingCartCount).toHaveText('1');
    });

    it('should change button text after clicking Remove button', () => {
        expect(InventoryPage.itemAddToCartButton(0)).toHaveText('REMOVE');
        InventoryPage.toggleAddItemToCart(0);
        
        expect(InventoryPage.itemAddToCartButton(0)).toHaveText('ADD TO CART');
    });

    it('should hide cart item count when there are zero (0) items', () => {
        expect(Navigation.shoppingCartCount).not.toBeVisible();
    });
    
    it('should navigate to respective item details when clicking first item name', () => {
        const itemName = InventoryPage.itemName(0).getText();
        InventoryPage.clickItemName(0);
        ItemDetailPage.waitForItemDetailToExist();
        
        expect(ItemDetailPage.itemName.getText()).toEqual(itemName);
    });
    
    it('should navigate to respective item details when clicking last item name', () => {
        browser.back();
        InventoryPage.waitForInventoryToExist();
        const itemName = InventoryPage.itemName(5).getText();
        InventoryPage.clickItemName(5);
        ItemDetailPage.waitForItemDetailToExist();
        
        expect(ItemDetailPage.itemName.getText()).toEqual(itemName);
    });
    
    it('should navigate to respective item details when clicking a random item name', () => {
        browser.back();
        InventoryPage.waitForInventoryToExist();
        const randomItemNumber = InventoryPage.createRandomNumberBetweenTwoValues(1, 4);
        const itemName = InventoryPage.itemName(randomItemNumber).getText();
        InventoryPage.clickItemName(randomItemNumber);
        ItemDetailPage.waitForItemDetailToExist();
        
        expect(ItemDetailPage.itemName.getText()).toEqual(itemName);
    });
    
    it('should navigate to item details when clicking first item image', () => {
        browser.back();
        const itemName = InventoryPage.itemName(0).getText();
        InventoryPage.clickItemImage(0);
        ItemDetailPage.waitForItemDetailToExist();
        
        expect(ItemDetailPage.itemName.getText()).toEqual(itemName);
    });

    it('should navigate to respective item details when clicking last item image', () => {
        browser.back();
        InventoryPage.waitForInventoryToExist();
        const itemName = InventoryPage.itemName(5).getText();
        InventoryPage.clickItemImage(5);
        ItemDetailPage.waitForItemDetailToExist();
        
        expect(ItemDetailPage.itemName.getText()).toEqual(itemName);
    });
    
    it('should navigate to respective item details when clicking a random item image', () => {
        browser.back();
        InventoryPage.waitForInventoryToExist();
        const randomItemNumber = InventoryPage.createRandomNumberBetweenTwoValues(1, 4);
        const itemName = InventoryPage.itemName(randomItemNumber).getText();
        InventoryPage.clickItemImage(randomItemNumber);
        ItemDetailPage.waitForItemDetailToExist();
        
        expect(ItemDetailPage.itemName.getText()).toEqual(itemName);
    });

    it('should should have four (4) types of sort details', () => {
        browser.back();
        InventoryPage.waitForInventoryToExist();

        expect(InventoryPage.countSortingOptions()).toEqual(4);
    });

    it('should sort by alphabetical order ascending by default', () => {
        expect(InventoryPage.sortingDropdown.getValue()).toEqual('az');
    });

    it('should show more expensive items first when sorting by price descending', () => {
        InventoryPage.selectSortingOption(3);
        expect(InventoryPage.sortingDropdown.getValue()).toEqual('hilo');
        InventoryPage.waitForInventoryToExist();

        const firstItemPrice = InventoryPage.getItemPrice(0);
        const secondItemPrice = InventoryPage.getItemPrice(1);
        const thirdItemPrice = InventoryPage.getItemPrice(2);

        expect(firstItemPrice).toBeGreaterThanOrEqual(secondItemPrice);
        expect(secondItemPrice).toBeGreaterThanOrEqual(thirdItemPrice);
        expect(firstItemPrice).toBeGreaterThanOrEqual(thirdItemPrice);
    });

    it('should show cheaper items first when sorting by price ascending', () => {
        InventoryPage.selectSortingOption(2);
        expect(InventoryPage.sortingDropdown.getValue()).toEqual('lohi');
        InventoryPage.waitForInventoryToExist();

        const firstItemPrice = InventoryPage.getItemPrice(0);
        const secondItemPrice = InventoryPage.getItemPrice(1);
        const thirdItemPrice = InventoryPage.getItemPrice(2);

        expect(firstItemPrice).toBeLessThanOrEqual(secondItemPrice);
        expect(secondItemPrice).toBeLessThanOrEqual(thirdItemPrice);
        expect(firstItemPrice).toBeLessThanOrEqual(thirdItemPrice);
    });

    it('should re-order items by alphabetical order when sorting by alphabet ascending', () => {
        InventoryPage.selectSortingOption(0);
        expect(InventoryPage.sortingDropdown.getValue()).toEqual('az');
        InventoryPage.waitForInventoryToExist();

        const firstItemName = InventoryPage.getItemNameText(0);
        const secondItemName = InventoryPage.getItemNameText(1);
        const thirdItemName = InventoryPage.getItemNameText(2);

        expect(firstItemName <= secondItemName).toBe(true);
        expect(secondItemName <= thirdItemName).toBe(true);
        expect(firstItemName <= thirdItemName).toBe(true);
    });

    it('should re-order items by alphabetical order when sorting by alphabet ascending', () => {
        InventoryPage.selectSortingOption(1);
        expect(InventoryPage.sortingDropdown.getValue()).toEqual('za');
        InventoryPage.waitForInventoryToExist();

        const firstItemName = InventoryPage.getItemNameText(0);
        const secondItemName = InventoryPage.getItemNameText(1);
        const thirdItemName = InventoryPage.getItemNameText(2);

        expect(firstItemName >= secondItemName).toBe(true);
        expect(secondItemName >= thirdItemName).toBe(true);
        expect(firstItemName >= thirdItemName).toBe(true);
    });
});

describe('E2E Tests - Inventory Page - Design', () => {
    xit('should have a Products title', () => {   
    });
    
    xit('should display products as two (2) columns of three (3) in desktop size', () => {   
    });
    
    xit('should display products as one (1) column of six (6) in mobile size', () => {   
    });
});
