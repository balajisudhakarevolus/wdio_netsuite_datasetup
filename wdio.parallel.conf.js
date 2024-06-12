const { config: baseConfig } = require('./base.conf.js');
const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack-build-2'
    }
  },
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: '120.0',
        os: 'Windows',
        osVersion: '10'
      }
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        browserVersion: '15.6',
        os: 'OS X',
        osVersion: 'Monterey'
      }
    },
    {
      browserName: 'Chromium',
      'bstack:options': {
        deviceOrientation: 'portrait',
        deviceName: 'iPhone 13',
        osVersion: '15'
      }
    },
    {
        browserName: 'chrome',
        'bstack:options': {
          deviceName: 'Samsung Galaxy S20',
        },
    },
  ],
};
exports.config = { ...baseConfig, ...parallelConfig };
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});