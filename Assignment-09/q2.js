let student = {
    name: "Eshal Gazdar",
    age: 19,
    department: "Computer Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};
let { 
    name, 
    age, 
    department: program, 
    address: { city, country }, 
    phone = "Not provided" 
} = student;

console.log("--- Student Profile Summary ---");
console.log("Name:", name);
console.log("Age:", age);
console.log("Program:", program);
console.log("City:", city + ", " + country);
console.log("Phone:", phone);

console.log("\nSummary Sentence: " + name + " is a " + age + "-year-old student enrolled in " + program + ", living in " + city + ". Phone contact: " + phone + ".");

console.log("\nOriginal Student Object:", student);