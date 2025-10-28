export class Questions{
    constructor(questions, answer, correct){
        this.questions = questions;
        this.answer = answer; 
        this.correct = correct;
    }
}

export let arrayQuiz = [
    {
        question: 'Какого цвета небо?',
        answerText: ["Синего", "Зелёного", "Красного", "Жёлтого"],
        correct: 0,
    },
    {
        question: 'Сколько лап у кошки?',
        answerText: ["Две", "Четыре", "Шесть", "Восемь"],
        correct: 1,
    },
    {
        question: 'Какого цвета трава?',
        answerText: ["Синяя", "Зелёная", "Белая", "Чёрная"],
        correct: 1,
    },
    {
        question: 'Сколько дней в неделе?',
        answerText: ["5", "6", "7", "8"],
        correct: 2,
    },
    {
        question: 'Какого цвета банан?',
        answerText: ["Красный", "Жёлтый", "Фиолетовый", "Серый"],
        correct: 1,
    },
    {
        question: 'Сколько пальцев на одной руке?',
        answerText: ["Четыре", "Пять", "Шесть", "Семь"],
        correct: 1,
    },
    {
        question: 'Какого цвета апельсин?',
        answerText: ["Оранжевый", "Синий", "Белый", "Чёрный"],
        correct: 0,
    },
    {
        question: 'Сколько месяцев в году?',
        answerText: ["10", "11", "12", "13"],
        correct: 2,
    },
    {
        question: 'Какого цвета снег?',
        answerText: ["Белый", "Зелёный", "Красный", "Жёлтый"],
        correct: 0,
    },
    {
        question: 'Сколько ушей у человека?',
        answerText: ["Одно", "Два", "Три", "Четыре"],
        correct: 1,
    },
];
