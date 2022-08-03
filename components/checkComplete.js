const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");

  //Recibir el parametro del id
  const elementId = id;

  i.addEventListener("click", (e, elementId) => {
    completeTask(e, id);
  });

  return i;
};

const completeTask = (e, id) => {
  const element = e.target;
  element.classList.toggle("far");
  element.classList.toggle("fas");

  //Obtener la tarea guardada en el localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const uniqueTask = tasks.find((task) => task.id == id);

  //Cambiar el valor de complete de false a true
  uniqueTask.complete = !uniqueTask.complete;

  //Guardar el valor en localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
