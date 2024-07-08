const fs = require("fs");

/*
Here in Nodejs File operation has 2 modes

Why to use file operation in NodeJS ?
It is used to maintain logs of all request ask to server and keep a track of crucial data.

Asynchronous -> it required callback to handle and manage uncertain error's
Synchronous -> file data of sync commands can be stored in variable but not for aysnc commands .


*/

// asynchronous approach
fs.writeFile(
  "./file1.txt",
  "\nHi Darshan here, Full Stack Developer and Adventure Explorer",
  (error) => {
    if (error) {
      console.log("Error in File Operation", error);
    }
  }
);

fs.appendFile(
  "./file1.txt",
  `\nI love to explore nature, forest and mountain  ${new Date().toLocaleString()}`,
  (error, result) => {
    if (error) {
      console.log("Error in File Operation", error);
    }
  }
);

fs.readFile("./file1.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    // console.log(result);
  }
});

fs.copyFile("./file1.txt", "./copyfile1.txt", (error) => {
  if (error) {
    console.log(error);
  }
});

fs.rename("./copyfile1.txt", "./copy1file1.txt", (error) => {
  if (error) {
    console.log(error);
  }
});

fs.unlink("./file1a.txt", (error) => {
  if (error) {
    console.log(error);
  }
});

//  synchronous approach
fs.writeFileSync(
  "./file2.txt",
  "\nHi Darshan here, Full Stack Developer, and Youtube Coding Teacher"
);

fs.appendFileSync(
  "./file2.txt",
  `\nI love to build Wealth, Assets and Business ${new Date().toLocaleString()} `
);

const readOpr2 = fs.readFileSync("./file2.txt", "utf-8");

// console.log(readOpr2);

fs.copyFileSync("./file2.txt", "./copyfile2.txt");

fs.unlinkSync("./file2a.txt");

/*
writeFile (Asynchronous) | writeFileSync (Synchronous) => It create new file of specified name and update it with required information


*/
