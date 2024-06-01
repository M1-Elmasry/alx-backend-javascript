export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set name(newName) {
    if (!(newName && typeof newName === 'string')) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set code(newCode) {
    if (!(newCode && typeof newCode === 'string')) {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
