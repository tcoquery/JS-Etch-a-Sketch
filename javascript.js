const container = document.getElementById("container");
const playAgain = document.querySelector(".playAgain");

let squareNumbers = Number(window.prompt("Set a size for the grid (must be less than 100)")); 

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.height = 960/x + "px";
            grid.style.width = 960/x + "px";
            container.appendChild(grid);
        };
    }
}

createGrid(squareNumbers);

const gridItem = document.querySelectorAll(".grid");

gridItem.forEach(grid =>{
    grid.addEventListener("mouseover", function() {
        grid.style.backgroundColor = "black";

    });
});

playAgain.addEventListener("click", function(){
    gridItem.forEach(grid =>{
        grid.style.backgroundColor = "white";
        });
});