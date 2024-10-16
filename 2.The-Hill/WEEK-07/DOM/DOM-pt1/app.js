// 01.DOM_Selectors.md

const mainHeading = document.getElementById("main-heading");

mainHeading.style.color = "red";

// 03.DOM_Generating_elements.md

const heading = document.querySelector("#main-heading");

const headingV2 = document.querySelector(".container");

const list = document.querySelector("ul");

const myList = document.querySelector("ul");
const myItem = document.createElement("li");

myList.appendChild(myItem);

console.log(myList);

myItem.remove();
console.log(myList);

// 04.DOM_Elements_content.md => EXERCICES

const onlyText = document.querySelectorAll("li");
const textArray = Array.from(onlyText).map(item => item.innerText);
console.log(textArray);

const allTheList = document.querySelector("ul");
const newLi = document.createElement("li");
const firstLi = document.querySelector("li");
newLi.innerText = firstLi.innerText;
allTheList.appendChild(newLi);
console.log(allTheList);

const purpleText = document.querySelectorAll("li");
purpleText.forEach(item => {
  item.style.color="purple";
});

const goldText = document.querySelector("li:last-child");
goldText.style.color = "gold";

const annieHallItem = document.querySelector("li:nth-child(4)");
annieHallItem.innerHTML = "<li>Annie <span style='color: red;'>Hall</span></li>"
/* annieHallItem.innerHTML = annieHallItem.innerHTML.replace("Hall", "<span style='color: red;'>Hall</span>"); */

// 06.DOM_Traversing.md

const button = document.querySelector(".my-btn");

const mySpan =
  button.parentElement.previousElementSibling.querySelector("span");
  mySpan.style.color = "red";