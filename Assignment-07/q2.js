const prices = [1200, 450, 3000, 750, 1500, 250];
console.log("Original Prices:", prices);

const lowToHigh = [...prices].sort((a, b) => a - b);
console.log("Prices Lowest to Highest:", lowToHigh);

const highToLow = [...prices].sort((a, b) => b - a);
console.log("Prices Highest to Lowest:", highToLow);

const reversedList = [...prices].reverse();
console.log("Original List:", prices);
console.log("Reversed Version:", reversedList);

const randomPromo = [...prices].sort(() => Math.random() - 0.5);
console.log("Random Promotional Ordering:", randomPromo);