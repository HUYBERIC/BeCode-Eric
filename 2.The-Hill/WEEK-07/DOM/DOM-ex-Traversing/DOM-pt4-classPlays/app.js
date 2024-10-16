const changeClass = document.querySelectorAll("li");
changeClass.forEach(item => {
  if (item.classList.contains("highlight")) {
    item.classList.remove("highlight")
  } else {
    item.classList.add("highlight")
  }
});