// Import libs
const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});

(async () => {
  try {
    const response = await axios.get("http://www.omdbapi.com/?apikey=thewdb&s=harry");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
})();