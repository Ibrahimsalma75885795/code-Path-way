const quizForm = document.getElementById("quiz-form");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const improveBtn = document.getElementById("improve-btn");
const translateBtn = document.getElementById("translate-btn");

const correctAnswers = 2; // Update this with the number of questions

document.getElementById("submit-quiz").addEventListener("click", () => {
  let score = 0;
  const formData = new FormData(quizForm);
  formData.forEach((value) => {
    if (value === "correct") score++;
  });
  
  const grade = (score / correctAnswers) * 100;
  resultMessage.innerText = `Your grade is ${grade.toFixed(2)}%. ${
    grade < 70 ? "Keep practicing!" : "Great job!"
  }`;

  quizForm.classList.add("hidden");
  resultContainer.classList.remove("hidden");
});

improveBtn.addEventListener("click", () => {
  window.location.href = "gammal-tech.html";
});

translateBtn.addEventListener("click", () => {
  if (document.documentElement.lang === "en") {
    document.documentElement.lang = "ar";
    document.body.style.direction = "rtl";
    translateBtn.innerText = "ترجمة إلى الإنجليزية";
    document.getElementById("quiz-title").innerText = "اختبار البرمجة";
  } else {
    document.documentElement.lang = "en";
    document.body.style.direction = "ltr";
    translateBtn.innerText = "Translate to Arabic";
    document.getElementById("quiz-title").innerText = "Programming Quiz";
  }
});
