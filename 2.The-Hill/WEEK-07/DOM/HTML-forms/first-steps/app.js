let inputValue = "";
const input = document.getElementById('textInput');

input.addEventListener("change", () => {
  inputValue = input.value;
  console.log(inputValue);
});