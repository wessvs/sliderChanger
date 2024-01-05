const sliderContainer = document.querySelector('.slider-container')
var slideLeft = document.querySelector('div.left-slide')
const slideRight = document.querySelector('div.right-slide')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')

const slidesLenght = slideRight.querySelectorAll('div').length

// selecionamos todas as divs no slide para contar o numero de paisagens que teremos

let activeSlideIndex = 0
// negativo porque assim, subirá
// -1 para voltar a base numerica de 0
// assim, fará ser o reverso
slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up')) // estudar
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {

    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLenght - 1) {
            activeSlideIndex = 0
        } 
    }   else if(direction === 'down') {
            activeSlideIndex--
            if(activeSlideIndex < 0) {
                activeSlideIndex = slidesLenght - 1
            }
        }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}