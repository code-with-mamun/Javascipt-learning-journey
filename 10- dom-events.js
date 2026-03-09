console.log("Hello world")
let a = document.querySelector("p")
a.style.backgroundColor = "blue"

a.addEventListener("click", function() {
    a.style.color = "red"
    a.innerHTML = "You clicked me!"
    a.style.fontSize = "20px"
    a.style.backgroundColor = "yellow"
    a.classList.add("clicked")
     
  
})


let b = document.querySelector("#one")
b.addEventListener("click", function() {
    a.style.backgroundColor = "red"
    a.innerHTML = "Borsha clicked me!"
    a.style.color = "white"
    a.style.scale = "1"
  
    
})

let c = document.querySelector("#two")
c.addEventListener("click", function() {
    a.style.backgroundColor = "yellow" 
    a.innerHTML = "Borsha clicked me again!" 
    a.style.scale = ".5" 
    a.style.color = "black"
})

let d = document.querySelector("#active")
d.parentElement.style.backgroundColor = "green"



let u = document.querySelector("h3")


let v = document.querySelectorAll(".item")

let i = document.querySelectorAll(".m")
let idx = 1;

for (div of i) {
div.innerText = `mmb ${idx}` 
idx++
}

let w =  a.getAttribute("id")
console.log(a.setAttribute("id", "This is a paragraph"))


let btn = document.createElement("button")
btn.innerText = "Click me"
document.querySelector("body").prepend(btn)
btn.style.backgroundColor = "purple"

let r =document.querySelector(".op")
r.classList.add("active")

let s = document.createElement("div")
s.innerText = "This is a new div"
document.querySelector("h1").after(s)
s.setAttribute("id", "new-div")

let t = document.querySelector("button")
let mode = "light"

t.addEventListener("click", () => {
    if(mode === "light") {
        document.body.style.backgroundColor = "black"       
        document.body.style.color = "white"
        mode = "dark"
    } else {
        document.body.style.backgroundColor = "white"       
        document.body.style.color = "black"
        mode = "light"
    }   
})  


