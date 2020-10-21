const accessibility = {
	el: {
		doc: document,
		html: document.documentElement
	},

	events() {
		this.el.doc.addEventListener('keydown', e => e.key === 'Tab' ? this.el.html.classList.add('a11y') : '')
		this.el.doc.addEventListener('click', () => {
			if (this.el.html.classList.contains('a11y'))
				this.el.html.classList.remove('a11y')
			else
				return false
		})
	},

	init() {
		this.events()
	}
}

accessibility.init()