console.log('123we')
const tabButtons = document.querySelectorAll('.tab-button')
const tabContent = document.querySelector('.tab-content')
const tabItems = document.querySelectorAll('.tab-item')
console.log(tabButtons)
console.log(tabContent)
console.log(tabItems)

for(let i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener('click', () => {
        for(let j = 0; j < tabButtons.length; j++){
            tabButtons[j].classList.remove('selected')
            tabItems[j].classList.remove('show')
            
        }
        tabButtons[i].classList.add('selected')
        tabItems[i].classList.add('show')
    } )
}

// forEach 버전
// tabButtons.forEach((button,index) => {
//     button.addEventListener('click', () => {
//         tabButtons.forEach((item,idx) => {
//             item.classList.remove('selected')
//             tabItems[idx].classList.remove('show')
//         })
//         button.classList.add('selected')
//         tabItems[index].classList.add('show')
//     })
// })