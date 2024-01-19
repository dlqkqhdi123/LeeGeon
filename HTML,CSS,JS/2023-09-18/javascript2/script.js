const userName = document.getElementById('username')
console.log(userName)


let value = prompt('이름ss을 입력해주세요', '이건')
userName.textContent = value;
let color = prompt('원하는 컬러를 입력해주세요', 'dodgerblue')
userName.style.color = color;
userName.style.fontSize = size;

//console.log(value)