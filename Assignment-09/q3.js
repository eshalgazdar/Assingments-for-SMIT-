const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];
const profile = { name: "Laiba", className: "Web Development", city: "Karachi" };

console.log("=== ORIGINAL DATA ===");
console.log("Group A:", groupA);
console.log("Group B:", groupB);
console.log("Original Profile:", profile);

const combinedClassList = [...groupA, ...groupB];
console.log("\n1. Combined Class List:", combinedClassList);

const groupACopy = [...groupA, "Zain"];
console.log("\n2. Independent Copy of Group A (with 'Zain'):", groupACopy);
console.log("Original Group A (remains unchanged):", groupA);

const updatedProfileCity = { ...profile, city: "Lahore" };
console.log("\n3. Updated Profile (City changed to Lahore):", updatedProfileCity);

const updatedProfileEmail = { ...profile, email: "laiba.web@example.com" };
console.log("4. Updated Profile (Added Email):", updatedProfileEmail);

console.log("Original Profile (remains unchanged):", profile);