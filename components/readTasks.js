import createTask from "./createTask.js";

const readTasks = () => {
  //Obtener los datos almacenados en localStorage y transformar en un array de objetos
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.querySelector("[data-list]");

  //Recorrer el arreglo de tasksList y mostrar cada elemento del localStorage a la lista de tareas
  taskList.forEach((task) => {
    const taskElement = createTask(task);
    list.appendChild(taskElement);
  });
};

export default readTasks;
