document.getElementById("getText").addEventListener("click",getText);
document.getElementById("getUsers").addEventListener("click",getUsers);
document.getElementById("getPosts").addEventListener("click",getPosts);
document.getElementById("addPost").addEventListener("submit",addPost);
function getText(){
//     fetch("sample.txt")
//     .then(function(res){
//         return res.text()
//     })
//     .then(function(data){
//         console.log(data)
//     })

fetch("sample.txt")
.then((res) => res.text())
.then((data)=>{
    document.getElementById("output").innerHTML = data;
})
  .catch((err)=> console.log(err))
}

function getUsers(){
    fetch("user.json")
    .then((res)=> res.json())
    .then((data) => {
        let output = "<h2 class='mb-4'>Users</h2>"
        data.forEach(function(user){
            output += `
            <ul class="list-group">
            <li class= "list-group-item">ID: ${user.id} <li>
             <li class= "list-group-item" >Name: ${user.name} <li>
              <li class= "list-group-item">Email: ${user.email} <li>
            </ul>
            `
        })
        document.getElementById("output").innerHTML = output;
    })
}

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((data) => {
        let output = "<h2 class='mb-4'>Posts</h2>"
        data.forEach(function(Post){
            output += `
            <div class="card card-body mb-3">
            <h3>${postMessage.title}</h3>
            <p>${Post.body}</p>
            </div>
            `
        })
        document.getElementById("output").innerHTML = output;
    })
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "accept":"application/json, text/plain, */*",
        "contect-type": "application/json"
    },
    body:JSON.stringify({title:title,body:body})
  })
  .then((res)=> res.json())
  .then((data)=> console.log(data))
}