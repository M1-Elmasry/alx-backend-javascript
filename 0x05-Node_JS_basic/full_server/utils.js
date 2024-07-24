const fs = require('fs');

function csvToJson(data) {
  const jsonData = {};
  const lines = data.split('\n');
  // remove the header line
  lines.shift();
  // transform lines to array of arrays of 4 fields
  let fields = lines.map((item) => item
    .trim()
    .split(','));
  // remove empty lines if exists (will be array of one item '')
  fields = fields.filter((item) => item.length === 4);

  for (const i of fields) {
    const firstname = i[0];
    const key = i[3];

    if (!jsonData[key]) {
      jsonData[key] = [];
    }

    jsonData[key].push(firstname);
  }
  return jsonData;
}

// eslint-disable-next-line no-unused-vars
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (!err) {
        resolve(csvToJson(data));
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;
