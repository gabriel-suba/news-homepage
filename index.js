const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const menu = document.querySelector('.menu-toggle')

openBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open')
	menu.classList.toggle('overlay')
})

closeBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open')
	menu.classList.toggle('overlay')
})
