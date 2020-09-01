
var login_Page = require('../Pages/login_Page.js');
var test_Data = require('../TestData/test_Data.js');
var helpers = require('protractor-helpers');
var log4js = require('log4js');
var logger = log4js.getLogger();
var commonFunctions = require('../TestData/commonFunctions.js');


describe('Login Tests for Alcon Website', function () {


  beforeAll(function () {
    browser.get(test_Data.data.url);
    browser.waitForAngular();
    login_Page.enterUsername(test_Data.data.adminuname);
    login_Page.enterPassword(test_Data.data.adminpwd);
    login_Page.clickLogin();
    login_Page.checkPopUp();
    browser.waitForAngular();
  });

  it('Admin user should be able to login using valid username and password', function () {
    browser.waitForAngular();
    login_Page.waitForURLContain('admin/practices', 5000);
    var currenturl = browser.getCurrentUrl();
    browser.waitForAngular();
    expect(currenturl).toContain('admin/practices');
  });


  it('Admin user should able to see all tabs', function () {
    login_Page.clickOnMenu();
    var practiceTab = login_Page.getMenuTextOfPractices();
    var usersTab = login_Page.getMenuTextOfUsers();
    var utilitiesTab = login_Page.getMenuTextOfUtilities();
    var iolTab = login_Page.getMenuTextOfIol();
    expect(practiceTab).toEqual('Practices');
    expect(usersTab).toEqual('Users');
    expect(utilitiesTab).toEqual('Utilities');
    expect(iolTab).toEqual('IOL');
  });

  it('User should able to logout successfully', function () {
    login_Page.clickOnCancel();
    commonFunctions.logout();
    var forgotPsw = login_Page.loginText();
    expect(forgotPsw).toEqual('Forgot password?');
  });

  it('User should not able to login with invalid credentials', function () {
    browser.get(test_Data.data.url);
    browser.waitForAngular();
    login_Page.enterUsername(test_Data.data.invaliduname);
    login_Page.enterPassword(test_Data.data.invalidpwd);
    login_Page.clickLogin();
    browser.waitForAngular();
    var getactualtext = login_Page.getErrorLoginMessage();
    expect(getactualtext).toEqual('Please check your username and password');
  });


});
