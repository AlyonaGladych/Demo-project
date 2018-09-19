let LoginPage = require("../page_objects/login_page.js");

describe('product creating fail', function() {
    it('enter too long product name (>64 chars)', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();

      await productsPage.header.getAdministrationMenu().click();

      await productsPage.waitForProductLinkAvailable();

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.createProduct('very_long_name very_long_name very_long_name very_long_name very_');

      await newProductPage.waitForErrorMessageAvailable();

      expect(await newProductPage.getErrorMessage().getText()).toEqual("Name cannot be more than 64 characters long.");
    });
  });