import createTask from "./createTask.js";

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

  //Guardar los valores en localStorage
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskObj = {
    value,
    dateFormat,
  };

  taskList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  //Enviar el contenido de cada input como objeto
  const task = createTask(taskObj);

  //Agregar la tarea a la lista de tareas
  list.appendChild(task);

  //Resetear valores de los input
  input.value = "";
  inputDate.value = "";
};

export default addTask;
