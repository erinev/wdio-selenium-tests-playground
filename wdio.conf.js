/* eslint-disable import/no-unresolved */
const chai = require('chai');

const wdioConfig = {
  sync: true,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 30 * 1000,
    bail: 1,
  },

  protocol: 'http',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',

  maxInstances: 1,
  capabilities: [{ browserName: 'chrome', platformName: 'WINDOWS' }],

  logLevel: 'error',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 1,

  waitforTimeout: 20 * 1000,
  waitforInterval: 500,
  connectionRetryTimeout: 30 * 1000,
  connectionRetryCount: 3,

  reporters: ['spec'],
  services: [],

  suites: {
    allSpecs: ['./specs/*.spec.js'],
    customSpec: ['./specs/custom/custom.spec.js']
  },
  
  beforeSuite(suite) {
    console.log('>> [beforeSuite] hook called!');
  },
  
  before(config) {
    global.expect = chai.expect;
    chai.Should();
    
    console.log('>> [before] hook called!');
  },
};

exports.config = wdioConfig;
