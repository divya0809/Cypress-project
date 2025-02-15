const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://10.1.0.83/#/login",
    watchForFileChanges: false,
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Enable screenshots on test failure

    },
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on);
        allureWriter(on, config);
      return config;
    },
    env: {
      email: "divya.chaudhari@neilsoft.com",
      password: "Neilsoft@105",
      OTP: "123459",
      allureReuseAfterSpec: true,
      users: [
          { "username": "purva.bharambe@neilsoft.com", "password": "Neilsoft@1" },
          { "username": "divya.chaudhari@neilsoft.com", "password": "Neilsoft@105" },
          { "username": "saurabh.pawar@neilsoft.com", "password": "Neilsoft@1" },
        ]
      
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
},  

})







