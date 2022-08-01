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
  //Crear elemento <li> que contiene cada tarea y su clase "card"
  const task = document.createElement("li");
  task.classList.add("card");

  //Crear div que contiene los iconos y demás elementos de las tareas
  const taskContent = document.createElement("div");

  //Crear span con los datos de la tarea
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  //Agregar el contenido del span y los iconos al div
  taskContent.appendChild(titleTask);
  taskContent.appendChild(checkComplete());

  //Crear span con la fecha
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  //Agregar al elemento <li> todo lo creado previamente
  task.appendChild(taskContent);
  task.appendChild(dateElement);

  //Crear icono de eliminar tarea
  task.appendChild(deleteIcon());

  return task;
};

export default addTask;
