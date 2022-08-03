import createTask from "./createTask.js";
import dateElement from "./dateElement.js";
import uniqueDates from "./services/date.js";

const displayTasks = () => {
  //Obtener los datos almacenados en localStorage y transformar en un array de objetos
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.querySelector("[data-list]");

  //Crear un array con las fechas sin repetir de las tareas
  const dates = uniqueDates(taskList);

  console.log(dates);

  //Recorrer array de fechas
  dates.forEach((date) => {
    //Dando un formato a la fecha de objeto con la libreria moment.js
    const dateMoment = moment(date, "DD/MM/YYYY");
    //Agregar cada fecha en la lista
    list.appendChild(dateElement(date));

    //Recorrer el arreglo de tasksList y mostrar cada elemento del localStorage a la lista de tareas
    taskList.forEach((task) => {
      if (task.dateFormat == date) {
        const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
        const diff = dateMoment.diff(taskDate);
        if (diff === 0) {
          list.appendChild(createTask(task));
        }
      }
    });
  });
};

export default displayTasks;
