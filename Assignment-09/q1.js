const bookRecord1 = ["BK-104", "JavaScript for Beginners", "Programming", 1200];
const [bookId, bookTitle, , price] = bookRecord1;

console.log("--- Book 1 Details ---");
console.log("Book ID:", bookId);
console.log("Title:", bookTitle);
console.log("Price: $", price);
console.log(`Readable Sentence: The book "${bookTitle}" (ID: ${bookId}) is available for $${price}.\n`);
const bookRecord2 = ["BK-105", "Learning ES6"];
const [bookId2, bookTitle2, category = "General"] = bookRecord2;

console.log("--- Book 2 Details (With Default Category) ---");
console.log("Book ID:", bookId2);
console.log("Title:", bookTitle2);
console.log("Category:", category);
console.log(`Readable Sentence: "${bookTitle2}" belongs to the ${category} category.`);
console.log("\nOriginal Array 1:", bookRecord1);
console.log("Original Array 2:", bookRecord2);