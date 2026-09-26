const fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
console.log("Original Fruits Array:", fruits);

console.log("Number of elements (length):", fruits.length);

const fruitsString = fruits.toString();
console.log("Array converted to string (toString):", fruitsString);

const firstFruit = fruits.at(0);
const lastFruit = fruits.at(-1);
console.log("First fruit using at(0):", firstFruit);
console.log("Last fruit using at(-1):", lastFruit);

const joinedFruits = fruits.join(" - ");
console.log("Array joined with separator (join):", joinedFruits);