//js is a programing language . We use it to give instruction to the computer

/*
JS Variables – Notes
1) What is a Variable?

– ডেটা রাখার জায়গা
– পরে সেই ডেটা আবার ইউজ করা যায়

2) Variable Declare করার ৩টা keyword

var
let
const

3) var (old system)
Function scope
Redeclare allowed
Hoisting করে (default undefined)

4) let
Block scope
let age = 20;
let age = 40;  // ❌ redeclare — এটা allowed না
Redeclare ❌
Reassign ✔
Hoisting করে but initialized হয় না

let কবে ব্যবহার করবে?
👉 যখন value পরে change হতে পারে

5) const
Block scope
Redeclare ❌
Reassign ❌
Value fix থাকে
Object/Array হলে ভিতরের value change করা যায়

6) Naming Rules
কেবল letter, number, $, _
Number দিয়ে শুরু ❌
Space ❌
Case-sensitive
camelCase best practice

7) Assign vs Declare
Declare → নাম দেওয়া
Assign → value দেওয়া
let a;   // declare
a = 10;  // assign

8) Initialize
Declare + Assign একসাথে করা
let x = 100;

9) Dynamic Typing

JS automatically type change করতে পারে (string → number etc)

10) typeof Operator

Variable এর type বের করতে

typeof x


10) typeof কেন দরকার

Debug করতে variable এর type check করার জন্য

typeof false  → "boolean"
typeof 10     → "number"
typeof "hi"   → "string"


*/