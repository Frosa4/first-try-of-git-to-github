'use strict';

// To string

//1

console.log(typeof(String(4)));

//2)

console.log(typeof(NaN + ''));

const num = 5;

console.log('http://vk.com/catalog/' + num);

const fontize = 26 + 'px';

// To Number

console.log(typeof(Number('4')));

//2

console.log(typeof(+'5'));

//3

console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('ni ch suka? naskolko ti axuel ot 1 do 10', 'Vvedi chislo suka!');

// to Bollean

// Always to False

0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log('Working...')
} 

switcher = 1;

if (switcher) {
    console.log('Working...')
} 

//2 

console.log(typeof (Boolean(4)));

//3

console.log(typeof (!!'445'));
