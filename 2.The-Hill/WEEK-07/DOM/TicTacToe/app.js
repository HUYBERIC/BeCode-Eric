// V A R I A B L E S

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

// const board = document.getElementsByClassName('board'); retourne un ensemble

const board = document.querySelector(".board");


// F O N C T I O N S - B A S I Q U E

for (let i=0 ; i<9; i++){
    const div = document.createElement("div");
    div.classList.add("cell");
    div.innerText = i;
    div.style.fontSize = "62px";
    board.appendChild(div);
}

