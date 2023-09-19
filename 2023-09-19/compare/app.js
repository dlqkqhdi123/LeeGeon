// console.log('dfasdf')
// const title = document.getElementById('title')
// console.log(title)
//getElementById 는 id를 기반으로 찾기때문에 #이라는 표현을 따로 적어 주지 않아도 된다
// querySelector 는 태그 클래스 아이디 등 범용으로 사용하기때문에 꼭 아이디인지 클래스인지 태그인지 구분해서 적어줘야한다
// const title = document.querySelector('#title')
// console.log(title)
// querySelector를 이용해서 title 이라는 클래스를 가진요소를 탐색해서 title 변수에 담에 출력해주세요
const title = document.querySelectorAll('.title')
console.log(title)
  
for(let i = 0; i < title.length; i++){
    //요소들의 텍스트 내용을 `i번째 요소입니다로 변경`
    // console.log(title[i])
    // i 번째 태그트를 변경 
    title[i].textContent = `${i}번째요소입니다`
    // i 번째의 red 클래스를 추가
    title[i].classList.add('red')
    // 배열의 마지마교소의 red 클래스를 제거
    title[title.length - 1].classList.remove = ("red")
        // console.log(title.length)
        // if(i === 0)
        // title[i].style.color = `red`
        // title[i].style.fontSize = `20px`
    
    title[i].style.fontSize = `20px` // `${i * 10}px `일정하게 증가 하는 방법
    title[i].style.fontWeight = `400`
}