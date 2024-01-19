// console.log(): 개발자 도구에서 값을 확인할때 사용한다
// 숫자 변수 문자 등등 많은 것을 넣어서 확인할 수 있다 

/* 주석을 여러줄로 넣을때는 
이런 방식으로 넣어줍니다 별 슬러시
*/



console.log('문자')
console.error('에러 메시지는 이렇게나온다')
console.warn('경고메시지')


/**
 * ---------------------------
 * 변수
 * --------------------------- 
 */
// 변수를 선언할 때 키워드  let, var, const
// 주로쓰는것은 es6부터 추가된 let. const


// dog 라는 변수를 선언한다
// let dog;

//변수를 선언할 때 주의점
// 이름이 중복되면 안된다(스코프,scope 가 달라야한다)
// let 1dog; x
// let dog1; o
// 변수 이름에 숫자를 쓸 수 있다. 하지만, 앞에 가장먼저 나오면 안된다
//let dog+; // +,* 같은 연산자를 붙여선 안된다.
//let $dog;//달러 사인을 붙여서 짓는것은 허용
//let _dog;//underscore(밑줄)을 붙이는것도 허용


// 변수를 선언과 동시에 할당
// let cat = '고양이';
// console.log(cat);

//이름 짓는 규칙
// thisisusername;

// snake case : 밑줄(unerscore)를 활용한 변수명 짓는 방법
//let this_is_user_name;
//kebab case : 사용하지않는다
//변수명은 대소문자도 가린다.

// PacalCase : 모든 단어 첫글자는 대문자로
// let ThisIsUserName;

// camel case : 낙타등같이 생겨싸고해서 camel case
// let thisisusername

//let 이라는 키워드를 통해서 변수를 선언
// 변수 = 변하는 값
// 진돗개 삼용이, 치와와 영철이 , 포메라니안 춘향이
let dogName = '삼용이';
dogName = '영철이';

dogName = '춘향이'
console.log(dogName)

//고양이 : 보름이, 반달이, 밤이
const catName ='보름이'
//상수(constant)로 선언된 값은 중간에 바꿀 수 없다
// const : 상수는 값이 변하면 안되는 경우에 사용

catName = '밤이'
console.log(catName)

//몇몇의 예외적인 상황은 있지만, 기본적으로 상수는 변하지않는다는것이 기본
const number = [1,2,3];
numbers.push(4);

console.log(nombers)









