var specReporter = require('jasmine-spec-reporter').SpecReporter;
var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  directConnect: true,
  // Framework to use.
  framework: 'jasmine2',

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {

    browserName: 'chrome',

    chromeOptions: {
      args: ["--disable-gpu", "--window-size=800,600"]
    }

  },

  allScriptsTimeout: 60000,

  //  multiCapabilities: [{
  //    'browserName': 'firefox'
  //  }, {
  //    'browserName': 'chrome'
  //  }],

  //Spec patterns are relative to the current working directory when
  //protractor is called.
  specs: [
    'src/Master_Data/Tests/createPracticeUserSpec.js'
/*
  'src/SmokeSuite/Tests/loginSpec.js',
  'src/SmokeSuite/Tests/listPracticeSpec.js',
  'src/SmokeSuite/Tests/listPracticeUserSpec.js',
  'src/SmokeSuite/Tests/listFacilitySpec.js',
  'src/SmokeSuite/Tests/listLensSpec.js',
  'src/SmokeSuite/Tests/listLensFamilySpec.js',
  'src/SmokeSuite/Tests/listManufacturerSpec.js',
  'src/SmokeSuite/Tests/listRegionSpec.js',
  'src/SmokeSuite/Tests/listUserSpec.js',  
  'src/SmokeSuite/Tests/impersonationSpec.js',
*/
  
   ],
   
  // suites: {
  //   createLens: 'src/SmokeSuite/Tests/createPracticeUserSpec.js',
  // },

  onPrepare: function () {


    browser.driver.manage().window().maximize();
    var width = 1600;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);

    jasmine.getEnv().addReporter(new specReporter({
      spec: {
        displayStacktrace: true,
        displayFailuresSummary: true,
        displayPendingSummary: true,
        displaySuccessfulSpec: true,
        displayFailedSpec: true,
        displayPendingSpec: true,
        displaySpecDuration: true
      },
      summary: {
        displayDuration: true
      },
    }),
      jasmine.getEnv().addReporter(
        new jasmine2HtmlReporter({

          savePath: 'e2e/src/SmokeSuite/SmokeReports',
          cleanDestination: true,
          fileName: 'ALCON-Reports',
          fileNameDateSuffix: false,
          takeScreenshots: false
        }),
      ),
    );

  },
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 700000,
    print: function () {
    }
  },

};
