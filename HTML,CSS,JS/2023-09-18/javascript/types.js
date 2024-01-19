console.log('types')

/**
 * 자료형
 * ------------------------
 * number: 숫자
 * srting: 문자
 * boolean: 참,거짓
 * undedined: 정의되지않은값
 * null : 빈값
 */

// let value = 5; // 숫자형 : number
// value = '5'; // 문자형 : string
// value = true; // boolean :참
// value = false; // boolean : 거짓

// 변수 이름 앞에 typeof 를 부이면 자료형을 확인할 수 있다 
// console.log(value, typeof value)

// 1+ '1' = 11
//예시 
// '5개' 라는 문자열이 왓고, 거기서 '개'를 지우고 
// '5' 라는 값이 나왓으나 여전히 문자열인 상태
//'5' 를 숫자형으로 변환하는 방법
// let number ='5';
// number = parseInt(number);
// console.log(number);
// number = +number; // 숫자가 문자형으로 들어갔을 경우에 작동
// console.log(number, typeof number)

let number2 = '9.5';
number2 = parseFloat(number2); //형변환시 소수점을 표현해야할때 
console.log(number2)

let string = 100;
string = String(string)
string = string.toString()
console.log(string, typeof string)