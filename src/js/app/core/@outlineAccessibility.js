const a11y = {
	el: {
		doc: document,
		html: document.documentElement
	},

	fxAddA11yClass() {
		this.el.doc.addEventListener('keydown', e => e.key === 'Tab' ? this.el.html.classList.add('a11y') : '')
		this.el.doc.addEventListener('click', () => {
			if (this.el.html.classList.contains('a11y'))
				this.el.html.classList.remove('a11y')
			else
				return false
		})
	},

	init() {
		this.fxAddA11yClass()
	}
}

a11y.init()