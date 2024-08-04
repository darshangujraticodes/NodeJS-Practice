// typscrip data type
/*

Datatype are 
any, enum, array, tuple, function and objects

any should not be use it is not good for industry practice

*/

// array
const arrayValue: number[] = [4, 54, 56, 64, 46, 684, 10];
console.log(arrayValue);

// enums use to store constant value and It use Pascal format

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
