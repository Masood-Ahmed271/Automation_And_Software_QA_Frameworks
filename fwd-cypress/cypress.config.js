const { defineConfig } = require("cypress");

// Setting base url for e2e tests
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
