let LoginPage = require("../page_objects/login_page.js");

describe('creating product with incomplete data', function() {
    it('save product without completing one mandatory field', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();

      await productsPage.header.getAdministrationMenu().click();

      await productsPage.waitForProductLinkAvailable();

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.waitForProductInputAvailable();

      await newProductPage.createProductNotComplete('Alyona_Gladych Product 4');

      expect(await newProductPage.getValidationMessage().getText()).toEqual('Product Family is required.');
    });
  });