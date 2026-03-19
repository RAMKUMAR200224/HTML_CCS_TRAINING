const view = document.querySelector("#view2");
const div = view.querySelector("div")
const h2 = div.querySelector("h2")

console.log(h2)

// const dosomething =() => {
//     alert("Ultimate Star");
// };

// h2.addEventListener("click",dosomething,false)
// h2. removeEventListener("click",dosomething,false)

// h2.addEventListener("click",(event)=>{
//    event.target.textContent = "hero"
// })

document.addEventListener("readystatechange",(event) => {
    if(event.target.readyState === "complete"){
        console.log("complete")
        initapp(); 
    }
})

const initapp =() =>{
    const view = document.querySelector("#view2");
const div = view.querySelector("div")
const h2 = div.querySelector("h2")

view.addEventListener("click", (event) => {
    // event.stopPropagation();
    view.style.backgroundColour= "red"
},true)
div.addEventListener("click", (event) => {
    div.style.backgroundColour= "blue"
},true)
h2.addEventListener("click", (event) => {
    event.target.textContent= "hero"
},true)

h2.addEventListener("click", (event) =>{
    const mytext = event.target.textContent;
    mytext === "Ajithkumar" ? ( event.target.textContent ="hero"):(event.target.textContent = "hero")
})


}

