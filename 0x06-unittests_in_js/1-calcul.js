function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      return b === 0 ? 'Error' : roundedA / roundedB;
    default:
      break;
  }

   return 'Error: Unknown type';
}

module.exports = calculateNumber;
