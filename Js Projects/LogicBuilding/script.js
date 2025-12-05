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
    const key = segment.x + "-" + segment.y;
    if (blocks[key]) {
      blocks[key].classList.add("fill");
    }
  });
}

const intervaliId = setInterval(() => {
  let head = { ...snake[0] };
  if (direaction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direaction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direaction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direaction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    alert("Game Over");
    clearInterval(intervaliId);
  }
  snake.forEach((segment) => {
    const key = segment.x + "-" + segment.y;
    if (blocks[key]) {
      blocks[key].classList.remove("fill");
    }
  });

  snake.unshift(head);
  snake.pop();
  render();
}, 300);

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
  } else if (event.key == "ArrowLeft") {
    direaction = "left";
  }
});
render();

