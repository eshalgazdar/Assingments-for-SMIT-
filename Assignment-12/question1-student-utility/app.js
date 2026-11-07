const {
    getIntroduction,
    calculatePercentage
} = require('./student');

// Student information
const name = "Ali";
const course = "Web Development";

const obtainedMarks = 425;
const totalMarks = 500;

// Calling the functions
const introduction = getIntroduction(name, course);

const percentage = calculatePercentage(
    obtainedMarks,
    totalMarks
);

// Displaying student information
console.log("Student Information");
console.log("-------------------");

console.log(introduction);
console.log("Course:", course);
console.log("Percentage:", percentage + "%");

console.log("Node.js Version:", process.version);
