import Base from './base';

class App extends Base {
  openLogInPage() {
    browser.url('https://www.saucedemo.com/index.html');
  }

  openInventoryPage() {
    browser.url('https://www.saucedemo.com/inventory.html');
  }

  openItemDetailPage(itemId) {
    browser.url(`https://www.saucedemo.com/inventory-item.html?id=${itemId}`);
  }

  openCartPage() {
    browser.url('https://www.saucedemo.com/cart.html');
  }

  openCheckoutStepOnePage() {
    browser.url('https://www.saucedemo.com/checkout-step-one.html')
  }

  openCheckoutStepTwoPage() {
    browser.url('https://www.saucedemo.com/checkout-step-two.html')
  }
}
  
export default App;
