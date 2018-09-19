let LoginPage = require("../page_objects/login_page.js");

describe('successful login as admin', function() {
    it('login as admin with valid credentials', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await productsPage.header.waitForHeaderAvailable();
      
      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await productsPage.header.getUserStatus().getText()).toEqual("Admin");
    });
  });