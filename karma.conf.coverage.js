module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: [
      'mocha', 
      'chai', 
      'sinon-chai'
    ],

    plugins : [
      'karma-mocha', 
      'karma-chai', 
      'karma-sinon-chai',
      'karma-sourcemap-loader', 
      'karma-chrome-launcher',
      'karma-coverage', 
      'karma-junit-reporter',
    ],

    files: ['./app-test-coverage.js'],

    flags: [
      '--web-security=false',
      '--ignore-ssl-errors=true'
    ],

    preprocessors: {
      "./app-test-coverage.js":["sourcemap"]
    },

    reporters: [
      'progress',
      'coverage'
    ],

    browsers: [
      'Chrome'
    ],

    port: 9876,
    singleRun: true
  });
}
