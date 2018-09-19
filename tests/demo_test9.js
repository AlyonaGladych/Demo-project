let LoginPage = require("../page_objects/login_page.js");

describe('cancel creating product', function() {
    it('cancel after filling product information', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();

      await productsPage.header.getAdministrationMenu().click();

      await productsPage.waitForProductLinkAvailable();

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.createProductCancel('default name');

      await newProductPage.searchForProduct('default name');

      expect(await newProductPage.isNoProductMessageVisible()).toEqual(true);
    });
  });