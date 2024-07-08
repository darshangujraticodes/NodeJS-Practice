const http = require("http");
const fs = require("fs");
const PORT = 5600;

const server = http.createServer((req, res) => {
  //   console.log("New Request by user !");

  const serverLog = `\n ${new Date().toLocaleString()} , ${
    req.url
  } User is Requesting Service from Server 1`;

  fs.appendFile("serverlogs.txt", serverLog, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(result);
      switch (req.url) {
        case "/":
          res.end("Homepage");
          break;
        case "/about":
          res.end("Hi Darshan here, Full Stack Developer !");
          break;
        case "/contact":
          res.end("My Contact email is darshan@cstechtube.com ");
          break;
        default:
          res.end("404 Page Not Found !");
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is Listening on Port Number = ${PORT} `);
});
