class Grades {
  constructor() {
    this.grades = [];
  }

  add(grade) {
    this.grades.push(grade);
  }

  average() {
    let total = this.grades.reduce((a, b) => a + b);

    return total / this.grades.length;
  }
}

const studentGrades = new Grades();

studentGrades.add(25);
studentGrades.add(55);
studentGrades.add(96);

console.log(studentGrades.average());
