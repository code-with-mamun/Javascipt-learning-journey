let age = 25;
if(age >= 18 && age <=60) { 
    console.log("You are an adult")
} else if(age < 18) {
    console.log("You are a minor")
} else {
    console.log("You are a senior citizen")
}

 let marks=100;

 if(marks>100 || marks <0){
    console.log("Invalid marks");
 } else if (marks >= 80){
    console.log("A+");
 } else if (marks >= 70){
    console.log("A");
 } else if (marks >= 60){
    console.log("A-");
 } else if (marks >= 50){
    console.log("B");
 } else if (marks >= 40){
    console.log("C");
 } else if (marks >= 33){
    console.log("D");
 } else {
    console.log("Fail");
 }

 let gameNum = 25; // random number
let userNum;

while (userNum != gameNum) {
  userNum = prompt("Guess the game number:");

  if (userNum == gameNum) {
    console.log("🎉 Congratulations! You guessed it right");
  } else {
    console.log("❌ Wrong guess, try again");
  }
}
console.log("Game Over");

let age2 = 15 ;
let result = age2 >= 18? "Adult" : "Not Adult"
console.log(result)

let day = 2;

switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Invalid day");
}