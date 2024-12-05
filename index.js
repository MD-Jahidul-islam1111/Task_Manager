const input = document.getElementById("input");
const submitBtn = document.getElementById("submitbtn");
const taskList = document.getElementById("taskList");

let tasks = [];
let editList = null;

const handle = () => {
  const taskValue = input.value.trim();

  if (!taskValue) {
    alert("Please enter a task");
    return;
  }

  if (editList !== null) {
    tasks[editList] = taskValue;
    editList = null;
    submitBtn.textContent = "Add Task";
  } else {
    tasks.push(taskValue);
  }

  input.value = "";
  renderTask();
};

const renderTask = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className =
      " d-flex justify-content-between align-items-center mt-3 border p-2 rounded ";
    const taskText = document.createElement("span");
    taskText.textContent = task;

    const action = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-primary ";
    editBtn.style = "margin-right: 5px;";
    editBtn.onclick = () => handleEdit(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.onclick = () => handleDelete(index);

    action.appendChild(editBtn);
    action.appendChild(deleteBtn);
    taskItem.appendChild(taskText);
    taskItem.appendChild(action);
    taskList.appendChild(taskItem);
  });
};

const handleEdit = (index) => {
  input.value = tasks[index];
  editList = index;
  submitBtn.textContent = "Update Task";
};

const handleelete = (index) => {
  const confirmDelete = confirm("Are you sure?");
  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTask();
  }
};
submitBtn.addEventListener("click", handle);
