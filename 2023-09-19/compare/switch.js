//switch.js
//switch문 이라는 문구를 콘솔로 출력해주세요
//console.log('switch문')


//swirch문
//조건별로 출력내용을 다르게 구분해서 실행하는 방법

let food = '떡볶이'
//switch문은 비교연산자를 쓸 수 없지만 하나의 값이 일치하면 해당 case를 실시한다 break문이 없으면 실행이 중단되지않는다

switch(food) {
    case "짬뽕":
        console.log('오늘 점심은 짬뽕')
        break;
    case "볶음밥" :
        console.log('볶음밥 좋죠')
        break;
    case "떡볶이" :
        console.log('매운거 못먹어요')
        break;
    default:
        console.log('오늘 점심은 굶습니다')
        break;
}