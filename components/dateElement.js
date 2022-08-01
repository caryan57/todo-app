const dateElement = (date) => {
  const dateEl = document.createElement("li");
  dateEl.classList.add("date");
  dateEl.innerHTML = date;

  return dateEl;
};

export default dateElement;
