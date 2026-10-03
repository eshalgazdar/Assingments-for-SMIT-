const marks1 = [78, 45, 92, 66, 88, 54, 91, 73];

const marks2 = [80, 60, 95];
const combinedMarks = marks1.concat(marks2);
console.log("Combined Marks:", combinedMarks);

const slicedMarks = combinedMarks.slice(2, 7);
console.log("Sliced Portion:", slicedMarks);

combinedMarks.splice(5, 1, 99);
console.log("After Modifying Middle Mark:", combinedMarks);

console.log("Total Marks Stored:", combinedMarks.length);

const sortedMarks = [...combinedMarks].sort((a, b) => a - b);
console.log("Sorted Marks (Lowest to Highest):", sortedMarks);

const reportOrder = [...sortedMarks].reverse();
console.log("Reversed Report Order:", reportOrder);

const displayFinalResult = (arr) => {
    console.log("Final Report from Arrow Function:", arr);
};

displayFinalResult(reportOrder);