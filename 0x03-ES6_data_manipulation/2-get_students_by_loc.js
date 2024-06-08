export default function getStudentsByLocation(studentsArray, location) {
  if (!(studentsArray instanceof Array)) return [];
  return studentsArray.filter((obj) => obj.location === location);
}
