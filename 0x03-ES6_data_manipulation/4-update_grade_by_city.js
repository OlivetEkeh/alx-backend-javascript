const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!(students instanceof Array) || !(newGrades instanceof Array)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
};

export default updateStudentGradeByCity;
