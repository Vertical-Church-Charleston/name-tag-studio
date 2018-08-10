/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.plugins = ["s3","s3-index","gzip","revision-data","manifest","build"];
    ENV['s3'] = {
      bucket: 'nametag-studio',
      region: 'us-east-1'
    };
    ENV['s3-index'] = {
      bucket: 'nametag-studio',
      allowOverwrite: true,
      region: 'us-east-1'
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

