var input = prompt("What would you like to do?");
var todo = [];

function printOutMyList(arrayElement, i) {
  console.log(i + ": " + arrayElement);
}

while (input !== "quit") {
  if (input === "new") {
    todo.push(prompt("Enter a new todo"));
  } else if (input === "list") {
    console.log("************");
    todo.forEach(printOutMyList);
    console.log("************");
  } else if (input === "delete") {
    todo.splice(prompt("Enter index of todo to delete"), 1);
    console.log("Todo removed");
  }
  input = prompt("What would you like to do?");
}