// api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('test Api', () => {
  it('should return the correct status code', () => new Promise((done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  }));

  it('should return the correct result', () => new Promise((done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  }));

  it('should return the correct content type', () => new Promise((done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /text\/html/);
        done();
      });
  }));
});
