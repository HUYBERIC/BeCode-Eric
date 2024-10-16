const button = document.querySelector("button");
const title = document.querySelector("h1")

function randomColor (){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`
}
button.addEventListener("click", () => {
  const color = randomColor();
  document.body.style.backgroundColor = color;
  title.innerText = color;
})
