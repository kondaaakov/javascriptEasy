'use strict'

const questions = [
    {
        question: 'Земля - обитаемая планета?',
        variants: {
            'a': 'Да',
            'b': 'Нет',
            'c': 'А что это?',
            'd': 'Марс - обитаемая планета!',
            'e': 'Не знаю',
        },
        rightVar: 'a',
    },
    {
        question: 'Первая по счёту планета от Солнца?',
        variants: {
            'a': 'Юпитер',
            'b': 'Земля',
            'c': 'Меркурий',
            'd': 'Сатурн',
            'e': 'Не знаю',
        },
        rightVar: 'c',
    },
    {
        question: 'Сколько у лютей ног?',
        variants: {
            'a': 'Шесть',
            'b': 'Четыре',
            'c': 'Две',
            'd': 'Ноль',
            'e': 'Не знаю',
        },
        rightVar: 'c',
    },
    {
        question: 'Какой вышел последний iPhone?',
        variants: {
            'a': 'iPhone 11',
            'b': 'iPhone XR',
            'c': 'iPhone 5S',
            'd': 'iPhone 12',
            'e': 'Не знаю',
        },
        rightVar: 'd',
    },
    {
        question: 'Как будет правильно на английском слово "белый"?',
        variants: {
            'a': 'blue',
            'b': 'white',
            'c': 'yellow',
            'd': 'bus',
            'e': 'I dont know :(',
        },
        rightVar: 'b',
    },
];

const game = {
    questions,
    scoreCount: 0,
    questionIndex: 0,

    init() {
        this.scoreCount = 0;
        this.questionIndex = 0;
    },

    run() {
        this.init();

        let first = +prompt('Если хотите начать викторину, введите 1, если нет, то -1.');
        if (first === -1) {
            return alert('Всего доброго!');
        } else {
            this.getQuestions();
        }

    },

    getQuestions() {
        while (true) {
            if (this.questionIndex < 5) {
                let question = this.questions[this.questionIndex].question;
                let variants = this.getVariants(this.questionIndex);
                let userAnswer = prompt(`${question}\n${variants}\n\nПросьба вводить только буквы на английском языке. Если хотите выйти из игры, введите -1.`);

                if (userAnswer === '-1') {
                    break;
                }

                if (this.rightOrNot(userAnswer, this.questionIndex)) {
                    this.questionIndex++;
                } else {
                    alert('Попробуйте снова. Вы ввели неверный ответ.');
                }
            } else {
                alert(`Конец! Вы ответили на ${this.scoreCount} из ${this.questions.length}.`);
                break;
            }
        }
    },
    getVariants(indexOfQuestion) {
        let str = '';
        for (const key in this.questions[indexOfQuestion].variants) {
            str += `${key}. ${this.questions[indexOfQuestion].variants[key]}\n`
        }

        return str;
    },

    rightOrNot(answer, index) {
        if (answer === 'e') {
            return true;
        } else if (answer === this.questions[index].rightVar) {
            this.scoreCount++;
            return true;
        } else {
            return false;
        }
    },
}

game.run();