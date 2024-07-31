'use strict';


/*
In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

Pak should not be the first or last word. Strings of just spaces should return an empty string.
*/

function pak(s) {
  // Разбиваем строку на массив подстрок
  let str = s.split(' ');

  if (str.every((val) => val === '')) return '';

  return str
    .map((el, i, arr) => (i !== arr.length - 1 ? `${el} pak` : el))
    .join(' ');
}

console.log(pak('     '));