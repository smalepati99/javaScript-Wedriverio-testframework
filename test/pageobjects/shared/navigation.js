import Base from '../base';

// Toggle menu
// Count menu items
// Page navigation
// Shopping Cart
// Logout

class Navigation extends Base {
    get menuContainer() {
        return $('#menu_button_container');
    }

    get hamburgerMenu() {
        return $('.bm-burger-button');
    }

    get closeMenuButton() {
        return $('.bm-cross-button');
    }

    get hamburgerMenuItems() {
        return this.menuContainer.$$('.menu-item');
    }

    get shoppingCartLink() {
        return $('.shopping_cart_link');
    }

    get shoppingCartCount() {
        return $('.shopping_cart_badge');
    }

    waitForMenuContainerToExist() {
        this.menuContainer.waitForExist();
    }

    waitForMenuItemsToExist() {
        $('.bm-item-list').waitForExist();
    }

    countMenuItems() {
        return this.hamburgerMenuItems.length;
    }

    clickShoppingCart() {
        this.shoppingCartLink.click();
    }

    navigateToInventory() {
        this.hamburgerMenuItems[3].click();
    }
    
    navigateToAbout() {
        this.hamburgerMenuItems[3].click();
    }
    
    logout() {
        this.hamburgerMenuItems[3].click();
    }

    resetAppState() {
        this.waitForMenuItemsToExist();
        this.hamburgerMenu.click();
        this.hamburgerMenuItems[3].click();
        this.closeMenuButton.click();
    }
}

export default new Navigation();
