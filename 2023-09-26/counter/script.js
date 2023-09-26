const dataList = document.querySelectorAll('[data-counter]')
// const timer = document.querySelectorAll('span')
// console.log(timer)
console.log(dataList)

for(let i = 0; i < dataList.length; i++){
    const target = dataList[i].dataset.counter
    const timerText = dataList[i].querySelector('.timer')
    const step = Math.floor(target / 600)
    console.log(step)
    let index = 0;
    setInterval(() => {
        index++
        // console.log(index)
        if(target >= index){
            index = index + step
            timerText.textContent = index
            console.log(index)
        }
    }, 10)
}

/**
 *   step 3개 도착이 같아지게끔 만듦 
 */