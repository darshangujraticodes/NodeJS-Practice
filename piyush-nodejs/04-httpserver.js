const http = require("http");

const PORT = 8000;

const fileOpr = require("fs");

const server = http.createServer((req, res) => {
  //   res.end("Hello From server !");

  if (req.url == "/favicon.ico") return res.end();

  const logs = `\n${new Date().toLocaleString()} : New Server Request from path ${
    req.url
  }`;

  fileOpr.appendFile("./serverlogs.txt", logs, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      switch (req.url) {
        case "/":
          res.end("Welcome to Homepage");
          break;
        case "/about":
          res.end("Hi Darshan Here Full Stack Developer");
          break;
        case "/contact":
          res.end("Connect me on gmail : darshan@cstechtube.com");
          break;
        default:
          res.end("400 Page Not Found !");
      }
    }
  });
});

server.listen(PORT, () => {
  console.log("Server Started Successfully !");
});
