function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length !== 10) {
    console.error('Переданий параметр має бути масивом з 10 чисел.');
    return;
  }

  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);

  let positiveSum = arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

  let negativeProduct = arr.filter(num => num < 0).reduce((product, num) => product * num, 1);

  let positiveCount = arr.filter(num => num > 0).length;
  let negativeCount = arr.filter(num => num < 0).length;

  return {
    maxNumber,
    minNumber,
    positiveSum,
    negativeProduct,
    positiveCount,
    negativeCount
  };
}

// приклад
var numbersArray = [5, -3, 8, -2, 0, 12, -7, 4, 1, -6];
var analysisResult = analyzeArray(numbersArray);

console.log('Найбільше число:', analysisResult.maxNumber);
console.log('Найменше число:', analysisResult.minNumber);
console.log('Сума додатних чисел:', analysisResult.positiveSum);
console.log('Добуток від\'ємних чисел:', analysisResult.negativeProduct);
console.log('Кількість додатних чисел:', analysisResult.positiveCount);
console.log('Кількість від\'ємних чисел:', analysisResult.negativeCount);
