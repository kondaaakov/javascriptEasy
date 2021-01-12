'use strict';

const messages = {
    'name': 'Имя должно быть больше одного символа',
    'tel': 'Только 11 цифр',
    'pass': 'Пароль должен быть больше 5 символов',
    'apass': 'Пароли не совпадают',
}

const settings = {
    nameMinValue: 1,
    nameMaxValue: 15,
    telMustValue: 11,
    passMinValue: 5,
}

const app = {
    messages,
    settings,
    passwords: [],
    form: document.querySelector('#form'),
    inputs: document.querySelectorAll('.form_input'),
    button: document.querySelector('#button'),

    init() {
        this.renderAttributes();
        this.initEventHandlers();

        this.inputs[3].disabled = true;
        // this.button.disabled = true;
    },

    renderAttributes() {
        this.inputs[0].dataset.minval = '1';
        this.inputs[0].dataset.maxval = '15';
        this.inputs[1].dataset.mustval = '11';
    },

    initEventHandlers() {
        this.inputs.forEach(elem => {
            elem.addEventListener('focusout', event => this.inputFocusHandler(event))
        });
        // this.button.addEventListener('click', event => this.buttonClickHandler(event));
    },

    inputFocusHandler(event) {
        this.isCorrectValue(event)
    },

    isCorrectValue(event) {
        let len = event.target.value.length;
        let id = event.target.id;
        if (event.target === this.inputs[0]) {
            this.isCorrectName(len, id);
        } else if (event.target === this.inputs[1]) {
            this.isCorrectNumber(len, id);
        } else if (event.target === this.inputs[2]) {
            this.isCorrectPassword(event, id);
        } else {
            this.isPasswordsMatch(event, id);
        }
    },

    isCorrectName(length, id) {
        this.eraseWarnField(id);
        if (length > this.settings.nameMinValue) {
            this.goAllGood(id);
            return true;
        } else {
            this.goSomeBad(id);
        }
    },

    isCorrectNumber(length, id) {
        this.eraseWarnField(id);
        if (length === this.settings.telMustValue) {
            this.goAllGood(id);
            return true
        } else {
            this.goSomeBad(id);
        }
    },

    isCorrectPassword(event, id) {
        this.eraseWarnField(id);
        if (event.target.value.length > this.settings.passMinValue) {
            this.passwords.length = 0;
            this.passwords.push(event.target.value);
            this.goAllGood(id);
            this.unDisabledPassword();
            return true;
        } else {
            this.goSomeBad(id);
        }
    },

    unDisabledPassword() {
        this.inputs[3].disabled = false;
        let passField = document.querySelector('#apass');
        passField.classList.remove('form_input_block');
    },

    isPasswordsMatch(event, id) {
        this.eraseWarnField(id);
        this.passwords.splice(1, 1, `${event.target.value}`);
        if (this.passwords[0] === this.passwords[1]) {
            this.goAllGood(id);
            return true
        } else {
            this.goSomeBad(id);
        }
    },

    goSomeBad(id) {
        let block = document.querySelector(`#${id}`);
        block.classList.remove('form_input_ok');
        block.classList.add('form_input_nook');

        let message = document.querySelector(`#warn_${id}`);
        message.innerHTML = this.messages[id];
    },

    eraseWarnField(id) {
        let message = document.querySelector(`#warn_${id}`);
        message.innerHTML = '';
    },

    goAllGood(id) {
        let block = document.querySelector(`#${id}`);
        block.classList.add('form_input_ok');
    }
}

// document.querySelector(`#warn_${input}`);

app.init();