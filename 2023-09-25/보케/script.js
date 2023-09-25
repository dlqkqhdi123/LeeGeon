const wrapper = document.querySelector('.wrapper')
console.log(wrapper)

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) +min)
}

const addBoken = () => {

    const boken = document.createElement('span')
    const size = randomGenerator(10,100)
    boken.classList.add('boken')
    boken.style.left = `${randomGenerator(0,100)}%`
    boken.style.top = `${randomGenerator(0,100)}%`
    boken.style.animationDiration = `${randomGenerator(10, 30)}s`
    boken.style.animationDelay = `${randomGenerator(1,10)}s`
    boken.style.opacity = Math.random();
    boken.style.width = `${size}px`
    boken.style.height = `${size}px`
    boken.style.filter = `blur(${randomGenerator(1,3)}px)`
    boken.style.backgroundColor = `hsl(${randomGenerator(0,360)},50%,50%)`
    wrapper.append(boken)
}

for(let i = 0; i < 50;  i++){
    addBoken()
    
}