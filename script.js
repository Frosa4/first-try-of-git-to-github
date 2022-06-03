'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function(){
//         console.log('AHUET DERMO');
//     }
// };

// options.makeTest();

// const {border, background} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);



// console.log(options.name);

// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} have meaning ${options[key][i]}`);
//             // counter++; 
//         } 
//     } else {
//             console.log(`Свойство ${key} have meaning ${options[key]}`);
//             counter++;
//         }
// }

// console.log(counter);

//////// ARREY THEORY11111111111111

const arr = [1, 2, 27, 13, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}

// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });



//arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(',');
// products.sort();
// console.log(products.join(';'));


//////<<<< LINK SPREAD LESSON

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // just a link to the object, not an object with it's structure inside

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

//Поверхностная копия сверху

const add = {
    d: 17,
    e: 500
};



const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log (clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] ='Suka pizda ne ponyatno'

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'Iexplorer'],
    blogs = ['worldpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'Insta', 'Facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['Suka', ' pizda', 'xueta'];

const newArr = [...array];

const q = {
    one: 1,
    two: 2,
    three: 69
}

const newObj = {...q};

