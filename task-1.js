// запитуємо користувача про значення a
var a = prompt('Введіть значення для a:');

// переводимо введене значення a в число
a = parseFloat(a);

// перевірка
if (isNaN(a)) {
    console.error('Введене значення для a не є числом.');
} else {
    // запитуємо користувача про значення b
    var b = prompt('Введіть значення для b:');

    // переводимо введене значення b в число
    b = parseFloat(b);

    // перевірка
    if (isNaN(b)) {
        console.error('Введене значення для b не є числом.');
    } else {
        // обчислюємо та виводимо результати у консоль
        console.log('a + b =', a + b);
        console.log('a - b =', a - b);
        console.log('a * b =', a * b);
        console.log('a / b =', a / b);
    }
}