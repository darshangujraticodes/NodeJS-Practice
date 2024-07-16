/*

when you installed dependency it display its name and version in package.json file
eg . "express": "^4.19.2",

version has 3 parts
1st part = 4
2nd Part = 19
3rd Part = 2   (Minor Fixes)



3rd Part - Minor fix (optional)
It is small update in any documentation and or basic changes can be ignore

2nd Part - It comprise of bugfix, security update and it is Recommended to update nodejs
It could lead to hacking of your webapp if not update as per new version.

1st Part - Major / Breaking Update Release 
It means complete new version is release with new feature syntax format with new methods 
Note: Complete new version should neoty

Expresss version is crucial 

*/

const express = require("express");

const PORT = 8000;
const app = express();

app.get("/", (req, res) => {
  return res.send(`Hello from Homepage !`);
});

app.get("/contactus", (req, res) => {
  return res.send(`Contact us on Email = ${req.query.email} `);
});

app.listen(PORT, () =>
  console.log(`Server is Successfully running on PORT = ${PORT}`)
);
