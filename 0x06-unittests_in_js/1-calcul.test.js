const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 4 for SUM with inputs 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
  });

  it('should return 5 for SUM with inputs 2.6 and 2.4', () => {
    assert.strictEqual(calculateNumber('SUM', 2.6, 2.4), 5);
  });

  it('should return -2 for SUBTRACT with inputs 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
  });

  it('should return 0 for SUBTRACT with inputs 2.3 and 2.4', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 2.4), 0);
  });

  it('should return 5 for DIVIDE with inputs 9.5 and 2.2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.2), 5);
  });

  it('should return "Error" for DIVIDE with inputs 4 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });

  it('should return "Error: Unknown type" for unknown operation type', () => {
    assert.strictEqual(calculateNumber('UNKNOWN', 1, 2), 'Error: Unknown type');
  });
});
