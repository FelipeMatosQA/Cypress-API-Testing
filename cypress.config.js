const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl:"https://api.restful-api.dev",
    reporterOptions: {
      charts: true,
      reportTitle:'Felipe Matos Portfolio',
      reportPageTitle: 'Felipe Matos Portfolio',
      embeddedScreenshots: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
