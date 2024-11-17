let isArabic = false;

function switchLanguage() {
    const elements = {
        title: { en: "Programming Skills Test", ar: "اختبار مهارات البرمجة" },
        "test-instruction": {
            en: "Answer the following 3 questions to assess your skills:",
            ar: "أجب عن الأسئلة  التالية لتقييم مهاراتك:"
        },
        q1: {
            en: "What does 'var' mean in JavaScript?",
            ar: "ماذا تعني 'var' في JavaScript؟"
        },
        q2: {
            en: "What does 'let' do in JavaScript?",
            ar: "ماذا يفعل 'let' في JavaScript؟"
        },
        "language-switcher": {
            en: "Switch to Arabic",
            ar: "التبديل إلى الإنجليزية"
        }
    };

    isArabic = !isArabic;

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id][isArabic ? "ar" : "en"];
        }
    }
}

function calculateScore() {
    const form = document.getElementById("quiz-form");
    const answers = form.querySelectorAll("input[type='radio']:checked");
    let score = 0;

    answers.forEach(answer => {
        if (answer.value === "correct") score++;
    });

    document.getElementById("test-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";

    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = isArabic
        ? `حصلت على ${score} 4 من `
        : `You scored ${score} out of 4`;
}

function goToPage(page) {
    window.location.href = `${page}.html`;
}
