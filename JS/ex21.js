var movieDb = [
  {
    title: "The Last Samurai",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Gladiator",
    rating: 5,
    hasWatched: true
  },
  {
    title: "300",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "The Shawshank Redemption",
    rating: 5,
    hasWatched: false
  }
];

movieDb.forEach(function (movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen \"";
  }
  result += movie.title + "\" - " + movie.rating + " stars"
  console.log(result)
})