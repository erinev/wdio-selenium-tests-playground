describe('Describe -', () => {
  beforeEach(() => {
    browser.url(`file:///${__dirname}/../app/index.html`);
  });

  it.only('console outputs', () => {
    const disabledLink = $('#link-disabled');
    const disabledTextInput = $('#text-input-disabled');
    const disabledButtonInput = $('#button-input-disabled');
    const disabledSelect = $('#select-disabled');
    const disabledTextarea = $('#textarea-disabled');
    const disabledButton = $('#button-disabled');

    console.log(`isEnabled() result for DISABLED link:         ${disabledLink.isEnabled()}`);
    console.log(`isEnabled() result for DISABLED text input:   ${disabledTextInput.isEnabled()}`);
    console.log(`isEnabled() result for DISABLED button input: ${disabledButtonInput.isEnabled()}`);
    console.log(`isEnabled() result for DISABLED select:       ${disabledSelect.isEnabled()}`);
    console.log(`isEnabled() result for DISABLED textarea:     ${disabledTextarea.isEnabled()}`);
    console.log(`isEnabled() result for DISABLED button:       ${disabledButton.isEnabled()}`);

    const getDisabledLinkAttribute = disabledLink.getAttribute('disabled');
    const getDisabledTextInputAttribute = disabledTextInput.getAttribute('disabled');
    const getDisabledButtonInputAttribute = disabledButtonInput.getAttribute('disabled');
    const getDisabledSelectAttribute = disabledSelect.getAttribute('disabled');
    const getDisabledTextareaAttribute = disabledTextarea.getAttribute('disabled');
    const getDisabledButtonAttribute = disabledButton.getAttribute('disabled');

    console.log(`getAttribute('disabled') value for DISABLED link:       ${getDisabledLinkAttribute}`);
    console.log(`getAttribute('disabled') value for DISABLED text input: ${getDisabledTextInputAttribute}`);
    console.log(`getAttribute('disabled') value for DISABLED button input:     ${getDisabledButtonInputAttribute}`);
    console.log(`getAttribute('disabled') value for DISABLED select:           ${getDisabledSelectAttribute}`);
    console.log(`getAttribute('disabled') value for DISABLED textarea:         ${getDisabledTextareaAttribute}`);
    console.log(`getAttribute('disabled') value for DISABLED button:           ${getDisabledButtonAttribute}`);

    // result:
    /*
      [0-0] isEnabled() result for DISABLED link:         true <- doesn't work for disabled link elements (because link is not form element)
      [0-0] isEnabled() result for DISABLED text input:   false
      [0-0] isEnabled() result for DISABLED button input: false
      [0-0] isEnabled() result for DISABLED select:       false
      [0-0] isEnabled() result for DISABLED textarea:     false
      [0-0] isEnabled() result for DISABLED button:       false

      [0-0] getAttribute('disabled') value for DISABLED link:         true
      [0-0] getAttribute('disabled') value for DISABLED text input:   true
      [0-0] getAttribute('disabled') value for DISABLED button input: true
      [0-0] getAttribute('disabled') value for DISABLED select:       true
      [0-0] getAttribute('disabled') value for DISABLED textarea:     true
      [0-0] getAttribute('disabled') value for DISABLED button:       true
    */
  });

  it('wait until disabled button becomes enabled -> using waitForEnabled()', () => {
    const disabledButton = $('#link-disabled');

    const timeoutMessage = `'${disabledButton.selector}' is not enabled after 5s timeout!`;
    disabledButton.waitForEnabled(5000, false, timeoutMessage);
  });

  it('wait until disabled button becomes enabled -> using waitUntil and checking disabled attribute', () => {
    const disabledButton = $('#link-disabled');

    const waitUntilElementIsNotDisabledCondition = () => !disabledButton.getAttribute('disabled');

    const timeoutMessage = `'${disabledButton.selector}' is not enabled after 5s timeout!`;
    browser.waitUntil(waitUntilElementIsNotDisabledCondition, 5000, timeoutMessage, 500);
  });
});
