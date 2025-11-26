let board = document.querySelector(".board");
let blockheight = 30;
let blockwidth = 30;

const cols = Math.floor(board.clientHeight / blockheight);
const rows = Math.floor(board.clientWidth / blockwidth);
board.addEventListener("click", () => {
  console.log("mayur");
});

for (let i = 0; i < rows * cols; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  board.appendChild(block);
}
