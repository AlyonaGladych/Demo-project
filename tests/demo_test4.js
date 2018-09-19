let LoginPage = require("../page_objects/login_page.js");

describe('login fail 2', function() {
    it('login with empty string', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      await loginPage.login("", "default");
     
      expect(await loginPage.getValidationMessage().getText()).toEqual("Email is required");
    });
  });