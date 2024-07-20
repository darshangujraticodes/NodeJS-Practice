/*

Restfull API 

express() control both http method and request, response to server
mongoose() control server and (mongodb) database request 

        request
client ---------> Server  -----> Database
 
        response
client <--------- Server  <----- Database

As per client request server can send response in many form
Response Multiple types are html, json, text or image (html and json are 2 most common used response)

Ther 2 types of Rendering in RestAPI

1] Server Side Rendering 
In this the output data is converted in html and document and this html doc is shared to client device which is directly displayed but it is only applicable when client is requesting from broweser then it will for device to represent server response but it it not possible outside browser, eg alexa, mobileapp cannot represent the server response of html document

1] It has high effeciency and Loading time is Low.
2] Output is render on server side therfore also called : server side rendering (SSR)
3] But not cannot be used outside Browser.
4] Best for WebApplication.


2] Client Side Rendering
In this server sends the response in json format which is recieved by client system and then converted by coding in required design format as per requirement.

1] It has little less effeciency compare to ssr. 
2] Output is render on client side therfore also called : client side rendering (SSR) Client side architecture.
3] It support in all platforms.
4] It require certain time to load api data and display them in required format.
5] Best for Web application and Mobile Application 



certain rules need to follow while creating rest api 

1] Respect the HTTP Methods 
2] Hybrid RestAPi is Best for multiplatform support 

/api/users/  =>  denote it is csr json api based data 
/users/      =>  denote it is ssr HTML based data  


HTTP Methods

GET /users        =>  display all the list users data 
GET /users/id     =>  display user data of specific id

POST /users       =>  create or add new user to database

PATCH /users/id   =>  update the data of the specific user fetch from ID 

PUT /             =>  insert the file(pdf, doc or excel) on server.

DELETE /users/id  =>  delete the data of specific user fetch from ID

Browser always works on GET Method so post, patch and delete cannot be performed through brower it required external software tool named postman which will performed api test operation.

While sending data through api 
it consist of following information parts


headers

note 
ther are some custom headers dat in both request and response they are denoted by   " X-headerdataname"

consist of 2 types 

1] Request Headers
-> Request URL
-> http methods
-> path
-> status code 
-> content-type   

2] Response Headers
-> Request URL
-> http methods
-> path
-> status code 
-> content-type   



but here in beginning phase we are not working in database data so here we will create external source 

to get dummy details one of the best to generate random details is mockaroo.com

*/

const express = require("express");
let users = require("./MOCK_DATA.json");
const fsdata = require("fs");
const { error, log } = require("console");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));

// Server Side Rendering (HTML format)
app.get("/users", (req, res) => {
  const html = `  
        <table>  
                <tr> 
                        <th> ID </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Job </th>
                </tr>
                ${users
                  .map(
                    (user) => `
                        <tr>
                                <td> ${user.id} </td>
                                <td> ${user.first_name} ${user.last_name} </td>
                                <td> ${user.email} </td>
                                <td> ${user.job_role} </td>
                        </tr>`
                  )
                  .join("")}
                
        </table> `;

  return res.send(html);
});

// but not get, patch and delete have common route so asper industry standard when we have common route paths but different http methods then we can create chain function and define logic accordingly example below

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const fetchUserData = users.find((user) => user.id == id);
    return res.json(fetchUserData);
  })
  .patch((req, res) => {
    const body = req.body;
    const reqid = req.params.id;

    const dataIndex = users.findIndex((user) => user.id == reqid);
    // console.log("Body = ", body, " data index =", dataIndex, " userdata id ");
    // console.log("Dataindex =", dataIndex);

    if (dataIndex != -1) {
      users[dataIndex] = { id: Number(reqid), ...body };
      // console.log(users[dataIndex]);
    } else {
      return res.json({ status: "No such user Found !" });
      // console.log(users[reqid]);
    }

    fsdata.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
      if (error) {
        console.log("Error =", error);
        return res.json({ status: "Error" });
      } else {
        console.log(`Data Updated Succesfully in Database `);
        return res.json({ status: "Updated Succesfully " });
      }
    });
  })
  .delete((req, res) => {
    const reqid = req.params.id;
    const dataIndex = users.findIndex((user) => user.id == reqid);

    if (dataIndex === -1) {
      return res.json({ status: "No such user Found !" });
    } else {
      const filterData = users.filter((user) => user.id != reqid);
      users = [...filterData];
      fsdata.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
        if (error) {
          console.log("Error =", error);
          return res.json({ status: "Error" });
        } else {
          console.log(`Data Deleted Succesfully from Database `);
          return res.json({ status: "Deleted Succesfully " });
        }
      });
    }
  });

// Client Side Rendering (JSON format)
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// create and insert new user data
app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("Body = ", body);
  users.push({ id: users.length + 1, ...body });
  fsdata.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
    if (error) {
      console.log("Error =", error);
      return res.json({ status: "Error" });
    } else {
      console.log(`New Data Inserted Succesfully with Id = ${users.length}`);
      return res.json({ status: "Registered Succesfully" });
    }
  });
});

// note browser in default is in get method http methods , to perform, post, patch and delete required

app.listen(PORT, (req, res) => {
  console.log(`Server is Running Successfull on PORT = ${PORT}`);
});
