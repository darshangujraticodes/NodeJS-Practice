// Activity 1 : IF-ELSE Statements

// task 1

let x = 0;

if (x > 0) {
  console.log("It is Positive Number !");
}

if (x < 0) {
  console.log("It is Negative Number !");
}

if (x == 0) {
  console.log("It is Zero !");
}

// task 2

let age = 5;

if (age >= 18) {
  console.log("Person is Eligible for Voting.");
} else {
  console.log("Person is Not Eligible for Voting.");
}

// Activity 2 : NESTED IF-ELSE Statements

let u = 64;
let v = 51;
let w = 105;

if (u > v) {
  if (u > w) {
    console.log("Largest number is =", u);
  } else {
    console.log("Largest number is =", w);
  }
} else {
  if (v > w) {
    console.log("Largest number is =", v);
  } else {
    console.log("Largest number is =", w);
  }
}

// Activity 3 : Switch Case Statements

const y = 7;
switch (y) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Value");
}

let marks = -54;
console.log(marks);

switch (marks > 0) {
  case marks >= 85:
    console.log("You have scored Grade A");
    break;
  case marks >= 65 && marks < 85:
    console.log("You have scored Grade B");
    break;
  case marks >= 55 && marks < 65:
    console.log("You have scored Grade C");
    break;
  case marks >= 45 && marks < 55:
    console.log("You have scored Grade D");
    break;
  case marks >= 35 && marks < 45:
    console.log("You have scored Grade E");
    break;
  case marks < 35:
    console.log("You have scored Grade F");
    break;
  default:
    console.log("Invalid Value !");
    break;
}

// Activity 4 : Ternary Statement

let num = 45;

num % 2 == 0
  ? console.log("It is an Even Number ")
  : console.log("It is an Odd Number");

// Activity 5 : Combining Condition
