'use strict';

function first (){
    // Do woto
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`im learning: ${lang}`);
    callback();
}

function done() {
    console.log('I have passed this lesson');
}

learnJS('JavaScript', done);