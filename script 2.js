/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2');



let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



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
if (personalMovieDB.count < 10) {
	console.log('мало');
} else if (personalMovieDB.count > 30) {
	console.log('error');
} else {
	console.log('вы классический зритель');
}


console.log(personalMovieDB);

// function

function returnNeighboringNumbers(b) {
	let arr = [], a = 0;
	for (let i = b - 1; i <= (b + 1); i++) {
		arr[a] = i;
		++a;
	}
	return arr;
}
console.log(returnNeighboringNumbers(4));

function getMathResult(a, b) {
	let result = '';
	let c = a;
	for (let i = 0; i < b; i++) {
		result += c + '---';
		c += a;
	}
	if (typeof (b) != 'number' || b <= 0) {
		return (a);
	} else {
		return result.slice(0, -3);
	}

}

console.log(getMathResult(10, 5));

//
function calculateVolumeAndArea(l) {
	let messageCube = '';
	if (typeof (l) != 'number' || l % 1 != 0 || l <= 0) {
		return messageCube = 'При вычислении произошла ошибка';
	} else {
		let areaCube = l * l * 6,
			volumeCube = l * l * l;
		messageCube = `Объем куба: ${volumeCube}, площадь всей поверхности: ${areaCube}`;
		return messageCube;
	}
};
console.log(calculateVolumeAndArea('15.5'));


