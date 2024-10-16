setTimeout (() => {
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
h1.innerText = "There are a lot of buttons here !";
  
  for (let i=1; i<=100; i++) {   
    const button = document.createElement("button");
    button.innerText = `I am the button number ${i}`;
    container.appendChild(button);
  }
}, 2000)