// Maze layout: 0 = empty, 1 = wall, 2 = player, 3 = goal
// Students please come up with a better maze layout
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const mazeContainer = document.querySelector("#maze");
const messageDiv = document.querySelector("#message");
let playerRow = 1;
let playerCol = 1;

// initial maze
let row = 0;
while (row < maze.length) {
    let col = 0;
    while (col < maze[row].length) {
        const cell = document.createElement("div");
        cell.className = "w-10 h-10 flex items-center justify-center text-white";
        cell.id = "cell-" + row + "-" + col;

        switch (maze[row][col]) {
            //Wall
            case 1:
                cell.classList.add("bg-slate-600");
                break;
            //Player
            case 2:
                cell.classList.add("bg-blue-500");
                cell.textContent = "P";
                break;
            //Goal
            case 3:
                cell.classList.add("bg-red-500");
                cell.textContent = "G";
                break;
            default:
                cell.textContent = "";
                cell.classList.add("bg-white");
        }

        mazeContainer.appendChild(cell);
        col = col + 1;
    }
    row = row + 1;
}

document.addEventListener("keydown", function (event) {
    let newRow = playerRow;
    let newCol = playerCol;

    switch (event.key) {
        case "ArrowUp":
            newRow = newRow - 1;
            break;
        case "ArrowDown":
            newRow = newRow + 1;
            break;
        case "ArrowLeft":
            newCol = newCol - 1;
            break;
        case "ArrowRight":
            newCol = newCol + 1;
            break;
        default:
            return;
    }

    //don't let play go through walls.
    if (maze[newRow][newCol] === 1) {
        return;
    }

    const oldCell = document.getElementById("cell-" + playerRow + "-" + playerCol);

    oldCell.classList.remove("bg-blue-500");
    oldCell.textContent = "";

    // Update player position
    playerRow = newRow;
    playerCol = newCol;

    const newCell = document.getElementById("cell-" + playerRow + "-" + playerCol);
    newCell.classList.remove("bg-white");
    newCell.classList.add("bg-blue-500");
    newCell.textContent = "P";

    //reached goal
    if (maze[playerRow][playerCol] === 3) {
        messageDiv.textContent = "You Won! Refresh to play again.";
    }
});
