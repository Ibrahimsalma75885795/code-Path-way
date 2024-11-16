const translateButton = document.getElementById('translateButton');
const title = document.getElementById('title');
const description = document.getElementById('description');

let isEnglish = true;

const translations = {
    english: {
        title: "Welcome to Gammal Tech",
        description: "Gammal Tech is a leading educational platform that provides cutting-edge training in programming, artificial intelligence, and modern technologies. Our mission is to empower learners with practical skills to excel in the tech industry",
        button: "Translate to Arabic"
    },
    arabic: {
        title: "مرحبًا بكم في جمل تك",
        description: "جمل تك هي منصة تعليمية رائدة تقدم تدريبات متقدمة في البرمجة والذكاء الاصطناعي والتقنيات الحديثة. هدفنا هو تمكين المتعلمين بالمهارات العملية للتميز في صناعة التكنولوجيا.",
        button: "ترجمة إلى الإنجليزية"
    }
};

translateButton.addEventListener('click', () => {
    if (isEnglish) {
        title.textContent = translations.arabic.title;
        description.textContent = translations.arabic.description;
        translateButton.textContent = translations.arabic.button;
    } else {
        title.textContent = translations.english.title;
        description.textContent = translations.english.description;
        translateButton.textContent = translations.english.button;
    }
    isEnglish = !isEnglish;
});
