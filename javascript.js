const container = document.getElementById("container");


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