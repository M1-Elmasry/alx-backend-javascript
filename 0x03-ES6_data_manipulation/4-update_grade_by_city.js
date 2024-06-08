export default function updateStudentGradeByCity(studentArray, city, gradesArray) {
  return studentArray
    .filter((studentObj) => studentObj.location === city)
    .map((studentObj) => {
      const gradeObj = gradesArray.find((gradeObj) => studentObj.id === gradeObj.studentId);
      return { ...studentObj, grade: gradeObj ? gradeObj.grade : 'N/A' };
    });
}
