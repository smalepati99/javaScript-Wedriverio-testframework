import ItemDetailPage from '../../pageobjects/pages/itemDetail';
import Navigation from '../../pageobjects/shared/navigation';

describe('E2E Tests - Item Detail Page - Functionality', () => {
    it('should load an Item Detail page', () => {
        ItemDetailPage.openItemDetailPage(1);
        ItemDetailPage.waitForItemDetailToExist();
        Navigation.waitForMenuContainerToExist();
        Navigation.resetAppState();
        
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
    });
    
    it('should go to previous page after clicking Back button', () => {
        ItemDetailPage.openItemDetailPage(4);
        ItemDetailPage.waitForItemDetailToExist();
        ItemDetailPage.clickBackButton();
        
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
    });
    
    xit('should go to empty tab after clicking Back button if coming from new tab', () => {
        // need to come from empty tab
        ItemDetailPage.openItemDetailPage(4);
        ItemDetailPage.waitForItemDetailToExist();
        ItemDetailPage.clickBackButton();
        
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
    });
    
    it('should change button text after clicking Add to Cart button', () => {
        ItemDetailPage.openItemDetailPage(1);
        ItemDetailPage.waitForItemDetailToExist();
        expect(ItemDetailPage.addToCartButton).toHaveText('ADD TO CART');
        ItemDetailPage.pauseShort();
        
        ItemDetailPage.toggleAddToCart();
        ItemDetailPage.pauseShort();
        expect(ItemDetailPage.addToCartButton).toHaveText('REMOVE');
    });

    it('should change button text after clicking Remove button', () => {
        expect(ItemDetailPage.addToCartButton).toHaveText('REMOVE');
        ItemDetailPage.toggleAddToCart();
        
        ItemDetailPage.pauseShort();
        expect(ItemDetailPage.addToCartButton).toHaveText('ADD TO CART');
    });

    it('should increase cart item count after clicking Add to Cart button', () => {
        expect(Navigation.shoppingCartCount).not.toBeVisible();
        ItemDetailPage.toggleAddToCart();
        
        ItemDetailPage.pauseShort();
        expect(Navigation.shoppingCartCount).toHaveText('1');
    });
    
    it('should decrease cart item count after clicking Remove button', () => {
        expect(Navigation.shoppingCartCount).toHaveText('1');
        ItemDetailPage.toggleAddToCart();
        
        ItemDetailPage.pauseShort();
        expect(Navigation.shoppingCartCount).not.toBeVisible();
    });
});

describe('E2E Tests - Item Detail Page - Design', () => {
});