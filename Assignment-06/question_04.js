const sampleArray = [10, 20, 30];
const sampleString = "Hello, JavaScript!";
const sampleNumber = 100;

console.log("Is sampleArray an array?", Array.isArray(sampleArray));
console.log("Is sampleString an array?", Array.isArray(sampleString));
console.log("Is sampleNumber an array?", Array.isArray(sampleNumber));

const showArray = (arr) => {
  console.log("Displaying array inside showArray function:", arr);
};

showArray(sampleArray);

const displayValue = (val) => {
  console.log("Single value output:", val);
};

displayValue("Testing displayValue arrow function.");