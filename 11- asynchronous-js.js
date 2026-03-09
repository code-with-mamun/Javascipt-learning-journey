const taskOne = (callback)=>{
    console.log("task1")
    callback()
}
const taskTwo = (callback)=> {
    setTimeout(()=> {
        console.log("task 2two data loading...")
        callback()
    },4000)
}

const taskThree = (callback)=>{
    console.log("task3")
    callback()
}
const taskFour = (callback)=>{
    setTimeout(()=> {
        console.log("task4")
       callback()
    },1000)
     
}
const taskFive = ()=>{
    console.log("task5")
}

taskOne(function fn1(){
    taskTwo(()=>{//function fn2()
        taskThree(function fn3(){
            taskFour(function f4(){
                taskFive()
            })
        })
    } )
})


//callback and higher order function anisul islam

// 1st example
function square(x) {
    console.log(`square of x : ${x*x}`);
}
square(10);  // 1st example

//// 2st example

function higherOrderFunctin(params,callback) {
    callback(params)
}

higherOrderFunctin(7,square);//2st example

// async , await, fetch, promise, then, catch, finally

function f() {
    console.log("This is a function")
}
setTimeout(f, 5000)// 1s ex

setTimeout(()=> {
    console.log("This is an arrow function")
},4000) // 2s ex




let z = [1, 2, 3, 4, 5]
function  ee (show ){
    console.log(show)
}
z.forEach(ee)

function square(x) {
    console.log(`square of ${x} : ${x*x}`);
}

function higherOrderFunctin(params,callback) {
    callback(params)
}   
higherOrderFunctin(7,square)

//callback hell ekhane ekdom clear kora holo
const a1 = (callback)=> {
 setTimeout(() => {
       console.log("This is a function1")
         callback()
 }, 2000);
}
const a2 = (callback)=> {
 setTimeout(() => {
       console.log("This is a function2")
         callback()
 }, 2000);
}
const a3 = (callback)=> {
 setTimeout(() => {
       console.log("This is a function3")
         callback()
 }, 2000);
}
const a4 = (callback)=> {
 setTimeout(() => {
       console.log("This is a function4")
         callback()
 }, 2000);
}

const a5 = (callback)=> {
 setTimeout(() => {
       console.log("This is a function5");
         callback();
 }, 2000);
};

a1 (function (f1){
    a2(()=>{
        a3(()=>{
            a4(()=>{
                a5()
            })
        })
    })
});

function getData(data, callback ) { // Sudhu 2ti parameter rakha bhalu
    setTimeout(() => {
        console.log(`This is data : ${data}`);
        if(callback){
             callback();
        }
      
        // Callback thaklei sudhu call hobe
    },  2000);  // 5s wait kora Onek somoy, tai 2s dilam
}

getData("borsha", () => {
    getData("mamun", () => {
        getData("mim");
    });
});

    const arrow = () =>{
        console.log("mamun");
    }
arrow("Mamun")

const ar=(name)=>console.log(name);

ar("Mijan")
const sum2 =(a,b)=>a+b;
re = sum2(20,30)
console.log(sum2(50,60));



let coffee = new Promise ((res,rej)=>{
    if(true){
        return res();
    } else {
        return rej();
    }
} );

coffee.then(function (){
    setTimeout (()=>{
        console.log('Borsha')
    },5000)
}
).catch (function(){
   setTimeout(()=>{
    console.log('Mamun')
   },10000)
})

// // /
let promise1 = new Promise ((res)=>{
    res('step one done');
});
promise1
.then((one)=>{
    console.log(one);
    return new Promise ((res)=>{
        setTimeout(() => {
            res('step two done')
        }, 5000);
    });
}).
then((two)=>{
    console.log(two);
    
})



let task1 = ()=>{
    return new Promise ((res,rej)=>{
        setTimeout(() => {
         res('Mamun+1');
         
       }, 4000);
    });
}
let task2 = ()=>{
    return new Promise ((res,rej)=>{
       setTimeout(() => {
         res('Mamun+2');
        
       }, 4000);
    });
}

let task3 = ()=>{
 return new Promise ((res,rej)=>{
       setTimeout(() => {
         res('Mamun+3');
          
       }, 4000);
    });
}

let task4 = ()=>{
   
    return new Promise ((res,rej)=>{
        setTimeout(() => {
         res('Mamun+4');
       }, 4000);
    });
};


console.log('Mamun')
task1()
.then((res)=>console.log(res))
.then(task2)
.then((res)=>console.log(res))
.then(task3)
.then((res)=>console.log(res))
.then(task4)
.then((res)=>console.log(res))

//    allCallback();

//    task1(1,()=>{
//     task2(2,()=>{
//         task3(3,()=>{
//             task4()
//         });
//     });
//    });



console.log ("Hello World");

let promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1 completed");
    }, 2000);
});

// ২য় প্রমিসটিকে একটি ফাংশনের ভেতর রাখো
const getPromise2 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res("Yeh i'd win (after another 2s)");
        }, 2000);
    });
};

const i = async () => {
    let a = await promise12; // ২ সেকেন্ড লাগবে
    console.log(a);

    let b = await getPromise2(); // এবার এখান থেকে আরও ২ সেকেন্ড শুরু হবে
    console.log(b);
};

i();

// console.log(promise1);

// promise2.then((res)=>{
//     console.log((res))
// }).catch((err)=>{
//     console.log(err)
// })
// Promise.race([promise1,promise2])
// .then((res)=>
// console.log(res)
// );




fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data[0]);
  });

  async function getData() {
  try {
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersRes.json();

    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
    const posts = await postsRes.json();

    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
    const comments = await commentsRes.json();

    console.log(comments);
  } catch (err) {
    console.log(err);
  }
}

getData();