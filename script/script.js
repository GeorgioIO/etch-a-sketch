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




gridSquares.forEach(square => {
    square.addEventListener("click" , event => {
        if (event.button == 0)
        {
            leftClick = true;
        }
    })

    square.addEventListener("mouseenter" , event => {
        if (event.target === square && leftClick == true)
        {
            event.target.style.backgroundColor = "black";
        }
    })
})