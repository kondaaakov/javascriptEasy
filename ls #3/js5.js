const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

const sumArr = [];
let thisArr = NaN;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    arr[i].forEach(elem => {
        sum += elem;
    })
    console.log(`Сумма массива №${i+1} равна ${sum}`);

    sumArr.push(sum);
    sumArr.sort(sIncrease);

    if (sum === sumArr[sumArr.length-1]) {
        thisArr = i;
    }
}

console.log(`Максимальная сумма в массивах является ${sumArr[sumArr.length-1]}`);
console.log(`Этим массивом является [${arr[thisArr].join(', ')}] под номером ${thisArr+1}`);
arr[thisArr].sort(sIncrease);
console.log(`Минимальным значением этого массива является ${arr[thisArr][0]}`);

function sIncrease(i, ii) { // По возрастанию
    if (i > ii) return 1;
    else if (i < ii) return -1;
    else return 0;
}