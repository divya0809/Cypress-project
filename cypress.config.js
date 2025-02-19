const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http\://10.1.0.83/\#/",
    watchForFileChanges: false,
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Enable screenshots on test failure

    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      email: "divya.chaudhari@neilsoft.com",
      password: "Neilsoft@105",
      OTP: "123459",
      
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
},  
})







