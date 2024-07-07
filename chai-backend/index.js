// ES6 new js version
// To enable ES6 in package json add value "type":"module";
// js has 2 types common jsx and module js here we are using module js which is ES6 format
import express from "express";
import "dotenv/config";

// old js version
// require("dotenv").config();
// console.log(process.env);

const app = express();

// const PORT = 8000;

// const api_url = "https://api.github.com/users/darshangujraticodes";

const apiData = {
  login: "darshangujraticodes",
  id: 81023123,
  node_id: "MDQ6VXNlcjgxMDIzMTIz",
  avatar_url: "https://avatars.githubusercontent.com/u/81023123?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/darshangujraticodes",
  html_url: "https://github.com/darshangujraticodes",
  followers_url: "https://api.github.com/users/darshangujraticodes/followers",
  following_url:
    "https://api.github.com/users/darshangujraticodes/following{/other_user}",
  gists_url: "https://api.github.com/users/darshangujraticodes/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/darshangujraticodes/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/darshangujraticodes/subscriptions",
  organizations_url: "https://api.github.com/users/darshangujraticodes/orgs",
  repos_url: "https://api.github.com/users/darshangujraticodes/repos",
  events_url:
    "https://api.github.com/users/darshangujraticodes/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/darshangujraticodes/received_events",
  type: "User",
  site_admin: false,
  name: "Darshan Shailesh Gujrati",
  company: null,
  blog: "https://www.youtube.com/@cstechtube",
  location: "India",
  email: null,
  hireable: null,
  bio: "Passionate Coder, Reader & Youtuber. On path to achieve Full Stack Developer Skill & SEO expert to give you the best App Solution needed for digital world.",
  twitter_username: null,
  public_repos: 23,
  public_gists: 0,
  followers: 1,
  following: 17,
  created_at: "2021-03-20T12:54:17Z",
  updated_at: "2024-06-09T06:06:19Z",
};

const jsonData = JSON.stringify(apiData);

app.get("/", (req, res) => {
  res.send("Hello World, It is Home Page request..");
});

app.get("/login", (req, res) => {
  res.send("Login page request by user !");
});

app.get("/github", (req, res) => {
  // res.send(`${jsonData}`);
  res.json(apiData);
});

app.listen(process.env.PORT, () => {
  console.log(`NodeJs server request is listening on port ${process.env.PORT}`);
  console.log(`${process.env.DATABASE_URL}`);
});
