const grid = document.querySelector(".grid");
const setSizeBtn = document.querySelector(".grid-size-btn");
const cleanCanvaBtn = document.querySelector(".clean-canva-btn");
const randomRgbBtn = document.querySelector(".random-rgb-btn");
let color = "black"

createDefaultGrid(grid);

let gridSquares = document.querySelectorAll(".normal-square");
let leftClick = false;

giveSquaresHandlers(gridSquares);


// RANDOM RGB HANDLER
randomRgbBtn.addEventListener("click" , () => {
    color = `rgb(${Math.floor(Math.random() * (255 - 1) + 1)} ,${Math.floor(Math.random() * (255 - 1) + 1)} , ${Math.floor(Math.random() * (255 - 1) + 1)})`
});

// CLEAN THE CANVA HANDLER
cleanCanvaBtn.addEventListener("click" , () => {
    gridSquares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});


// GET SQUARE PER ROW AND CALL CUSTOMIZE GRID FUNCTION
setSizeBtn.addEventListener("click" , () => {
    while (true)
    {
        let squarePerRow = Number(prompt("square per row (max = 100) : "));
        if(!isNaN(squarePerRow) && (squarePerRow > 0 && squarePerRow <= 100))
        {
            grid.innerHTML = "";
            createCustomizableGrid(squarePerRow);
            gridSquares = document.querySelectorAll(".normal-square");
            giveSquaresHandlers(gridSquares);
            break;
        }
        
        if(isNaN(gridSize))
        {
            alert("grid size not a number");
        }
        else if(gridSize < 0 || gridSize > 100)
        {
            alert("Max is 100 | size should bet between 0 and 100");
        }
    }

})

// GIVE GRID SQUARES EVENT LISTENERS
function giveSquaresHandlers(gridSquares)
{
    gridSquares.forEach(square => {
        square.addEventListener("mousedown" , activePaint);
        square.addEventListener("mouseup" , inactivePaint);
        square.addEventListener("mouseenter" , () => {
            continousPainting(square , event , color);
        });
    });    
}

// FUNCTION TO CLEAN THE CANVAS
function continousPainting(square , event)
{
    if (event.target === square && leftClick == true)
    {
        event.target.style.backgroundColor = color;
    }
}

// CREATE DEFAULT GRID ON LOAD
function createDefaultGrid(grid)
{
    for(let i = 0; i < 16 * 16; i++)
    {
        const square = document.createElement("div");
        square.classList.add("normal-square");
        grid.appendChild(square);
    }
}


// CREATE CUSTOMIZABLE GRID
function createCustomizableGrid (squarePerRow)
{
    for(let i = 0; i < squarePerRow * squarePerRow; i++)
    {
        const square = document.createElement("div");
        square.classList.add("normal-square");
        const squareSize = grid.clientWidth / squarePerRow;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        grid.appendChild(square);
    }
}

// WHEN LEFT CLICK
function activePaint()
{
    if (event.button === 0)
    {
        leftClick = true;
    }
}

// WHEN LEFT CLICK
function inactivePaint()
{
    if (event.button === 0)
    {
        leftClick = false;
    }
}

