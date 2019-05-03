# Playground for wdio questions

## How to run it:

1) Chrome internet browser ([Official chrome website](https://www.google.com/chrome/))
3) Node.js installed ([Official Node.js website](https://nodejs.org))
4) Newest versions of Python 2 installed and added to system PATH ([Official Python website](https://www.python.org/downloads/))  
*(it's needed in order to use webdriver-io cli (@wdio/cli) package)*
5) Selenium webdriver manager npm package installed globally: *`npm i -g webdriver-manager`*  
*(this lib is used to start selenium standalone driver. By default it installs only chrome browser driver)*
6) Update *webdriver-manager* binaries with *`webdriver-manager update --standalone`* command
7) Restore npm packages use command: *`npm i`* (in root project directory)
8) Start selenium standalone server: *`webdriver-manager start`* (in separate command line)
9) Run the tests with following command: *`npm test -- --suite allSpecs`* (in root project directory)