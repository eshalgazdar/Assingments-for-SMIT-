let employees = [
  { name: 'Ali', department: 'IT', salary: 80000 },
  { name: 'Sara', department: 'HR', salary: 70000 },
  { name: 'Ahmed', department: 'IT', salary: 95000 },
  { name: 'Ayesha', department: 'Finance', salary: 85000 }
];

console.log("--- Question 3: Employee Data from an API ---");
console.log("All Employees:", employees);

let itEmployees = employees.filter(emp => emp.department === 'IT');
console.log("IT Department Employees:", itEmployees);

let highEarner = employees.find(emp => emp.salary > 90000);
console.log("First Employee with Salary > 90000:", highEarner);

let employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary of All Employees:", totalSalary);

