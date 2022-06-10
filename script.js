'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || 
        personalMovieDB.count == null || 
        isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function(){
        for (let i=0; i < 2; i ++) {
                const a = prompt('Latest film you saw', ''),
                        b = prompt('rate it', '');
            if ( a!=null && b!= null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else{
                console.log('error');
                i --;
            }        
        }

    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        console.log('sliwkom malo uebok');
        } else if (10 <= personalMovieDB.count <= 30) {
            console.log('normul');
        } else if (personalMovieDB.count > 30) {
            console.log('ebat ti woobwe na ulice bivaesh?');
        } else {
            console.log('TI POTS');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
        console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDb: function(){
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else{
           personalMovieDB.private = true;
        }

    },
    writeYourGenres: function() {

        for (let i = 1; i <= 2; i++) {

            // const genre = prompt(`ваш любимый жанр под номером ${i}`);

            // if (genre =='' || genre == null){
            //     console.log('you have dialed wrong info');
            //     i--;
            // } else{
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt(`please enter you favorites genres using comma`).toLowerCase();

            if (genres =='' || genres == null){
                console.log('you have dialed wrong info');
                i--;
            } else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item , i) => {
            console.log(`favorite genre ${i + 1} - is ${item}`);
        });
    }
};


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.private);

