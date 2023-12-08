const questions = [
    {
        question: "Quel est le principal gaz à effet de serre?",
        options: ["Oxygène", "Azote", "Dioxyde de carbone", "Méthane"],
        correctAnswer: "Dioxyde de carbone"
    },
    {
        question: "Quelle est la principale source d'énergie renouvelable?",
        options: ["Éolienne", "Solaire", "Hydraulique", "Géothermique"],
        correctAnswer: "Solaire"
    },
    {
        question: "Combien de tonnes de plastique sont déversées dans les océans chaque année?",
        options: ["1 million", "5 millions", "8 millions", "12 millions"],
        correctAnswer: "8 millions"
    },
    {
        question: "Quelle proportion de la surface de la Terre est recouverte par les forêts?",
        options: ["20%", "30%", "40%", "50%"],
        correctAnswer: "30%"
    },
    {
        question: "Quel est l'élément le plus abondant dans l'atmosphère terrestre?",
        options: ["Azote", "Oxygène", "Argon", "Dioxyde de carbone"],
        correctAnswer: "Azote"
    }
];

let currentQuestion = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. La bonne réponse est : " + questions[currentQuestion].correctAnswer);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Félicitations! Vous avez terminé le quiz.");
        resetGame();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Vous avez terminé le quiz. Cliquez sur 'Suivant' pour recommencer.");
        resetGame();
    }
}

function resetGame() {
    currentQuestion = 0;
    displayQuestion();
}

window.onload = displayQuestion;