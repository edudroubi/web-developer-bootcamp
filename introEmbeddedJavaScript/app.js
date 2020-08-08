// Import libs
const express = require("express");

// Ambient vars
const app = express();
const port = 3000;

// Serve the content of public directory
app.use(express.static("public"));

// Set the extension of the files are .ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/posts", function (req, res) {
  let posts = [
    { title: "post 1", author: "Susy" },
    { title: "Teste 1", author: "Jonny" },
    { title: "Teste 2", author: "Ferdnand" },
    { title: "My Dream", author: "Denise" }
  ];

  res.render("posts", { post: posts});
});

app.get("/dog/:variable", function (req, res) {
  let variable = req.params.variable;
  res.render("dinamicHtml", {variableEjs: variable});
});

// Listen for resquests
app.listen(port, function () {
  console.log("Server Started at http://localhost:" + port);
});