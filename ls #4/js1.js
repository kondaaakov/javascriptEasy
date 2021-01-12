function numToObj (num) {
    let obj = { };

    if (num >= 0 && num < 1000) {
        let numArr = strToArr(num);
        obj.firstDigit = numArr[0];

        if (numArr[1]) {
            obj.secondDigit = numArr[1];
        }

        if (numArr[2]) {
            obj.thirdDigit = numArr[2];
        }

        return consoleObj(obj);
    } else {
        console.log('Вы ввели число, которое не находится в диапазоне от 0...999');

        return obj;
    }
}

function strToArr (num) {
    let none = '';
    let strNum = String(num);
    return strNum.split(none);
}

function consoleObj(item) {
    if (item.firstDigit && !item.secondDigit) {
        console.log(`Число состоит только из разряда единиц.`);
        console.log(`Единицы: ${item.firstDigit}`);
    } else if (item.secondDigit && !item.thirdDigit) {
        console.log(`Число состоит только из разрядов десятков и единиц.`);
        console.log(`Десятки: ${item.firstDigit}`);
        console.log(`Единицы: ${item.secondDigit}`);
    } else {
        console.log(`Число состоит из разрядов сотен, десятков и единиц.`);
        console.log(`Сотни: ${item.firstDigit}`);
        console.log(`Десятки: ${item.secondDigit}`);
        console.log(`Единицы: ${item.thirdDigit}`);
    }

    return item;
}