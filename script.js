'use strict';

// let str = 'somepizdec';

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof (strObj));

console.dir([1, 2, 3, 4, 28]);

const soldier = {
    head: 400,
    armor: 150,
    sayHello: fucntion() {
        console.log('Hello, Eblan!');
    }
};

const john = {
    health: 500
};

// john.__proto__ = soldier; ( OLD TYPE)

Object.setPrototypeOf(john, soldier);

john.sayHello();