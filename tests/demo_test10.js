let LoginPage = require("../page_objects/login_page.js");

describe('product editing', function() {
    it('change product name and description', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();

      await productsPage.header.getAdministrationMenu().click();

      await productsPage.waitForProductLinkAvailable();

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.createProduct('to_be_edited');

      await browser.sleep(5500);

      let editProductPage = await newProductPage.startEditingProduct();

      await newProductPage.waitForProductInputAvailable();

      await editProductPage.editProduct(); 

      expect(await editProductPage.isSuccessMessageVisible()).toEqual(true);
    });
  });