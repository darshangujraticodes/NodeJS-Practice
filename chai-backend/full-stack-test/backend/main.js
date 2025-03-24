import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Server is ready !"));

// product info

app.get("/api/users", (req, res) => {
  const usersInfo = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      city: "McKenziehaven",
      zipcode: "59590-4157",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      city: "South Elvis",
      zipcode: "53919-4257",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      city: "Roscoeview",
      zipcode: "33263",
    },
  ];

  res.json(usersInfo);
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server is Listening on Port : ${port}`);
});
