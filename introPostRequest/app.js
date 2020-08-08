// Import libs
const express = require("express");
const bodyParser = require("body-parser");

// Ambient vars
const app = express();
const port = 3000;
let friends = ["Tony", "Andrew", "Let", "Fabs"];

// Tell express to use body-parser lib
app.use(bodyParser.urlencoded({extended: true}));

// Set that the extension of the files are .ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/addFriend", function (req, res) {
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function (req, res) {
  res.render("friends", {friends: friends});
});

// Listen for resquests
app.listen(port, function () {
  console.log("Server Started at http://localhost:" + port);
});