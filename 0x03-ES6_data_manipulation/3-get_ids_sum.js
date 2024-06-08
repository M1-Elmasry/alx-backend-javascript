import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentsArray) {
  if (!(studentsArray instanceof Array)) return [];
  return getListStudentIds(studentsArray).reduce((prev, curr) => prev + curr, 0);
}
