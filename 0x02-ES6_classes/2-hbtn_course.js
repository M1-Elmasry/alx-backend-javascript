export default class ClassRooms {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newName) {
    if (!(newName && typeof newName === 'string')) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (!(newLength && typeof newLength === 'number')) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!(newStudents && Array.isArray(newStudents) && newStudents.every((element) => typeof element === 'string'))) {
      throw new TypeError('Students must be a array of strings');
    }
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
