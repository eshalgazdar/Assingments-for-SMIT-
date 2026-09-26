const students = ["Alice", "Bob", "Charlie", "David", "Emma"];
console.log("Initial students list:", students);

students.push("Frank");
console.log("After push('Frank'):", students);

const removedLast = students.pop();
console.log("Removed student using pop():", removedLast);
console.log("Array after pop():", students);

students.unshift("Grace");
console.log("After unshift('Grace'):", students);

const removedFirst = students.shift();
console.log("Removed student using shift():", removedFirst);
console.log("Array after shift():", students);

console.log("Final number of students (length):", students.length);