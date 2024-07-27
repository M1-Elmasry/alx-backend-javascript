const assert = require('assert');
const request = require('request');

const PORT = 7865;

describe('api test', () => {
  it('should return status code 200', () => new Promise((done) => {
    request(`http://localhost:${PORT}`, (err, res) => {
      if (err) {
        throw err;
      } else {
        assert.equal(res.statusCode, 200);
        done();
      }
    });
  }));

  it('should return correct message', () => new Promise((done) => {
    request(`http://localhost:${PORT}`, (err, res, body) => {
      if (err) {
        throw err;
      } else {
        assert.equal(body, 'Welcome to the payment system');
        done();
      }
    });
  }));
});
