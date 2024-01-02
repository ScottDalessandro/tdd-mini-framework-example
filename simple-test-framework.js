function specify(name, cb) {
    if (!cb) {
      console.log(`  - PENDING: ${name}`);
      return;
    }
  
    try {
      cb();
      console.log(`  \u2713 ${name}`);
    } catch (err) {
      console.log(`\u2717\u2717\u2717 ${name}`);
      console.error(err);
    }
  }
  
  function assertEquals(actual, expected, failureMessage) {
    if (actual !== expected) {
      throw new Error(`${failureMessage}\nExpected ${expected}, got ${actual}`);
    }
  }
  
  function assertThrows(fn, failureMessage) {
    try {
      fn();
    } catch (err) {
      // happy path
      return;
    }
  
    throw new Error(
      `${failureMessage}\nExpected an error to be thrown but saw none`
    );
  }

  module.exports = {
    specify,
    assertEquals,
    assertThrows
  }