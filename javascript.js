const container = document.getElementById("container");
const playAgain = document.querySelector(".playAgain");



function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
        };
    }
}

createGrid(16);

const gridItem = document.querySelectorAll(".grid");

gridItem.forEach(grid =>{
    grid.addEventListener("mouseover", function() {
        grid.setAttribute("style", "background: black;");
    });
});

playAgain.addEventListener("click", function(){
    location.reload();
});







