// Question 1. Create a grades object that stores a set of student grades in an object.
// Provide a function for adding a grade and a function for displaying the student’s grade average.

// Grades Object
class Grades {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

// function for adding grade
  add(grade) {
    this.grades.push(grade);
  }

// function for displaying the student's grade average
  average() {
    let total = this.grades.reduce((a, b) => a + b);
    let averageGrade = total / this.grades.length;

    return `${this.name} average grade is ${averageGrade.toFixed(2)}`;
  }
}

// Grades declaration for the first student
const studentOne = new Grades("John");

// Adding gardes for the first student
studentOne.add(25);
studentOne.add(55);
studentOne.add(96);

// Grades declaration for the second student
const studentTwo = new Grades("James");

// Adding gardes for the second student
studentTwo.add(94);
studentTwo.add(95);
studentTwo.add(96);

// Display first student average grades
console.log(studentOne.average());

// Displaying second student average grades
console.log(studentTwo.average());
