const employee1 = {
    employeeId: "E101",
    firstName: "John",
    lastName: "Doe",
    department: "Engineering",
    designation: "Software Developer",
    salary: 75000,
    
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    getDetails: function() {
        return `Employee ID ${this.employeeId} belongs to the ${this.department} department.`;
    }
};

console.log("--- Employee 1 ---");
console.log("Full Name:", employee1.getFullName());
console.log("Details:", employee1.getDetails());

const employee2 = {
    employeeId: "E102",
    firstName: "Jane",
    lastName: "Smith",
    department: "Marketing",
    designation: "Marketing Manager",
    salary: 85000,
    
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    getDetails: function() {
        return `Employee ID ${this.employeeId} belongs to the ${this.department} department.`;
    }
};

console.log("--- Employee 2 ---");
console.log("Full Name:", employee2.getFullName());
console.log("Details:", employee2.getDetails());