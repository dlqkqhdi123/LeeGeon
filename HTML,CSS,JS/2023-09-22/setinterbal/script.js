/** #counter : 숫자가 변해야할 곳
 *  #start : 숫자가 증가하도록 작동하는 버튼
 *  #stop : 숫자 증가를 멈추는 버튼
 */ 
const counter = document.getElementById('counter')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

// console.log(counter)
// console.log(startBtn)
// console.log(stopBtn)
// console.log(resetBtn)


let index = 0;
let timerId
startBtn.addEventListener('click', () =>{
    // 만약 timerId에 값이 들어있다면
    if(timerId){
        //setInterval 함수 취소
        clearInterval(timerId)
    }
    //비어있는 timerId setinterval 함수할당
    timerId = setInterval(() => {
    index++
    console.log(index)
    counter.textContent = index
}, 10);
console.log(timerId)
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
})


resetBtn.addEventListener('click', () => {
    index = 0;
    counter.textContent = index
    clearInterval(timerId)
})