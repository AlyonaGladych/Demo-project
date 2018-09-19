let LoginPage = require("../page_objects/login_page.js");

describe('successful login as scorer', function() {
    it('login as scorer with valid credentials', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("alyonagladych+scorer@gmail.com", "52ACANvU");

      await productsPage.header.waitForHeaderAvailable();
      
      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await productsPage.header.getUserStatus().getText()).toEqual("Scorer");
    });
  });