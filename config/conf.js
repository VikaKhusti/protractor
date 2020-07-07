exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',
 
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
 
  // require feature files
  specs: [
    '../features/calc.feature' // accepts a glob
  ],
 
  cucumberOpts: {
    // require step definitions
    require: [
      '../features/calc_step.steps.js',
      '../env.js'// accepts a glob
    ]
  }
};