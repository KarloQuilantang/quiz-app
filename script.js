const questions = [
  {
    question: "Which body system is primarily responsible for bringing oxygen into the body?",
    options: ["Circulatory system", "Respiratory system", "Digestive system", "Nervous system"],
    answer: 1
  },
  {
    question: "What is the correct sequence of the pathway oxygen takes?",
    options: [
      "Nose → Trachea → Lungs → Alveoli → Heart → Blood Vessels → Body Cells",
      "Nose → Lungs → Trachea → Heart → Alveoli → Body Cells",
      "Nose → Trachea → Alveoli → Lungs → Blood Vessels → Heart",
      "Nose → Blood Vessels → Heart → Lungs → Alveoli → Body Cells"
    ],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('start-btn');
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const backBtn = document.getElementById('back-btn'); 

  startBtn.addEventListener('click', function() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
  });
  

  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    backBtn.classList.toggle('hidden', currentQuestionIndex === 0);
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ?'Finish' : 'Next';
    if (currentQuestionIndex === 1){
      backBtn.classList.add('hidden')
      backBtn.classList.remove('hidden')
    }
    if(currentQuestionIndex < questions.length -1) {
      nextBtn.classList.add('hidden')
      nextBtn.classList.remove('hidden')
    }

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      
      button.classList.add('w-full', 'text-left', 'p-3', 'border', 'rounded', 'hover:bg-blue-50', 'transition');

      button.addEventListener('click', () => checkAnswer(index, button));
      optionsElement.appendChild(button);
    });
  }


  function checkAnswer(selectedIndex, clickedButton) {
    const isCorrect = selectedIndex === questions[currentQuestionIndex].answer;
    if(isCorrect) {
      score++;
      clickedButton.classList.add('bg-green-100', 'border-green-400');
    } else {
      clickedButton.classList.add('bg-red-100', 'border-red-400');
      const correctButton = optionsElement.children[questions[currentQuestionIndex].answer];
      correctButton.classList.add('bg-green-100', 'border-green-400');
    }
  }
  
  

  function showResults() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = `
      <p class="text-lg mb-4 text-center">Your score: <span class="font-bold text-blue-600">${score}</span> out of ${questions.length}</p>
      <button onclick="location.reload()" class="bg-gray-800 text-white px-4 py-2 rounded">Restart</button>
    `;
  }

  nextBtn.addEventListener('click', () => {
    // if not at the end, then index++ then load question()
    if(currentQuestionIndex < questions.length -1) {
      currentQuestionIndex++
      loadQuestion();
    }else {
      showResults();
    }
  });

  backBtn.addEventListener('click', () => {
    // if index>0 , index --, then loadquestion()
    if(currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  })
});