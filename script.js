/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
// 1)

/* let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2');

// 2)

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3)

function addFilm() {
    let film = prompt('Один из последних просмотренных фильмов?', '');
    let rating = prompt('На сколько оцените его?', '');
    let film2 = prompt('Один из последних просмотренных фильмов?', '');
    let rating2 = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[film] = rating;

};



addFilm();

console.log(personalMovieDB);

// Boolean
let num = 5;
(num == 5) ? console.log(true) : console.log(false);

console.log(1 && 0); // если одна ложь, то выводит ложь
console.log(1 && 5);  // если все значение правда, то выводит последнее значение
console.log(null && 5); // null = false
console.log(0 && 'dsada'); // 0 = false */



// Циклы

/* let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (j = 0; j < i; j++) {
        result += '*'
    }
    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue first;
            console.log(`Third level ${k}`);
        }
    }
}; */


/* const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// Пишем решение вот тут
let count = data.length - 1;
for (i = 0; i < data.length; i++) {
    result[i] = data[count];
    count--;
}

console.log(result); */

/* var lines = 5;  // Quantity of lines
var space = 5; // Quantity of gaps in the first line
var star = 1;  // Quantity of stars in the first line
var result='';
for (var h1 = 0; h1 <= lines; h1++) {
    for (var wsp = 0; wsp < space; wsp++) {
        result+=' ';
    }
    for (var wst = 0; wst < star; wst++) {
        result+='*';
    }
    space -= 1;
    star += 2;
    result+='\n';
} */


// STRING 
let str='Hello world'
console.log(str.toUpperCase());

console.log(str.slice(-1));

console.log(str.split(' '));

console.log(str.substring(6,11)); 
console.log(str.substr(6, 5));

// NUMBER

const num = 12.2;
console.log(Math.round(num));
