'use strict';



// // THEORY FUNCTIONS
// // 1)
// let num = 20;

// function showFirstMessage(text, arg, pots, ebanb) {
//     console.log(text);
//     let num = 13;
//     console.log(num);
// }

// showFirstMessage('Hi Sanya, ti pidor');
// console.log(num);

// // 2)

// // function calc(a, b) {
// //     return (a + b);

// // }

// // console.log(calc(4, 3));
// // console.log(calc(10, 3));

// // 3) fucntion declaraiton without semicolon in the end of function

// function ret() {
//     let num = 50;
//     return num; 
// }

// const anotherNum = ret();
// console.log(anotherNum);

// // 4) function expression with semicolon in the end!

// const logger = function() {
//     console.log('Ti pidor!');
// };

// logger();

// // 5) Arrow function?

// const calc = (a, b) => {
//     console.log(1);
//     return a + b
// };




// const str = 'teSt';
// const arr = [1, 2, 3, 5, 6];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'some penis';

// console.log(fruit.indexOf('s'));

// const logg = 'Ti pidor';

// console.log(logg.slice(3, 8));

// console.log(logg.substring(3, 8));

// console.log(logg.substr(3, 8));

// const numnum = 12.69;
// console.log(Math.round(numnum));

// const testNum ='12.2px';

// console.log(parseInt(testNum));
// console.log(parseFloat(testNum));




// PRACTICE FUNCTIONS

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){

    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('rate it', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('ne ne ne ne verno');
            i--;
        }
    }
}

// rememberMyFilms ();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('sliwkom malo uebok');
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log('normul');
    } else if (personalMovieDB.count > 30) {
        console.log('ebat ti woobwe na ulice bivaesh?');
    } else {
        console.log('TI POTS');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){

    for ( let i = 1; i <= 3; i++){
        const genre = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
