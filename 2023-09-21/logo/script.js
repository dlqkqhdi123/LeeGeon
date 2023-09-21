// console.log('asdfs')

const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem)


for(let i = 0; i < menuItem.length; i++){
    // console.log(i)
    console.log(menuItem[i])
    //각 버튼을 누를 때마다 'active' 클래스가 추가되도록 에드이벤트리스너(addEventListener)를 붙여서 작성해주세요
    menuItem[i].addEventListener('click', () =>  {
        for(let button = 0; button < menuItem.length; button++){
            menuItem[button].classList.remove('active')
        }
        menuItem[i].classList.add('active')
    })
}









//console.log(menuItem[menuItem.length - 1])
// menuItem[4].addEventListener('click', (e) => {
    //     //기본적으로 발생하는 이벤트 취소하느 메소도
    //     e.preventDefault
    //     //이벤트 전파를 막는 메소드
    //     e.stopPropagation();
    //     // 'active 클래스 추가
    //     menuItem[4].classList.add('active')
    // })
  
    // menuItem[0].addEventListener('click', () => {
    // menuItem[0].classList.remove('active')
    // })