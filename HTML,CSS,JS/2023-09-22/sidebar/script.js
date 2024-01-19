// console.log('asdfasdf')
//DOM : Document Object Mode(HTML 구성요소)
//getElementById()
//querySelector()
//quryselectorAll()
//addEventListener('이밴트이름' , 함수 => {})



const trigger = document.getElementById('trigger')
const sidebar = document.getElementById('sidebar')
const overlay = document.querySelector('.overlay')

console.log(trigger)
console.log(sidebar)
console.log(overlay)


trigger.addEventListener('click', () => {
    //sidebar.classList.contains('클래스명') : 클래스명이 들어있는 유무에 따라 true , falsw 반환
    //sidebar.clasList.add('클래스명') : 클래스명 추가
    //sidebar.clasList.remove('클래스명') : 클래스명 추가
    //classList.toggle('클래스명') : 해당요소에 크래스가 있는지 판단해서 유무에따라 추가 /삭제
    // sidebar.classList.toggle('open')


    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
        
    }else{
        sidebar.classList.add('open')
        trigger.textContent = '닫기'
        overlay.classList.add('open')
    }
 overlay.addEventListener('click', () => {
    if(overlay.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    }
 })
})
