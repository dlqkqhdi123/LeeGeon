// console.log('asdfasdf')
const toggle = document.querySelector('.toggle')
// 클래스 리스트 객체에 대한 정보 조회(.classList)
console.log(toggle.classList)


//add 매소드를 이용해 class "active"를 추가
toggle.classList.add('active')

// 클래스 엑티브 제거 
toggle.classList.remove('active')

console.log(toggle.classList.contains('active'))

// 토글을 클릭햇을대 엑티브가 있다면 제거 없다면추가 되게끔 만들기 
toggle.addEventListener('click', () => {
    // 1. if 문 활용

    if(toggle.classList.contains('active')){
        toggle.classList.remove('active')
    } else {
        toggle.classList.add('active')
    }

    // 2. 3항 연산자 
    // toggle.classList.contains('active')
    // ? toggle.classList.remove('active')
    // : toggle.classList.add('active')


    // 3. toggle 메소드
    // element.classList.toggle('클래스')
    //element에 '클래스'가 있으면 삭제 없으면 추가해주는 메소드
    // toggle.classList.toggle('active')
})
