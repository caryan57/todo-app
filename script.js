import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-input-form]");
  const inputDate = document.querySelector("[data-input-date]");
  const date = inputDate.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  const value = input.value;
  input.value = "";
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

  task.classList.add("card");
  list.appendChild(task);
};

btn.addEventListener("click", createTask);
