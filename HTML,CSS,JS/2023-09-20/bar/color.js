// console.log('color')

/**
 * color 색갈이 반영되는곳
 * plus 수치가 증가하는 버튼
 * miuns 수치를 감소시키는 버튼
 * hue 반영된 수치가 나타나는 곳(0~360)
 */


const color = document.querySelector('.color')
const plus  = document.querySelector('.plus')
const miuns = document.querySelector('.miuns')
const hue   = document.querySelector('.hue')
console.log(color)
console.log(plus)
console.log(miuns)
console.log(hue)

let value = 0;
const changeHue = (param) => {
    hue.textContent = param;
       color.style.backgroundColor =`hsl(${param}, 50%, 50%)`
    }
    
    // 수치가 증가하는 버튼
    plus.addEventListener('click', () => {
        if(value < 360){
            value += 10;
            console.log(value)
            changeHue(value)
            hue.textContent = value;
            
        }
    })
    
    
    
    //수치가 감소하는 버튼
    miuns.addEventListener('click', () => {
        if(value > 0){
            value-= 10;
            console.log(value)
            hue.textContent = value;
            changeHue(value)
        // color.style.backgroundColor = `hsl({$value}, 50%, 50%)`;
    }
})