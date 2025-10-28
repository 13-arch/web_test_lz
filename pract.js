import { Questions } from "./pract2.js";
import { arrayQuiz } from "./pract2.js"

const start_but = document.getElementById('start_but');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const quest1 = document.getElementById('quest1');
const answersBut = Array.from(document.getElementsByClassName("answer"));
const backBut = document.getElementById("back");
const scoreText = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

let score = 0;
let arrayObject = [];

for(let i = 0; i < arrayQuiz.length; ++i){
    arrayObject[i] = new Questions(arrayQuiz[i].question, arrayQuiz[i].answerText, arrayQuiz[i].correct);
}

function updateProgress(currentIndex){
    let total = arrayObject.length;
    let percent = ((currentIndex+1) / total) * 100;
    progressBar.style.width = percent + "%";
    progressText.textContent = `Вопрос ${currentIndex+1} из ${total}`;
}

function quest(j){
    quest1.textContent = arrayObject[j].questions;
    updateProgress(j);

    for(let i = 0; i < answersBut.length; ++i){
        answersBut[i].textContent = arrayObject[j].answer[i];
        answersBut[i].disabled = false;
        answersBut[i].classList.remove("correct", "wrong");

        answersBut[i].onclick = function(){
            answersBut.forEach(btn => btn.disabled = true);

            if(arrayObject[j].correct === i){
                answersBut[i].classList.add("correct");
                score += 1;
            } else {
                answersBut[i].classList.add("wrong");
                answersBut[arrayObject[j].correct].classList.add("correct");
            }

            setTimeout(() => {
                if(j < arrayObject.length - 1){
                    quest(++j);
                } else {
                    endQuiz();
                }
            }, 800);
        }
    }  
}

function start_quiz(){
    block2.style.display = 'block';
    block1.style.display = 'none';
    quest(0);
}

function endQuiz(){
    scoreText.textContent = `Ваш счёт: ${score}`;
    block2.style.display = 'none';
    block3.style.display = 'block';
}

function backMain(){
    block1.style.display = 'block';
    block3.style.display = 'none';
    score = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "";
}

start_but.addEventListener('click', start_quiz);
backBut.addEventListener('click', backMain);
