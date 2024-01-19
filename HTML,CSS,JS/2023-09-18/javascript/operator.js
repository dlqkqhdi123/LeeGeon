//operator.js
//'연산자'라는 문자를 출역해보세요
console.log('연산자');

let value = 1 + 2; // 3
console.log(value) // 2
value = 1 + Number('1'); //2
value = 5 - 1; // 4
value = 10 - '1'; // 0
value = 10 - '하기싫어죽겟다' // NaN < 숫자가 아니라는 뜻 Not a Number , 숫자형이 아닌것을 계산하려고했을 때 나오는 에러
value = 10 * 10; // 100
value = 1/2 //0.5
value = 5 % 3; // 2 나머지를구하는 연산자, 
value = (1 + 2) * 3
console.log(value, typeof value)

let x = 5
// console.log(x+true); // true = 1
console.log(x + false) // false = 0
// null : 강제로 빈값을 넣어줄때 쓰는 자료형
console.log(x + null); //null = 0

let pokemon;
let name = '피카츄'
let age = 29;
pokemon = '안녕 나는' + name + '야, 나이는' + age + '살이야'
console.log(pokemon)


//안녕하세요 name 님 로그인 되었습니다
// let message;
// let username = '이건'
// message = '안녕하세요 ' + username + '님 로그인되었습니다';


// console.log(message)


//user 님의 이메일 주소는, useremail 거주지는 userplace 입니다 
let userInfo;
let username = '이건'
let useremail = 'dldldl@123123'
let userplace = "대전"
let userage = 27
// ES6 부터 추가된 템플릿 리터럴 방식
// userInfo = username + ' 님의 이메일 주소는' + useremail + '거주지는' + userplace + '입니다' ;
//문자열을 표현할때 작은따옴표, 큰따옴표 , 백틱(backtick)
userInfo = `${username} 님의 이메일 주소는 ${useremail} 거주지는 ${userplace} 나이는 ${userage * 2}입니다`
console.log(userInfo)



let text = 'hello world'
console.log(text.length) // 문자열의 길이를 알 수 있는 length
console.log(text.toUpperCase()) // 대문자로 변환
console.log(text.toLowerCase()) // 소문자로 변환

let Geon = 1;
Geon = Geon + 1; // 2
Geon = Geon - 1; // 1
Geon += 1; // 2 
Geon -= 1; // 1
Geon *= 5; // 5
Geon /= 2 //2.5
Geon %= 1; // 0.5
Geon++;
Geon++;
Geon++;
Geon++; // 증가연산자, 매번 사용할때 마다 1씩증가 (++)
Geon--; // 감소연산자, 매번 사용할때마다 1씩 감소 (--)

console.log(Geon)

// a++ , ++a 의차이 
// a++ 는 일단 값을 넣어둔 상태에서 증가
// ++a 는 일단 값을 증가시킨후에 담는다
let a = 1;
let b = a++;
// let b = ++a;
console.log(a,b)