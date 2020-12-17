const quizData = [

   {
      question: 'Кто из президентов США написал свой собственный рассказ про Шерлока Холмса?',
      a: 'Джон Кеннеди',
      b: 'Франклин Рузвельт',
      c: 'Рональд Рейган',
      d: 'Здесь нет верного ответа',
      correct: 'b'
   }, {
      question: 'Какую пошлину ввели в XII  веке в Англии для того чтобы заставить мужчин пойти на войну?',
      a: 'Налог на тунеядство',
      b: 'Налог на трусость',
      c: 'Налог на отсутствие сапог',
      d: 'Здесь нет верного ответа',
      correct: 'b'
   }, {
      question: 'Откуда пошло выражение «деньги не пахнут?',
      a: 'От подателей за провоз парфюмерии',
      b: 'От сборов за нестиранные носки',
      c: 'От налога на туалеты',
      d: 'Здесь нет верного ответа',
      correct: 'c'
   }, {
      question: 'Туристы, приезжающие на Майорку, обязаны заплатить налог…',
      a: 'На плавки',
      b: 'На пальмы.',
      c: 'На солнце',
      d: 'Здесь нет верного ответа',
      correct: 'c'
   }, {
      question: 'Основой для «Сказки о рыбаке и рыбке Пушкина послужила сказка братьев Гримм «Рыбак и его жена». В ней немецкая «коллега» нашей старухи превратилась в:',
      a: 'Папу Римского',
      b: 'Директора рыбзавода',
      c: 'Королеву',
      d: 'Командира отряда водолазов',
      correct: 'c'
   }, {
      question: 'Найдите ошибку в отрывке из басни Крылова: «Попрыгунья Стрекоза лето красное пропела; оглянуться не успела, как зима катит в глаза».',
      a: 'Стрекозы не умеют прыгать',
      b: 'Эти насекомые совсем не издают звуков',
      c: 'Зимы в тех местах, о которых писал Крылов, нет',
      d: 'Здесь нет ошибки, все правильно',
      correct: 'c'
   }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

   const currentQuizData = quizData[currentQuiz];

   questionEl.innerText = currentQuizData.question;
   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}

function getSelected() {
   let answer = undefined;

   answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
         answer = answerEl.id;
      }
   });

   return answer;
}

function deselectAnswers() {
   answerEls.forEach((answerEl) => {
      answerEl.checked = false;
   });
}

submitBtn.addEventListener("click", () => {
   // check to see the answer
   const answer = getSelected();

   if (answer) {
      if (answer === quizData[currentQuiz].correct) {
         score++;
      }

      currentQuiz++;
      if (currentQuiz < quizData.length) {
         loadQuiz();
      } else {
         quiz.innerHTML = `
                <h2>Вы верно ответили на   ${score}/${quizData.length} вопросов.</h2>
                
                <button onclick="location.reload()">Еще раз</button>
            `;
      }
   }
});