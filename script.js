// ====================================================================
// 1. DADOS: O array 'questions' COMPLETO com 15 perguntas sobre D&C 124
// ====================================================================

const questions = [
    {
        question: "1. Qual é o principal mandamento que o Senhor reitera aos santos nos primeiros versículos de D&C 124?",
        answers: [
            { text: "Organizar a Sociedade de Socorro.", correct: false },
            { text: "Construir uma casa a Seu nome (o Templo).", correct: true },
            { text: "Iniciar a jornada para o Oeste.", correct: false },
            { text: "Enviar doze apóstolos em missão.", correct: false }
        ]
    },
    {
        question: "2. Além do templo, que outro grande edifício o Senhor instruiu que fosse construído em Nauvoo para 'hospedar forasteiros'?",
        answers: [
            { text: "O Salão de Conferências", correct: false },
            { text: "A Casa de Nauvoo (uma pensão/hotel)", correct: true },
            { text: "O Escritório do Profeta", correct: false },
            { text: "A Fábrica de Tijolos", correct: false }
        ]
    },
    {
        question: "3. Por que o Senhor ordenou a construção do Templo de Nauvoo, mesmo que os santos tivessem sido expulsos de Kirtland e do Missouri?",
        answers: [
            { text: "Para realizar selamentos por procuração.", correct: false },
            { text: "Para ter um lugar de adoração grande.", correct: false },
            { text: "Porque Ele restauraria ali as 'plenitudes do sacerdócio'. (D&C 124:28)", correct: true },
            { text: "Para guardar as Placas de Latão.", correct: false }
        ]
    },
    {
        question: "4. Qual apóstolo foi repreendido por ter negligenciado a escritura da história da Igreja, mas foi perdoado pelo Senhor (D&C 124:46)?",
        answers: [
            { text: "Parley P. Pratt", correct: false },
            { text: "Brigham Young", correct: false },
            { text: "George Miller", correct: false },
            { text: "Robert B. Thompson", correct: true }
        ]
    },
    {
        question: "5. Que nome o Senhor deu à cidade de Commerce após a chegada dos santos (D&C 124:3)?",
        answers: [
            { text: "Zion", correct: false },
            { text: "Nova Jerusalem", correct: false },
            { text: "Nauvoo", correct: true },
            { text: "Adam-ondi-Ahman", correct: false }
        ]
    },
    {
        question: "6. Em Doutrina e Convênios 124:30–31, o Senhor explica que o batismo pelos mortos deve ser registrado e realizado na _____.",
        answers: [
            { text: "beira do Rio Mississipi", correct: false },
            { text: "Casa do Senhor (o Templo)", correct: true },
            { text: "Fonte da cidade de Nauvoo", correct: false },
            { text: "Casa de Joseph Smith", correct: false }
        ]
    },
    {
        question: "7. Que princípio o Senhor ensina sobre a iniquidade e o julgamento em D&C 124:49–50, ao falar daqueles que não puderam cumprir Seus mandamentos?",
        answers: [
            { text: "Deus não aceita o sacrifício deles.", correct: false },
            { text: "O Senhor exige obediência perfeita, custe o que custar.", correct: false },
            { text: "Se alguém é impedido por seus inimigos, a iniquidade recai sobre eles (os inimigos).", correct: true },
            { text: "O trabalho vicário deve ser suspenso.", correct: false }
        ]
    },
    {
        question: "8. Quem foi chamado para servir como Segundo Conselheiro de Joseph Smith na Primeira Presidência em D&C 124:126?",
        answers: [
            { text: "Hyrum Smith", correct: false },
            { text: "Sidney Rigdon", correct: false },
            { text: "William Law", correct: true },
            { text: "Amos Davies", correct: false }
        ]
    },
    {
        question: "9. Qual é o papel que foi designado a Hyrum Smith, o irmão de Joseph, nesta seção (D&C 124:94)?",
        answers: [
            { text: "Presidente do Quórum dos Doze Apóstolos", correct: false },
            { text: "Patriarca Presidente da Igreja", correct: true },
            { text: "Bispo Presidente", correct: false },
            { text: "Segundo Conselheiro na Primeira Presidência", correct: false }
        ]
    },
    {
        question: "10. Em D&C 124:84–88, o Senhor ordena que uma proclamação seja escrita e enviada a quais grupos de pessoas?",
        answers: [
            { text: "Todas as nações da Terra, reis, presidentes e líderes.", correct: true },
            { text: "Somente aos vizinhos de Nauvoo.", correct: false },
            { text: "Apenas aos membros da Igreja na Europa.", correct: false },
            { text: "Aos lamanitas (povos indígenas) da América.", correct: false }
        ]
    },
    {
        question: "11. Qual a promessa de exaltação para o fiel que é feito governante sobre muitas coisas, mesmo que tenha sido fiel em poucas (D&C 124:113–114)?",
        answers: [
            { text: "Será um Apóstolo.", correct: false },
            { text: "Será um missionário de tempo integral.", correct: false },
            { text: "Será feito governante sobre muitas.", correct: true },
            { text: "Receberá o dom de profecia.", correct: false }
        ]
    },
    {
        question: "12. Qual é a principal função que o Senhor desejava que fossem realizadas na Casa de Nauvoo (Hotel/Pensāo), além de hospedar forasteiros (D&C 124:60)?",
        answers: [
            { text: "Ser a sede do jornal da Igreja.", correct: false },
            { text: "Ser um local de reunião da Primeira Presidência.", correct: true },
            { text: "Ser um centro de comércio internacional.", correct: false },
            { text: "Ser um hospital para os pobres.", correct: false }
        ]
    },
    {
        question: "13. O que acontece com a iniquidade da Igreja se os santos não conseguirem construir o templo conforme o Senhor ordenou (D&C 124:32)?",
        answers: [
            { text: "Será perdoada por Deus.", correct: false },
            { text: "Recairá sobre suas cabeças.", correct: true },
            { text: "Será suspensa até a Segunda Vinda.", correct: false },
            { text: "Não haverá julgamento.", correct: false }
        ]
    },
    {
        question: "14. Que cargo foi designado para Vinson Knight em D&C 124:139, que ele ocuparia se permanecesse fiel?",
        answers: [
            { text: "Bispo Presidente", correct: false },
            { text: "Membro do Sumo Conselho", correct: false },
            { text: "Bispo Assistente", correct: true },
            { text: "Presidente do Templo", correct: false }
        ]
    },
    {
        question: "15. A frase 'que se humilhe para ser exaltado' é dirigida a qual servo do Senhor nesta seção (D&C 124:114)?",
        answers: [
            { text: "Amos Davies", correct: true },
            { text: "Joseph Smith", correct: false },
            { text: "Sidney Rigdon", correct: false },
            { text: "John C. Bennett", correct: false }
        ]
    }
];

// ====================================================================
// 2. REFERÊNCIAS HTML E VARIÁVEIS DE ESTADO
// ====================================================================

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const resultScreen = document.getElementById("result-screen");
const scoreDisplay = document.getElementById("score-display");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

// Variáveis de Áudio (removidas por padrao, mas podem ser adicionadas depois)
const bgMusic = document.getElementById("background-music");
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");


// ====================================================================
// 3. FUNÇÕES DE ÁUDIO (Mantidas para referência futura)
// ====================================================================

function playBackgroundMusic() {
    if (bgMusic) {
        bgMusic.volume = 0.3; 
        bgMusic.play().catch(error => {
            console.log("Música de fundo não pôde iniciar automaticamente:", error);
        });
    }
}

function playSoundEffect(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.volume = 1.0;
        audioElement.play();
    }
}


// ====================================================================
// 4. FUNÇÕES PRINCIPAIS DO QUIZ
// ====================================================================

function startQuiz() {
    // IMPORTANTE: Ajuste o total de perguntas aqui se for diferente de 20
    const totalQuestions = questions.length; 
    
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove("hide");
    resultScreen.classList.add("hide");
    nextButton.classList.add("hide");
    
    showQuestion();
    // playBackgroundMusic(); // Descomente para ativar a música
}

function showQuestion() {
    // 1. Limpa o estado anterior
    resetState(); 

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    const totalQuestions = questions.length;
    
    // 2. Exibe a pergunta (e a contagem correta)
    // NOTE a correção na exibição da pergunta e contagem!
    questionElement.innerHTML = `Pergunta ${questionNo}/${totalQuestions}: ${currentQuestion.question}`;

    // 3. Cria os botões de resposta
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Armazena se a resposta é correta no dataset
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    // Esconde o botão "Próxima Pergunta"
    nextButton.classList.add("hide");
    
    // Remove todos os botões de resposta anteriores
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // 1. Aplica o estilo (Acerto/Erro) e toca o som
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        // playSoundEffect(soundCorrect); // Descomente para ativar o som
    } else {
        selectedBtn.classList.add("wrong");
        // playSoundEffect(soundWrong); // Descomente para ativar o som
    }
    
    // 2. Desabilita todos os botões após a escolha
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Mostra qual era a resposta correta
        }
        button.disabled = true;
    });

    // 3. Mostra o botão "Próxima Pergunta"
    nextButton.classList.remove("hide");
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    // Esconde a tela do quiz e mostra a tela de resultado
    quizContainer.classList.add("hide");
    resultScreen.classList.remove("hide");
    
    // Exibe a pontuação final
    scoreDisplay.innerHTML = `${score} de ${questions.length}`;
}


// ====================================================================
// 5. EVENT LISTENERS (LIGANDO OS BOTÕES)
// ====================================================================

nextButton.addEventListener("click", () => {
    handleNextButton();
});

restartButton.addEventListener("click", () => {
    startQuiz(); // Chama a função para reiniciar o quiz
});


// ====================================================================
// 6. INICIA O QUIZ
// ====================================================================

startQuiz();