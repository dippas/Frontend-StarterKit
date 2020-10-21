const url = {
	el: {
		doc: document,
		linkToNewTab: document.querySelectorAll('a[target="_blank"]')
	},

	fxNewTab(url) {
		const newTab = window.open()
		newTab.opener = null
		newTab.location = url
	},

	events() {
		this.el.linkToNewTab.forEach(el => {
			el.setAttribute('rel', 'noopener noreferrer')
			el.addEventListener('click', e => {
				this.fxNewTab(e.currentTarget)
				return false
			})
		})
	},

	init() {
		this.events()
	}
}

url.init()