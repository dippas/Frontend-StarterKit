/*eslint-disable no-unused-vars*/
const preloader = {
	fxAdd(el) {
		const button = {
			el: el.querySelector('.js-preloader'),
			height: el.querySelector('.js-preloader').offsetHeight
		}
		button.el.setAttribute('disabled', true)
		button.el.classList.add('btn--loading')
		button.el.style.height = `${button.height}px`
		button.el.textContent = ''
		el.querySelector('.btn--loading').innerHTML = '<div class="btn--loading-spinner"></div>'
	},

	fxRemove(el) {
		const button = el.querySelector('.js-preloader')
		button.removeAttribute('disabled')
		button.classList.remove('btn--loading')
		button.querySelector('.btn--loading-spinner').remove()
	}
}