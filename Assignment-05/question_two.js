//function with no parameter
function greet() {
    console.log("Welcome to JavaScript!");
}

//function with one parameter
function greetUser(name) {
    console.log("Welcome, " + name + "!");
}

//function with two parameter
function addNumbers(num1, num2) {
    return num1 + num2;
}

greet();

greetUser("Eshal");

let result = addNumbers(32, 32);

console.log(result);