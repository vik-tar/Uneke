const slider = document.getElementById('slider')
const leftButton = document.querySelector('.scroll__left')
const rigthButton = document.querySelector('.scroll__rigth')

let slides = document.querySelectorAll('.slider__item').length

let step = 297
let count = 0
let showingElem = 4

let difference = showingElem - slides

leftButton.addEventListener('click', function() {
    ++count
    console.log(count);

    if (count === 1) {
        count = difference
        slider.style.left = count * step + 'px'
    }
        
    slider.style.left = count * step + 'px'
})


rigthButton.addEventListener('click', function() {
    --count

    console.log(count);

    if (count === difference - 1) {
        count = 0
        slider.style.left = count * step + 'px'
    }
        
    slider.style.left = count * step + 'px'    
})