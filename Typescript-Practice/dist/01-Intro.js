"use strict";
const arrayValue = [4, 54, 56, 64, 46, 684, 10];
console.log(arrayValue);
console.log("l");
console.log(34);
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
console.log(calculateTax(200, "new"));
let employee = {
    id: 1,
    name: "",
    joiningDate(date) {
        console.log("Employee Joining Date :", date.toLocaleDateString());
    },
};
employee.joiningDate(new Date("2024-01-5"));
