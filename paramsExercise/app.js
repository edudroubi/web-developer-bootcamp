// Import lib
const express = require("express");

// Ambient vars
const app = express();
const port = 3000;

// Set root page
app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

// Set /speak/animal page
app.get("/speak/:animal", function (req, res) {
  let animal = req.params.animal.toLowerCase();
  let say = {
    pig: "'Oink'",
    dog: "'Woof Woof'",
    cow: "'Moo'"
  };

  res.send("The " + animal + " says " + say[animal]);
});

// Set /repeat/str/num page
app.get("/repeat/:str/:num", function (req, res) {
  let str = req.params.str;
  let num = Number(req.params.num);
  let text = [];

  for (let i = 0; i < num; i++) {
    text += str + " ";
  }

  res.send(text);
});

app.get("*", function () {
  res.send("Page not found!");
});

// Listen for resquests
app.listen(port, function () {
  console.log("Server Started at http://localhost:" + port);
});