import calculateTotalMarks, { getFullName } from './studentTools.js';
const firstName = "Eshal";
const lastName = "Gazdar";
const subjectMarks = [85, 90, 78, 92];

const fullName = getFullName(firstName, lastName);
const totalMarks = calculateTotalMarks(...subjectMarks);

console.log("=== Student Results ===");
console.log("Full Name:", fullName);
console.log("Marks in 4 subjects:", subjectMarks.join(", "));
console.log("Total Marks:", totalMarks + " / 400");