const questions = [
    {
        question: "Who won Champions Trophy 2025?",
        options: ["India", "Australia", "New Zealand", "South Africa"],
        correctAnswer: "India"
    },
    {
        question: "Which city in India is known as Garden City?",
        options: ["Jaipur", "Delhi", "Kerala", "Bengaluru"],
        correctAnswer: "Bengaluru"
    },
    {
        question: "What is 10*2",
        options: ["23", "19", "20", "200"],
        correctAnswer: "20"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        li.appendChild(button);
        optionsElement.appendChild(li);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-btn");

    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    nextButton.style.display = "none";
}

displayQuestion(); // Start the quiz