// Import libs
const express = require("express");
const axios = require("axios");
const { response } = require("express");

// Ambient vars
const app = express();
const port = 3000;

// Set the extension of the files to be ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render( "search" );
});

app.get("/results", function (req, res) {
  let question = req.query.search;
  let url = `http://www.omdbapi.com/?apikey=thewdb&s=${question}`

  axios.get(url)
  .then(function (resp) {
    let movieData = resp.data.Search;
    res.render( "results", { data: movieData } );
  });
});

app.listen(port, function () {
  console.log("Server started at http://localhost:" + port);
});