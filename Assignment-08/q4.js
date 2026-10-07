let inventory = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200]
]);

inventory.set('mangoes', 150);
console.log("Added 'mangoes'.");

inventory.set('bananas', 350);
console.log("Updated 'bananas' quantity to 350.");

console.log("Quantity of apples:", inventory.get('apples'));

console.log("Does 'oranges' exist in inventory?", inventory.has('oranges'));

inventory.delete('mangoes');
console.log("Removed 'mangoes' from inventory.");

console.log("Current inventory size:", inventory.size);

console.log("--- Detailed Inventory List ---");
for (let [product, quantity] of inventory) {
  console.log(`Product: ${product}, Quantity: ${quantity}`);
}

inventory.clear();
console.log("Inventory cleared. Final size:", inventory.size);

