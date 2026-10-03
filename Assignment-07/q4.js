const employee = {
    employeeId: "E101",
    firstName: "John",
    lastName: "Doe",
    department: "Engineering",
    designation: "Software Developer",
    salary: 75000
};

console.log("First Name (Dot Notation):", employee.firstName);
console.log("Department (Dot Notation):", employee.department);

console.log("Designation (Bracket Notation):", employee["designation"]);
console.log("Salary (Bracket Notation):", employee["salary"]);

employee.email = "john.doe@company.com";

employee.salary = 82000;

delete employee.lastName;

console.log("Final Employee Object:", employee);