export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const itm of array) {
    newArray.push(appendString + itm);
  }

  return newArray;
}
