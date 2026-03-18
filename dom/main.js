const view1 = document.getElementById("view1")
console.log(view1)
const view2 = document.querySelector("#view2")
console.log(view2)

view1.style.display="flex";
view2.style.display="none";

const views = document.getElementsByClassName("view");
console.log(views )

const sameviews = document.querySelectorAll(".view")
console.log(sameviews)

const divs = view1.querySelectorAll("div")
console.log(divs)

const samedivs = view1.getElementsByTagName("div")
console.log(samedivs)

const evendivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evendivs)

evendivs[4].style.backgroundColor ="red";

for(i=0; i< evendivs.length; i++){
    evendivs[i].style.width="150px";
    evendivs[i].style.backgroundColor="green";
}

const navtext = document.querySelector("nav h1")
console.log(navtext)

navtext.textContent ="Ram kumar";
const navbar = document.querySelector("nav")
navbar.innerHTML=`<h1> RAMKUMAR </h1>
                   <p> LETS  GO BUDDY </p>`
console.log(navbar);
navbar.style.justifyContent="space-evenly"

console.log(evendivs[0]);

console.log(evendivs[0].parentElement);

console.log(evendivs[0].parentElement.children);

console.log(evendivs[0].parentElement.hasChildNodes());

console.log(evendivs[0].parentElement.lastChild);

console.log(evendivs[0].parentElement.lastElementChild);

console.log(evendivs[0].parentElement.firstChild);

console.log(evendivs[0].parentElement.firstElementChild);

console.log(evendivs[0].nextSibling);

console.log(evendivs[0].nextElementSibling);

console.log(evendivs[0].nextElementSibling.nextElementSibling);

console.log(evendivs[0].previousSibling);

console.log(evendivs[0].previousElementSibling);

view1.style.display="none"
view2.style.display="flex"
view2.style.flexDirection="row"
view2.style.flexWrap="wrap"
view2.style.margin="10px"

console.log(view2.lastElementChild);


while(view2.lastChild){
    view2.lastChild.remove();
}
// const newdiv = document.createElement("div")
// newdiv.textContent="AJITH KUMAR"
// newdiv.style.width="100px"
// newdiv.style.height="100px"
// newdiv.style.backgroundColor= "yellow"
// newdiv.style.color= "black"
// newdiv.style.display="flex";
// newdiv.style.justifyContent="center"
// newdiv.style.alignItems="center"
// newdiv.style.textAlign="center"
// view2.append(newdiv)

const creatediv = (parent, iter)=>{
    const newdiv = document.createElement("div")
newdiv.textContent=iter
newdiv.style.width="100px"
newdiv.style.height="100px"
newdiv.style.backgroundColor= "yellow"
newdiv.style.color= "black"
newdiv.style.display="flex";
newdiv.style.justifyContent="center"
newdiv.style.alignItems="center"
newdiv.style.textAlign="center"
parent.append(newdiv)

}

creatediv(view2,"ajith kumar")
