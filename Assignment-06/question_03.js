const listA = ["Red", "Green", "Blue"];
const listB = ["Yellow", "Purple", "Orange"];

console.log("List A:", listA);
console.log("List B:", listB);

const combinedColors = listA.concat(listB);
console.log("Combined Array (concat):", combinedColors);

const slicedColors = combinedColors.slice(1, 4);
console.log("Sliced Array (index 1 to 4):", slicedColors);

const removedItem = combinedColors.splice(2, 1);
console.log("Removed element using splice(2, 1):", removedItem);
console.log("Array after splice removal:", combinedColors);

combinedColors.splice(2, 0, "Pink");
console.log("Array after splice addition (inserted 'Pink' at index 2):", combinedColors);

console.log("\n--- Delete Operator Demonstration ---");
delete combinedColors[1];

console.log("Array after delete combinedColors[1]:", combinedColors);
console.log("Array length after delete:", combinedColors.length);
