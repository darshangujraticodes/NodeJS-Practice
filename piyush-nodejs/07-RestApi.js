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

Browser always works on GET Method so post, patch and delete cannot be performed through brower it required external software named postman.

but here in beginning phase we are not working in database data so here we will create external source 

to get dummy details one of the best to generate random details is mockaroo.com

*/

const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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

// Client Side Rendering (JSON format)
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const fetchUserData = users.find((user) => user.id === id);
  return res.json(fetchUserData);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is Running Successfull on PORT = ${PORT}`);
});
