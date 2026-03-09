 function sayHello() {
  console.log("Hello Mamun!");
}
sayHello();


sayHello();


function add(a, b) {
  console.log(a + b);
}

add(5, 3); // 8
let person = {
  name: "Mamun",
  sayHello() {
    console.log("Hello!");
  }
};

person.sayHello();
person.sayHello();
 
 function greet(name,time){
  console.log(  name+"is sleeping from " +time + "pm" );
};

greet("Mim ",10);
greet("Borsha ",11);


function sum(a,b){
  return a + b;
  } ;
  let result = sum (5,10);
  console.log(result);

  console.log(sum);

  const Mamun3 = () =>{
    console.log("borsha loves mamun3")
}
 
 
 function father(callSon) {
  console.log("কাজ শুরু");

  setTimeout(() => {
    callSon();
  }, 2000);
}

function son() {
  console.log("কাজ শেষ");
}
father(son);

function washClothes(callback) {
  console.log("Kapor dhowa shuru...");
  
  setTimeout(() => {
    console.log("Kapor dhowa sesh");
    callback();
  }, 2000);
}

function dryClothes(callback) {
 setTimeout(() => {
   console.log("Kapor shukano shuru");
   callback()
 }, 2000);
}
function dryEnd (){
  setTimeout(() => {
    console.log("kapor shukano sesh")
  }, 2000);
}

washClothes(function a1(){
  dryClothes(()=>{
    dryEnd();
  })
})

function makeTea() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Cha ready ☕");
    }, 2000);
  });
}

async function drinkTea() {
  const tea = await makeTea();
  console.log(tea);
  console.log("Cha khawa shuru 😄");
}
drinkTea();