var input = prompt("Are we there yet?");

// while (input !== "yes" && input !== "yeah") {
//   var input = prompt("Are we there yet?");
// }

// alert("Yay, we finally made it");

// Bonus
while (input.indexOf("yes") < 0 && input.indexOf("yeah") < 0) {
  var input = prompt("Are we there yet?");
}

alert("Yay, we finally made it");