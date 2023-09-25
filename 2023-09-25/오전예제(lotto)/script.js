// console.log('asdfsdf')
// const reult = document.getElementById('reult')
const button = document.getElementById('generate')
const li = document.querySelectorAll('#reult > li')
// console.log(generate)
console.log(li)
// console.log(reult)
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//로또 번호 담을 배열
let lottoNumber = [];
//배열에 요소를추가
// lottoNumber.push(randomNumber(1,45))
button.addEventListener("click", () => {
    button.classList.add("processing")
    button.textContent = '번호생성중'

    if(lottoNumber.length > 0){
        lottoNumber = [];
    }
    for(let i = 0;lottoNumber.length < 6;i++){
        const random = randomNumber(1,45)
        const isEntry = lottoNumber.includes(random)   
        !isEntry ? lottoNumber.push(random) : ''

    }
    lottoNumber = lottoNumber.sort((a,b) => a-b)
    let timer = 200
    // for(let i = 0; i < lottoNumber.length; i++){
    //     li[i].textContent = lottoNumber[i]
    // }

    for(let i = 0; i < lottoNumber.length; i++){
        setTimeout(() => {
            li[i].textContent = lottoNumber[i];
        },timer * i)
    }
    setTimeout(() => {
        button.classList.remove("processing")
        button.textContent = '로또번호생성'
    }, timer * lottoNumber.length);
}); 



        //random 변수에 난수 생성한 값 할당
        // lottoNumber 내부에 random과 일치하는 값이 있는지 true/false
        // !isEntry ? lottoNumber.includes(random) : ''
        // if(!isEntry){
        //     lottoNumber.push(randomNumber(1,45))
        // }
        // console.log(isEntry)
        // lottoNumber.push(randomNumber(1,45))
        //배열에 요소를추가
        // if(isEntry){
        //     '';
        // }else {
        //     lottoNumber.push(random)
        // }    


// lottoNumber.includes('')
