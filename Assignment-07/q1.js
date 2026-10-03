const students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];
console.log("Original Students List:", students);

const hasAyesha = students.includes('Ayesha');
console.log("Is Ayesha present?", hasAyesha);

const firstSaraIndex = students.indexOf('Sara');
console.log("First occurrence of Sara index:", firstSaraIndex);

const lastSaraIndex = students.lastIndexOf('Sara');
console.log("Last occurrence of Sara index:", lastSaraIndex);
 A
const firstStudentWithA = students.find(student => student.startsWith('A'));
console.log("First student starting with 'A':", firstStudentWithA);

const firstIndexWithA = students.findIndex(student => student.startsWith('A'));
console.log("Position of first student starting with 'A':", firstIndexWithA);

const lastLongName = students.findLast(student => student.length > 4);
const lastLongNameIndex = students.findLastIndex(student => student.length > 4);
console.log("Last student with name length > 4:", lastLongName, "at index:", lastLongNameIndex);