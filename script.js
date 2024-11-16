const questions = [
    { category: "HTML", question: "What does HTML stand for?" },
    { category: "CSS", question: "What does CSS stand for?" },
    { category: "JavaScript", question: "What is the purpose of JavaScript in web development?" },
    { category: "Variables", question: "What is the correct syntax to declare a variable in JavaScript?" },
    { category: "Data Types", question: "What is the output of `console.log(typeof null)`?" },
    { category: "DOM", question: "What does the `querySelector` method do in JavaScript?" },
    { category: "ES6", question: "What is the difference between `let`, `const`, and `var`?" },
    { category: "Git", question: "What is the purpose of the `git commit` command?" },
    { category: "JSON", question: "What does `JSON` stand for?" },
    { category: "Misc", question: "What is the purpose of the `<script>` tag in HTML?" }
];

let currentQuestionIndex = 0;

function nextQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answerInput = document.getElementById('answer-input');
    const userAnswer = answerInput.value.trim();

    // Clear the input field for the next question
    answerInput.value = "";

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = `[${currentQuestion.category}] ${currentQuestion.question}`;
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
