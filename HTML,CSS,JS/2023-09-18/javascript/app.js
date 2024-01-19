console.log('app')
// title 이라는 아이디를 가진요소를 찾아서 text 라는 변수에 담은 상황
const text = document.getElementById('title')
console.log(text)
text.style.color = 'red';
// font-size : 1rem;
const size = 60;


// text.style.fontSize = size + 'px'; // 문자열 결합방식
// text.style.fontSize = `${size}px`; // 템플릿 리터럴 방식
// 텍스트 내용을 바꾸는방법
text.textContent = '바뀐 내용입니다'
text.innerText ='이렇게 바꿈'
text.innerHTML = '<span>이렇게도 바꿀 수 있습니다</span>'
// graph 라는 아이디를 통해서 element 요소를 가져옴
const barGraph = document.getElementById('graph')

// graph 요소에서 data-valye 값을 가져옴 
const graphValue = barGraph.dataset.value;
//graph 요소에서 data-value 만큼 조정
barGraph.style.width = graphValue + '%'; 

//graph 요소의 텍스트를 graphValue 값으로 넣음
barGraph.textContent = `${graphValue}%`;

// graph 요소의 컬러, 폰트 사이즈 조정
barGraph.style.color = 'white';
barGraph.style.fontSize = '30px';

console.log(barGraph, graphValue)