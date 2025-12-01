require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubdata = {
  login: "agrahariaakriti",
  id: 114635032,
  node_id: "U_kgDOBtUxGA",
  avatar_url: "https://avatars.githubusercontent.com/u/114635032?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/agrahariaakriti",
  html_url: "https://github.com/agrahariaakriti",
  followers_url: "https://api.github.com/users/agrahariaakriti/followers",
  following_url:
    "https://api.github.com/users/agrahariaakriti/following{/other_user}",
  gists_url: "https://api.github.com/users/agrahariaakriti/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/agrahariaakriti/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/agrahariaakriti/subscriptions",
  organizations_url: "https://api.github.com/users/agrahariaakriti/orgs",
  repos_url: "https://api.github.com/users/agrahariaakriti/repos",
  events_url: "https://api.github.com/users/agrahariaakriti/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/agrahariaakriti/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Aakriti Agrahari",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Passionate about DSA | Strong problem-solving skills | Java & DSA Enthusiast | Leetcode Lover | Always eager to learn and optimize solution ",
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-09-29T02:52:13Z",
  updated_at: "2025-11-17T03:50:32Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Welcom to twitter</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
