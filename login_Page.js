var commonFunctions = require('../TestData/commonFunctions.js');
var helpers = require('protractor-helpers');
var login_Page = function () {

    this.waitForURLContain = function (urlExpected, timeout) {
        try {
            const condition = browser.ExpectedConditions;
            browser.wait(condition.urlContains(urlExpected), timeout);
        } catch (e) {
            console.error('URL not contain text.', e);
        };


    };
    this.enterUsername = function (value) {
        commonFunctions.waitForElementById('username');
        element(by.id('username')).sendKeys(value);
    };

    this.enterPassword = function (value) {
        commonFunctions.waitForElementById('password');
        element(by.id('password')).sendKeys(value);
    };

    this.clickLogin = function () {
        element(by.id('loginButton')).click();
    };

    this.loginText = function () {
        commonFunctions.waitForElementById('forgotButton');
        return element(by.id('forgotButton')).getText();
    };

    this.getErrorLoginMessage = function () {
        return element(by.css('form>div:nth-of-type(3)')).getText();
    };

    this.clickOnDropDown = function () {
        elm = element(by.css('img:nth-of-type(2)'));
        helpers.waitForElement(elm, 3000, 'element not find');
        elm.click();
    };

    this.logoutElement = function () {

        var EC = protractor.ExpectedConditions;
        var e = element(by.linkText('Log Out'));
        browser.wait(EC.visibilityOf(e), 10000);
        expect(e.isDisplayed()).toBeTruthy();
        return e;

    },

        this.getMenuTextOfPractices = function () {

            browser.wait(element(by.id('menuPractices')).isPresent(), 5000);
            return element(by.id('menuPractices')).getText();

        };

    this.getMenuTextOfUsers = function () {
        browser.wait(element(by.id('menuUsers')).isPresent(), 5000);
        return element(by.id('menuUsers')).getText();

    };

    this.getMenuTextOfUtilities = function () {
        browser.wait(element(by.id('menu-utilities')).isPresent(), 5000);
        return element(by.id('menu-utilities')).getText();

    };

    this.getMenuTextOfIol = function () {
        browser.wait(element(by.id('menuIol')).isPresent(), 5000);
        return element(by.id('menuIol')).getText();
    };

    this.verifyalconlogo = function () {
        return element(by.css('body > app-root > app-login > div > div > b')).getText();
    };




    this.rememberme = function () {
        return element(by.id('rememberMeCheck')).click();
    };

    this.forgotpass = function () {
        return element(by.linkText('Forgot password?')).click();
    };

    this.clickOnMenu = function () {
        commonFunctions.waitForElementById('dhs-header-menulink');
        element(by.id('dhs-header-menulink')).click();
    };

    this.clickOnCancel = function () {
        commonFunctions.waitForElementById('dhs-sidebarmenu-close');
        element(by.id('dhs-sidebarmenu-close')).click();
    };
    // this.checkPopUp = function(){
         
    //      if(element(by.xpath('/html/body/ngb-modal-window/div/div/app-alcondhs-login-policies-approval-modal'))== null){
    //      var popup = element(by.xpath('/html/body/ngb-modal-window/div/div/app-alcondhs-login-policies-approval-modal'));
    //     popup.isDisplayed().then(function(displayed){
    //         if(displayed){
    //             console.log("Terms and Condition visible");
    //             element(by.id('termsAndConditionAgreeCheck')).click();
    //             element(by.id('privacyPolicyAgreeCheck')).click();
    //             element(by.id('businessAssociateAgreementCheck')).click();
    //             element(by.buttonText('I AGREE')).click();
    //         }else{
    //             console.log("Terms and Condition is not visible")
    //         }
        
    //     })}
    //     else{
    //         console.log("Terms and Condition is not visible")
    //     }
    // };

    this.checkPopUp = function(){
         
        if(element(by.xpath('/html/body/ngb-modal-window/div/div/app-alcondhs-login-policies-approval-modal'))!== null){
            console.log("Terms and Condition is not visible");
        }
       else{
        var popup = element(by.xpath('/html/body/ngb-modal-window/div/div/app-alcondhs-login-policies-approval-modal'));
        popup.isDisplayed().then(function(displayed){
            if(displayed){
                console.log("Terms and Condition visible");
                element(by.id('termsAndConditionAgreeCheck')).click();
                element(by.id('privacyPolicyAgreeCheck')).click();
                element(by.id('businessAssociateAgreementCheck')).click();
                element(by.buttonText('I AGREE')).click();
            }
        
        })
       }
   };
};
module.exports = new login_Page();
