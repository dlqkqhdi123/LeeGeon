//app.js
const friends = ['짱구','흰둥이','철수','훈이','유리','맹구','짱아']
console.log(friends)

//친구들은 총 몇명인가요 consol.log()- 배열의 길이
console.log(friends.length)
//흰둥이를 출력해주셍 
console.log(friends[1])
//짱아를 배열에서 빼주세요
friends.pop()
console.log(friends)
//짱아를 다시 배열에 추가
friends.push('짱아','짱아','짱아','짱아')
console.log(friends)

//for문
// for(초기화 변수; 조건; 증가/감소연산자;){
//     //실행
// }
for(let i = 0; i < friends.length; i++){
    //친구들 이름을 차례대로 출력해주세요
    console.log(friends[i])
}

// 매개변수 x 를 받아서 2를 곱하는 함수
// 리턴 아래 있는 내용은 실행되지않는다) 
const add = (x) => {
    return console.log(x * 2);
    
}

const numbers = [1,2,3,4,5];
// 넘버스를 for문 을 이용해서 차례대로 출력


for( let i = 0; i < numbers.length; i++){
    add(numbers[i])
    // console.log(numbers[i]) 
    //add함수를 이용해서 2,4,6,8,10을 출력
}
const showName = (name) => {
    return console.log('제 이름은 ${name}입니다')
}
showName('이건')

for(let i = 0; i < friends.length; i++){
    showName(friends[1])
}




















