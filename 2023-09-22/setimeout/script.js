//setTimeout : 지연된 시간 후에 실행되는 함수
// setTimeout(함수, 시간: 1s =1000ms)
// setTimeout(() => {
//     console.log('1번째')
// }, 1000)
// setTimeout(() => {
//     console.log('3번째')
// }, 500)
// setTimeout(() => {
//     console.log('2번째')
// }, 5000)
// console.log('2번째')


//setInterval : 정해진 시간마다 반복 실행하는 비동기 함수 
//setInterval(함수, 시간)
// setInterval(() => {
//  console.log(`나는 1000ms마다 반복됩니다`)
// }, 1000)


let index = 0;
//1초뒤에 index값을 1로 변경해서 콘솔로출역

setTimeout(() => {
    console.log(index+1)
}, 1000)

setTimeout(() => {
    document.body.style.backgroundColor = 'red'
}, 2000)

setInterval(() => {
    console.log(index++)
}, 1000)


















// setInterval(() => {
//     document.body.style.backgroundColor = 'red'
// })