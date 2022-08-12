/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      '@fuse': path.resolve(__dirname, 'src/@fuse'),
      '@lodash': path.resolve(__dirname, 'src/@lodash'),
      '@mock-api': path.resolve(__dirname, 'src/@mock-api'),
      '@history': path.resolve(__dirname, 'src/@history'),
      app: path.resolve(__dirname, 'src/app'),
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  };
  return config;
};
