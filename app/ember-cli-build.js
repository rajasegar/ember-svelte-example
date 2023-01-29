'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      webpack: {
        resolve: {
          // see below for an explanation
          alias: {
            svelte: path.resolve('node_modules', 'svelte'),
          },
          extensions: ['.mjs', '.js', '.svelte'],
          mainFields: ['svelte', 'browser', 'module', 'main'],
        },
        module: {
          rules: [
            {
              test: /\.(html|svelte)$/,
              use: 'svelte-loader',
            },
            {
              // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
              test: /node_modules\/svelte\/.*\.mjs$/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
      },
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
