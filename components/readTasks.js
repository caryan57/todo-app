import createTask from "./createTask.js";
import dateElement from "./dateElement.js";
import uniqueDates from "./services/date.js";

const readTasks = () => {
  //Obtener los datos almacenados en localStorage y transformar en un array de objetos
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.querySelector("[data-list]");

  //Crear un array con las fechas sin repetir de las tareas
  const dates = uniqueDates(taskList);

  //Recorrer array de fechas
  dates.forEach((date) => {
    //Agregar cada fecha en la lista
    list.appendChild(dateElement(date));

    //Recorrer el arreglo de tasksList y mostrar cada elemento del localStorage a la lista de tareas
    taskList.forEach((task) => {
      if (task.dateFormat == date) {
        const taskElement = createTask(task);
        list.appendChild(taskElement);
      }
    });
  });
};

export default readTasks;
