// Место для первой задачи
function calculateVolumeAndArea(l) {
	let messageCube = '';
	if (typeof (l) != 'number' || l % 1 !== 0 || l <= 0) {
		return messageCube = 'При вычислении произошла ошибка';
	}
	let areaCube = Math.pow(l, 2) * 6,
		volumeCube = Math.pow(l, 3);
	messageCube = `Объем куба: ${volumeCube}, площадь всей поверхности: ${areaCube}`;
	return messageCube;

}

// Место для второй задачи
function getCoupeNumber(x) {
	if (typeof (x) !== 'number' || !Number.isInteger(x) || x < 0) {
		return ('Ошибка. Проверьте правильность введенного номера места');
	}
	if (x === 0 || x > 36) {
		return ('Таких мест в вагоне не существует');
	}
	for (let i = 4; i <= 36; i += 4) {
		if (x <= i) {
			return Math.ceil(i / 4);
		}
	}
}

// Упражнение №8
// 1)
function getTimeFromMinutes(time) {
	if (typeof (time) !== 'number' || !Number.isInteger(time) || time < 0) {
		return 'Ошибка, проверьте данные';
	}
	let hours = Math.floor(time / 60);
	let minutes = time % 60;
	if (hours === 0 || hours >= 5) {
		return `Это ${hours} часов и ${minutes} минут`;
	}
	if (hours === 1) return `Это ${hours} час и ${minutes} минут`;

	return `Это ${hours} часа и ${minutes} минут`;
}

getTimeFromMinutes(150);

//2)

function findMaxNumber() {

	max = arguments[0];

	for (let i = 0; i < 4; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
		if (typeof (arguments[i]) !== 'number' || arguments.length < 4) {
			return 0;
		}
	}
	return (max);
}
console.log(findMaxNumber(2, 5, 3, 1, 10));

//9  Fibonnacci
function fib(count) {
    if(typeof(count) !== 'number' || count ===0) {
        return ''
    }
    let a=0, b=1;
    let fb = 0;
    let result ='';
    for (let i = 0; i<count; i++) {
    	fb=a+b;
    	result+=`${a} `
    	a=b;
    	b=fb;
    }
    return result.slice(0, -1);
}

console.log(fib(4));