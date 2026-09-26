let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];
console.log("Initial Product List:", products);

console.log("Total products count:", products.length);

console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));

products.push("Webcam");
console.log("After push('Webcam'):", products);

products.unshift("Microphone");
console.log("After unshift('Microphone'):", products);

const poppedProduct = products.pop();
console.log("Removed last product (pop):", poppedProduct);

const shiftedProduct = products.shift();
console.log("Removed first product (shift):", shiftedProduct);

const extraProducts = ["Speakers", "Tablet"];
products = products.concat(extraProducts);
console.log("After concat with extra products:", products);

const smallerList = products.slice(0, 3);
console.log("Smaller list (slice first 3 items):", smallerList);

products.splice(1, 1, "Ergonomic Mouse");
console.log("After replacing index 1 using splice():", products);

const productString = products.join(" | ");
console.log("Formatted Product List String:", productString);

const displayFinalList = (list) => {
  console.log("--- Final Product List ---");
  console.log(list);
};

displayFinalList(products);
console.log("Verification - Is product list an array?", Array.isArray(products));