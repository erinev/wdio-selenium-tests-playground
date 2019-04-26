describe('Test describe -', () => {
  beforeEach(() => {
    // Before each test logic here
  });

  it('should test something', () => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('This should never be reached because exception is thrown in \'before()\' hook');
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    true.should.be.equal(false);
  });
});
