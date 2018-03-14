/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'node_modules/bootstrap/scss',
        'node_modules/open-iconic/font/css'
      ]
    },
    'ember-cli-bootstrap-4': {
      js: ['util', 'dropdown', 'collapse']
    }
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

  var extraAssets = new Funnel('node_modules/open-iconic/font/fonts', {
    include: ['**/*'],
    destDir: '/assets/fonts'
  });

  var iconPage = new Funnel('node_modules/open-iconic/sprite', {
    include: ['open-iconic.html','open-iconic.min.svg','open-iconic.svg'],
    destDir: '/iconic'
  });

  app.import({
    development: 'node_modules/papaparse/papaparse.js',
    production:  'node_modules/papaparse/papaparse.min.js'
  });

  return app.toTree([extraAssets,iconPage]);
};
