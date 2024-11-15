const grid = document.querySelector(".grid");

createDefaultGrid(grid);

function createDefaultGrid(grid)
{
    for(let i = 0; i < 16 * 16; i++)
    {
        const square = document.createElement("div");
        square.classList.add("normal-square");
        grid.appendChild(square);
    }
}

const gridSquares = document.querySelectorAll(".normal-square");

gridSquares.forEach(square => {
    square.addEventListener("mouseenter" , event => {
        console.log(event.target)
        if (event.target === square)
        {
            event.target.style.backgroundColor = "black";
            console.log(1);
        }
    })
})