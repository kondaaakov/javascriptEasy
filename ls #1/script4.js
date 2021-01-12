let userTicket = prompt('Введите цифры билета');

/**
 * Функция получения ввода пользователя и последующего разбиения на массив
 * @param ticket - почучаем данные билета
 * @returns {string[]} - выводим билет разобранный на массив
 */
function getUserTicket (ticket = userTicket) {
    return ticket.split('');
}

/**
 * Функция деления массива на две части и последующего вычисления суммы массива
 * @param dia1 - диапазон для начала разбиения массива
 * @param dia2 - диапазон для конца разбиения массива
 * @param sum - изначальная сумма, равна 0.
 * @param arr - получение массива на разбивку
 * @returns {number} - выводим конечную сумму.
 */
function sliceUserTicket (dia1, dia2, sum = 0, arr = getUserTicket()) {
    let userTicketPart = arr.slice(dia1, dia2);
    for (let i = 0; i < userTicketPart.length; i++) {
        sum += +userTicketPart[i];
    }
    return sum;
}

function checkUserTicket () {
    let firstPartTicket = sliceUserTicket(0, 3);
    let secondPartTicket = sliceUserTicket(3, 6);
    if (firstPartTicket === secondPartTicket) {
        return console.log(`Номер билета ${userTicket} является счастливым!`);
    } else {
        return console.log(`Билет под номером ${userTicket}, к сожалению не счастливый!`);
    }
}

checkUserTicket();