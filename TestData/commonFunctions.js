var helpers = require('protractor-helpers');
var commonFunctions = function () {

    this.waitForElement = function (elementId) {

        browser.wait(function () {
            return $('#elementId').isPresent();
        }, 30000);

    };

    this.waitForElementById = function (elementId) {
        browser.wait(function () {
            return browser.isElementPresent(by.id(elementId));
        }, 30000);
    };

    this.waitForElementByXpath = function (elementxpath) {
        browser.wait(function () {
            return browser.isElementPresent(by.xpath(elementxpath));
        }, 30000);
    };

    this.waitForElementByLinkText = function (elementtext) {
        browser.wait(function () {
            return browser.isElementPresent(by.linkText(elementtext));
        }, 30000);
    };

    this.waitForElementByCss = function (elementCss) {
        browser.wait(function () {
            return browser.isElementPresent(by.css(elementCss));
        }, 30000);
    };

    this.logout = function () {
        browser.wait(function () {
            return browser.isElementPresent(by.id('dhs-header-menulink'));
        }, 30000);
        var menu = element(by.id('dhs-header-menulink'));
        menu.click();
        browser.wait(function () {
            return browser.isElementPresent(by.id('sidebar-logout'));
        }, 30000);
        var side = element(by.id('sidebar-logout'));
        side.click();
    };
    this.getRandomNum = function (min, max) {

        return parseInt(Math.random() * (max - min) + min);

    };
    this.clickOnMenu = function () {
        waitForElementById('dhs-header-menulink');
        element(by.id('dhs-header-menulink')).click();
    };

    this.waitForElementByLinkText = function (elementtext) {
        browser.wait(function () {
            return browser.isElementPresent(by.linkText(elementtext));
        }, 30000);
    };
    this.waitForElementByButtonText = function (elementtext) {
        browser.wait(function () {
            return browser.isElementPresent(element(by.buttonText(elementtext)));
        }, 30000);
    };

    this.randomString = function (lenght) {
        var text = "alcon";
        var charset = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < lenght; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        return text;
    }
}
module.exports = new commonFunctions();
