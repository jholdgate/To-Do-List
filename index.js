console.log('My code is running');


// document.getElementById("complete").addEventListener("click", function() {
//     let listItem = document.getElementById("list")
//     listItem.style.textDecoration = "line-through";
// })


function addTask() {
  var newTask = document.getElementById("createTask").value;

  if (!newTask.trim()) {
    alert("Please enter a task.");
    return
  }
  let newTaskItem = document.createElement("li");
    newTaskItem.textContent = newTask;
    newTaskItem.addEventListener("click", function() {
        newTaskItem.style.textDecoration = "line-through";
    });
  let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function (){
        if (this.checked) {
        newTaskItem.parentNode.removeChild(newTaskItem);
        }
    });

  newTaskItem.appendChild(checkbox);

  document.getElementById("list").appendChild(newTaskItem);

  document.getElementById("createTask").value = "";
}


