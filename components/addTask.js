import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

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

const createTask = ({ value, dateFormat }) => {
  //Crear span con la fecha
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  //Crear elemento <li> que contiene un <div> con los sus respectivos iconos
  const task = document.createElement("li");
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());

  //Crear span con los datos de la tarea
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  //Agregar el contenido del span al div
  taskContent.appendChild(titleTask);

  //Agregar al elemento <li> todo lo creado previamente
  task.appendChild(taskContent);
  task.appendChild(dateElement);

  //Crear icono de eliminar tarea
  task.appendChild(deleteIcon());

  //Agregar clase "card" a la tarea
  task.classList.add("card");

  return task;
};

export default addTask;
