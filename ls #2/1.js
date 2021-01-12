let a = 1, b = 1, c, d;
c = ++a;
console.log(c); // 2. При применении результата в данный момент префиксная форма возвращает новое значение.

d = b++;
console.log(d); // 1. При использовании результата сейчас постфиксная форма инкремента возвращает старое значение.

c = 2 + ++a;
console.log(c); // 5. Тут a будет 3, так как до этого у а было 2.

d = 2 + b++;
console.log(d); // 4. 2+2 = 4
console.log(a); // 3. До этого выполнялись действия с а, где оно увеличивалось на 1.
console.log(b); // 3. Также и тут.