function isLeap(year) {
  // Рік є високосним, якщо він ділиться на 4
  // Але не є високосним, якщо він ділиться на 100
  // Однак, якщо рік ділиться на 100 і також на 400, то він є високосним
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

var yearToCheck = 2024;
var result = isLeap(yearToCheck);

console.log('Рік ' + yearToCheck + ' є високосним: ' + result);
