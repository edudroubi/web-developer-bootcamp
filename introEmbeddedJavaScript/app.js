// Import libs
const express = require("express");

// Ambient vars
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("dog/:variable", function (req, res) {
  let variable = req.params.variable;
  res.render("dinamicHtml.ejs", {variableEjs: variable});
});

app.get("/posts", function (req, res) {
  let posts = [
    { title: "post 1", author: "Susy" },
    { title: "Teste 1", author: "Jonny" },
    { title: "Teste 2", author: "Ferdnand" },
    { title: "My Dream", author: "Denise" }
  ];

  res.render("posts.ejs", { post: posts});
});

// Listen for resquests
app.listen(port, function () {
  console.log("Server Started at http://localhost:" + port);
});