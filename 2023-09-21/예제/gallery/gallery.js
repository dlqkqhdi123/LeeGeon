const data = [
    {title:'다람쥐', url: '1.jpg'},
    {title:'다람쥐하나', url: '2.jpg'},
    {title:'다람쥐둘', url: '3.jpg'},
    {title:'다람쥐삼', url: '4.jpg'},
    {title:'다람쥐넷', url: '5.jpg'},
    {title:'다람쥐오', url: '3.jpg'},
    {title:'다람쥐여섯', url: '4.jpg'},
    {title:'다람쥐칠', url: '5.jpg'}
]
//  1. list 에 목록 뿌리기 
const list = document.getElementById('list')
const image = document.getElementById('image')
const title = document.getElementById('title')
console.log(list)

for(let i = 0; i <data.length; i++){
    // console.log(data[i])
    list.innerHTML += `<li class="button">${data[i].title}</li>`
    
}
const buttons = document.querySelectorAll('.button') 

for(let i = 0; i < buttons.length; i++){
    console.log(buttons[i])
    buttons[i].addEventListener('click', () => {
        console.log(data[i].url)
        image.src = data[i].url
        title.textContent = data[i].title
    })
    
}

/**
 * 리스트 목록 생성
 * 버튼클릭하면 이미지바뀌기
 * 버튼클릭하면 제목 바뀌기
 * 
 */