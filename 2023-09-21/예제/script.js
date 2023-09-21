// console.log('asdf')

const image = document.querySelectorAll('.image')
console.log(image)

for(let i = 0; i < image.length; i++){
    
    // console.log(i)
    image[i].addEventListener('click', () => {
        for(let j = 0; j < image.length; j++){
            image[j].classList.remove('show')
        }
        image[i].classList.add('show')

    })

}
