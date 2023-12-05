// запитуємо користувача про радіус
var radius = prompt('Введіть радіус кола:');

// переводимо введений радіус в число
radius = parseFloat(radius);

// проводимо перевірку
if (isNaN(radius) || radius <= 0) {
  console.error('Введений радіус не є коректним числовим значенням.');
} else {
  // обчислюємо периметр і площу кола
  var perimeter = 2 * Math.PI * radius;
  var area = Math.PI * Math.pow(radius, 2);

  // виводимо результат у консоль
  console.log('Периметр кола:', perimeter.toFixed(2));
  console.log('Площа кола:', area.toFixed(2));
}
