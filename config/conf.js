// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    '../test/calculator.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
