// this is a type of common js methods try to choose only one methods common or es6
// i prefer es6 becoz it is format also used in react js

// In this piyush course we following commonjs approach in nodejs

const { add, subtract } = require("./02-modules");
const math = require("./02-modules");

console.log("Add =", add(8, 5));
console.log("Subtract =", subtract(8, 5));
// or
console.log("\nAdd =", math.add(8, 5));
console.log("Subtract =", math.subtract(8, 5));

// -------------------------------

// To enable ES6 module feature for execution add "type":"module" it will run as es6

// react destructure import format
// import { add, subtract } from "./02-modules.js";
// import math from "./02-modules.js";

// console.log("Add =", add(8, 5));
// console.log("Subtract =", subtract(8, 5));
// or
// console.log("Add =", math.add(8, 5));
// console.log("Subtract =", math.subtract(8, 5));

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(
    `Server Setup configured Successfully and Requesting User IP Address = ${
      req.ip
    } and Time ${new Date().toLocaleString()} `
  );
});

app.listen(PORT, () => {
  console.log(`Configured Server is Listening on Port No = ${PORT} `);
});
