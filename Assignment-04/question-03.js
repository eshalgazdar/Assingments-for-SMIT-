let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

let correctUsername = "admin";
let correctPassword = "12345";

if (username == correctUsername && password == correctPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}