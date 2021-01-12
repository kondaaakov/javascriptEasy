let i = 0;
do {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это чётное число`);
    } else {
        console.log(`${i} - это нечётное число`);
    }
    i++;
} while (i <= 10);