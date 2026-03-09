let a =  document.querySelector("h1")
console.log(a)

let b = document.querySelector("p")
console.log(b)

let a2 = document.querySelector("h1")
a2.innerHTML = "assalamu alaikum"
a2.style.backgroundColor = "grey"
console.log(a)



let b3 = document.querySelector("p")
b3.innerHTML = "walaikumus salam"
b3.style.backgroundColor = "RGB(0,250,0)"

let h1 = document.querySelector("h1")
h1.addEventListener('click', ()=>{
   h1.style.backgroundColor = "green"
   h1.innerHTML = "LA TAHZAn"
}

let box = document.querySelector("p");

let button = document.querySelector("button")
let off = document.querySelector(".off")
button.addEventListener("click", ()=>{
 box.style.scale = "1"
})
off.addEventListener("click", ()=>{
 box.style.backgroundColor = "blue"
})

off.addEventListener("click", ()=>{
box.style.scale = ".5"
})

let p = document.getElementsByTagName("p")
console.dir(p)
console.log(p)

let m = document.getElementById("MIM")
console.log(m)

let m2 = document.querySelector("button")
m2.innerText ="Mamun"

let b4 = document.querySelector("#MIM")
console.log(b)
b4.innerText = "MIM"


let off2=document.querySelector('.off')[0]
console.log(off2)
off.innerHTM = "<h1>Mamun</h1>";

let a5 =document.querySelectorAll(".mim")
console.log(a5)

let a2 = document.querySelector("div")
console.log(a2)


let b2 = document.querySelector('button')

b2.addEventListener('click', ()=>{
a.style.scale = "1"
})

let c = document.querySelector('.off')
console.log(c)
c.addEventListener('click', ()=>{
    a.style.scale = '0.5'
})

console.log(document.body.childNodes)  
let a = document.getElementById("one")
console.log(a)

let  b = document.getElementsByClassName("off")
console.log(b)

let c = document.getElementsByTagName("h1")
console.log(c)

let d = document.querySelector("h2")
console.dir(d)

let a = document.querySelector("div")
console.dir(a)

let a = document.querySelector("h2")
console.dir(a.innerText)

a.innerText = a.innerText +   " i love borsha"

let a =  document.querySelectorAll(".box")
let idx = 1;
for (d of s) {
   d.innerHTML = ` new unique value ${idx}`;
   idx++;
}
console.log(a)
Array.from(s).map((d, index) => {
   d.innerHTML = `new unique value ${index + 1}`;
});

s.forEach((d, index) => {
   d.innerHTML = `new unique value ${index + 1}`;
});