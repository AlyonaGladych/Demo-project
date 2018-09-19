let LoginPage = require("../page_objects/login_page.js");

describe('login fail', function() {
    it('login with invalid credentials', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      await loginPage.login("default@gmail.com", "default");
      
      expect(await loginPage.isErrorMessageVisible()).toEqual(true);
    });
  });