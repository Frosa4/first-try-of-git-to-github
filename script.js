'use strict';

if (4 == 10) {
    console.log('OK!');
} else {
    console.log('pizdec!');
}

const num = '50';

// if (num < 49) {
//     console.log('ne previlno')
// } else if (num > 100){
//     console.log(' too much')
// } else{
//     console.log('OK!')
// }

// (num === 50) ? console.log('OK!') : console.log('ne previlno');

switch (num) {
    case '49': 
        console.log('Nihua');
        break;

    case '100': 
        console.log('Nihua');
        break;

    case '50':
        console.log('ogon verno!');
        break;

    default: 
        console.log('not this time');
        break;
}
