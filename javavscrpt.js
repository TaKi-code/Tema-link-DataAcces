const quizData = `{
  "quiz": {
      "q1": {
          "question": "Which one is correct team name in NBA?",
          "options": [
              "New York Bulls",
              "Los Angeles Kings",
              "Golden State Warriros",
              "Huston Rocket"
          ],
          "answer": "Huston Rocket"
      },
      "q2": {
          "question": "'Namaste' is a traditional greeting in which Asian language?",
          "options": [
              "Hindi",
              "Mandarin",
              "Nepalese",
              "Thai"
          ],
          "answer": "Hindi"
      },
      "q3": {
          "question": "The Spree river flows through which major European capital city?",
          "options": [
              "Berlin",
              "Paris",
              "Rome",
              "London"
          ],
          "answer": "Berlin"
      },
      "q4": {
          "question": "Which famous artist had both a 'Rose Period' and a 'Blue Period'?",
          "options": [
              "Pablo Picasso",
              "Vincent van Gogh",
              "Salvador Dalí",
              "Edgar Degas"
          ],
          "answer": "Pablo Picasso"
      }
  }
}`;


const quizObj = JSON.parse(quizData);


console.log(quizObj);


const quizContainer = document.getElementById('quiz-container');


let quizHTML = '';


for (const question in quizObj.quiz) {

  const currentQuestion = quizObj.quiz[question];


  let optionsHTML = '';


  for (const option of currentQuestion.options) {
    optionsHTML += `
      <label>
        <input type="radio" name="${question}" value="${option}">
        ${option}
      </label>
    `;
  }


  quizHTML += `
    <div class="question">
      <h3>${currentQuestion.question}</h3>
      <div class="options">
        ${optionsHTML}
      </div>
    </div>
  `;
}


quizContainer.innerHTML = quizHTML;

