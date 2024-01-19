//console.log('asdf')

/**add 라는 이름의 함수
 * x와y라는 값을 받아서 더하는 함수
 * x ,y : 매개변수 ,parameter

*/



function add (x, y){
    return console.log(`덧셈결과는 ${x + y}`);
}

add(5,2)  //사용하는 방법

// 곱하기 함수 작성
function multiply(x,y){
    return console.log('곱셈결과는' + x * y)
}
multiply(8,9)

const addFunc = (x,y) => {
    return console.log(x+y)
}
addFunc(10,20)

//매개변수를 받아서 그대로 출력하는 함수
// const showName = (name) => {
//     return console.log('제이름은 ${name}입니다')
// }
const showName = name => console.log(`제이름은 ${name}입니다`)
showName(`이건`)