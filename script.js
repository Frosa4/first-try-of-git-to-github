'use strict';

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
    b = prompt ('rate it', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('rate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);