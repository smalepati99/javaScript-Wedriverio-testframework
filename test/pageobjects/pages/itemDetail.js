import App from '../app';

// Visible title
// Visible description
// Visible price
// Visible image
// Back button navigation
// Add to Cart button toggle
// Remove button when navigating to item already in cart

class ItemDetailPage extends App {
    get itemDetailContainer() {
        return $('.inventory_details_container');
    }

    get itemName() {
        return $('.inventory_details_name');
    }

    get itemPrice() {
        return $('.inventory_details_price');
    }

    get itemImage() {
        return $('inventory_details_img');
    }

    get backButton() {
        return $('.inventory_details_back_button');
    }

    get addToCartButton() {
        return $('.btn_inventory');
    }

    waitForItemDetailToExist() {
        this.itemDetailContainer.waitForExist();
    }

    clickBackButton() {
        this.backButton.click();
    }

    toggleAddToCart() {
        this.addToCartButton.click();
    }
}

export default new ItemDetailPage();
