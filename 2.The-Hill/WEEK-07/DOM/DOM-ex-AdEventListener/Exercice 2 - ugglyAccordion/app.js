const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", ()=>{
    const paragraph = button.nextElementSibling;
    if (paragraph.classList.contains("hidden")){
      paragraph.classList.remove("hidden");
      button.innerText = "Close tab";
    } else {
      paragraph.classList.add("hidden");
      button.innerText = "Open tab";
    }
  });
});