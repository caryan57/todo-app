import createTask from "./createTask.js";
import displayTasks from "./displayTasks.js";

const addTask = (e) => {
  //Evitar comportamiento default del formulario
  e.preventDefault();

  //Seleccionar elementos del DOM
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-input-form]");
  const inputDate = document.querySelector("[data-input-date]");

  //Dar formato a los valores de cada input
  const value = input.value;
  const date = inputDate.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  //Retornar esta función si no se llenan los valores
  if (value == "" || date == "") {
    return;
  }

  //Guardar los valores en localStorage
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskObj = {
    value,
    dateFormat,
  };

  list.innerHTML = "";

  taskList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  displayTasks();

  //Resetear valores de los input
  input.value = "";
  inputDate.value = "";
};

export default addTask;
