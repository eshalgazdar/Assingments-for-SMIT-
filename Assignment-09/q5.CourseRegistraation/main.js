import { courses } from './courses.js';
import { formatCourseSummary } from './courseUtils.js';

console.log("=== 1. Original Course List ===");
courses.forEach(function(c) {
    console.log(formatCourseSummary(c));
});

const [firstCourse] = courses;
const { courseName: extractedName, fee: extractedFee } = firstCourse;
console.log("\n=== 2. Extracted Course Info ===");
console.log("Extracted Course Name:", extractedName, ", Fee: Rs.", extractedFee);

const newCourse = { id: 4, courseName: "Cloud Computing", instructor: "Kamran Iqbal", duration: "3 Months", fee: 31000 };
const updatedCourseList = [...courses, newCourse];

console.log("\n=== 3. Extended Course List (Original remains safe) ===");
console.log("Total courses in extended list:", updatedCourseList.length);
updatedCourseList.forEach(function(c) {
    console.log("- " + c.courseName);
});

const targetCourse = courses[1];
const revisedCourse = { ...targetCourse, fee: 14000 };

console.log("\n=== 4. Course Fee Update ===");
console.log("Original Course Details:", targetCourse);
console.log("Revised Course Details:", revisedCourse);

console.log("\n=== All Summaries using Module Helper ===");
updatedCourseList.map(function(c) {
    return formatCourseSummary(c);
}).forEach(function(summary) {
    console.log(summary);
});