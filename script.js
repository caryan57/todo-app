import addTask from "./components/addTask.js";
import displayTasks from "./components/displayTasks.js";

const btn = document.querySelector("[data-form-btn]");
displayTasks();

btn.addEventListener("click", addTask);
