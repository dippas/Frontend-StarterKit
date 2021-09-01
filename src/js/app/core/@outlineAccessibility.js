const a11y = {
	el: {
		html: document.documentElement
	},

	fxAddA11yClass() {
		document.addEventListener('keydown', e => e.key === 'Tab' && this.el.html.classList.add('a11y'))
		document.addEventListener('click', () => this.el.html.classList.contains('a11y') && this.el.html.classList.remove('a11y'))
	},

	init() {
		this.fxAddA11yClass()
	}
}

a11y.init()