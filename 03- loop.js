// loop class apna college

for (let i = 1; i <= 10; i++) {
  console.log("Mamun"); // jotokhn na i=5 hbe totokhn condition true dibe and loop cholbe
}

//  calculate sum
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
  //  ekhane jei i ace seta ei block scop porjontoi sesh er pre r kaj korbena but var diye jodi declare kortam tahole bahireo globaly kaj korto
  sum = sum + i; // but s = sum + i; dile output hbe just 10
}
console.log("sum =", sum);

let n2 =Number(prompt("enter a number")) 
let arrr = []
for (let i = 1; i <= n2; i++) {
  arrr[i-1] = i;
}

console.log(arrr);

// Infinite loop
// for (let i=1; i>=0; i++){ I shoul never do it
// console.log(Mamun);
// }

// while loop : actualy for loop diye j kaj kora
//  jay ta while diyew kora jay

let i = 1;
while (i <= 10) {
  console.log("Nah I'd whin");
  i++;
}

// do while

let ia = 1;
do {
  console.log("i am a programer");
  ia++;
} while (ia <= 10);

// for of loop
let str = "Mamun";
for (let string of str) {
  // for of loop a initialization and condition and update sob nijei kre
  console.log("string =", string + 7);
}

let student = {
  name: "Mamun",
  age: 19, 
  dream: "web dev",
};

for (let val in student) {
  console.log(val, student[val]);
}

// practice qs1
for (let num = 0; num <= 10; num++) {
  // ekhane jodi i++ kora hoy tahole infinite hoye jabe
  if (num % 2 === 0) {
    console.log("Ode num is : ", num);
  }
}

let n5 =Number(prompt("enter a number")) 
let arrr5 = []
for (let i = 1; i <= n5; i++) {
  arrr5[i-1] = i;
}

console.log(arrr);

// practice qs 2
// let gameNum = 30;
// Number() diye lekha k songkhay change kore ditci
// let userNum = Number(prompt("Guess the num:"));

// while(userNum !== gameNum){
//   userNum = Number(prompt("Wrong! Guess again:"));
//    if (userNum === null) break; // যদি ইউজার ক্যানসেল চাপে তবে লুপ থামবে
// }

let user = {
  name: "Mamun",
  age: 22
};

for(let key in user){
    console.log(key, user[key]);
}

let nums = [10, 20, 30];

for(let n of nums){
    console.log(n);
}

for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
};

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   for (let i = 0; i <nums.length; i++) {
  console.log(nums[i]);
};


for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
};

let numbers10 = [10, 80, 30, 60, 50, 90, 20];

for (let i = 0; i<numbers10.length; i++){
  if (i % 2!==0){
    if (numbers10[i]>50){
        let half = numbers10[i] / 2;
        console.log(`half numbr is ${half}`);
    }
  } 

}


for (let i = 10; i >= 1; i--) {
    console.log(i);
};

for (let i =10 ; i >=1;i-=2){
    console.log(i);
};

// ekhane forEach ar for of loop er difference bujha jabe
  let arr= [10, 20, 30, 40, 50];
arr.forEach(n => {
  console.log(n +5);
});

for (let n of arr){
  console.log(n);
}

for(let i=0; i< arr.length; i++){
  console.log(arr[i] + 5);
}

  let arr9 = ["Mamun", "Borsha", "Mim"];
 arr9.forEach((name,Idx) => {
  console.log("Hello " + name +Idx);
 });


let prices = [200, 600, 450, 800, 100];
for (let val of prices) {
    if (val > 500) {
        let discount = val / 10;
        let newPrice = val - discount;
        console.log("Discount Price: " + newPrice);
    } else {
        console.log("Regular Price: " + val);
    }
};



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