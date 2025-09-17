const burgerBtn = document.querySelector('.burger-btn')
const navMobile = document.querySelector('.nav-mobile')
const body = document.body

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile--active')
	navMobile.classList.add('nav-mobile--animated')
	body.classList.toggle('no-scroll')
}

const closeNav = () => {
	navMobile.classList.remove('nav-mobile--active')
	body.classList.remove('no-scroll')
}

document.querySelectorAll('.nav-mobile a').forEach(link => {
	link.addEventListener('click', closeNav)
})

const setCurrentYear = () => {
	const footerYearElement = document.querySelector('.footer__year')
	if (!footerYearElement) return
	footerYearElement.textContent = new Date().getFullYear()
}

setCurrentYear()

// Add Event Listeners
burgerBtn.addEventListener('click', handleNav)
