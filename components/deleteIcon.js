import displayTasks from "./displayTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", () => {
    deleteTask(id);
  });

  return i;
};

const deleteTask = (id) => {
  const list = document.querySelector("[data-list]");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const uniqueTask = tasks.find((task) => task.id == id);
  const indexOfTask = tasks.indexOf(uniqueTask);

  //Eliminar elemento del array con splice
  tasks.splice(indexOfTask, 1);

  //Guardar el valor en localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //Recargar la vista
  list.innerHTML = "";
  displayTasks();
};

export default deleteIcon;
