let board = document.querySelector(".board");
let blockheight = 50;
let blockwidth = 50;

const cols = Math.floor(board.clientHeight / blockheight);
const rows = Math.floor(board.clientWidth / blockwidth);
board.addEventListener("click", () => {
  console.log("mayur");
});
const blocks = [];

const snake = [
  {
    x: 1,
    y: 3,
  },
];
let direaction = "up";
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  snake.forEach((segment) => {
    console.log(segment);
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// setInterval(() => {
//   let head = null;
//   if (direaction === "left") {
//     head = { x: snake[0].x, y: snake[0].y - 1 };
//   } else if (direaction === "right") {
//     head = { x: snake[0].x, y: snake[0].y + 1 };
//   } else if (direaction === "down") {
//     head = { x: snake[0].x + 1, y: snake[0].y };
//   } else if (direaction === "up") {
//     head = { x: snake[0].x - 1, y: snake[0].y };
//   }

//   snake.forEach((segment) => {
//     blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
//   });
//   snake.unshift(head);
//   snake.pop();
//   render();
// }, 400);

// ArrowUp
// script.js:56 ArrowRight
// script.js:56 ArrowDown
// script.js:56 ArrowLeft
addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    direaction = "up";
  } else if (event.key == "ArrowRight") {
    direaction = "right";
  } else if (event.key == "ArrowDown") {
    direaction = "down";
  } else if ((event.key = "ArrowLeft")) {
    direaction = "left";
  }
});
