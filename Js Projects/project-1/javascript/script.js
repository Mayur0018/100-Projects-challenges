const answerOptions = document.querySelector(".answer-options");
const nextQstionsBtn = document.querySelector(".next-qustion-btn");

let quizCategory = "programming";
let cuurentQustions = null;
const getRandomQustion = () => {
  const categoryQustions =
    questions.find(
      (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
    ).questions || [];
  const randomQustions =
    categoryQustions[Math.floor(Math.random() * categoryQustions.length)];
  return randomQustions;
};

// Highlight the correct answer option and add icone
const highlightCorrectAnswer = () => {
  const correctOption =
    answerOptions.querySelectorAll(".answer-options")[
      cuurentQustions.correctAnswer
    ];
  correctOption.classList.add("correct");
  const iconeHTML = `<span class = "material-symbols-rounded">check_circle</span>`;

  correctOption.insertAdjacentHTML("beforeend", iconeHTML);
};

// Handle The users answer selections
const handleAnswer = (option, answerIndex) => {
  const isCorrect = cuurentQustions.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? "correct" : "incorrect");
  !isCorrect ? highlightCorrectAnswer() : " ";

  const iconeHTML = `<span class = "material-symbols-rounded">${check_circle}</span>`;

  option.insertAdjacentHTML("beforeend", iconeHTML);
  answerOptions
    .querySelectorAll(".answer-options")
    .forEach((option) => (option.style.pointerEvents = "none"));
};

const renderQuestios = () => {
  cuurentQustions = getRandomQustion();
  if (!cuurentQustions) return;
  console.log(cuurentQustions);

  answerOptions.innerHTML = "";
  document.querySelector(".qustion-text").textContent =
    cuurentQustions.question;

  // Create Option li Element append them and add click event listeners
  cuurentQustions.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.appendChild(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
};
renderQuestios();
nextQstionsBtn.addEventListener("click", renderQuestios);
