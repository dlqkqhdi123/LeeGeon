/**
 * #number  : 변해야 할 숫자
 * #inc     : 증가버튼
 * #dec     : 감소버튼
 */
 const num = document.getElementById('number')
 const inc = document.querySelector('#inc')
 const dec = document.getElementById('dec')
 const bar = document.querySelector('.bar')
//  console.log(bar)
//  console.log(num)
//  console.log(inc)
//  console.log(dec)

//증감할 값이 들어있는 변수
let counter = 0;

// inc : increament(증가) 하는일

// inc.addEventListener('click', function())
inc.addEventListener('click', () => {
    //1.누적시키는 방법
    //counter = counter + 1;
    // counter += 1;
    //2.증가연산자
    // counter++;
    if(counter < 100){
        counter += 10;
        console.log(counter)
        num.textContent =  counter 
        bar.style.width = `${counter}%`

    }
})
// inc.style.transform = `rotate(${counter}deg)`


// dec : derreament(감소) 하는일
dec.addEventListener('click', () => {
    if(counter > 0){
        // counter--;
        counter-= 10;
        num.textContent = counter
    }
    // dec.style.transform = `rotate(${counter}deg)`
    bar.style.width = `${counter}%`
    console.log(counter)
    num.textContent =  counter 
    
})

