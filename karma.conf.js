const webpack = require('webpack');
const path = require('path');

require('karma-common-js');

module.exports = function(config) {
  config.set({

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // make it possible to debug test in chrome
    browserNoActivityTimeout: 3000000,

    // https://github.com/kastork/react-karma-rewire-webpack
    singleRun: true, //just run once by default

    frameworks: ['mocha', 'chai-sinon'], //use the mocha test framework

    files: [
      'tests.webpack.js', //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'], //preprocess with webpack and a sourcemap loader
    },
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        {
          type: 'html',
          subdir: 'html',
          includeAllSources: true,
        },
        {
          type: 'cobertura',
          subdir: 'cobertura',
        },
      ],
    },

    junitReporter: {
      outputDir: 'reports',
      outputFile: 'reports/test-results.xml',
      suite: '',
    },

    // see https://github.com/webpack/karma-webpack/issues/23
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        preLoaders: [
          {
            test: /^(?!.*test\.js$).*[\.js]$/,
            include: path.resolve('src'),
            loader: 'babel',
          },
          // transpile and instrument testing files with isparta
          {
            test: /\.js$/,
            include: path.resolve('src'),
            loader: 'isparta',
          },
        ],
        loaders: [
          {test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/},
        ]
      },
      plugins: [
        new webpack.NormalModuleReplacementPlugin(/^test-helper$/, __dirname + '/test/test-helper.js'),
      ],
    },
    webpackServer: {
      noInfo: true, //please don't spam the console when running in karma!
    },
  });
};
