// Actvity 1

// task 1 : Arithmatic operator
let a = 17;
let b = 5;
let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let rem = a % b;
let square = a ** 2;

console.log("Add = ", add);
console.log("Subtract = ", sub);
console.log("Multiple = ", mul);
console.log("Division = ", div);
console.log("Remainder = ", rem);
console.log("Square = ", square);

// Actvity 2  : Assignment operator

a += 2;
b -= 2;
console.log("Assignment Add Opeartor = ", a);
console.log("Assignment Subtract Opeartor = ", b);

// Actvity 3 : Compairison operator

console.log("a > b", a > b);
console.log("a < b", a < b);

let x = 40;
let y = "40";

console.log("x == y", x == y, "and x === y ", x === y);

// Actvity 4 : Logical operator

let u = 45;
let v = 65;

if (u == 45 && v == 65) {
  console.log("\n&& COndition Executed when both are true;");
}

if (u > 35 || v < 45) {
  console.log("\n|| COndition Executed when any one condition is true;");
}

let z = false;

if (!z) {
  console.log("\n! Not operator convert data in opposite form.");
}

// Actvity 5 : Ternary Operator

u > 40 ? console.log(" Condition TRUE ") : console.log(" Condition FALSE ");
v < 40 ? console.log(" Condition TRUE ") : console.log(" Condition FALSE ");

// ---------------

let array = [78, 8, 4, 78, 156, 1651, 841, 2121];

// array foreach loop
array.forEach((item) => console.log(item));

// array filter
const filterData = array.filter((item) => item > 100);
console.log(filterData);

// array map
const mapData = array.map((item) => item * 10);
console.log(mapData);

// array find
const findItem = array.find((item) => {
  if (item === 2) {
    return item;
  } else {
    return false;
  }
});
console.log(findItem);

// array indexOf
console.log(array.indexOf(8789797));
