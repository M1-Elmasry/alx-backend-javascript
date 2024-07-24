// eslint-disable-next-line no-unused-vars
class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  }
}

export default AppController;
