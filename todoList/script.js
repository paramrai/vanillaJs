let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let isDark = localStorage.getItem("theme") === "dark";

// Create header
const header = document.createElement("header");
header.innerHTML = `
  <div class="header-content">
    <h1>TaskMaster</h1>
    <button class="theme-toggle">
      <i class="fas fa-${isDark ? "sun" : "moon"}"></i>
    </button>
  </div>
`;
document.body.prepend(header);

// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("dark-theme");
  themeToggle.innerHTML = `<i class="fas fa-${isDark ? "sun" : "moon"}"></i>`;
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Initialize theme
if (isDark) document.body.classList.add("dark-theme");

// create a plus icon
const plusIcon = document.createElement("div");
plusIcon.classList.add("plus-icon");
plusIcon.innerHTML = "+";
document.body.appendChild(plusIcon);

// Create form popup
const formPopup = document.createElement("div");
formPopup.classList.add("form-popup");
formPopup.innerHTML = `
  <form class="form">
    <h2>Add New Task</h2>
    <input type="text" class="task-input" placeholder="Task Title">
    <textarea class="desc-input" placeholder="Task Description"></textarea>
    <div class="form-buttons">
      <button type="button" class="btn cancel-btn">Cancel</button>
      <button type="submit" class="btn submit-btn">Add Task</button>
    </div>
  </form>
`;
document.body.appendChild(formPopup);

const cancelBtn = formPopup.querySelector(".cancel-btn");

window.addEventListener("click", (e) => {
  if (e.target === formPopup) {
    formPopup.classList.remove("show");
  }
});

cancelBtn.addEventListener("click", () => {
  formPopup.classList.remove("show");
});

// show form popup on plus icon click
plusIcon.addEventListener("click", () => {
  formPopup.classList.add("show");
});

// hide form popup on form submit
const form = formPopup.querySelector("form");
const taskInput = form.querySelector(".task-input");
const descInput = form.querySelector(".desc-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskInput.value === "" || descInput.value === "") {
    alert("Please enter the task name and description");
    return;
  }
  addtaskCard({
    name: taskInput.value,
    desc: descInput.value,
    completed: false,
  });
  taskInput.value = "";
  descInput.value = "";
  formPopup.classList.remove("show");
});

// task container
const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");
document.body.appendChild(taskContainer);

function showCards(tasks) {
  taskContainer.innerHTML = "";
  if (tasks.length === 0) {
    taskContainer.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-tasks"></i>
        <h2>No tasks yet</h2>
        <p>Add your first task by clicking the + button</p>
      </div>
    `;
    return;
  }

  tasks.forEach((task, index) => {
    let card = document.createElement("div");
    card.classList.add("task-card");
    if (task.completed) card.classList.toggle("completed");

    card.innerHTML = `
      <div class="card-content">
        <h3 class="task-name">${task.name}</h3>
        <p class="task-desc">${task.desc}</p>
        <div class="card-actions">
          <button class="action-btn complete-btn" data-index="${index}">
            <i class="fas fa-check"></i>
          </button>
          <button class="action-btn delete-btn" data-index="${index}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    taskContainer.appendChild(card);

    const del = card.querySelector(".delete-btn");
    const complete = card.querySelector(".complete-btn");

    del.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showCards(tasks);
    });

    complete.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showCards(tasks);
    });
  });
}

function addtaskCard(task) {
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showCards(tasks);
}

window.addEventListener("DOMContentLoaded", () => {
  showCards(tasks);
});
