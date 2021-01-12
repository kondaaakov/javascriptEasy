let i = 0;
while (i < 100) {
    if (isPrimeNumber(i)) {
        console.log(i);
    }
    i++
}

function isPrimeNumber (i) {
    if (i === 1) {
        return false;
    } else if (i === 2 || i === 3) {
        return true
    } else if (i % i === 0 && !(i % 2 === 0) && !(i % 3 === 0) && !(i % 5 === 0) && !(i % 7 === 0)) {
        return true;
    }
}