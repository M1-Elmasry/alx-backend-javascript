const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber - SUM', () => {
  it('should return 4 for SUM with inputs 1.4 and 2.5', () => {
    expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
  });

  it('should return 5 for SUM with inputs 2.6 and 2.4', () => {
    expect(calculateNumber('SUM', 2.6, 2.4)).to.equal(5);
  });

  it('should return 0 for SUM with inputs -0.4 and 0.4', () => {
    expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
  });

  it('should return -5 for SUM with inputs -2.5 and -2.5', () => {
    expect(calculateNumber('SUM', -2.5, -2.5)).to.equal(-4);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('should return -2 for SUBTRACT with inputs 1.4 and 2.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-2);
  });

  it('should return 0 for SUBTRACT with inputs 2.3 and 2.4', () => {
    expect(calculateNumber('SUBTRACT', 2.3, 2.4)).to.equal(0);
  });

  it('should return 0 for SUBTRACT with inputs 2.4 and 2.4', () => {
    expect(calculateNumber('SUBTRACT', 2.4, 2.4)).to.equal(0);
  });

  it('should return 1 for SUBTRACT with inputs -1.5 and -2.4', () => {
    expect(calculateNumber('SUBTRACT', -1.5, -2.4)).to.equal(1);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('should return 5 for DIVIDE with inputs 9.5 and 2.2', () => {
    expect(calculateNumber('DIVIDE', 9.5, 2.2)).to.equal(5);
  });

  it('should return "Error" for DIVIDE with inputs 4 and 0.2', () => {
    expect(calculateNumber('DIVIDE', 4, 0.2)).to.equal('Error');
  });

  it('should return 2.5 for DIVIDE with inputs 4.5 and 2', () => {
    expect(calculateNumber('DIVIDE', 4.5, 2)).to.equal(2.5);
  });

  it('should return -2 for DIVIDE with inputs -4 and 2', () => {
    expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
  });

  it('should return -1 for DIVIDE with inputs 1 and -1', () => {
    expect(calculateNumber('DIVIDE', 1, -1)).to.equal(-1);
  });

  it('should return "Error" for DIVIDE with inputs 0 and 0', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
});

describe('calculateNumber - Unknown type', () => {
  it('should return "Error: Unknown type" for unknown operation type', () => {
    expect(calculateNumber('UNKNOWN', 1, 2)).to.equal('Error: Unknown type');
  });

  it('should return "Error: Unknown type" for missing operation type', () => {
    expect(calculateNumber(undefined, 1, 2)).to.equal('Error: Unknown type');
  });

  it('should return "Error: Unknown type" for empty string operation type', () => {
    expect(calculateNumber('', 1, 2)).to.equal('Error: Unknown type');
  });
});

