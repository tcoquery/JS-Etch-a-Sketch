const container = document.getElementById("container");
const playAgain = document.querySelector(".playAgain");
const clear = document.querySelector(".clear");


function createGrid() {
    let gridSize = Number(window.prompt("Set a size for the grid (must be less than 100)")); 
    if (gridSize > 100 || Number.isNaN(gridSize)) {
        if(alert("Wrong input")){}
            else window.location.reload(); 
    } else {
        for (let rows = 0; rows < gridSize; rows++) {
        for (let columns = 0; columns < gridSize; columns++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.height = 960/gridSize + "px";
            grid.style.width = 960/gridSize + "px";
            container.appendChild(grid);
        };
    }
}  
}

createGrid();

const gridItem = document.querySelectorAll(".grid");

gridItem.forEach(grid =>{
    grid.addEventListener("mouseover", function() {
        grid.style.backgroundColor = "black";

    });
});

playAgain.addEventListener("click", function(){
    location.reload();
     
    });

clear.addEventListener("click", function(){
    gridItem.forEach(grid =>{
        grid.style.backgroundColor = "white";
        });
});