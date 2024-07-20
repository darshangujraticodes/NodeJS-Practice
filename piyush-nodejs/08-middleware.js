/*

Middleware are just like a watchman which protect server unwanted request.
 
middleware has following task functions 
1] Execute any code
2] Make changes to request and response objects
3] End the request responses cycle
4] call the next middleware functions using "next()"
5] There can be multiple Middleware for different data checks common are 4
   log file updated checks
   Hacker or suspicious IP check, 
   data Validation checks
   user Authentication checks
   
If middleware found anything wrong then they return the end request to prevent server access. 

*/

const express = require("express");
const users = require("./MOCK_DATA2.json");
const fs = require("fs");

const app = express();
const PORT = 8010;

// Middlewares

// middleware 1
app.use(express.urlencoded({ extended: false }));

//middleware 2
app.use((req, res, next) => {
  fs.appendFile(
    "./Serverlogs.txt",
    `\nDate = ${new Date().toLocaleString()} : ${req.method} : ${req.path} : ${
      req.ip
    } `,
    (error, data) => {
      if (error) {
        return res.json({
          status: "Failed in Middleware check 2 of Serverlog",
        });
      } else {
        console.log("Passed Middleware check 2");

        // note if we put next then it will move to next routing or middle ware and if we put res.send() the operation will get stop here.
        next();
      }
    }
  );
});

//middleware 3
// https://www.scaler.com/topics/nodejs/middleware-in-nodejs/
app.post("/users/", (req, res, next) => {
  const body = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;
  //   console.log(body.name, body.email, body.phone);
  if (
    body.name == "" ||
    body.email == "" ||
    body.phone == "" ||
    !emailRegex.test(body.email) ||
    !phoneRegex.test(body.phone)
  ) {
    return res.json({
      status: "Failed in Middleware check 3 of Data Validation",
    });
  } else {
    console.log("Passed Middleware check 3");
    next();
  }
});

// Normal Route operation

app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/users", (req, res) => {
  const body = req.body;
  //   console.log("Body Data =", body);

  users.push({
    id: users.length + 1,
    ...body,
  });

  fs.writeFile("./MOCK_DATA2.json", JSON.stringify(users), (error) => {
    if (error) {
      //   console.log(error);
      return res.json({ status: "Failed to Create New User. " });
    } else {
      //   console.log(users);
      return res.json({ status: "Registered Succesfully" });
    }
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error =", error);
  } else {
    console.log(`Server is Succefully running on PORT = ${PORT} `);
  }
});
