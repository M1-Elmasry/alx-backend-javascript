const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber - SUM', () => {
  it('should return 4 for SUM with inputs 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
  });

  it('should return 5 for SUM with inputs 2.6 and 2.4', () => {
    assert.strictEqual(calculateNumber('SUM', 2.6, 2.4), 5);
  });

  it('should return 0 for SUM with inputs -0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
  });

  it('should return -5 for SUM with inputs -2.5 and -2.5', () => {
    assert.strictEqual(calculateNumber('SUM', -2.5, -2.5), -4);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('should return -2 for SUBTRACT with inputs 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
  });

  it('should return 0 for SUBTRACT with inputs 2.3 and 2.4', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 2.4), 0);
  });

  it('should return 0 for SUBTRACT with inputs 2.4 and 2.4', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.4), 0);
  });

  it('should return 1 for SUBTRACT with inputs -1.5 and -2.4', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.4), 1);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('should return 5 for DIVIDE with inputs 9.5 and 2.2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.2), 5);
  });

  it('should return "Error" for DIVIDE with inputs 4 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });

  it('should return 2 for DIVIDE with inputs 4.5 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2), 2.5);
  });

  it('should return -2 for DIVIDE with inputs -4 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -4, 2), -2);
  });

  it('should return -1 for DIVIDE with inputs 1 and -1', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, -1), -1);
  });

  it('should return "Error" for DIVIDE with inputs 0 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
});

describe('calculateNumber - Unknown type', () => {
  it('should return "Error: Unknown type" for unknown operation type', () => {
    assert.strictEqual(calculateNumber('UNKNOWN', 1, 2), 'Error: Unknown type');
  });

  it('should return "Error: Unknown type" for missing operation type', () => {
    assert.strictEqual(calculateNumber(undefined, 1, 2), 'Error: Unknown type');
  });

  it('should return "Error: Unknown type" for empty string operation type', () => {
    assert.strictEqual(calculateNumber('', 1, 2), 'Error: Unknown type');
  });
});
