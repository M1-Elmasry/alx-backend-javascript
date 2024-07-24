import readDatabase from '../utils';

// eslint-disable-next-line no-unused-vars
class StudentsController {
  static getAllStudents(request, response) {
    const messages = [];
    readDatabase(request.databaseFilePath)
      .then((result) => {
        response.statusCode = 200;
        messages.push('This is the list of our students');
        const majors = Object.keys(result)
          .sort((a, b) => (a.toLowerCase() >= b.toLowerCase() ? 1 : -1));
        for (const key of majors) {
          const studentsNum = result[key].length;
          const studentsNames = result[key].join(', ');
          messages.push(`Number of students in ${key}: ${studentsNum}. List: ${studentsNames}`);
        }
      })
      .catch((error) => {
        response.statusCode = 500;
        messages.push(error.message);
      })
      .finally(() => {
        response.end(messages.join('\n'));
      });
  }

  static getAllStudentsByMajor(request, response) {
    const messages = [];
    readDatabase(request.databaseFilePath)
      .then((result) => {
        const allowedToAccessMajors = ['CS', 'SWE'];
        if (!allowedToAccessMajors.includes(request.params.major)) {
          response.statusCode = 500;
          messages.push('Major parameter must be CS or SWE');
        } else {
          const studentsNames = result[request.params.major].join(', ');
          response.statusCode = 200;
          messages.push(`List: ${studentsNames}`);
        }
      })
      .catch((error) => {
        response.statusCode = 500;
        messages.push(error.message);
      })
      .finally(() => {
        response.end(messages.join('\n'));
      });
  }
}

export default StudentsController;
