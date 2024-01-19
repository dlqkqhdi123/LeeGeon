// console.log('22')


function add(x,y){
    return x + y;
}
console.log(add(2,3))


//Fat arrow function, 혹은화살표 함수
const addfunc = (x,y) => {
    return console.log(x + y);

}
//실행
addfunc(50,5)

// 매개변수가 하나일때, 화살표함수를 축약해서 표현하는 방법
// (축약형)>>  const doudle = x => console.log(x * x);
const doudle = (x) => {
    return console.log(x *x);
}

doudle(5,5)


// const showName = (name) => {
    // return console.log(`제이름은 ${name}입니다`)
// }
// showName('이건')

// const showName = name => console.log(`제이름은 ${name}`);
// showName(`이건`)

// function showName(name){
//     //매개변수 name의 타입이 'string'일 경우에만 출력
//     console.log(`매개변수의 타입은 ${typeof name}입니다`)
//     return console.log(`${name}입니다.`);
//     //return 문 아래에 작성한내용은 실행되지않는다
// }
// showName('1111');
// length 는 배열, 문자열의 길이를 알아낼때 사용할 수 있다 
if(typeof name === 'string'){
    console.log('제이름은 ${name}입니다');

}
showName('이건');
// else {
//     console.log(1100)
// }


//if문
// const 조건 = true
// if(조건){
//     //조건이 맞을경우 실행되는 내용 
//     console.log(조건)
// }else {
//     //조건이 안맞을경우 실행되는 내용 
// }