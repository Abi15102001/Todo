 let textbox = document.getElementById("textbox");
let btn = document.getElementById("btn");
 let div = document.getElementById("div")

 let tasks = [];
 window.onload = ()=>{
    tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(task=>displayitems(task))
 }

 let additems = function(){
    tasks.push(textbox.value);
    displayitems(textbox.value);
    localStorage.setItem("tasks",JSON.stringify(tasks))
    textbox.value = ""
 }

//   if (textbox.value === "") {
//      alert("Please enter a task!");
//          return;
//      } 

 function displayitems(task){
    
    let taskitems = document.createElement("div");
    taskitems.setAttribute("class","d-flex flex-column pt-1")
    div.appendChild(taskitems);

    let para = document.createElement("p");
    para.setAttribute("class","ms-3 mt-2 position-relative shadow");
    taskitems.appendChild(para);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class","rounded-circle");
    checkbox.onchange = function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
    };

    para.appendChild(checkbox);

    let span = document.createElement("span");
    span.innerText =task;
    span.setAttribute("class","ms-3 fs-5 fw-semibold");
    para.appendChild(span);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","me-3 rounded border-0 position-absolute end-0");
    deleteButton.addEventListener("click",()=>{
        taskitems.removeChild(para)
        remove(task)
    })
    para.appendChild(deleteButton);

    let image = document.createElement("img");
    image.src = "trash-can_10516198.png";
    image.width = 20;
    image.height = 20;
    deleteButton.appendChild(image);

    // let ul = document.createElement("hr");
    // ul.setAttribute("class","pb-2")
    // taskitems.appendChild(ul);
     
 }

 function remove(task){
     let index = tasks.indexOf(task);
    if (index > -1){
        tasks.splice(index,1);
    }
    localStorage.setItem("tasks",JSON.stringify(tasks))

 }