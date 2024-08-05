/* 

Typescript is superset of Javascript

Types in Typescript

1. Number, String, Boolean
2. Arrays, Tuples
3. Any, unknown, void, never
4. Enum
5. function , objects


Never ever use "any" type in typescript code, it should not be use as industry practice
*/

// number
let mark1: number = 80;
let mark2 = 80;

// string
let studentName1: string = "Sahil"; // here explicitly we are declaring type to variable
let studentName2 = "Sahil"; // here implicitly ts engine itself assign types to variable by observing value

// boolean
let isPass: boolean = true;
let isfailed = false;

// tuples : we have to explicity mention types during declaration
const schoolData: [number, string, boolean] = [1, "darshan", true];

//unknown

// array
const arrayValue: number[] = [4, 54, 56, 64, 46, 684, 10];
console.log(arrayValue);

// enums use to store constant value and It use Pascal format
// enumeration means grouping data

const enum TshirtSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}
console.log(TshirtSize.Large);

const enum PantSize {
  Small = 32,
  Medium,
  Large,
}
console.log(PantSize.Large);

// function
function calculateTax(income: number, taxRegime = "old"): number {
  if (taxRegime === "old") {
    if (income <= 50) return income * 0.05;
    else if (income <= 100) {
      return income * 0.2;
    } else {
      return income * 0.3;
    }
  } else {
    if (income <= 50) return income * 0.2;
    else if (income <= 100) {
      return income * 0.3;
    } else {
      return income * 0.4;
    }
  }
}

console.log(calculateTax(200, "new"));

function personData(name: string, profession: string, exp: number): void {
  console.log(
    `  Hi, ${name} here, I am ${profession} with ${exp} years of Experience. `
  );
}

console.log(personData("Darshan", "Full Stack Developer", 5));

// objects
// note ?(question mark) denote optional value
// readonly define id cannot be change or altered

let employee: {
  readonly id: number;
  name: string;
  department?: string;
  joiningDate: (date: Date) => void;
} = {
  id: 1,
  name: "",
  joiningDate(date) {
    console.log("Employee Joining Date :", date.toLocaleDateString());
  },
};
employee.joiningDate(new Date("2024-01-5"));

// Type inference : it is a phenomena where ts self orientedly (implicitly) identify declaration types

// union and Intersection Types

//  union
let a: number | string;
a = 17;
a = "harsh";

//  intersection
let b: number;

// you can create your own types

type Company = {
  companyName: string;
  founderName: string;
};

type Employee = {
  employeeId: number;
  employeeName: string;
  joiningData: Date;
  department: string;
};

type CompanyEmployee = Company & Employee;

let data: CompanyEmployee = {
  employeeId: 17,
  employeeName: "Darshan",
  joiningData: new Date("2024-01-6"),
  department: "Developer",
  companyName: "Softlers",
  founderName: "Rohit Pani",
};

console.log(data.employeeName);
