import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    if (!(newAmount && typeof newAmount === 'number')) {
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

  static covertPrice(amount, convertionRate) {
    if (!(amount && typeof amount === 'number')) {
      throw new TypeError('Amount must be a number');
    }

    if (!(convertionRate && typeof convertionRate === 'number')) {
      throw new TypeError('ConvertionRate must be a number');
    }

    return amount * convertionRate;
  }
}
