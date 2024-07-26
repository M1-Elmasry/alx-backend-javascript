const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 when inputs are 1.5 and 1.4', () => {
    assert.strictEqual(calculateNumber(1.5, 1.4), 3);
  });

  it('should return 5 when inputs are 2.6 and 2.4', () => {
    assert.strictEqual(calculateNumber(2.6, 2.4), 5);
  });

  it('should return 0 when both inputs are 0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should return -1 when inputs are -0.6 and 0.4', () => {
    assert.strictEqual(calculateNumber(-0.6, 0.4), -1);
  });
});
