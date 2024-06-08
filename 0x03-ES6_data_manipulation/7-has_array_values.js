export default function hasValuesFromArray(set, array) {
  const arrayToSet = new Set(array);
  return set.isSupersetOf(arrayToSet);
}
