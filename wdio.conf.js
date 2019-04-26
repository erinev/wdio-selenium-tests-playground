/* eslint-disable import/no-unresolved */
const chai = require('chai');

const wdioConfig = {
  sync: false,

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

  specs: ['./specs/test.spec.js'],
  exclude: [],

  onPrepare(config) {
    // On Prepare logic here (create folder for failed screenshots)
  },
  before() {
    global.expect = chai.expect;
    chai.Should();

    // On before logic here (this logic might throw errors (let say login failed because login button is not visible after timeout))

    throw Error('!!!!!!!!!!!!!!!!!!!! Some error is thrown in before() hook !!!!!!!!!!!!!!!!!!!!'); // TODO: why thrown exceptions (waitUntil, etc) doesn't stop execution ?
  },
  afterTest(test) {
    // If test failed take screenshot logic here
  }
};

exports.config = wdioConfig;
