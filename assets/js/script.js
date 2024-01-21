
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Get the target page from the clicked link
    const targetPage = this.innerHTML.toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page.toLowerCase()) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}
//quiz
document.addEventListener('DOMContentLoaded', function () {
  const quizForm = document.getElementById('quiz-form');
  const submitBtn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result-container');

  // Questions and Correct Answers
  const questions = [
      { question: "What is the capital of France?", options: ['A. London', 'B. Berlin', 'C. Paris', 'D. Madrid'], answer: "C" },
      { question: "Which planet is known as the Red Planet?", options: ['A. Venus', 'B. Mars', 'C. Jupiter', 'D. Saturn'], answer: "B" },
      { question: "What is the largest mammal in the world?", options: ['A. Elephant', 'B. Giraffe', 'C. Blue Whale', 'D. Gorilla'], answer: "C" },
      { question: "Who wrote 'Romeo and Juliet'?", options: ['A. Charles Dickens', 'B. William Shakespeare', 'C. Jane Austen', 'D. Mark Twain'], answer: "B" },
      { question: "In which year did World War II end?", options: ['A. 1939', 'B. 1942', 'C. 1945', 'D. 1950'], answer: "C" },
      { question: "What is the capital of Japan?", options: ['A. Seoul', 'B. Beijing', 'C. Tokyo', 'D. Bangkok'], answer: "C" },
      { question: "Who painted the Mona Lisa?", options: ['A. Vincent van Gogh', 'B. Leonardo da Vinci', 'C. Pablo Picasso', 'D. Claude Monet'], answer: "B" },
      { question: "What is the largest ocean on Earth?", options: ['A. Atlantic Ocean', 'B. Indian Ocean', 'C. Southern Ocean', 'D. Pacific Ocean'], answer: "D" },
      { question: "What is the capital of Brazil?", options: ['A. Rio de Janeiro', 'B. Brasília', 'C. São Paulo', 'D. Buenos Aires'], answer: "B" },
      { question: "Who developed the theory of relativity?", options: ['A. Isaac Newton', 'B. Albert Einstein', 'C. Galileo Galilei', 'D. Stephen Hawking'], answer: "B" }
  ];

  // Dynamically populate the quiz form
  questions.forEach((q, index) => {
      const questionContainer = document.createElement('div');
      questionContainer.classList.add('question-container');

      const questionText = document.createElement('p');
      questionText.textContent = `${index + 1}. ${q.question}`;

      questionContainer.appendChild(questionText);

      q.options.forEach((choice, choiceIndex) => {
          const label = document.createElement('label');
          const radioBtn = document.createElement('input');
          radioBtn.type = 'radio';
          radioBtn.name = `q${index}`;
          radioBtn.value = String.fromCharCode(65 + choiceIndex); // Convert to letters A, B, C, D
          label.textContent = choice;
          label.appendChild(radioBtn);
          questionContainer.appendChild(label);
      });

      quizForm.appendChild(questionContainer);
  });

  // Event listener for the submit button
  submitBtn.addEventListener('click', function () {
      let score = 0;
      const userAnswers = [];

      questions.forEach((q, index) => {
          const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
          if (selectedAnswer) {
              userAnswers.push(selectedAnswer.value);
              if (selectedAnswer.value === q.answer) {
                  score++;
              }
          }
      });

      // Display the result
      displayResult(score, userAnswers);
  });

  // Function to display the result
  function displayResult(score, userAnswers) {
      resultContainer.innerHTML = `
          <h2>Your Score: ${score}/${questions.length}</h2>
          <h3>Correct Answers:</h3>
          <ul>
              ${questions.map((q, index) => `<li>${index + 1}. ${q.answer}</li>`).join('')}
          </ul>
      `;
  }
});



