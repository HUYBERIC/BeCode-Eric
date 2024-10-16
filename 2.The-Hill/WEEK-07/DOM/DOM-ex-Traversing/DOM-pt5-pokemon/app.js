document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector(".container");

for (let i = 1; i <= 151 ; i++){
  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  img.alt = `Pokemon ${i}`

  container.appendChild(img);
}
});