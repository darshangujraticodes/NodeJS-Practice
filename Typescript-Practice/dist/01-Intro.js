"use strict";
let mark1 = 80;
let mark2 = 80;
let studentName1 = "Sahil";
let studentName2 = "Sahil";
let isPass = true;
let isfailed = false;
const schoolData = [1, "darshan", true];
const arrayValue = [4, 54, 56, 64, 46, 684, 10];
console.log(arrayValue);
console.log("Tshirt size =", "l");
console.log("PantSize =", 34);
function calculateTax(income, taxRegime = "old") {
    if (taxRegime === "old") {
        if (income <= 50)
            return income * 0.05;
        else if (income <= 100) {
            return income * 0.2;
        }
        else {
            return income * 0.3;
        }
    }
    else {
        if (income <= 50)
            return income * 0.2;
        else if (income <= 100) {
            return income * 0.3;
        }
        else {
            return income * 0.4;
        }
    }
}
console.log("Income Tax = ", calculateTax(200, "new"));
function personData(name, profession, exp) {
    console.log(`  Hi, ${name} here, I am ${profession} with ${exp} years of Experience. `);
}
personData("Darshan", "Full Stack Developer", 5);
let employee = {
    id: 1,
    name: "",
    joiningDate(date) {
        console.log("Employee Joining Date :", date.toLocaleDateString());
    },
};
employee.joiningDate(new Date("2024-01-5"));
let a;
a = 17;
a = "harsh";
let b;
let data = {
    employeeId: 17,
    employeeName: "Darshan",
    joiningDate: new Date("2024-01-6"),
    department: "Developer",
    companyName: "Softlers",
    founderName: "Rohit Pani",
};
console.log(data.joiningDate.toLocaleDateString);
