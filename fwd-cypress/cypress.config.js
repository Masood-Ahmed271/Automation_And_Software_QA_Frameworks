const { defineConfig } = require("cypress");
const config = require('./config.json');

// Setting base url for e2e tests
module.exports = defineConfig({
  e2e: {
    baseUrl: config.baseUrl,
    env: {
      accessToken : config.accessToken
    },
  },
});
