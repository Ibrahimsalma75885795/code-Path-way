const questions = [
    "What does HTML stand for?",
    "What does CSS stand for?",
    "What is the purpose of JavaScript in web development?",
    "What is the correct syntax to declare a variable in JavaScript?",
    "What is the output of `console.log(typeof null)`?",
    "What does the `querySelector` method do in JavaScript?",
    "What is the difference between `let`, `const`, and `var`?",
    "What does the DOM stand for?",
    "What is the purpose of the `git commit` command?",
    "What does `JSON` stand for?"
];

let currentQuestionIndex = 0;

function nextQuestion() {
    const questionContainer = document.getElementById('question-container');
    if (currentQuestionIndex < questions.length) {
        questionContainer.textContent = questions[currentQuestionIndex];
        currentQuestionIndex++;
    } else {
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');
    }
}

function redirectToWebsite() {
    window.location.href = "https://ibrahimsalma75885795.github.io/code-Path-way/#home";
}

// Load the first question when the page loads
window.onload = () => {
    nextQuestion();
};
