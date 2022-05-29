'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let incr = 10,
    decr = 10;
const personalMovieDB = {

    //++incr;
    //--decr;
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('rate it', '');

//     if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('ne ne ne ne verno');
//         // i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('sliwkom malo uebok');
// } else if(10 <= personalMovieDB.count <= 30) {
//     console.log('normul');
// } else if(personalMovieDB.count > 30) {
//     console.log('ebat ti woobwe na ulice bivaesh?');
// } else {
//     console.log('TI POTS');
// }

// console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Sliwkom malo uebok');
} else if(personalMovieDB >= 10 && personalMovieDB.count <30) {
    console.log('serednychek');
} else if(personalMovieDB.count >= 30) {
    console.log('sidi lychwe viydi na ulitsu');
} else {
    console.log('Owibka naxui, vvodi davai cifri');
}