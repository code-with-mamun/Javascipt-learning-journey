// 1️⃣ Arithmetic Operators
// let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
console.log(a ** b); // 1000

// 💡 % = remainder, ** = power

// 2️⃣ Assignment Operators
let x = 5;
x += 3;  // x = x + 3
console.log(x); // 8

x -= 2;  // x = x - 2
console.log(x); // 6

x *= 2;
console.log(x); // 12

x /= 3;
console.log(x); // 4

x %= 3;
console.log(x); // 1
// 3️⃣ Comparison Operators
let p = 5;
let q = '5';

console.log(p == q);  // true (value same)
console.log(p === q); // false (value+type check)
console.log(p != q);  // false
console.log(p !== q); // true

console.log(p > 3);   // true
console.log(p < 3);   // false
console.log(p >= 5);  // true
console.log(p <= 4);  // false
// 4️⃣ Logical Operators
let score = 60;

console.log(score > 50 && score < 70); // true
console.log(score < 50 || score > 70); // false
console.log(!(score > 50));            // false

// 💡 && = AND, || = OR, ! = NOT

// 5️⃣ Increment / Decrement
let n = 5;

console.log(n++); // 5 (post increment, shows old value first)
console.log(n);   // 6

console.log(++n); // 7 (pre increment, increases first)
console.log(n--); // 7 (post decrement)
console.log(--n); // 5 (pre decrement)
// 6️⃣ String Operators
let str = "Hi";
str += " Mamun";
console.log(str); // "Hi Mamun"

let full = "Hello " + "World";
console.log(full); // "Hello World"
// 7️⃣ Ternary Operator
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
// 8️⃣ Type Operators
console.log(typeof 123);        // "number"
console.log(typeof "hello");    // "string"
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true


let age1 = 25;
if(age1 >= 18 && age1 <=60) { 
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