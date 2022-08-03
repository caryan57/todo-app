const uniqueDates = (tasks) => {
  const unique = [];

  tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) {
      unique.push(task.dateFormat);
    }
  });

  //Ordenar lista de fechas de menor a mayor
  unique.sort();

  return unique;
};

export default uniqueDates;
