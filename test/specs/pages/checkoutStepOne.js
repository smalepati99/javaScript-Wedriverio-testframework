import CheckoutStepOnePage from '../../pageobjects/pages/checkoutStepOne';
// import InventoryPage from '../../pageobjects/pages/inventory';
import CartPage from '../../pageobjects/pages/cart';
import checkoutStepOne from '../../pageobjects/pages/checkoutStepOne';

describe('E2E Tests - Checkout Step One - Functionality', () => {
    it('should load the checkout step one page', () => {
        CheckoutStepOnePage.openCheckoutStepOnePage();
        CheckoutStepOnePage.waitForCheckoutFormToExist();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('should navigate to Cart page after clicking Cancel button', () => {
        CheckoutStepOnePage.clickCancelButton();
        CartPage.waitForCartListToExist();

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });

    it('should give error after clicking Continue button with no values', () => {
        CheckoutStepOnePage.openCheckoutStepOnePage();
        CheckoutStepOnePage.waitForCheckoutFormToExist();
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: First Name is required');
    });

    it('should give error after clicking Continue button with only first name', () => {
        const testForm = {
            firstName: 'test',
            lastName: undefined,
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Last Name is required');
    });

    xit('should validate first name string', () => {
        const testForm = {
            firstName: 'test',
            lastName: undefined,
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Last Name is required');
        
        const testForm2 = {
            firstName: '`~!@#$%^&*()-_=+`',
            lastName: undefined,
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm2);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Last Name is required');
        
        const testForm3 = {
            firstName: ' ',
            lastName: undefined,
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm3);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Last Name is required');
    });

    it('should give error after clicking Continue button with only last name', () => {
        const testForm = {
            firstName: undefined,
            lastName: 'test',
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: First Name is required');
    });

    xit('should validate last name string', () => {
        const testForm = {
            firstName: 'test',
            lastName: '123',
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Postal Code is required');
        
        const testForm2 = {
            firstName: 'test',
            lastName: '`~!@#$%^&*()-_=+',
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm2);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Postal Code is required');
        
        const testForm3 = {
            firstName: 'test',
            lastName: ' ',
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm3);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Postal Code is required');
    });

    it('should give error after clicking Continue button with only zip code', () => {
        const testForm = {
            firstName: undefined,
            lastName: undefined,
            zipCode: '123'
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: First Name is required');
    });

    xit('should validate zip code string', () => {
        const testForm = {
            firstName: 'test',
            lastName: 'test',
            zipCode: 'test'
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();

        // check url
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');

        CheckoutStepOnePage.openCheckoutStepOnePage();
        CheckoutStepOnePage.waitForCheckoutFormToExist();

        const testForm2 = {
            firstName: 'test',
            lastName: 'test',
            zipCode: '`~!@#$%^&*()-_=+'
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm2);
        CheckoutStepOnePage.clickContinueButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');

        CheckoutStepOnePage.openCheckoutStepOnePage();
        CheckoutStepOnePage.waitForCheckoutFormToExist();

        const testForm3 = {
            firstName: 'test',
            lastName: 'test',
            zipCode: ' '
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm3);
        CheckoutStepOnePage.clickContinueButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });

    it('should give error after clicking Continue button with only first name and last name', () => {
        CheckoutStepOnePage.openCheckoutStepOnePage();
        CheckoutStepOnePage.waitForCheckoutFormToExist();

        const testForm = {
            firstName: 'test',
            lastName: 'test',
            zipCode: undefined
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Postal Code is required');
    });

    it('should give error after clicking Continue button with only first name and zip code', () => {
        const testForm = {
            firstName: 'test',
            lastName: undefined,
            zipCode: 'test'
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: Last Name is required');
    });

    it('should give error after clicking Continue button with only last name and zip code', () => {
        const testForm = {
            firstName: undefined,
            lastName: 'test',
            zipCode: 'test'
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();
        CheckoutStepOnePage.waitForErrorToExist();

        expect(CheckoutStepOnePage.errorLabel).toBeVisible();
        expect(CheckoutStepOnePage.errorLabel).toHaveText('Error: First Name is required');
    });

    xit('should give error after clicking Continue button with only empty spaces', () => {
        const testForm = {
            firstName: ' ',
            lastName: ' ',
            zipCode: ' '
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });

    it('should navigate to Checkout Step Two after clicking Continue button when all inputs are valid', () => {
        const testForm = {
            firstName: 'test',
            lastName: 'test',
            zipCode: '123456'
        };
        CheckoutStepOnePage.clearSignInForm();
        CheckoutStepOnePage.fillCheckoutForm(testForm);
        CheckoutStepOnePage.clickContinueButton();

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });
});

describe('E2E Tests - Checkout Step One - Design', () => {
    xit('', () => {
        
    });
});
