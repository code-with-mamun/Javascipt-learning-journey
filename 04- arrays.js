// array apna college
let marks = [99, 98, 89, 60, 50];
marks[0] = 100;

for (let i = 0; i<=marks.length; i++){
  console.log(marks[i]+2);
}

for(let arr of marks){
  console.log(arr);
}

let n2 =Number(prompt("enter a number")) 
let arrr = []
for (let i = 1; i <= n2; i++) {
  arrr[i-1] = i;
}


let sum2 = 0;
for(let i = 0; i<=marks.length; i++){
  sum2  = sum2 +i;
}
console.log(sum2);

for (let val of marks){
  sum2+=val;
}
console.log(`avg marks of the class ${sum2}`);

let i2=0;
for (let val of marks){
   let offer = val /10;
   marks[i2] = val - offer;
   console.log(marks[i2]);
  i2++
}

for (let i = 0; i<=marks.length; i++){
  console.log(marks );
}
console.log(marks);
for (let i = 0; i<marks.length; i++){ // ekhane condition i<= i mean = dile code run hbena
  let off = marks[i] / 10;
  marks[i] = marks[i] - off;
  console.log(`Index ${i} এর অফার প্রাইস: ${marks[i]}`);
}

let arr3 = [100,200,300]

let offer = arr3.map((val)=>{
  let off = val /10;
  return val - off;
})

console.table(offer)

let person = {
  name:"Mamun",
  money:500,
}
person.city="rajsahi"
delete person.money
console.log(person);



for(let num of arr) {
    console.log(num * num)
}

// foreach
let arr4 = [1, 2, 3, 4, 5]

arr4.forEach((num,idx,arritself) =>{
    console.log(num * 2,idx,arritself)
})

let calcSquare = (num) => {
    console.log(num*num);

}
arr4.forEach(calcSquare)

let arr = [1, 2, 3, 4, 5]


let newaArr = arr.map((val)=>{
    return val * val;
})
console.log(newaArr);

let num = [1, 2, 3];

let double = num.map(n => n * 3);
console.log(double); // [2, 4, 6]


 let  arr5 = [3,5,6,1,7,8];
 let filter= arr5.filter((val)=>{
    return val % 2==0;
 })
 console.log(filter);

  let filter20= arr5.filter((val)=>{
    return val % 2 !==0;
 })
 console.log(filter20);

 let ar = [1, 2, 3, 4, 5, 6, 7, 8, 1, 10];

let h = ar.filter((val)=>{
  return val%2===0;
})
console.log(h);


 let  arr50 = [3,5,6,1,7,8];
  let filter2= arr50.filter((val)=>{
    return val % 2 !==0;
 })
 console.log(filter2);

 let marks = [70,80,91,92,95,]
 let toppers= marks.filter((val)=>{
    return val>90;
 })
 console.log(toppers);

//  reduce for sum and largest and smalest
let array = [10,20,30,40,50]
let output = array.reduce((pre,cur)=>{
    return pre +cur;
});

console.log(output);

let factorial = array.reduce((pre,cur)=>{
    return pre * cur
})

console.log(factorial);

let maxNum = array.reduce((pre,cur)=>{
    return pre > cur ? pre :cur;
});

console.log(maxNum);


// ধাপ ১: ফিল্টার করা (শর্ত যাচাই)
let filteredNumbers = numbers.filter(function(num, i) {
    if (i % 2 !== 0 && num > 50) {
        return true; // এই সংখ্যাটি আমরা নিতে চাই
    } else {
        return false; // এই সংখ্যাটি আমরা বাদ দিবো
    }
});

// ধাপ ২: ম্যাপ করা (পরিবর্তন করা)
let finalResults = filteredNumbers.map(function(num) {
    let halfValue = num / 2;
    return halfValue; // অর্ধেক করা মানটি নতুন অ্যারিতে পাঠাবে
});

console.log(finalResults); 

let numbers = [10, 80, 30, 60, 50, 90, 20];

let results = numbers
  .filter((num, i) => i % 2 !== 0 && num > 50) // শর্ত: বিজোড় ইনডেক্স এবং সংখ্যা ৫০+
  .map(num => num / 2); // কাজ: সেই সংখ্যাগুলোকে অর্ধেক করা

console.log(results); 

let products = [
  { name: "Mouse", price: 450 },
  { name: "Keyboard", price: 1200 },
  { name: "USB Hub", price: 300 },
  { name: "Monitor", price: 8500 },
  { name: "Mousepad", price: 150 }
];

let myCart = products
  .filter(item => item.price <= 500)      // ধাপ ১: ৫০০ বা তার নিচের পণ্যগুলো ছাঁকা [1.1]
  .map(item => `${item.name} - Available`); // ধাপ ২: নামগুলোকে মডিফাই করা [1.2]

console.log(myCart);

let totalCost = products
  .filter(item => item.price <= 500)
  .reduce((sum, item) => sum + item.price, 0); // সব দামের যোগফল [1.3]

console.log(`মোট খরচ: ${totalCost} টাকা`); 
