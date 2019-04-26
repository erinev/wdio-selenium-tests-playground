describe('Describe -', () => {
  beforeEach(() => {
    browser.url(`file:///${__dirname}/../app/index.html`);
  });

  it('console outputs', () => {
    const enabledButton = $('a.create-link-enabled');
    const disabledButton = $('a.create-link-disabled');

    console.log(`isEnabled() result for ENABLED button: ${enabledButton.isEnabled()}`);
    console.log(`isEnabled() result for DISABLED button: ${disabledButton.isEnabled()}`);

    const getEnabledButtonAttribute = enabledButton.getAttribute('disabled');
    const getDisabledButtonAttribute = disabledButton.getAttribute('disabled');

    console.log(`getAttribute('disabled') value for ENABLED button: ${getEnabledButtonAttribute}`);
    console.log(`getAttribute('disabled') value for DISABLED button: ${getDisabledButtonAttribute}`);

    // result:
    /*
      [0-0] isEnabled() result for ENABLED button: true
      [0-0] isEnabled() result for DISABLED button: true  <- incorrect because it says true for DISABLED button
      [0-0] getAttribute('disabled') value for ENABLED button: null
      [0-0] getAttribute('disabled') value for DISABLED button: true <- correct disabled attribute is detected for DISABLED button
    */
  });

  it('wait until disabled button becomes enabled -> using waitForEnabled()', () => {
    const disabledButton = $('a.create-link-disabled');

    const timeoutMessage = `'${disabledButton.selector}' is not enabled after 5s timeout!`;
    disabledButton.waitForEnabled(5000, false, timeoutMessage);
  });

  it('wait until disabled button becomes enabled -> using waitUntil and checking disabled attribute', () => {
    const disabledButton = $('a.create-link-disabled');

    const waitUntilElementIsNotDisabledCondition = () => !disabledButton.getAttribute('disabled');

    const timeoutMessage = `'${disabledButton.selector}' is not enabled after 5s timeout!`;
    browser.waitUntil(waitUntilElementIsNotDisabledCondition, 5000, timeoutMessage, 500);
  });
});
