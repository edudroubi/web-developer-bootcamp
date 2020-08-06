// Import libs
const express = require("express");

// Ambient vars
const app = express();
const port = 3000;


app.get("/", function (req, res) {
  res.send("Alou");
});

app.get("/bye", function (req, res) {
  res.send("Goodbye!!!");
});

app.get("*", function (req, res) {
  res.send("Wrong address");
});

// Listen for resquests
app.listen(port, function () {
  console.log("Server Started at http://localhost:" + port);
});