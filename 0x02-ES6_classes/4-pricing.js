import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency && newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }
    this._currency = newCurrency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, convertionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof convertionRate !== 'number') {
      throw new TypeError('convertion rate must be a number');
    }

    return amount * convertionRate;
  }
}
