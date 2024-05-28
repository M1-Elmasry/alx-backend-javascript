export default function createIteratorObject(report) {
  return {
    ...report,
    [Symbol.iterator]() {
      const allEmployeesNames = [].concat(...Object.values(this.allEmployees));
      let currentIdx = 0;
      return {
        next() {
          if (currentIdx < allEmployeesNames.length) {
            const x = { value: allEmployeesNames[currentIdx], done: false };
            currentIdx += 1;
            return x;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
