// console.log('12312')
//PI
// console.log(Math.PI)

//절대값
// console.log(Math.abs(-1))
// console.log(Math.abs(1))
// console.log(Math.abs('-1'))

//반올림
// console.log(Math.round(1.4))
// console.log(Math.round(2.8))

//올림
// console.log(Math.ceil(1.2))
// console.log(Math.ceil(-1.2))

//버림
// console.log(Math.floor(1.999999999))
// console.log(Math.floor(-1.9999999))

//random
console.log(Math.random(0.999999999999999))
//Math.random() * (최댓값 - 최솟값 + 1) + 최솟값;

let max = 40;
let min = 1;
const random = Math.floor(Math.random() * (max - min + 1) + min)
console.log(random)

const randomGenerator = (min,max) => {
    return console.log(Math.floor(Math.random() * (max - min + 1) + min))
}