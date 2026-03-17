var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")

var booktitleinput = document.getElementById("book-title-input")
var booktitleauthor = document.getElementById("book-title-author")
var bookdescriptioninput = document.getElementById("book-description-input")

// open popup
addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

// add book
addbook.addEventListener("click", function(event){
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class","book-container")

    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${booktitleauthor.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `

    container.append(div)

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// delete book
function deletebook(event){
    event.target.parentElement.remove()
}