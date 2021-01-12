function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return console.log(`Сложение: ${arg1 + arg2}`);
        case 'sub':
            return console.log(`Вычитание: ${arg1 - arg2}`);
        case 'multi':
            return console.log(`Умножение: ${arg1 * arg2}`);
        case 'dif':
            return console.log(`Деление: ${arg1 / arg2}`);
        default:
            return console.log('Такой операции нет!')
    }
}

mathOperation(30, 5, 'sum')
mathOperation(30, 5, 'sub')
mathOperation(30, 5, 'multi')
mathOperation(30, 5, 'dif')
mathOperation(30, 5, 'summmm')