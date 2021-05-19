/*eslint-disable no-unused-vars*/
const preloader = {
	fxPreloaderAdd(el) {
		const button = {
			el: el.querySelector('.js-preloader'),
			height: el.querySelector('.js-preloader').offsetHeight
		}
		button.el.setAttribute('disabled', true)
		button.el.classList.add('btn--loading')
		button.el.style.height = `${button.height}px`
		const spinner = document.createElement('div')
		spinner.classList.add('btn--loading-spinner')
		el.querySelector('.btn--loading').appendChild(spinner)
	},

	fxPreloaderRemove(el) {
		const button = el.querySelector('.js-preloader')
		button.removeAttribute('disabled')
		button.classList.remove('btn--loading')
		button.querySelector('.btn--loading-spinner').outerHTML = ''
	}
}