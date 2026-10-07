let student1 = {
  name: 'Hamza Khan',
  class: '10th Grade',
  chemistryMarks: 85,
  mathematicsMarks: 90,
  urduMarks: 78,
  englishMarks: 88,
  
  calculateResult() {
    let total = this.chemistryMarks + this.mathematicsMarks + this.urduMarks + this.englishMarks;
    let percentage = (total / 400) * 100;
    return { total, percentage };
  }
};

console.log("--- Question 5: Student Result Object ---");

console.log("Student 1 Name:", student1.name);
console.log("Student 1 Class:", student1.class);

console.log("Student 1 Mathematics Marks:", student1['mathematicsMarks']);

let result1 = student1.calculateResult();
console.log(`${student1.name}'s Percentage: ${result1.percentage}% (Total: ${result1.total}/400)`);

let student2 = {
  name: 'Ayesha Malik',
  class: '10th Grade',
  chemistryMarks: 92,
  mathematicsMarks: 95,
  urduMarks: 88,
  englishMarks: 90,
  
  calculateResult() {
    let total = this.chemistryMarks + this.mathematicsMarks + this.urduMarks + this.englishMarks;
    let percentage = (total / 400) * 100;
    return { total, percentage };
  }
};

let result2 = student2.calculateResult();
console.log(`${student2.name}'s Percentage: ${result2.percentage}% (Total: ${result2.total}/400)`);

console.log("Before deleting property from student1:", student1);
delete student1.englishMarks;
console.log("After deleting 'englishMarks' from student1:", student1);