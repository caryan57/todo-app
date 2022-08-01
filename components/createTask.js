import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

const createTask = ({ value, dateFormat }) => {
  //Crear elemento <li> que contiene cada tarea y su clase "card"
  const task = document.createElement("li");
  task.classList.add("card");

  //Crear div que contiene los iconos y demás elementos de las tareas
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());

  //Crear span con los datos de la tarea
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  //Agregar el contenido del span y los iconos al div
  taskContent.appendChild(titleTask);

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

export default createTask;
