let orders = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

console.log("Question 1: Online Store Sales Report");
console.log("Original Orders:", orders);

let firstLargeOrder = orders.find(amount => amount > 2000);
console.log("First order > 2000:", firstLargeOrder);

let ordersGreaterThan1000 = orders.filter(amount => amount > 1000);
console.log("Orders > 1000:", ordersGreaterThan1000);

let totalSales = orders.reduce((total, amount) => total + amount, 0);
console.log("Total Sales Amount:", totalSales);