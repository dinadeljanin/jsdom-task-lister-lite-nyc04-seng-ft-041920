const taskForm = document.querySelector('#create-task-form');
const taskList = document.querySelector("#tasks");
const taskDropdown = document.querySelector("#new-task-priority");
const taskSort = document.querySelector("#sortBy");


taskForm.addEventListener("submit", function() {
  event.preventDefault();

  const taskName = document.querySelector("#new-user").value
  const taskStr = document.querySelector("#new-task-description").value;
  const taskDuration = document.querySelector("#new-duration").value;
  const taskDueDate = document.querySelector("#new-due-date").value;
  const taskPriority = document.querySelector("#new-task-priority").value;
  let taskColor;

  // brute foooooooooooorce
  // or you can also brute force adding classes, yes
  if (taskPriority === "high"){
    taskColor = "red";
  } else if (taskPriority === "medium"){
    taskColor = "orange";
  } else if (taskPriority == "low"){
    taskColor = "green";
  }

  const obj = {
      name: taskName,
      task: taskStr,
      duration: taskDuration,
      dueDate: taskDueDate,
      priority: taskPriority,
      priorityColor: taskColor
    };

  renderRows(obj);

});

function renderRows(obj) {
  const taskItem = document.createElement("tr");
  taskItem.innerHTML = `
    <td>${obj.name}</td>
    <td>${obj.task}</td>
    <td>${obj.duration}</td>
    <td>${obj.dueDate}</td>
    <td style="background-color: ${obj.priorityColor};" class="priority">${obj.priority}</td>
    <td>
      <button class="delBtn">delete</button>
      <button class="editBtn">edit</button>
    </td>
  `;

  // console.log(task);
  taskList.appendChild(taskItem);
  taskForm.reset();
}

taskList.addEventListener("click", function(e) {
  console.log(e.target.className);
  if (e.target.className === 'delBtn') {
    e.target.parentElement.remove();
  } else if (e.target.className === 'editBtn') {
    // e.target.parentElement
    // do you need a new function?
  }
})

// Sorting Pseudocode
// 1. get ALLLLLLLLLL the TR elements created
// 2. ?????????
// 3. sort by priority heh'
taskSort.addEventListener("change", function(e) {
  // console.log("hold my coffee, im going in")
})
