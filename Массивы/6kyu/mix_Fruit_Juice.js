'use strict'

/*
Story
Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

Input
The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

Example
['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)
*/

function mixFruit (arr) {
      // Создаем объект фруктов с их ценами
  const fruitPrices = {
    'banana': 5,
    'orange': 5,
    'apple': 5,
    'lemon': 5,
    'grapes': 5,
    'avocado': 7,
    'strawberry': 7,
    'mango': 7
  };

  let totalPrice = 0;

  // Обрабатываем каждый фрукт в массиве
  for (const fruit of arr) {
    // Приводим название фрукта к нижнему регистру
    const fruitLowerCase = fruit.toLowerCase();
    
    // Если фрукт в списке, добавляем его цену, иначе добавляем цену за специальный фрукт
    if (fruitPrices[fruitLowerCase] !== undefined) {
      totalPrice += fruitPrices[fruitLowerCase];
    } else {
      totalPrice += 9; // Цена за неуказанные фрукты
    }
  }

  // Вычисляем среднюю цену и округляем её
  const averagePrice = totalPrice / arr.length;
  return Math.round(averagePrice);

}

console.log(mixFruit(['banana','mango','avocado']));
console.log(mixFruit(['melon','Mango','kiwi']));
console.log(mixFruit(['watermelon','cherry','avocado']));
console.log(mixFruit(['apple','Banana']));
console.log(mixFruit(['watermelon','lime','tomato']));