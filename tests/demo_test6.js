let LoginPage = require("../page_objects/login_page.js");

describe('product creating: name validation', function() {
    it('create product with not unique name', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();

      await productsPage.header.getAdministrationMenu().click();

      await productsPage.waitForProductLinkAvailable();

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.waitForProductInputAvailable();

      await newProductPage.createProduct('Alyona_Gladych Product 1');

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.getErrorMessage().getText()).toEqual('Name must be unique');
    });
  });