const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi with stubs', () => {
  it('should call Utils.calculateNumber with SUM and correct arguments, and log the correct total', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
