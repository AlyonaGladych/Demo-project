let LoginPage = require("../page_objects/login_page.js");

describe('product creating', function() {
    it('create product filling all mandatory fields with valid data', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();

      await productsPage.header.getAdministrationMenu().click();

      await productsPage.waitForProductLinkAvailable();

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.waitForProductInputAvailable();

      await newProductPage.createProduct('Alyona_Gladych Product 4');

      expect(await newProductPage.isSuccessMessageVisible()).toEqual(true);

      expect(await newProductPage.isIdVisible()).toEqual(true);
    });
  });