export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // do nothing
    resolve();
  });
}

const x = getResponseFromAPI();
console.log(x instanceof Promise);
