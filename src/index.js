const taskForm = document.querySelector('#create-task-form');
const taskList = document.querySelector("#tasks");
const taskDropdown = document.querySelector("#new-task-priority")


taskForm.addEventListener("submit", function() {
  event.preventDefault();

  const taskStr = document.querySelector("#new-task-description").value;
  const taskPriority = document.querySelector("#new-task-priority").value;
  let taskColor;

  // brute foooooooooooorce
  if (taskPriority === "high") {
    taskColor = "red";
  } else if (taskPriority === "medium") {
    taskColor = "orange";
  } else if (taskPriority == "low"){
    taskColor = "green";
  } else {
    // add something in here that tells you to try again
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <p>${taskStr}</p>
    <p style="color: ${taskColor};" class="priority">${taskPriority.toUpperCase()}</p>
    <button class="delBtn">delete</button>
  `;

  // console.log(task);
  taskList.appendChild(taskItem);
  taskForm.reset();
});

taskList.addEventListener("click", function(e) {
  console.log(e.target.className);
  if (e.target.className === 'delBtn') {
    e.target.parentElement.remove();
  }
})
