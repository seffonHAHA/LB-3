var n = prompt('Введіть кількість доданків у ряду:');

// перевірка
if (isNaN(n) || parseInt(n) <= 0) {
  console.error('Введене значення не є коректним числовим значенням.');
} else {

  var sum = 0;

  // знаходимо суму 
  for (var i = 1; i <= n; i++) {
    var term = parseInt('1'.repeat(i)); // Перетворення рядка '111' у число 111
    sum += term;
  }

  // результат
  console.log('Сума ряду:', sum);
}
