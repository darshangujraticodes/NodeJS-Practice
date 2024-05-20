const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const githubUserData = {
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
  public_repos: 26,
  public_gists: 0,
  followers: 1,
  following: 9,
  created_at: "2021-03-20T12:54:17Z",
  updated_at: "2024-05-06T10:32:38Z",
};

app.get("/login", (req, res) => {
  res.send("  <h1> Kindly Login for more Information </h1> ");
});

app.get("/github", (req, res) => {
  res.json(githubUserData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
