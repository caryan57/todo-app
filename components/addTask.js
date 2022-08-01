import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

const addTask = (e) => {
  e.preventDefault();
  const list = document.querySelector("[data-list]");
  const task = createTask(e);
  list.appendChild(task);
};

const taskList = [];

const createTask = (e) => {
  const input = document.querySelector("[data-input-form]");
  const inputDate = document.querySelector("[data-input-date]");
  const date = inputDate.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  const value = input.value;
  input.value = "";

  const task = document.createElement("li");

  const taskContent = document.createElement("div");
  const taskObj = {
    value,
    dateFormat,
  };

  taskList.push(taskObj);

  localStorage.setItem("tasks", JSON.stringify(taskList));

  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

  task.classList.add("card");

  return task;
};

export default addTask;
