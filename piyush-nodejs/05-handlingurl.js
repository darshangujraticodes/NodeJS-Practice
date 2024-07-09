// url

/*

URL = Uniform Resource Locator 

consist of following componenet

components of URL 

1] protocols
2] domain name
3] path
4] query parameter

eg:  https://cstechtube.com/aboutus?channel=google
  
  protocols   =>  http: //  or https://
  http / https (Hypertext Transfer Protocol / Secure)

  domain name   =>  cstechtube.com 
  
  path   =>  /aboutus 
  It shows from which page request is generatd to user
  
  search query parameter   =>   ?channel=google&adsplatform=google
  This are the search query paramter which are used to filter or search specific element in content

*/

const http = require("http");

const PORT = 8000;

const fileOpr = require("fs");

const url = require("url");

const server = http.createServer((req, res) => {
  //   res.end("Hello From server !");

  if (req.url == "/favicon.ico") return res.end();

  // url library implementation

  const urlData = url.parse(req.url, true);

  console.log(urlData);

  const logs = `\n${new Date().toLocaleString()} : New Server Request from path ${
    req.url
  }`;

  fileOpr.appendFile("./serverlogs.txt", logs, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      switch (urlData.pathname) {
        case "/":
          res.end("Welcome to Homepage");
          break;
        case "/search":
          const searchQuery = urlData.query.searchQuery || "";
          res.end(`Results of your Search = "${searchQuery}" `);
          break;
        case "/contact":
          const email = urlData.query.email;
          const phone = urlData.query.phone;
          res.end(`Connect me on Email = ${email} and Phone = ${phone}`);
          break;
        default:
          res.end("404 Page Not Found !");
      }
    }
  });
});

server.listen(PORT, () => {
  console.log("Server Started Successfully !");
});
