import App from '../app';

// Count products
// Add item to Cart
// Remove item from cart
// Changing item sorting
// Click item title navigation
// Click item image navigation

class InventoryPage extends App {
    get inventoryContainer() {
        return $('.inventory_list');
    }

    get productsList() {
        return this.inventoryContainer.$$('.inventory_item');
    }

    get sortingDropdown() {
        return $('.product_sort_container');
    }

    get sortingDropdownOptions() {
        return this.sortingDropdown.$$('option');
    }

    waitForInventoryToExist() {
        this.inventoryContainer.waitForExist();
    }

    countProducts() {
        return this.productsList.length;
    }

    itemAddToCartButton(itemNumber) {
        return this.productsList[itemNumber].$('.btn_inventory');
    }

    toggleAddItemToCart(itemNumber) {
        this.productsList[itemNumber].$('.btn_inventory').click();
    }

    itemName(itemNumber) {
        return this.productsList[itemNumber].$('.inventory_item_name');
    }

    getItemNameText(itemNumber) {
        return this.productsList[itemNumber].$('.inventory_item_name').getText();
    }
    
    getItemPrice(itemNumber) {
        return parseFloat(this.productsList[itemNumber].$('.inventory_item_price').getText().slice(1));
    }

    clickItemName(itemNumber) {
        this.productsList[itemNumber].$('.inventory_item_name').click();
    }

    clickItemImage(itemNumber) {
        this.productsList[itemNumber].$('.inventory_item_img').click();
    }

    countSortingOptions() {
        return this.sortingDropdownOptions.length;
    }

    selectSortingOption(optionNumber) {
        this.sortingDropdown.click();
        this.sortingDropdownOptions[optionNumber].click();
    }
}

export default new InventoryPage();
