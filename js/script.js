const cols = 7, rows = 6;
let board = [];
let currentPlayer = 1;

const boardEl = document.getElementById("board");

// Create board in HTML + JS
function initBoard() {
  board = Array(rows).fill().map(() => Array(cols).fill(0));
  boardEl.innerHTML = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.addEventListener("click", cellClick);
      boardEl.appendChild(cell);
    }
  }
}

// Handle click
function cellClick(e) {
  const col = +e.target.dataset.col;
  // drop in lowest empty
  for (let r = rows - 1; r >= 0; r--) {
    if (board[r][col] == 0) {
      board[r][col] = currentPlayer;
      renderBoard();
      currentPlayer = currentPlayer == 1 ? 2 : 1;
      break;
    }
  }
}

function renderBoard() {
  document.querySelectorAll('.cell').forEach(cell => {
    const r = +cell.dataset.row, c = +cell.dataset.col;
    cell.classList.remove("player1","player2");
    if (board[r][c] === 1) cell.classList.add("player1");
    else if (board[r][c] === 2) cell.classList.add("player2");
  });
}

document.getElementById("resetBtn").addEventListener("click", initBoard);

initBoard();
