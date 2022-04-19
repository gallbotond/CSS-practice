const nav = document.querySelector('nav')
const closeButton = document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav')

closeButton.addEventListener('click', () => {
    nav.classList.remove('navbar-open')
})

openButton.addEventListener('click', () => {
    nav.classList.add('navbar-open')
})