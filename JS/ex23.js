var button = document.querySelector("button");
// var body = document.body;

// button.addEventListener("click", function () {
//   if(document.body.style.background !== "pink") {
//     document.body.style.background = "pink";
//   } else {
//     document.body.style.background = "white";
//   }
// })

button.addEventListener("click", function () {
  document.body.classList.toggle("pink");
})