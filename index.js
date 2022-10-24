const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const menu = document.querySelector('.menu-toggle')

openBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open')
})

closeBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open')
})
