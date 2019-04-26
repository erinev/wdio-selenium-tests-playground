describe('Test describe -', () => {
  beforeEach(() => {
    // Before each test logic here
  });

  it('should find disabled link using getAttribute', () => {
    browser.url('file:///D:/github/erinev/wdio-selenium-tests-playground/app/index.html');

    const disabledButton = $('a.create-link-disabled');
    const enabledButton = $('a.create-link-enabled');

    console.log(`IsEnabled() result for disabled button: ${disabledButton.isEnabled()}`);
    console.log(`IsEnabled() result for enabled button: ${enabledButton.isEnabled()}`);

    const getDisabledButonAttribute = disabledButton.getAttribute('disabled');
    const getEnabledButonAttribute = enabledButton.getAttribute('disabled');

    console.log(`GetAttribute() value for disabled button: ${getDisabledButonAttribute}`);
    console.log(`GetAttribute() value for enabled button: ${getEnabledButonAttribute}`);


  });
});
