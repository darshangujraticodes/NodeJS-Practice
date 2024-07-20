/*

http headers

data communication between client server is similar to letter

letter 

to -> where to send data
from -> from where the data is sended
Main content inside envelope -> main data file


request()

header = request header/response header
it is a field of http request or response that passes additional context or metadata about response and request 


request headers
-> from : ip address
-> to : ip address
-> content-type :application/json or (* / * => allows all type in request)
-> status code
-> method: GET
-> path : /
-> scheme : https
-> accept : all types text/html, json, image, webp 
-> cookie : gps
- user-agent : pc details


body


              request()
client  ------------------------>  server

              response()
client  <------------------------ server


HTTP Status code

Ref : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

Informational response = (100 - 199)
Successfull Response = (200 - 299)
Redirection Response = (300 - 399)
Client Error Response = (400 - 499)
Server Error Response = (500 - 599)

*/

const express = require("express");
const users = require("./MOCK_DATA2.json");
const fs = require("fs");

const app = express();
const PORT = 8010;

// middleware
app.use(express.urlencoded({ extended: false }));

// Normal Route operation

app.get("/users", (req, res) => {
  // but note custom header should be declared with "X-headername"
  res.setHeader("X-MyName", "Darshan Shailesh Gujrati");
  console.log(req.headers);
  return res.json(users);
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error =", error);
  } else {
    console.log(`Server is Succefully running on PORT = ${PORT} `);
  }
});
