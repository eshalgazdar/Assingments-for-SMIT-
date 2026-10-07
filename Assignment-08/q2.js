let originalMarks = [45, 78, 92, 61, 88, 54, 73, 95];

console.log("--- Question 2: Student Performance Analyzer ---");
console.log("Original Marks:", originalMarks);

let boostedMarks = originalMarks.map(mark => mark + 5);
console.log("Marks increased by 5:", boostedMarks);

let passingOrHigher = originalMarks.filter(mark => mark >= 70);
console.log("Marks >= 70:", passingOrHigher);

let firstAbove90 = originalMarks.find(mark => mark > 90);
console.log("First mark > 90:", firstAbove90);

let totalMarks = originalMarks.reduce((sum, mark) => sum + mark, 0);

console.log("Original marks remain unchanged:", originalMarks);







