const { createServer } = require('http');
const fs = require('fs').promises;

const port = 1245;
const databaseFilePath = process.argv[2];

function csvToJson(data) {
  const jsonData = {};
  const lines = data.split('\n');
  // remove the header line
  lines.shift();
  // transform lines to array of arrays of 4 fields
  let fields = lines.map((item) => item
    .trim()
    .split(',')
    .map((item) => item.trim()));
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

async function countStudents(filePath) {
  try {
    const messages = [];
    const data = await fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' });

    const studentsData = csvToJson(data);

    const totalStudents = Object.values(studentsData).reduce((acc, curr) => acc + curr.length, 0);
    messages.push(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsData)) {
      const studentNames = students.map((student) => student.firstname).join(', ');
      messages.push(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
    }

    return messages;
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw new Error(err);
    }
  }
}

function home(res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
}

async function students(res) {
  try {
    const messages = await countStudents(databaseFilePath);
    messages.unshift('This is the list of our students');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(messages.join('\n'));
  } catch (err) {
    res.statusCode = 500;
    res.write(`Error: ${err.message}`);
  }
}

const app = createServer(async (req, res) => {
  const routes = { '/': home, '/students': students };
  const routeHandler = routes[req.url];
  if (routeHandler) {
    await routeHandler(res);
    res.end();
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port);

module.exports = app;
