export default function iterateThroughObject(reportWithIterator) {
  let strNames = '';

  for (const name of reportWithIterator) {
    strNames += `${name} | `;
  }

  return strNames.slice(0, strNames.length - 3);
}
