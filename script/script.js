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
let leftClick = false;

document.addEventListener("mousedown" , event => {
    if (event.button === 0)
    {
        leftClick = true;
    }
})

document.addEventListener("mouseup" , event => {
    if (event.button === 0)
    {
        leftClick = false;
    }
});

gridSquares.forEach(square => {
    square.addEventListener("mouseenter" , event => {
        if (event.target === square && leftClick == true)
        {
            event.target.style.backgroundColor = "black";
        }
    })
})