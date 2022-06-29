/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};





function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {

		let film = prompt('Один из последних просмотренных фильмов?', '');
		let rating = prompt('На сколько оцените его?', '');
	
		if (film != null && rating != null && film != '' && rating != '' && film.length < 50) {
	
			personalMovieDB.movies[film] = rating;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
};
rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('мало');
	} else if (personalMovieDB.count > 30) {
		console.log('error');
	} else {
		console.log('вы классический зритель');
	}
};
detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i=1; i<=3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i-1] = genre;
	}
}
writeYourGenres();

/* SHARDONE 
SAVINION BUAN
SAVINION
PINOGRIJIO
white vine */