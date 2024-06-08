import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(studentArray, city, gradesArray) {
  if (!(studentArray instanceof Array)) return [];
  return getStudentsByLocation(studentArray, city).map((studentObj) => {
    // edit on a copy of param to satisfy eslint (no-param-reassign)
    const studentObjCopy = { ...studentObj };
    for (const gradeObj of gradesArray) {
      if (gradeObj.studentId === studentObjCopy.id) {
        studentObjCopy.grade = gradeObj.grade;
      }
    }
    if (studentObjCopy.grade === undefined) studentObjCopy.grade = 'N/A';
    return studentObjCopy;
  });
}
