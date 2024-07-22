const fs = require('fs');

function csvToJson(data) {
  const jsonData = {};
  const lines = data.split('\n');
  // remove the header line
  lines.shift();
  // transform lines to array of arrays of 4 fields
  let fields = lines.map((item) => item.split(','));
  // remove empty lines if exists (will be array of one item '')
  fields = fields.filter((item) => item.length === 4);

  for (const i of fields) {
    const obj = {
      firstname: i[0],
      lastname: i[1],
      age: i[2],
    };

    const key = i[3];

    if (!jsonData[key]) {
      jsonData[key] = [];
    }

    jsonData[key].push(obj);
  }
  return jsonData;
}

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, { encoding: 'utf-8', flag: 'r' });

    const studentsData = csvToJson(data);

    const totalStudents = Object.values(studentsData).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsData)) {
      const studentNames = students.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw new Error(err);
    }
  }
}

module.exports = countStudents;
