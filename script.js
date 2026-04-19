const questions = [
  {
    question: "Which body system is primarily responsible for bringing oxygen from the external environment into the body?",
    options: ["Circulatory system", "Respiratory system", "Digestive system", "Nervous system"],
    answer: 1
  },
  {
    question: "What is the correct sequence of the pathway oxygen takes from the air to the body's cells?",
    options: [
      "Nose → Trachea → Lungs → Alveoli → Heart → Blood Vessels → Body Cells",
      "Nose → Lungs → Trachea → Heart → Alveoli → Body Cells",
      "Nose → Trachea → Alveoli → Lungs → Blood Vessels → Heart",
      "Nose → Blood Vessels → Heart → Lungs → Alveoli → Body Cells"
    ],
    answer: 0
  },
  {
    question: "In which specific structure of the lungs does the 'magic' of gas exchange occur?",
    options: ["Trachea", "Bronchi", "Alveoli", "Diaphragm"],
    answer: 2
  },
  {
    question: "What type of blood does the right side of the heart pump to the lungs?",
    options: ["Oxygen-rich blood", "Oxygen-poor blood", "Nutritious blood", "Filtered air"],
    answer: 1
  },
  {
    question: "Oxygen moves from the alveoli into the blood through which biological process?",
    options: ["Digestion", "Circulation", "Respiration", "Diffusion"],
    answer: 3
  },
  {
    question: "Which tiny blood vessels surround the alveoli to allow for the exchange of oxygen and carbon dioxide?",
    options: ["Capillaries", "Arteries", "Veins", "Ventricles"],
    answer: 0
  },
  {
    question: "After the blood becomes oxygen-rich in the lungs, where does it go next?",
    options: ["Directly to the body cells", "To the left side of the heart", "Back to the nose", "To the right side of the heart"],
    answer: 1
  },
  {
    question: "Which gas is a waste product that moves from the blood into the lungs to be exhaled?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 2
  },
  {
    question: "Why must the respiratory and circulatory systems work together as a 'team'?",
    options: [
      "To make sure the lungs can expand",
      "To ensure oxygen reaches all body cells to produce energy",
      "To keep the heart beating at a steady rate",
      "To allow the body to sweat during exercise"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a way to take care of your cardiorespiratory system?",
    options: [
      "Exercising and avoiding smoking",
      "Eating only once a day",
      "Sitting down all day to save energy",
      "Ignoring dizzy spells during physical activity"
    ],
    answer: 0
  }
]

let currentQuestionIndex = 0
let score = 0

function loadQuestion(){
    const questionElement = document.getElementById('question')
    const optionsElement = document.getElementById('options')

}

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('start-btn')
  const startScreen = document.getElementById('start-screen')
  const quizScreen = document.getElementById('quiz-screen')

  startBtn.addEventListener('click', function() {
    startScreen.classList.add('hidden')
    quizScreen.classList.remove('hidden')
  })

})