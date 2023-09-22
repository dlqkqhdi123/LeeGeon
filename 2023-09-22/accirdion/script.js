const list = document.querySelector('.list')
const title = document.querySelector('.title')
const content = document.querySelector('.content')
const listItem = document.querySelectorAll('.list-item')
 
// const

console.log(list)
console.log(title)
console.log(content)
console.log(listItem.length)

for(let i = 0; i < listItem.length; i++){
    listItem[i].addEventListener('click', () => {
        // listItem[i].classList.toggle('selected')축약형
        for(let j = 0; j < listItem.length; j++){
            listItem[j].classList.remove('selected')
            listItem[i].classList.add('selected')
        }
        // listItem[i].classList.add('selecter')
    })
}
/**
 * 리스트아이템 클래스를 가진 모즌요소를 가져와서 반복문처리 13
 * 그요소중 i 번째 요소를 클릭했을때 14
 * 리스트 아이템 클래스를 가진 모든요소를 반복문처리 16
 * 리스트 아이템 클래스를가진 모든요소에서 셀렉티드 클랙스를 제거
 */



//for문 고수만
// listItem.forEach(item => {
//     item.addEventListener('click', () =>{
//         item.classList.toggle('selected')
//     })
// })