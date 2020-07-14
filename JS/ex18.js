var input = prompt("What would you like to do?");
var todo = [];

while (input !== "quit") {
  if (input === "new") {
    todo.push(prompt("Enter a new todo"));
  } else if (input === "list") {
    console.log(todo);
  }
  input = prompt("What would you like to do?");
}