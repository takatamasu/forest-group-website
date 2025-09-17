const burgerBtn = document.querySelector('.burger-btn')
const navMobile = document.querySelector('.nav-mobile')
const body = document.body
const sections = document.querySelectorAll('section, header')
const navLinks = document.querySelectorAll('.nav-desktop__link')

// mobile nav
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

// scroll spy
window.onscroll = () => {
	sections.forEach(section => {
		let top = window.scrollY
		let offset = section.offsetTop - 150
		let height = section.offsetHeight
		let id = section.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('nav-desktop__link--active')
				document.querySelector('.nav-desktop__link[href*=' + id + ']').classList.add('nav-desktop__link--active')
			})
		}
	})
}

// current year in footer
const setCurrentYear = () => {
	const footerYearElement = document.querySelector('.footer__year')
	if (!footerYearElement) return
	footerYearElement.textContent = new Date().getFullYear()
}

setCurrentYear()

// Add Event Listeners
burgerBtn.addEventListener('click', handleNav)
