let age = prompt("Your age");

if(age < 0){
  console.log("Error");
}
if(age == 21){
  console.log("Happy 21st Birthday!!!");
}
if(age % 2){
  console.log("Your age is odd");
}
if(Number.isInteger(Math.sqrt(age))){
  console.log("Perfect Square!!!");
}