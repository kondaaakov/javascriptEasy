function bankOperation () {
    let numberBank = +prompt('Введите сумму, которую хотите положить на счёт.')

    if (numberBank % 10 === 0) {
        return console.log(`Сумма в ${numberBank} рублей успешна зачислена на счёт`);
    } else if (numberBank % 10 === 1) {
        return console.log(`Сумма в ${numberBank} рубль успешна зачислена на счёт`);
    } else if (numberBank % 10 > 1 && numberBank % 10 < 5) {
        return console.log(`Сумма в ${numberBank} рубля успешна зачислена на счёт`);
    } else {
        return console.log(`Сумма в ${numberBank} рублей успешна зачислена на счёт`);
    }
}

bankOperation();